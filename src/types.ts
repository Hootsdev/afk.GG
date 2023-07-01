type prop = { n: string; v: string };

interface Gsheet {
  cols: Array<{ id: string; label: string; type: string }>;
  rows: Array<{ c: Array<{ v: string; f: string }> }>;
}

// Data types
interface RankReward {
  mode: string;
  rank: string;
  rewards: BaseResQty[];
}
class BaseResource {
  type: `${bres}`;
  label: string;
  img: string;
}
class BaseResQty extends BaseResource {
  amount: number;
}

class User {
  spreadSheetId: string;
  leaderboard: RankReward[];
  income: BaseResQty[];

  constructor(sheetId = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY") {
    this.spreadSheetId = sheetId;
    this.leaderboard = [];
    this.income = allRes.map((v) => generateAFKResObj(v));
  }
  set reward(val: RankReward) {
    if (!val) return;
    const existingResult = this.leaderboard.find((x) => x.mode === val?.mode);
    if (!existingResult) {
      this.leaderboard.push(val);
    } else {
      existingResult.rank = val.rank;
      existingResult.rewards = val?.rewards;
    }
  }

  calc(): void {
    this.income = allRes.map((v) => generateAFKResObj(v));
    this.leaderboard.forEach((x) => {
      x.rewards.forEach((r) => {
        const ex = this.income.findIndex((k) => k.type === r.type);
        if (ex > -1) {
          this.income[ex].amount += r.amount;
        }
      });
    });
  }
}
