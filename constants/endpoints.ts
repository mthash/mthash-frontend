const ENDPOINTS = {
  auth: {
    login: "user/login",
    signup: "user"
  },
  demo: {
    login: "demo/user/login/{identifier}",
    users: "demo/user"
  },
  admin: {
    data: "/admin/overview",
    wipe: "/admin/restart"
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
    bindAsset: "user/asset/{asset}",
    deposit: "mining/{asset}/deposit",
    withdraw: "mining/{asset}/withdraw",
    blockRewards: "mining/rewards",
    myRewards: "mining/my/rewards",
    hashBalance: "mining/arcade/hash",
    mineMaxes: "mining/{asset}/maxes",
    minePredict: "mining/{asset}/predict"
  }
};

export default ENDPOINTS;
