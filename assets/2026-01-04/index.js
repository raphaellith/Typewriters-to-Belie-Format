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
  chartElement.innerHTML = '<p class="scrabblese-error">Could not load chart data.</p>';
}


async function renderTopNMostFrequentlyUsedWordsBarChart(chartElementId, n) {
  const chartElement = document.getElementById(chartElementId);
  if (!chartElement) return;

  const chartTitle = `Top ${n} Most Frequently Played Words in Scrabble`;
  const chartSubtitle = "from 10000 Scrabble games listed on cross-tables.com";
  const xLabel = "Number of times the word is played across all scraped games";
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


async function renderNgramsScrabbleScatterChart(chartElementId) {
  const chartElement = document.getElementById(chartElementId);
  if (!chartElement) return;

  const chartTitle = "Listed Games Data";

  try {
    const dataPoints = await getDataPoints(chartElementId);

    const trace = createScatterPlotTrace(dataPoints, chartTitle);
    const layout = createScatterPlotLayout(chartTitle, dataPoints.length);

    await Plotly.newPlot(chartElement, [trace], layout, plotConfig);
  } catch (error) {
    displayErrorInChartElement(chartElement);
    console.error(error);
  }
}


function init() {
  renderNgramsScrabbleScatterChart("listed-games-chart");
  renderTopNMostFrequentlyUsedWordsBarChart("top-words-bar-chart", 75);
}


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
