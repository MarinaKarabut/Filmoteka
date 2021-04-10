import { headerMenuOnClick } from "./headerMenuOnClick";
import formHeaderTemplate from '../../templates/formHeader.hbs';

export default function addHeaderMenuEventListener() {
    const menuList = document.querySelector('.list-nav');

    menuList.addEventListener('click', headerMenuOnClick);

    const headerPageContent = document.querySelector('#header-page-content');

    headerPageContent.innerHTML = formHeaderTemplate();
}




