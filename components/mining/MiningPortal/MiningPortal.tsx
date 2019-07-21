import * as React from "react";
import Grid from "@material-ui/core/Grid";

import MiningSlotModel from "~/models/MiningSlot";
import MiningSlot from "./MiningSlot";

import portalData from "~/_mocks_/miningPortal.json";
import MiningSlotAddCurrency from "./MiningSlotAddCurrency";

const MiningPortal: React.FC = (): JSX.Element => {
  return (
    <div>
      <img src="static/mining/MiningPortal.svg" />
      <Grid container spacing={3}>
        {portalData.map(
          (slotData: any): JSX.Element => {
            return (
              <Grid item xs={4}>
                <MiningSlot key={slotData.id} {...slotData} />
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
