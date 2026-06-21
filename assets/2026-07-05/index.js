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


async function renderHorizontalBarChart(chartElement, n) {
  if (!chartElement) return;

  const chartTitle = `Top ${n} Most Frequently Played Words in Scrabble`;
  const chartSubtitle = "across 10000 Scrabble games listed on cross-tables.com";

  try {
    const dataPoints = await fetchDataPoints();
    const topNPoints = getTopNByPlayCount(dataPoints, n);

    const trace = createBarPlotTrace(topNPoints, chartTitle);
    const layout = createBarPlotLayout(chartTitle, chartSubtitle, topNPoints.length, "Number of plays", "Word");

    await Plotly.newPlot(chartElement, [trace], layout, plotConfig);
  } catch (error) {
    showError(chartElement);
    console.error(error);
  }
}


function init() {
  const horizontalCharts = document.querySelectorAll(".top-words-chart");
  horizontalCharts.forEach(chartElement => {
    let n = 10;
    if (chartElement.hasAttribute("n")) {
      const nAttr = parseInt(chartElement.getAttribute("n"), 10);
      if (Number.isFinite(nAttr) && nAttr > 0) {
        n = nAttr;
      }
    }
    renderHorizontalBarChart(chartElement, n);
  });
}


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
