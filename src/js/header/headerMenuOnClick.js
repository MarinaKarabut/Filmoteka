import { createHeaderContent } from "./createHeaderContent";

export function headerMenuOnClick(e) {
    e.preventDefault();

    const menuList = document.querySelector('.list-nav');
    const prevActiveElement = menuList.querySelector(".active");
    prevActiveElement.classList.remove('active');
    e.target.classList.add("active");

    createHeaderContent(e.target.pathname);
    history.pushState(null, null, e.target.pathname);
}