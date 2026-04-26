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


function createBarPlotLayout(title, pointCount) {
  return {
    title: {
      text: title,
      font: {size: 14, weight: 1000},
    },
    xaxis: {
      title: "Scrabble play frequency",
      type: "linear"
    },
    yaxis: {
      title: "Word",
      automargin: true
    },
    margin: {
      t: 60,
      r: 20,
      b: 70,
      l: 120
    },
    height: 20 * pointCount + 80,
    hovermode: "closest",
    font: {
      family: "Arial",
      size: 8
    }
  };
}