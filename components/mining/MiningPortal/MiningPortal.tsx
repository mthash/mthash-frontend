import * as React from "react";
import Grid from "@material-ui/core/Grid";

import MiningSlotModel from "~/models/MiningSlot";
import AppContext from "~/containers/AppContext";
import MiningContainer from "~/containers/MiningContainer";

import MiningSlot from "./MiningSlot";
import MiningSlotAddCurrency from "./MiningSlotAddCurrency";

import portalData from "~/_mocks_/miningPortal.json";

const MiningPortal: React.FC = (): JSX.Element => {
  const { currencies } = React.useContext(AppContext);
  const miningContainer = MiningContainer.useContainer();

  const handleDeposit = ({ amount, currency }) => {
    miningContainer.minedAsset.deposit({
      amount,
      asset: currency
    });
  };

  const handleWithdraw = currency => {
    miningContainer.minedAsset.withdraw(currency);
  };

  return (
    <div>
      <img src="static/mining/MiningPortal.svg" />
      <Grid container spacing={3}>
        {portalData.map(
          (slotData: any): JSX.Element => {
            const { id, currency } = slotData;

            return (
              <Grid item xs={4}>
                <MiningSlot
                  key={id}
                  {...slotData}
                  onDeposit={handleDeposit}
                  onWithdraw={handleWithdraw}
                />
              </Grid>
            );
          }
        )}
        <Grid item xs={4}>
          <MiningSlotAddCurrency />
        </Grid>
      </Grid>
    </div>
  );
};

export default MiningPortal;
