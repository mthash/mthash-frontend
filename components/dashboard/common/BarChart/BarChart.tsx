import * as React from "react";
import { ResponsiveBar } from "@nivo/bar";

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
  keys: string[];
  data: any[];
  indexedBy: string;
  // colors?: string[];
}

const BarChart: React.FC<Props> = ({ keys, data, indexedBy }): JSX.Element => {
  return (
    <ResponsiveBar
      theme={theme}
      data={data}
      keys={keys}
      margin={{ top: 0, right: 60, bottom: 50, left: 60 }}
      padding={0.3}
      indexBy={indexedBy}
      colors={{ scheme: "nivo" }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default BarChart;
