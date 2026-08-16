// $BRIIE Token Configuration — Brilla Prep Community Token
export const TOKEN_CONFIG = {
  name: "Briie",
  ticker: "$BRIIE",
  description:
    "The official community token of Brilla Prep. Hold $BRIIE, save on prep courses, earn while you study, and help fund scholarships for students who need them.",

  // Contract address (replace with your SPL token mint)
  contractAddress: "So11111111111111111111111111111111111111112",

  // Links
  twitterUrl: "https://twitter.com/brillaprep",
  telegramUrl: "https://t.me/briietoken",
  dexscreenerUrl: "https://dexscreener.com/solana/briie",
  birdeyeUrl: "https://birdeye.so/token/briie",
  brillaprepUrl: "https://brillaprep.org",

  // Jupiter swap URL
  get jupiterSwapUrl() {
    return `https://jup.ag/swap/USDC-${this.contractAddress}`;
  },

  // DexScreener embed
  get dexscreenerEmbedUrl() {
    return `https://dexscreener.com/solana/${this.contractAddress}?embed=1&theme=dark`;
  },

  // Tokenomics
  totalSupply: "1,000,000,000",
  liquidityLocked: true,
  mintRenounced: true,
  tax: "1%",
  taxDestination: "Scholarship Pool + Platform Growth",

  // Utility Tiers
  utilityTiers: [
    { name: "Student", amount: "Any", benefit: "5% off all Brilla Prep courses" },
    { name: "Scholar", amount: "50K $BRIIE", benefit: "15% off + early access to new tests" },
    { name: "Dean's List", amount: "250K $BRIIE", benefit: "25% off + Briie office hours" },
    { name: "Valedictorian", amount: "1M $BRIIE", benefit: "Free unlimited prep + name a module" },
  ],

  // Platform coupling milestones
  milestones: [
    { milestone: "100 Brilla Prep signups", action: "Burn 1% of $BRIIE supply" },
    { milestone: "First paying student", action: "$500 market buy + distribute to holders" },
    { milestone: "500 practice tests completed", action: "Study-to-earn airdrop for completers" },
    { milestone: "Monthly revenue target hit", action: "5% of revenue → token buyback" },
  ],
};
