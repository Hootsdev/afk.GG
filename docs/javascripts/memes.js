"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const glightbox_1 = __importDefault(require("glightbox"));
fetch("/afk.GG/memes.json")
    .then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
})
    .then((json) => initialize(json))
    .catch((err) => console.error(`Fetch problem: ${err.message}`));
function initialize(memes) {
    const memesContainer = document.getElementById("memes");
    const smems = memes.memes.sort((a, b) => {
        return sortNumStr(a, b);
    });
    const colNum = 4, rowsPerCol = Math.round(smems.length / colNum), leftover = smems.length - colNum * rowsPerCol;
    console.log(`${colNum} - ${rowsPerCol} - ${leftover}`);
    for (let i = 0; i < colNum; i++) {
        const column = nodeAttributes("div", [{ key: "class", value: "column" }]);
        for (let j = 0; j < rowsPerCol; j++) {
            if (i * rowsPerCol + j >= smems.length) {
                break;
            }
            const image = nodeAttributes("img", [
                {
                    key: "src",
                    value: `/afk.GG/assets/images/meme/${smems[i * rowsPerCol + j]}`,
                },
                { key: "alt", value: `meme-${i * rowsPerCol + j}` },
                { key: "class", value: "mem" },
                {
                    key: "style",
                    value: "width: 300px; height: 300px; object-fit: cover;",
                },
            ]), glbox = nodeAttributes("a", [
                { key: "class", value: "glightbox" },
                {
                    key: "href",
                    value: `/afk.GG/assets/images/meme/${smems[i * rowsPerCol + j]}`,
                },
                { key: "data-type", value: "image" },
                { key: "data-width", value: "200px" },
                { key: "data-height", value: "300px" },
                {
                    key: "data-sizes",
                    value: "(max-width: 600px) 480px, 800px",
                },
                { key: "data-title", value: `meme-${i * rowsPerCol + j}` },
                { key: "data-desc-position", value: "bottom" },
                { key: "ata-zoomable", value: "true" },
                { key: "data-draggable", value: "false" },
            ]);
            glbox.appendChild(image);
            column.appendChild(glbox);
        }
        memesContainer.appendChild(column);
    }
}
function nodeAttributes(nodeName, attr) {
    let d = document.createElement(nodeName);
    attr.forEach((e) => {
        d.setAttribute(e.key, e.value);
    });
    return d;
}
function sortNumStr(a, b) {
    const nameA = parseInt(a.split(".").slice(0, -1).join("."), 10);
    const nameB = parseInt(b.split(".").slice(0, -1).join("."), 10);
    if (nameA > nameB) {
        return -1;
    }
    if (nameA < nameB) {
        return 1;
    }
    return 0;
}
function runGLBox(eles) {
    const lightbox = (0, glightbox_1.default)({
        touchNavigation: true,
        loop: true,
        autoplayVideos: false,
    });
    const myGallery = (0, glightbox_1.default)({
        elements: eles,
        autoplayVideos: false,
    });
    lightbox.on("open", () => {
        myGallery.open();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWVtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBa0M7QUFFbEMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO0tBQ3hCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO0lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztLQUNuRDtJQUNELE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pCLENBQUMsQ0FBQztLQUNELElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVsRSxTQUFTLFVBQVUsQ0FBQyxLQUFLO0lBQ3ZCLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFeEQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsT0FBTyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxNQUFNLEdBQUcsQ0FBQyxFQUNkLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQzlDLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUM7SUFFaEQsT0FBTyxDQUFDLEdB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