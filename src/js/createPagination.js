import paginationTemplate from '../templates/pagination.hbs';
import MovieHttpService from './MovieHttpService.js';
import renderFilms from './renderFilms.js';
import filmsSearchOptions from "./filmOptions.js"

const movieHttpService = new MovieHttpService();

function createPagination(totalPages, filmsContainer) {
    const { page } = filmsSearchOptions.options

    const paginationContainer = document.createElement("div");
    paginationContainer.classList.add("pagination-container");
    const arr = new Array(totalPages).fill("").map((item, index) => index + 1);
     if(window.innerWidth < 768) {
        if (page > 3) {
            const currentPageIndex = arr.indexOf(page);

            const pagination = [currentPageIndex - 1, currentPageIndex, currentPageIndex + 1, currentPageIndex + 2,currentPageIndex + 3]

            arr.splice(0, totalPages, ...pagination)
        }
    
        if (page < totalPages - 2) {
            const currentPageIndex = arr.indexOf(page);
            arr.splice(currentPageIndex + 3, totalPages - page - 2);
        }
        paginationContainer.innerHTML = paginationTemplate({ list: arr });
    } else {
        if (page > 4) {
            const currentPageIndex = arr.indexOf(page);
            const number = currentPageIndex - 3;
            arr.splice(1, number, '...')
        }
    
        if (page < totalPages - 3) {
            const currentPageIndex = arr.indexOf(page);
            arr.splice(currentPageIndex + 3, totalPages - page - 3, "...");
        }
        paginationContainer.innerHTML = paginationTemplate({ list: arr });
    }

    const pagBtns = paginationContainer.querySelectorAll('.pagination-button')
        pagBtns.forEach(pagBtn => {
            if (+pagBtn.textContent === page) {
                return pagBtn.classList.add('current-page')
            }
            if (pagBtn.textContent === '...') {
                pagBtn.classList.replace('pagination-button', 'dots')
            }
         })
    

    paginationContainer.addEventListener('click', async function (e) {
        e.preventDefault()

        const gallery = document.querySelector('.js-gallery-movies')

        window.scrollTo({
            top: gallery.offsetTop - 30 ,
            behavior: 'smooth'
            
        })
        if (e.target.id === 'arrow-left') {
            if (filmsSearchOptions.options.page > 1) {
                filmsSearchOptions.options.page -= 1
            }
        }
        if (e.target.id === 'arrow-right') {
            if (filmsSearchOptions.options.page < totalPages) {
                filmsSearchOptions.options.page += 1
            }
        }
        if (e.target.classList.contains('pagination-button')) {
            filmsSearchOptions.options.page = +e.target.textContent
        }
        const films = await movieHttpService.get(filmsSearchOptions)
        paginationContainer.remove()
        renderFilms(films, filmsContainer)
    })

    return paginationContainer;
}
export default createPagination;