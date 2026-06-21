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
    title: {
      text: title,
      subtitle: {text: subtitle, font: {style: "italic"}},
      font: {size: 18, weight: 1000},
    },
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
    hovermode: "closest",
    font: {
      family: "PT Serif",
      size: 12,
    },
    bargap: 0,
    bargroupgap: 0,
  };
}


function createAllWordsVerticalLayoutLog(title, subtitle, pointCount) {
  return {
    title: {
      text: title,
      subtitle: {text: subtitle, font: {style: "italic"}},
      font: {size: 18, weight: 1000},
    },
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
    hovermode: "closest",
    font: {
      family: "PT Serif",
      size: 12,
    },
    bargap: 0,
    bargroupgap: 0,
  };
}


function createVerticalBarPlotLayout(title, subtitle, pointCount) {
  return {
    title: {
      text: title,
      subtitle: {text: subtitle, font: {style: "italic"}},
      font: {size: 18, weight: 1000},
    },
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
    hovertemplate: "<b>%{customdata}</b><br>Play count: %{y}<br>N-grams count: %{x}<extra></extra>",
    customdata: points.map((point) => point.word),
  };
}


function createScatterPlotLayout(title, subtitle) {
  return {
    title: {
      text: title,
      subtitle: {text: subtitle, font: {style: "italic"}},
      font: {size: 18, weight: 1000},
    },
    xaxis: {
      title: "N-grams count",
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
    hovermode: "closest",
    font: {
      family: "PT Serif",
      size: 12,
    },
  };
}