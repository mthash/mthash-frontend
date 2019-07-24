const ENDPOINTS = {
  auth: {
    login: "user/login",
    signup: "user"
  },
  wallets: "user/wallet",
  asset: "asset",
  mining: {
    statistic: "mining/stats",
    deposit: "mining/{asset}/deposit",
    withdraw: "mining/{asset}/withdraw",
    blockRewards: "mining/reward/widget"
  }
};

export default ENDPOINTS;
