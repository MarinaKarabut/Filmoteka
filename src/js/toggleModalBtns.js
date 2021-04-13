import { toggleWatch } from './toggleWatch.js';
import { watchedBtnProps } from "./localBtnProps.js";

function toggleBtn(type, nodeBtn) {
    type = (type === 'remove') ? "add" : "remove";
    nodeBtn.dataset.type = type;
    nodeBtn.textContent = watchedBtnProps[type].text;
    nodeBtn.style.backgroundColor = watchedBtnProps[type].bg;
}

export default function toggleModalBtns(e, id) {
    e.preventDefault();
    const { type } = e.target.dataset;
    toggleWatch(id);
    toggleBtn(type, e.target);
}
