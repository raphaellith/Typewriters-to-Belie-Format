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
    hovertemplate:
      "<b>%{y}</b>, %{x:,}<extra></extra>"
  };
}


function createBarPlotLayout(title, subtitle, pointCount, xLabel, yLabel) {
  return {
    title: {
      text: title,
      subtitle: {text: subtitle},
      font: {size: 14, weight: 1000},
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
      t: 60,
      r: 20,
      b: 60,
      l: 60
    },
    height: 15 * pointCount + 80,
    hovermode: "closest",
    font: {
      family: "PT Serif",
      size: 8
    }
  };
}