const ENDPOINTS = {
  auth: {
    login: "user/login",
    signup: "user"
  },
  wallets: "user/wallet",
  asset: "asset",
  freeDeposit: "transaction/free_deposit",
  mining: {
    statistic: "mining/stats",
    deposit: "mining/{asset}/deposit",
    withdraw: "mining/{asset}/withdraw",
    blockRewards: "mining/reward/widget"
  }
};

export default ENDPOINTS;
