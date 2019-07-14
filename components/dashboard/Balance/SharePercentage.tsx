import * as React from "react";
import styled from "styled-components";
import LineadProgress, {
  LinearProgressProps
} from "@material-ui/core/LinearProgress";

interface Props {
  share: number;
  color: string;
}

const PERCENTAGE_SIGN: string = "%";

const SharePercentage: React.FC<Props> = ({
  share,
  color
}: Props): JSX.Element => {
  return (
    <Wrapper>
      <PercentageScale
        value={share}
        variant="buffer"
        color="secondary"
        customColor={color}
      />
      <Share>
        {share}
        {PERCENTAGE_SIGN}
      </Share>
    </Wrapper>
  );
};

export default SharePercentage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Share = styled.span`
  margin: 0 10px;
`;

interface ScaleProps {
  customColor: string;
}

const PercentageScale = styled(LineadProgress)`
  border-radius: 5px;
  width: 50%;

  .MuiLinearProgress-bar {
    background-color: ${p => p.theme.palette.background.default};

    &.MuiLinearProgress-barColorSecondary {
      background-color: ${(p: ScaleProps) => p.customColor};
    }
  }
`;
