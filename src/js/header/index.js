import { headerMenuOnClick } from "./headerMenuOnClick";
import formHeaderTemplate from '../../templates/formHeader.hbs';


export default function addHeaderMenuEventListener(header, currentPath) {
    const menuList = header.querySelector('.list-nav');

    const links = menuList.querySelectorAll('a');
  
    const activeEl = [].find.call(links, (elem) => {
        elem.classList.remove('active');
        const pathname = elem.href.split('/').pop();
        return (`/${pathname}` === currentPath);
        })
    activeEl.classList.add('active');
    
    const headerPageContent = document.querySelector('#header-page-content');

    menuList.addEventListener('click', headerMenuOnClick);

    headerPageContent.innerHTML = formHeaderTemplate();
}




