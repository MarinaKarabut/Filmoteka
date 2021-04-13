import { toggleQueue} from './toggleQueue.js';
import { queueBtnProps } from "./localBtnProps.js";

function toggleBtn(type, nodeBtn) {
    type = (type === 'remove') ? "add" : "remove";
    nodeBtn.dataset.type = type;
    nodeBtn.textContent = queueBtnProps[type].text;
    nodeBtn.style.backgroundColor = queueBtnProps[type].bg;
}

export default function toggleModalBtnQueue(e, id) {
    e.preventDefault();
    const { type } = e.target.dataset;
    toggleQueue(id);
    toggleBtn(type, e.target);
}
