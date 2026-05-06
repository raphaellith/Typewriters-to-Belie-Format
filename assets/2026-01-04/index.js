"use strict";

const plotConfig = {
  responsive: true,
  displaylogo: false,
  modeBarButtonsToRemove: ["lasso2d", "select2d"]
};

const assetBase = window.scrabbleseAssetBase || "/assets/2026-01-04";
const pathToJsonData = `${assetBase}/listed_games_data.json`;


async function getDataPoints() {
  const response = await fetch(pathToJsonData);

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
    const x = Number(datum.ngrams_probability);
    const y = Number(datum.scrabble_play_count);

    if (!Number.isFinite(x) || !Number.isFinite(y) || !datum.word) {
      continue;
    }

    dataPoints.push({
      word: String(datum.word),
      ngramsProbability: x,
      playCount: y
    });
  }

  return dataPoints;
}


function getTopNMostFrequentlyUsedWords(points, count) {
  // Sort descending by playCount and take top N
  return points.slice().sort((a, b) => b.playCount - a.playCount).slice(0, count);
}


function displayErrorInChartElement(chartElement) {
  chartElement.innerHTML = '<p>Could not load chart data.</p>';
}


async function renderTopNMostFrequentlyUsedWordsBarChart(chartElement, n) {
  if (!chartElement) return;

  const chartTitle = `Top ${n} Most Frequently Played Words in Scrabble`;
  const chartSubtitle = "based on 10000 Scrabble games listed on cross-tables.com";
  const xLabel = "Number of times the word is played across 10000 games";
  const yLabel = "Word";

  try {
    const dataPoints = await getDataPoints();
    const topNDataPoints = getTopNMostFrequentlyUsedWords(dataPoints, n);

    const trace = createBarPlotTrace(topNDataPoints, chartTitle);
    const layout = createBarPlotLayout(chartTitle, chartSubtitle, topNDataPoints.length,  xLabel, yLabel);

    await Plotly.newPlot(chartElement, [trace], layout, plotConfig);
  } catch (error) {
    displayErrorInChartElement(chartElement);
    console.error(error);
  }
}


function init() {
  const chartElements = document.querySelectorAll('.top-words-chart');
  chartElements.forEach(chartElement => {
    let n = 10; // default
    if (chartElement.hasAttribute("n")) {
      const nAttr = parseInt(chartElement.getAttribute("n"), 10);
      if (Number.isFinite(nAttr) && nAttr > 0) {
        n = nAttr;
      }
    }
    renderTopNMostFrequentlyUsedWordsBarChart(chartElement, n);
  });
}


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
