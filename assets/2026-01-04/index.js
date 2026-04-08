"use strict";

function toPlotPoints(rows) {
  const points = [];

  for (let i = 0; i < rows.length; i += 1) {
    const row = rows[i];
    const x = Number(row.ngrams_probability);
    const y = Number(row.scrabble_play_count);

    if (!Number.isFinite(x) || !Number.isFinite(y) || !row.word) {
      continue;
    }

    points.push({
      word: String(row.word),
      ngramsProbability: x,
      playCount: y
    });
  }

  return points;
}

function createTrace(points, traceName) {
  return {
    type: "scattergl",
    mode: "markers",
    name: traceName,
    x: points.map((point) => point.ngramsProbability),
    y: points.map((point) => point.playCount),
    text: points.map((point) => point.word),
    textposition: "top center",
    textfont: {
      size: 8
    },
    marker: {
      size: 3,
      opacity: 0.75
    },
    hovertemplate:
      "<b>%{text}</b><br>n-gram probability: %{x:.6e}<br>Scrabble play count: %{y:,}<extra></extra>"
  };
}

function createLayout(title, pointCount) {
  return {
    title: `${title} (${pointCount.toLocaleString()} words)`,
    xaxis: {
      title: "Language-model probability (n-grams)",
      type: "log"
    },
    yaxis: {
      title: "Scrabble play frequency",
      type: "log"
    },
    margin: {
      t: 60,
      r: 20,
      b: 70,
      l: 80
    },
    hovermode: "closest"
  };
}

function createConfig() {
  return {
    responsive: true,
    displaylogo: false,
    modeBarButtonsToRemove: ["lasso2d", "select2d"]
  };
}

async function renderChart(datasetConfig) {
  const chartElement = document.getElementById(datasetConfig.chartId);

  if (!chartElement) {
    return;
  }

  try {
    const response = await fetch(datasetConfig.url);

    if (!response.ok) {
      chartElement.innerHTML =
        '<p class="scrabblese-error">Could not load chart data.</p>';
      return;
    }

    const data = await response.json();
    const points = toPlotPoints(Array.isArray(data) ? data : []);
    const trace = createTrace(points, datasetConfig.title);
    const layout = createLayout(datasetConfig.title, points.length);

    await Plotly.newPlot(chartElement, [trace], layout, createConfig());
  } catch (error) {
    chartElement.innerHTML =
      '<p class="scrabblese-error">Could not load chart data.</p>';
    console.error(error);
  }
}

function init() {
  const assetBase = window.scrabbleseAssetBase || "/assets/2026-01-04";

  const datasets = [
    {
      chartId: "listed-games-chart",
      url: `${assetBase}/listed_games_data.json`,
      title: "Listed Games Data"
    },
  ];

  Promise.all(datasets.map(renderChart));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
