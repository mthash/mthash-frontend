const ENDPOINTS = {
  auth: {
    login: "user/login",
    signup: "user"
  },
  wallets: "user/wallet",
  asset: {
    all: "asset",
    mineable: "asset/mineable"
  },
  freeDeposit: "transaction/free_deposit",
  mining: {
    arcade: "mining/arcade",
    chart: "mining/chart/{category}",
    portal: "mining/portal",
    statistic: "mining/stats",
    deposit: "mining/{asset}/deposit",
    withdraw: "mining/{asset}/withdraw",
    blockRewards: "mining/rewards",
    myRewards: "mining/my/rewards",
    hashBalance: "mining/arcade/hash"
  }
};

export default ENDPOINTS;
