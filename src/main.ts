const { verb } = require("./constants");

const L = (x) => {
  if (verb) {
    console.log(x);
  }
};

L(`[Extended log] => ${verb}`);
L(`Looking for entry tag...`);
const app = document.getElementById("app");
let rewards: RankReward[] = [];
const user: User = new User("1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY");
initUser(user);
startApp();
setTimeout(() => L(rewards), 2000);

function initUser(u: User) {
  L(`Init user...`);
  for (let inputField of userFields) {
    if (!localStorage.getItem(inputField.name)) {
      const selected = $(inputField.name).find(":selected").get(0);
      populateStorage(inputField.name, selected?.innerText);
    } else {
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

async function drawInputs() {
  let inputForm = domElWithProperties("form", [{ n: "id", v: "a-form" }]);

  modeRewards().forEach((x) => {
    const mode = rSources.find((s) => s.tableName === x.mode);
    x.table
      .then((t) => {
        const container = domElWithProperties("div", [
            { n: "class", v: "select-container" },
          ]),
          label = document.createElement("h4"),
          s = makeSelect(mode.id, columnData(0, t));

        label.innerText = mode.label;
        container.appendChild(s);
        container.insertBefore(label, s);
        inputForm.append(container);
        loadRewards(x.mode, t).forEach((r) =>
          rewards.push({
            mode: x.mode,
            rank: r.rank,
            rewards: r.rewards.filter((h) => h.amount > 0),
          })
        );
      })
      .then(() => app.appendChild(inputForm))
      .catch((x) => L(`Promise rejected${x}`))
      .finally(() => {
        L(`Inputs done`);
      });
  });
  setTimeout(() => app.appendChild(makeOut()), 2000);
}

module.exports = { L };
