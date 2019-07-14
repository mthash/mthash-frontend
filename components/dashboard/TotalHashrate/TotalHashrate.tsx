import * as React from "react";
import styled from "styled-components";
import Chart from "chart.js";

import Paper from "~/components/common/Paper";

export default class TotalHashrate extends React.Component {
  private chartBitcoin: any = React.createRef<HTMLCanvasElement>();

  componentDidMount() {
    const chartContext = this.chartBitcoin.current.getContext("2d");
    const gradientStroke = chartContext.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#51E4F8");
    gradientStroke.addColorStop(1, "#3AFFB8");

    const chartData = {
      labels: ["0h", "3h", "7h", "12h", "16h", "20h", "24h"],
      datasets: [
        {
          borderColor: gradientStroke,
          pointBorderColor: "#51E4F8",
          pointBackgroundColor: "#51E4F8",
          pointHoverBackgroundColor: "#51E4F8",
          pointHoverBorderColor: "#51E4F8",
          pointBorderWidth: 10,
          pointHoverRadius: 10,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          fill: false,
          borderWidth: 4,
          data: [6000, 8000, 5500, 4000, 6200, 9500, 8900]
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
              maxTicksLimit: 5,
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
          <ChartCanvas ref={this.chartBitcoin} />
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
