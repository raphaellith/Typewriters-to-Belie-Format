"use strict";

const plotConfig = {
  responsive: true,
  displaylogo: false,
  modeBarButtonsToRemove: ["lasso2d", "select2d"]
};

const dataUrl = "https://raw.githubusercontent.com/raphaellith/Scrabblese/refs/heads/main/exports/listed_games_data.json";


async function fetchDataPoints() {
  const response = await fetch(dataUrl);

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


function getTopNByPlayCount(points, count) {
  return points.slice().sort((a, b) => b.playCount - a.playCount).slice(0, count);
}


function showError(chartElement) {
  chartElement.innerHTML = '<p>Could not load chart data.</p>';
}


async function renderVerticalBarChart(chartElement) {
  if (!chartElement) return;

  const chartTitle = "Top 10 Most Frequently Played Words in Scrabble";
  const chartSubtitle = "across 10000 Scrabble games listed on cross-tables.com";
  const n = 10;

  try {
    const dataPoints = await fetchDataPoints();
    const topNPoints = getTopNByPlayCount(dataPoints, n);

    const trace = createVerticalBarPlotTrace(topNPoints);
    const layout = createVerticalBarPlotLayout(chartTitle, chartSubtitle, topNPoints.length);

    await Plotly.newPlot(chartElement, [trace], layout, plotConfig);
  } catch (error) {
    showError(chartElement);
    console.error(error);
  }
}


async function renderAllWordsVerticalChart(chartElement) {
  if (!chartElement) return;

  const chartTitle = "Scrabble Words by Play Count";
  const chartSubtitle = "across 10000 Scrabble games listed on cross-tables.com";

  try {
    const dataPoints = await fetchDataPoints();
    const sortedPoints = dataPoints.sort((a, b) => b.playCount - a.playCount);

    const trace = createAllWordsVerticalTrace(sortedPoints);
    const layout = createAllWordsVerticalLayout(chartTitle, chartSubtitle, sortedPoints.length);

    await Plotly.newPlot(chartElement, [trace], layout, plotConfig);
  } catch (error) {
    showError(chartElement);
    console.error(error);
  }
}


async function renderAllWordsVerticalChartLog(chartElement) {
  if (!chartElement) return;

  const chartTitle = "Scrabble Words by Play Count";
  const chartSubtitle = "across 10000 Scrabble games listed on cross-tables.com";

  try {
    const dataPoints = await fetchDataPoints();
    const sortedPoints = dataPoints.sort((a, b) => b.playCount - a.playCount);

    const trace = createAllWordsVerticalTrace(sortedPoints);
    const layout = createAllWordsVerticalLayoutLog(chartTitle, chartSubtitle, sortedPoints.length);

    await Plotly.newPlot(chartElement, [trace], layout, plotConfig);
  } catch (error) {
    showError(chartElement);
    console.error(error);
  }
}


async function renderScatterPlot(chartElement) {
  if (!chartElement) return;

  const chartTitle = "Scrabble Words by Ngrams Count and Play Count";
  const chartSubtitle = "across 10000 Scrabble games listed on cross-tables.com";

  try {
    const dataPoints = await fetchDataPoints();
    const filteredPoints = dataPoints.filter(
      (p) => p.ngramsCount > 0 && p.playCount > 0
    );

    const trace = createScatterPlotTrace(filteredPoints);
    const layout = createScatterPlotLayout(chartTitle, chartSubtitle);

    await Plotly.newPlot(chartElement, [trace], layout, plotConfig);
  } catch (error) {
    showError(chartElement);
    console.error(error);
  }
}


async function renderScatterPlotFiltered(chartElement) {
  if (!chartElement) return;

  const chartTitle = "Scrabble Words by Ngrams Count and Play Count";
  const chartSubtitle = "across 10000 Scrabble games listed on cross-tables.com";

  try {
    const dataPoints = await fetchDataPoints();
    const checkbox = document.getElementById("word-length-checkbox");
    const slider = document.getElementById("word-length-slider");
    const display = document.getElementById("word-length-display");

    function render() {
      const filterActive = checkbox.checked;
      const wordLength = parseInt(slider.value, 10);

      let filteredPoints = dataPoints.filter(
        (p) => p.ngramsCount > 0 && p.playCount > 0
      );
      if (filterActive) {
        filteredPoints = filteredPoints.filter((p) => p.word.length === wordLength);
      }

      const trace = createScatterPlotTrace(filteredPoints);
      const layout = createScatterPlotLayout(
        filterActive
          ? `${wordLength}-Letter Scrabble Words by Ngrams Count and Play Count`
          : chartTitle,
        chartSubtitle
      );

      Plotly.react(chartElement, [trace], layout, plotConfig);
    }

    display.textContent = slider.value;
    render();

    slider.addEventListener("input", () => {
      display.textContent = slider.value;
      render();
    });
    checkbox.addEventListener("change", render);
  } catch (error) {
    showError(chartElement);
    console.error(error);
  }
}


function init() {
  const verticalChart = document.querySelector(".top-words-chart-vertical");
  if (verticalChart) {
    renderVerticalBarChart(verticalChart);
  }

  const allWordsVerticalChart = document.querySelector(".all-words-chart-vertical");
  if (allWordsVerticalChart) {
    renderAllWordsVerticalChart(allWordsVerticalChart);
  }

  const allWordsVerticalChartLog = document.querySelector(".all-words-chart-vertical-log");
  if (allWordsVerticalChartLog) {
    renderAllWordsVerticalChartLog(allWordsVerticalChartLog);
  }

  const scatterPlot = document.querySelector(".scatter-plot");
  if (scatterPlot) {
    renderScatterPlot(scatterPlot);
  }

  const scatterPlotFiltered = document.querySelector(".scatter-plot-filtered");
  if (scatterPlotFiltered) {
    renderScatterPlotFiltered(scatterPlotFiltered);
  }
}


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
