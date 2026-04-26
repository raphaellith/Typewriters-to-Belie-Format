"use strict";


function createScatterPlotTrace(points, traceName) {
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


function createScatterPlotLayout(title, pointCount) {
  return {
    title: title,
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
    hovermode: "closest",
    font: {
      family: "Arial",
      size: 12
    }
  };
}
