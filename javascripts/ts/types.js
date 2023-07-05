import { generateAFKResObj, rangeSlide } from "./components/helper.js";
import { AfkArena, ValueModes, allRes, sheetId } from "./constants.js";
import { rewards } from "./components/dataloader.js";
class DustChest {
    amount;
    hours;
    constructor(qty, type) {
        this.amount = qty;
        this.hours = type;
    }
    dust() {
        return this.amount * this.hours * AfkArena.dustInc();
    }
}
class BaseResource {
    type;
    label;
    img;
}
class BaseResQty extends BaseResource {
    amount;
}
class User {
    spreadSheetId;
    leaderboard;
    income;
    constructor(gSheetId = sheetId) {
        this.spreadSheetId = gSheetId;
        this.leaderboard = [];
        this.income = allRes.map((v) => generateAFKResObj(v));
    }
    set reward(val) {
        if (!val)
            return;
        const existingResult = this.leaderboard.find((x) => x.mode === val?.mode);
        if (!existingResult) {
            this.leaderboard.push(val);
        }
        else {
            existingResult.rank = val.rank;
            existingResult.rewards = val?.rewards;
        }
    }
    loadLocal() {
        this.leaderboard = ValueModes.emuns().map((x) => {
            const val = localStorage.getItem(x.id);
            return {
                mode: x.table,
                rank: val,
                rewards: rewards.find((v) => v.mode === ValueModes.gMode(x.id))
                    ?.rewards,
            };
        });
        if (this.leaderboard) {
            const rang = localStorage.getItem("rangeValue");
            $("input.range").attr("value", rang);
            rangeSlide(rang, this);
            this.calc();
        }
    }
    calc() {
        this.income = allRes.map((v) => generateAFKResObj(v));
        this.leaderboard.forEach((x) => {
            x?.rewards?.forEach((r) => {
                const ex = this.income.findIndex((k) => k.type === r.type);
                if (ex > -1) {
                    this.income[ex].amount += r.amount;
                }
            });
        });
    }
}
export { User, DustChest, BaseResource, BaseResQty };
