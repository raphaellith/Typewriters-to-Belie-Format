"use strict";

const plotConfig = {
  responsive: true,
  displaylogo: false,
  modeBarButtonsToRemove: ["lasso2d", "select2d"]
};

const listedDataUrl = "https://raw.githubusercontent.com/raphaellith/Scrabblese/refs/heads/main/exports/listed_games_data.json";
const unlistedDataUrl = "https://raw.githubusercontent.com/raphaellith/Scrabblese/refs/heads/main/exports/unlisted_games_data.json";


async function fetchDataPoints(url) {
  const response = await fetch(url);

  if (!response.ok) {
    return [];
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    return [];
  }

  const dataPoints = [];

  for (let i = 0; i < data.length; i += 1) {
    const datum = data[i];
    const ngramsCount = Number(datum.ngrams_probability);
    const playCount = Number(datum.scrabble_play_count);

    if (!Number.isFinite(ngramsCount) || !Number.isFinite(playCount) || !datum.word) {
      continue;
    }

    dataPoints.push({
      word: String(datum.word),
      ngramsCount,
      playCount
    });
  }

  return dataPoints;
}


function combineDataPoints(listedPoints, unlistedPoints) {
  const map = new Map();

  for (const point of listedPoints) {
    map.set(point.word, { word: point.word, ngramsCount: point.ngramsCount, playCount: point.playCount });
  }

  for (const point of unlistedPoints) {
    const existing = map.get(point.word);
    if (existing) {
      existing.ngramsCount += point.ngramsCount;
      existing.playCount += point.playCount;
    } else {
      map.set(point.word, { word: point.word, ngramsCount: point.ngramsCount, playCount: point.playCount });
    }
  }

  return Array.from(map.values());
}


function showError(chartElement) {
  chartElement.innerHTML = "<p>Could not load chart data.</p>";
}


async function renderScatterPlotComparison(chartElement) {
  if (!chartElement) return;

  const chartTitle = "Scrabble Words by Ngrams Count and Play Count";

  try {
    const [listedData, unlistedData] = await Promise.all([
      fetchDataPoints(listedDataUrl),
      fetchDataPoints(unlistedDataUrl)
    ]);

    const listedCheckbox = document.getElementById("dataset-listed-checkbox");
    const unlistedCheckbox = document.getElementById("dataset-unlisted-checkbox");
    const filterCheckbox = document.getElementById("word-length-checkbox");
    const slider = document.getElementById("word-length-slider");
    const display = document.getElementById("word-length-display");

    function getDataPoints() {
      const useListed = listedCheckbox.checked;
      const useUnlisted = unlistedCheckbox.checked;

      if (useListed && useUnlisted) {
        return combineDataPoints(listedData, unlistedData);
      } else if (useListed) {
        return listedData;
      } else if (useUnlisted) {
        return unlistedData;
      } else {
        return [];
      }
    }

    function render() {
      const filterActive = filterCheckbox.checked;
      const wordLength = parseInt(slider.value, 10);
      const useListed = listedCheckbox.checked;
      const useUnlisted = unlistedCheckbox.checked;

      let dataPoints = getDataPoints();

      let filteredPoints = dataPoints.filter(
        (p) => p.ngramsCount > 0 && p.playCount > 0
      );
      if (filterActive) {
        filteredPoints = filteredPoints.filter((p) => p.word.length === wordLength);
      }

      const trace = createScatterPlotTrace(filteredPoints);

      let subtitle;
      if (useListed && useUnlisted) {
        subtitle = "across 14493 listed and unlisted Scrabble games on cross-tables.com";
      } else if (useListed) {
        subtitle = "across 10000 listed Scrabble games on cross-tables.com";
      } else if (useUnlisted) {
        subtitle = "across 4493 unlisted Scrabble games on cross-tables.com";
      } else {
        subtitle = "no dataset selected";
      }

      const layout = createScatterPlotLayout(
        filterActive
          ? `${wordLength}-Letter Scrabble Words by Ngrams Count and Play Count`
          : chartTitle,
        subtitle
      );

      Plotly.react(chartElement, [trace], layout, plotConfig);
    }

    display.textContent = slider.value;
    render();

    slider.addEventListener("input", () => {
      display.textContent = slider.value;
      render();
    });
    filterCheckbox.addEventListener("change", render);
    listedCheckbox.addEventListener("change", render);
    unlistedCheckbox.addEventListener("change", render);
  } catch (error) {
    showError(chartElement);
    console.error(error);
  }
}


function init() {
  const comparisonChart = document.querySelector(".scatter-plot-comparison");
  if (comparisonChart) {
    renderScatterPlotComparison(comparisonChart);
  }
}


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
