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

function createVerticalBarPlotTrace(points) {
  return {
    type: "bar",
    name: "Top Words",
    x: points.map((point) => point.word),
    y: points.map((point) => point.playCount),
    text: points.map((point) => point.playCount),
    textposition: "outside",
    cliponaxis: false,
    marker: {
      color: "var(--theme-color)"
    },
    hovertemplate: "<b>%{x}</b>, %{y}<extra></extra>"
  };
}

function createAllWordsVerticalTrace(points) {
  return {
    type: "bar",
    name: "All Words",
    x: points.map((_, i) => i),
    y: points.map((point) => point.playCount),
    marker: {
      color: "var(--theme-color)"
    },
    hovertemplate: "<b>%{customdata}</b>, %{y}<extra></extra>",
    customdata: points.map((point) => point.word),
    cliponaxis: false,
  };
}

function createAllWordsVerticalLayout(title, subtitle, pointCount) {
  return {
    ...createBaseLayout(title, subtitle),
    xaxis: {
      showticklabels: false,
      showgrid: false,
      zeroline: false,
      visible: false,
      title: "",
    },
    yaxis: {
      title: "Number of plays",
      type: "linear"
    },
    margin: {
      t: 100,
      r: 20,
      b: 40,
      l: 80
    },
    height: 650,
    bargap: 0,
    bargroupgap: 0,
  };
}

function createAllWordsVerticalLayoutLog(title, subtitle, pointCount) {
  return {
    ...createBaseLayout(title, subtitle),
    xaxis: {
      showticklabels: false,
      showgrid: false,
      zeroline: false,
      visible: false,
      title: "",
    },
    yaxis: {
      title: "Number of plays",
      type: "log",
      dtick: 1,
    },
    margin: {
      t: 100,
      r: 20,
      b: 40,
      l: 80
    },
    height: 650,
    bargap: 0,
    bargroupgap: 0,
  };
}

function createVerticalBarPlotLayout(title, subtitle, pointCount) {
  return {
    ...createBaseLayout(title, subtitle),
    xaxis: {
      title: "Word",
    },
    yaxis: {
      title: "Number of plays",
      type: "linear"
    },
    margin: {
      t: 100,
      r: 20,
      b: 80,
      l: 80
    },
    height: 400,
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

function getTopNByPlayCount(points, count) {
  return points.slice().sort((a, b) => b.playCount - a.playCount).slice(0, count);
}
