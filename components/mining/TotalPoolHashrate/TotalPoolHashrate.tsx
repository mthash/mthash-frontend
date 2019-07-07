import * as React from "react";
import styled from "styled-components";
import Chart from "chart.js";

import Paper from "~/components/common/Paper";

export default class TotalPoolHashrate extends React.Component {
  constructor(props) {
    super(props);

    this.chart = React.createRef();
  }

  componentDidMount() {
    const chartContext = this.chart.current.getContext("2d");
    const gradientStroke = chartContext.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#E930FF");
    gradientStroke.addColorStop(1, "#FFB844");

    const chartData = {
      labels: [
        "10:59PM",
        "11:59PM",
        "12:59PM",
        "1:59PM",
        "2:59PM",
        "3:59PM",
        "4:59PM",
        "5:59PM",
        "6:59PM",
        "8:59PM",
        "9:59PM"
      ],
      datasets: [
        {
          borderColor: gradientStroke,
          fill: false,
          pointRadius: 0,
          borderWidth: 4,
          data: [
            2700,
            3100,
            3000,
            3250,
            3880,
            3700,
            3900,
            3800,
            4120,
            4000,
            4200
          ]
        }
      ]
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: "bottom"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontFamily: "Montserrat",
              fontSize: 13,
              fontStyle: "normal",
              fontColor: "#d4d3e5",
              beginAtZero: false,
              maxTicksLimit: 10,
              padding: 20
            },
            gridLines: {
              drawTicks: false,
              display: false
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              zeroLineColor: "transparent"
            },
            ticks: {
              maxTicksLimit: 20,
              padding: 20,
              fontFamily: "Montserrat",
              fontSize: 13,
              fontStyle: "normal",
              fontColor: "#676f91"
            }
          }
        ]
      }
    };

    new Chart(chartContext, {
      type: "line",
      data: chartData,
      options: chartOptions
    });
  }

  render() {
    return (
      <Wrapper>
        <ChartWrapper>
          <ChartCanvas ref={this.chart} />
        </ChartWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled(Paper)`
  padding: 20px;
`;

const ChartWrapper = styled.div`
  width: calc(100% - 20px);
  height: 450px;
`;

const ChartCanvas = styled.canvas`
  width: 100vw;
  height: 100vh;
`;
