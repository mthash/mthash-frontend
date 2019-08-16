import * as React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { isEmpty } from "ramda";

import MiningSlotModel from "~/models/MiningSlot";

import AppContext from "~/containers/AppContext";
import MiningContainer from "~/containers/MiningContainer";

import MiningSlot from "./MiningSlot";
import MiningSlotAddCurrency from "./MiningSlotAddCurrency";

const MiningPortal: React.FC = (): JSX.Element => {
  const {
    currencies: { mineable: mineableCurrencies }
  } = React.useContext(AppContext);
  const { miningPortal } = MiningContainer.useContainer();
  const miningContainer = MiningContainer.useContainer();
  const portalData = miningPortal.data;
  const addingAvailable =
    portalData && !isEmpty(portalData)
      ? portalData.length !== mineableCurrencies.length
      : true;
  const addedCurrencies =
    (portalData &&
      !isEmpty(portalData) &&
      portalData.map(item => item.currency)) ||
    [];

  React.useEffect(() => {
    miningPortal.fetch();
  }, []);

  const handleDeposit = ({ amount, currency }) => {
    miningContainer.minedAsset.deposit({
      amount,
      asset: currency
    });
  };

  const handleWithdraw = ({ amount, currency }) => {
    miningContainer.minedAsset.withdraw({
      amount,
      asset: currency
    });
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <img src="static/mining/ArcadeMining.svg" />
      </ImageWrapper>
      <Grid container spacing={2}>
        {portalData &&
          portalData.map(
            (slotData: any): JSX.Element => (
              <AdaptiveGrid item lg={4} xs={6}>
                <MiningSlot
                  key={slotData.id}
                  {...slotData}
                  onDeposit={handleDeposit}
                  onWithdraw={handleWithdraw}
                />
              </AdaptiveGrid>
            )
          )}
        {addingAvailable && (
          <AdaptiveGrid item lg={4} xs={6}>
            <MiningSlotAddCurrency addedCurrencies={addedCurrencies} />
          </AdaptiveGrid>
        )}
      </Grid>
    </Wrapper>
  );
};

export default MiningPortal;

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  margin-bottom: 25px;
`;

const AdaptiveGrid = styled(Grid)`
  @media screen and (max-width: 600px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;
