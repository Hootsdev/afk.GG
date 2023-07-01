var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { verb } = require("./constants");
const L = (x) => {
    if (verb) {
        console.log(x);
    }
};
L(`[Extended log] => ${verb}`);
L(`Looking for entry tag...`);
const app = document.getElementById("app");
let rewards = [];
const user = new User("1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY");
initUser(user);
startApp();
setTimeout(() => L(rewards), 2000);
function initUser(u) {
    L(`Init user...`);
    for (let inputField of userFields) {
        if (!localStorage.getItem(inputField.name)) {
            const selected = $(inputField.name).find(":selected").get(0);
            populateStorage(inputField.name, selected === null || selected === void 0 ? void 0 : selected.innerText);
        }
        else {
            setApp(inputField.name);
        }
    }
    return u;
}
function startApp() {
    L("launch app...");
    drawInputs().catch((x) => L(`Promise rejected => ${x}`));
    L("app started");
}
function drawInputs() {
    return __awaiter(this, void 0, void 0, function* () {
        let inputForm = domElWithProperties("form", [{ n: "id", v: "a-form" }]);
        modeRewards().forEach((x) => {
            const mode = rSources.find((s) => s.tableName === x.mode);
            x.table
                .then((t) => {
                const container = domElWithProperties("div", [
                    { n: "class", v: "select-container" },
                ]), label = document.createElement("h4"), s = makeSelect(mode.id, columnData(0, t));
                label.innerText = mode.label;
                container.appendChild(s);
                container.insertBefore(label, s);
                inputForm.append(container);
                loadRewards(x.mode, t).forEach((r) => rewards.push({
                    mode: x.mode,
                    rank: r.rank,
                    rewards: r.rewards.filter((h) => h.amount > 0),
                }));
            })
                .then(() => app.appendChild(inputForm))
                .catch((x) => L(`Promise rejected${x}`))
                .finally(() => {
                L(`Inputs done`);
            });
        });
        setTimeout(() => app.appendChild(makeOut()), 2000);
    });
}
module.exports = { L };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNkLElBQUksSUFBSSxFQUFFO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoQjtBQUNILENBQUMsQ0FBQztBQUVGLENBQUMsQ0FBQyxxQkFBcUIsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUM5QixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNDLElBQUksT0FBTyxHQUFpQixFQUFFLENBQUM7QUFDL0IsTUFBTSxJQUFJLEdBQVMsSUFBSSxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQztBQUM1RSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDZixRQUFRLEVBQUUsQ0FBQztBQUNYLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFbkMsU0FBUyxRQUFRLENBQUMsQ0FBTztJQUN2QixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEIsS0FBSyxJQUFJLFVBQVUsSUFBSSxVQUFVLEVBQUU7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFDLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxlQUFlLENBQUMs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