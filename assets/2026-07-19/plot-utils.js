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

function createHorizontalBarPlotTrace(points, traceName) {
  return {
    type: "bar",
    orientation: "h",
    name: traceName,
    y: points.map((point) => point.word).reverse(),
    x: points.map((point) => point.playCount).reverse(),
    text: points.map((point) => point.playCount).reverse(),
    textposition: "outside",
    marker: {
      color: "var(--theme-color)"
    },
    hovertemplate: "<b>%{y}</b>, %{x}<extra></extra>"
  };
}

function createHorizontalBarPlotLayout(title, subtitle, pointCount, xLabel, yLabel) {
  const bigChart = pointCount > 15;

  const barThickness = bigChart ? 15 : 35;
  const textFontSize = bigChart ? 8 : 12;

  return {
    ...createBaseLayout(title, subtitle),
    font: {
      family: "PT Serif",
      size: textFontSize,
    },
    xaxis: {
      title: xLabel,
      type: "linear"
    },
    yaxis: {
      title: yLabel,
      automargin: true
    },
    margin: {
      t: 100,
      r: 20,
      b: 70,
      l: 60
    },
    height: barThickness * pointCount + 80,
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
