"use strict";

function createBaseLayout(title, subtitle) {
  return {
    title: {
      text: title,
      subtitle: { text: subtitle, font: { style: "italic" } },
      font: { size: 18, weight: 1000 },
    },
    hovermode: "closest",
    font: {
      family: "PT Serif",
      size: 12,
    },
  };
}

function createScatterPlotTrace(points) {
  return {
    type: "scatter",
    mode: "markers",
    name: "All Words",
    x: points.map((point) => point.ngramsCount),
    y: points.map((point) => point.playCount),
    marker: {
      color: "var(--theme-color)",
      size: 4,
      opacity: 0.6,
    },
    hovertemplate: "<b>%{customdata}</b><br>Play count: %{y}<br>Ngrams count: %{x}<extra></extra>",
    customdata: points.map((point) => point.word),
  };
}

function createScatterPlotLayout(title, subtitle) {
  return {
    ...createBaseLayout(title, subtitle),
    xaxis: {
      title: "Ngrams collapsed relative match count",
      type: "log",
      dtick: 1,
    },
    yaxis: {
      title: "Number of plays",
      type: "log",
      dtick: 1,
    },
    margin: {
      t: 100,
      r: 40,
      b: 80,
      l: 80
    },
    height: 650,
  };
}

const plotConfig = {
  responsive: true,
  displaylogo: false,
  modeBarButtonsToRemove: ["lasso2d", "select2d"]
};

function showError(chartElement) {
  chartElement.innerHTML = "<p>Could not load chart data.</p>";
}
