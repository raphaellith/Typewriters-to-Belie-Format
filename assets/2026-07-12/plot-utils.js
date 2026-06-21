"use strict";


function createBarPlotTrace(points, traceName) {
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


function createBarPlotLayout(title, subtitle, pointCount, xLabel, yLabel) {
  const bigChart = pointCount > 15;

  const barThickness = bigChart ? 15 : 35;
  const textFontSize = bigChart ? 8 : 12;

  return {
    title: {
      text: title,
      subtitle: {text: subtitle, font: {style: "italic"}},
      font: {size: 18, weight: 1000},
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
    hovermode: "closest",
    font: {
      family: "PT Serif",
      size: textFontSize,
    },
  };
}
