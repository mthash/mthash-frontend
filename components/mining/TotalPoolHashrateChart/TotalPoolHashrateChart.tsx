import { ResponsiveLine, Line } from "@nivo/line";
import styled from "styled-components";

import data from "~/_mocks_/totalPoolHashrate.json";

const height = 300;
const width = 800;

const gradProps = {
  gradientUnits: "userSpaceOnUse",
  x1: "0",
  y1: "0",
  x2: "0",
  y2: height
};

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
        fill: "#fff"
      }
    }
  },
  grid: {
    line: {
      stroke: "#161a29",
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
      color: "inherit",
      fontSize: "inherit",
      borderRadius: "2px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
      padding: "5px 9px"
    },
    // basic: {
    //   whiteSpace: 'pre',
    //   display: 'flex',
    //   alignItems: 'center'
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

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const TotalPoolHashrateChart = props => (
  <Wrapper>
    <SvgDefs style={{ visibility: "hidden" }}>
      <defs>
        <linearGradient
          id="line1"
          x1="854.937"
          y1="-82.3581"
          x2="669.849"
          y2="526.608"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB844" stop-opacity="0.21" />
          <stop
            offset="0.0532376"
            stop-color="#FFA062"
            stop-opacity="0.535298"
          />
          <stop offset="0.0949252" stop-color="#FF8E79" />
          <stop offset="0.239409" stop-color="#FF4DCA" />
          <stop offset="0.442535" stop-color="#E930FF" />
          <stop offset="0.940665" stop-color="#E44D88" />
          <stop
            offset="0.970958"
            stop-color="#E34E81"
            stop-opacity="0.594203"
          />
          <stop offset="1" stop-color="#E3507A" stop-opacity="0.21" />
        </linearGradient>
        <linearGradient
          id="line2"
          x1="626.557"
          y1="448.612"
          x2="761.425"
          y2="-117.893"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#45AFEE" stop-opacity="0.21" />
          <stop
            offset="0.0375866"
            stop-color="#43B1EC"
            stop-opacity="0.615533"
          />
          <stop
            offset="0.0805049"
            stop-color="#41B3E9"
            stop-opacity="0.767526"
          />
          <stop offset="0.146149" stop-color="#3EB7E5" />
          <stop offset="0.747659" stop-color="#23DBBD" />
          <stop
            offset="0.842081"
            stop-color="#1EE0B7"
            stop-opacity="0.852977"
          />
          <stop
            offset="0.896184"
            stop-color="#1CE4B3"
            stop-opacity="0.768733"
          />
          <stop
            offset="0.927591"
            stop-color="#1BE5B1"
            stop-opacity="0.144475"
          />
          <stop offset="1" stop-color="#17EAAC" stop-opacity="0.01" />
        </linearGradient>
        <linearGradient
          id="line3"
          x1="568.281"
          y1="307.44"
          x2="651.674"
          y2="-122.243"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C16364" stop-opacity="0.21" />
          <stop
            offset="0.0498344"
            stop-color="#C16C67"
            stop-opacity="0.558792"
          />
          <stop offset="0.0884448" stop-color="#C17168" />
          <stop offset="0.124227" stop-color="#C1756A" />
          <stop offset="0.836363" stop-color="#C1DE8B" />
          <stop offset="0.871495" stop-color="#C1E98F" />
          <stop
            offset="0.929393"
            stop-color="#C1EF91"
            stop-opacity="0.0925328"
          />
          <stop offset="1" stop-color="#C1F793" stop-opacity="0.21" />
        </linearGradient>
        <linearGradient
          id="line4"
          x1="626.557"
          y1="445.581"
          x2="761.425"
          y2="-120.924"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#55519D" stop-opacity="0.21" />
          <stop
            offset="0.0437383"
            stop-color="#373374"
            stop-opacity="0.521683"
          />
          <stop offset="0.154015" stop-color="#454188" />
          <stop offset="1" stop-color="#37337E" />
        </linearGradient>
        <linearGradient
          id="line5"
          x1="626.557"
          y1="472.718"
          x2="775.512"
          y2="-120.873"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E64CF9" stop-opacity="0.01" />
          <stop
            offset="0.0419454"
            stop-color="#E84BF3"
            stop-opacity="0.512101"
          />
          <stop offset="0.731485" stop-color="#FF3B90" />
          <stop
            offset="0.855221"
            stop-color="#F22BB9"
            stop-opacity="0.818937"
          />
          <stop
            offset="0.905454"
            stop-color="#ED24CA"
            stop-opacity="0.268909"
          />
          <stop offset="1" stop-color="#E417EA" stop-opacity="0.01" />
        </linearGradient>
      </defs>
    </SvgDefs>

    <ResponsiveLine
      data={data}
      curve="natural"
      margin={{ top: 0, right: 50, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      // yScale={{ type: "linear", stacked: true, min: "auto", max: "auto" }}
      axisTop={null}
      axisRight={null}
      theme={theme}
      lineWidth={3}
      colors={[
        "url(#line1)",
        "url(#line2)",
        "url(#line3)",
        "url(#line4)",
        "url(#line5)"
      ]}
      legends={[
        {
          anchor: "top-left",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "#3f4069",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      enablePoints={false}
      useMesh={true}
      animate={true}
    />
  </Wrapper>
);

export default TotalPoolHashrateChart;

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
`;

const SvgDefs = styled.svg`
  height: 0;
`;
