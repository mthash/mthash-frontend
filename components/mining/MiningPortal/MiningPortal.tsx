import * as React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

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
  const notAllAdded = portalData.length !== mineableCurrencies.length;

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
      <img src="static/mining/MiningPortal.svg" />
      <Grid container spacing={3}>
        {portalData &&
          portalData.map(
            (slotData: any): JSX.Element => (
              <Grid item xs={4}>
                <MiningSlot
                  key={slotData.id}
                  {...slotData}
                  onDeposit={handleDeposit}
                  onWithdraw={handleWithdraw}
                />
              </Grid>
            )
          )}
        {notAllAdded && (
          <Grid item xs={4}>
            <MiningSlotAddCurrency />
          </Grid>
        )}
      </Grid>
    </Wrapper>
  );
};

export default MiningPortal;

const Wrapper = styled.div`
  width: 100%;
`;
