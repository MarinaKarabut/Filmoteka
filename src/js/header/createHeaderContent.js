import { headerMenuLinks } from "./headerMenuLinks.js";

export function createHeaderContent(path) {
    const headerPageContent = document.querySelector('#header-page-content');
    const {template, selector, actionType, listener, headerClass} =  headerMenuLinks.find(obj =>  obj.pathname === path);
    headerPageContent.innerHTML = template();  
    if (selector) {
        const element = document.querySelector(selector)
        element.addEventListener(actionType, listener);       
    }
    if (headerClass) {
        const header = document.querySelector(".section-header");
        header.className = `section-header ${headerClass}`
    }
}