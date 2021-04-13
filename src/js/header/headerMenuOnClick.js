import { createHeaderContent } from "./createHeaderContent.js";

export function headerMenuOnClick(e) {
    e.preventDefault();

    if (e.target === e.currentTarget) {
        return;
    }
    const menuList = document.querySelector('.list-nav');
    const prevActiveElement = menuList.querySelector(".active");
    prevActiveElement.classList.remove('active');
    e.target.classList.add("active");

    createHeaderContent(e.target.pathname);
    history.pushState(null, null, e.target.pathname);
}