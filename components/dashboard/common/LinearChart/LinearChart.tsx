import * as React from "react";
import { ResponsiveLine, Line } from "@nivo/line";

const theme = {
  background: "transparent",
  fontFamily: "sans-serif",
  fontSize: 11,
  textColor: "#333333",
  axis: {
    domain: {
      line: {
        stroke: "transparent",
        strokeWidth: 1
      }
    },
    ticks: {
      line: {
        stroke: "#777777",
        strokeWidth: 1
      },
      text: {}
    },
    legend: {
      text: {
        fontSize: 12,
        fill: "#1b223c"
      }
    }
  },
  grid: {
    line: {
      stroke: "#1B223C",
      strokeWidth: 1
    }
  },
  legends: {
    text: {
      fill: "#fff"
    }
  },
  labels: {
    text: {
      fill: "#fff"
    }
  },
  markers: {
    lineColor: "#000000",
    lineStrokeWidth: 1,
    text: {}
  },
  dots: {
    text: {}
  },
  tooltip: {
    container: {
      background: "white",
      color: "black",
      fontSize: "inherit",
      borderRadius: "2px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
      padding: "5px 9px"
    },
    // basic: {
    //   whiteSpace: "pre",
    //   display: "flex",
    //   alignItems: "center"
    // },
    table: {},
    tableCell: {
      padding: "3px 5px"
    }
  },
  crosshair: {
    line: {
      stroke: "#000000",
      strokeWidth: 1,
      strokeOpacity: 0.75,
      strokeDasharray: "6 6"
    }
  },
  annotations: {
    text: {
      fontSize: 13,
      outlineWidth: 2,
      outlineColor: "#ffffff"
    },
    link: {
      stroke: "#000000",
      strokeWidth: 1,
      outlineWidth: 2,
      outlineColor: "#ffffff"
    },
    outline: {
      fill: "none",
      stroke: "#000000",
      strokeWidth: 2,
      outlineWidth: 2,
      outlineColor: "#ffffff"
    },
    symbol: {
      fill: "#000000",
      outlineWidth: 2,
      outlineColor: "#ffffff"
    }
  }
};

interface Props {
  colors?: string[];
  data: any[];
}

const LinearChart: React.FC<Props> = ({ colors, data }): JSX.Element => {
  return (
    <ResponsiveLine
      data={data}
      theme={theme}
      margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", stacked: false, min: "auto", max: "auto" }}
      curve="natural"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0
      }}
      colors={colors ? colors : { scheme: "nivo" }}
      lineWidth={3}
      enableGridX={false}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor", modifiers: [] }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[]}
    />
  );
};

export default LinearChart;
