import { ResponsivePie } from "@nivo/pie";

interface Props {
  data: any[];
  colors: string[];
}

const PieChart: React.FC<Props> = ({ data, colors }): JSX.Element => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 10, right: 60, bottom: 10, left: 20 }}
      startAngle={0}
      innerRadius={0.75}
      colors={colors}
      enableRadialLabels={false}
      enableSlicesLabels={false}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      legends={[
        {
          anchor: "right",
          direction: "column",
          translateY: 56,
          itemWidth: 120,
          itemHeight: 28,
          itemTextColor: "#999",
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000"
              }
            }
          ]
        }
      ]}
    />
  );
};

export default PieChart;
