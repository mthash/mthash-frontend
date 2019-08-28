import * as React from "react";
import styled from "styled-components";
import Dialog from "~/components/common/Dialog";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import ENDPOINTS from "~/constants/endpoints";
import NOTIFICATION_TYPES from "~/constants/notificationTypes";
import AdminReset from "./AdminReset";
import { AsyncService } from "~/services";
import AppContainer from "~/containers/AppContainer";
import AdminDailyRevenue from "./AdminDailyRevenue";
import AdminPower from "./AdminPower";

const ADMIN_CAPTION = "Administration";

const TABS = {
  dailyRevenue: "Daily Revenue",
  power: "Power",
  reset: "Reset"
};

const MESSAGES = {
  updated: "Data updated successfully"
};

interface AdminData {
  daily_revenue: any;
  power: any;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

const AdminDialog: React.FC<Props> = ({ open, onClose }): JSX.Element => {
  const revenueTab = TABS.dailyRevenue;
  const powerTab = TABS.power;
  const resetTab = TABS.reset;
  const [selected, setSelected] = React.useState<string>(revenueTab);
  const [adminData, setAdminData] = React.useState<AdminData>({
    daily_revenue: null,
    power: null
  });
  const { notifications } = AppContainer.useContainer();
  const dailyRevenueData = adminData.daily_revenue;
  const powerData = adminData.power;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await AsyncService.get(ENDPOINTS.admin.data);

        setAdminData(result.data.body);
      } catch ({ message }) {
        notifications.addNotification({
          type: NOTIFICATION_TYPES.error,
          message
        });
      }
    };

    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelected(newValue);
  };

  const handleDataSubmit = async dailyRevenueData => {
    try {
      await AsyncService.post(ENDPOINTS.admin.data, dailyRevenueData);

      notifications.addNotification({
        type: NOTIFICATION_TYPES.success,
        message: MESSAGES.updated
      });
    } catch ({ message }) {
      notifications.addNotification({
        type: NOTIFICATION_TYPES.error,
        message
      });
    }
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      title={ADMIN_CAPTION}
      maxWidth="md"
    >
      <Tabs value={selected} onChange={handleChange}>
        <Tab label={revenueTab} value={revenueTab} />
        <Tab label={powerTab} value={powerTab} />
        <Tab label={resetTab} value={resetTab} />
      </Tabs>
      <Content>
        {selected === revenueTab && dailyRevenueData && (
          <AdminDailyRevenue
            data={dailyRevenueData}
            onSubmit={handleDataSubmit}
          />
        )}
        {selected === powerTab && powerData && (
          <AdminPower data={powerData} onSubmit={handleDataSubmit} />
        )}
        {selected === resetTab && <AdminReset />}
      </Content>
    </StyledDialog>
  );
};

export default AdminDialog;

const StyledDialog = styled(Dialog)`
  flex: 1;
`;

const Content = styled.div`
  height: 70vh;
  width: 670px;
  padding: 20px;
  overflow: auto;

  @media screen and (max-width: 817px) {
    width: 550px;
  }

  @media screen and (max-width: 700px) {
    width: 450px;
  }

  @media screen and (max-width: 600px) {
    width: 350px;
  }
`;
