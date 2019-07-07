import ROUTES from "./routes";

export const APP_SECTION_IDS = {
  dashboard: 1,
  mining: 2,
  exchange: 3
};

const APP_SECTIONS = [
  {
    id: APP_SECTION_IDS.dashboard,
    name: "Dashboard",
    route: ROUTES.dashboard
  },
  {
    id: APP_SECTION_IDS.mining,
    name: "Mining",
    route: ROUTES.mining
  },
  {
    id: APP_SECTION_IDS.exchange,
    name: "Exchange",
    route: ROUTES.exchange
  }
];

export default APP_SECTIONS;
