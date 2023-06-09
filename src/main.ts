import { loadRewards, modeRewards, rewards } from "./components/dataloader.js";
import { columnData } from "./components/gsheets.js";
import {
  createElementN,
  createSelectList,
  populateStorage,
  rangeSlide,
  setApp,
  xLog,
} from "./components/helper.js";
import { makeOut, updateResourceBox } from "./components/output.js";
import { ValueModes, userFields, verb } from "./model/constants.js";
import { Gsheet, RankReward, User } from "./model/types.js";

xLog(`[Extended log] => ${verb}`);
xLog(`Looking for entry tag...`);
export const app = document.getElementById("app");

const user: User = new User("1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY");
initUser();
startApp();

function initUser() {
  xLog(`Init user...`);
  for (let inputField of userFields) {
    if (!localStorage.getItem(inputField.name)) {
      const selected = $(inputField.name).find(":selected").get(0);
      populateStorage(inputField.name, selected?.innerText);
    } else {
      setApp(inputField.name);
    }
  }
}

function startApp() {
  xLog("launch app...");
  app.appendChild(makeOut());
  drawInputs().catch((x) => xLog(`Promise rejected => ${x}`));
  xLog("app started");
}

async function drawInputs() {
  let inputForm = createElementN("form", { id: "a-form" });

  modeRewards().forEach((x) => {
    const mode = ValueModes.emuns().find((s) => s.table === x.mode);
    x.table
      .then((t: Gsheet) => {
        const container = createElementN("div", {
            class: "select-container",
          }),
          label = document.createElement("h4"),
          s = createSelectList(mode.id, columnData(0, t));

        label.innerText = mode.id;
        container.appendChild(s);
        container.insertBefore(label, s);
        inputForm.append(container);
        loadRewards(x.mode, t);
      })
      .then(() => app.appendChild(inputForm))
      .catch((x: PromiseRejectedResult) => xLog(`Promise rejected${x.status}`))
      .finally(() => {
        setTimeout(() => {
          app.dispatchEvent(new InputEvent("change"));
        }, 2000);
      });
  });
}
app.addEventListener("change", (x: InputEvent) => {
  const tg = x.target as HTMLSelectElement;
  user.loadLocal();
  if (tg.value && tg.type !== "range") {
    const reward = rewards.find(
      (g: RankReward) =>
        g.mode === ValueModes.gMode(tg.id) && g.rank === tg.value
    );
    populateStorage(tg.id, tg.value);
    user.reward = reward;
    user.calc();
  }
  if (tg instanceof HTMLInputElement && tg.type === "range") {
    rangeSlide(tg.value, user);
  } else if (user) {
    const weeks = parseInt(localStorage.getItem("rangeValue"));
    if (weeks > 0) {
      updateResourceBox(user.income, weeks);
    } else {
      updateResourceBox(user.income);
    }
  }
});

export { user };
