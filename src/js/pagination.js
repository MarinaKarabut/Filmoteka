const pagination = document.querySelector('.pagination-container');
const paginationBtns = document.getElementById('pagination-btns');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

let totalPages = 500;
let page =  5;


function pagBtnRender(totalPages,page) {
    let pagMarkup = '';
    let renderStart = page - 2;
    let renderEnd = page + 3;
    if (page === 1) {
        for (let pageLength = page; pageLength < renderEnd; pageLength++) {
            pagMarkup += `<button class="pagination-button">${pageLength}</button>`;
        }
        pagMarkup += `<p class="interval">...</p><button class="pagination-button">${totalPages}</button>`;

        arrowLeft.setAttribute('disabled', 'disabled');

    }else if (page === 2) {
         for (let pageLength = page - 1; pageLength < renderEnd; pageLength++) {
             pagMarkup += `<button class="pagination-button">${pageLength}</button>`;
        }
        pagMarkup += `<p class="interval">...</p><button class="pagination-button">${totalPages}</button>`;

        arrowLeft.removeAttribute('disabled');

    }else if (page === 3) {
            for (let pageLength = renderStart; pageLength < renderEnd; pageLength++) {
                pagMarkup += `<button class="pagination-button">${pageLength}</button>`;
        }
        pagMarkup += `<p class="interval">...</p><button class="pagination-button">${totalPages}</button>`;
    }else if (page === 4) {
        pagMarkup += `<button class="pagination-button">1</button>`;
            for (let pageLength = renderStart; pageLength < renderEnd; pageLength++) {
                pagMarkup += `<button class="pagination-button">${pageLength}</button>`;
        }
        pagMarkup += `<p class="interval">...</p><button class="pagination-button">${totalPages}</button>`;
    }else if (page > 4 && page < totalPages - 3) {
        pagMarkup += `<button class="pagination-button">1</button><p class="interval">...</p>`;

            for (let pageLength = renderStart; pageLength < renderEnd; pageLength++) {
                pagMarkup += `<button class="pagination-button">${pageLength}</button>`;
        }
        pagMarkup += `<p class="interval">...</p><button class="pagination-button">${totalPages}</button>`;
    } else if(page === totalPages - 3) {
        pagMarkup += `<button class="pagination-button">1</button><p class="interval">...</p>`;
        for (let pageLength = renderStart; pageLength < renderEnd; pageLength++) {
            pagMarkup += `<button class="pagination-button">${pageLength}</button>`;
        }
        pagMarkup += `<button class="pagination-button">${totalPages}</button>`;
    }
    else if(page === totalPages - 2) {
        pagMarkup += `<button class="pagination-button">1</button><p class="interval">...</p>`;
        for (let pageLength = renderStart; pageLength < renderEnd; pageLength++) {
            pagMarkup += `<button class="pagination-button">${pageLength}</button>`;
        }
    }
    else if(page === totalPages - 1) {
        pagMarkup += `<button class="pagination-button">1</button><li class="interval">...</li>`;
        for (let pageLength = renderStart; pageLength < page + 2; pageLength++) {
            pagMarkup += `<button class="pagination-button">${pageLength}</button>`;
        }

        arrowRight.removeAttribute('disabled');

    }
    else if(page === totalPages ) {
        pagMarkup += `<button class="pagination-button">1</button><li class="interval">...</li>`;
        for (let pageLength = renderStart; pageLength < page + 1; pageLength++) {
            pagMarkup += `<button class="pagination-button">${pageLength}</button>`;
        }

        arrowRight.setAttribute('disabled', 'disabled');

    }

    paginationBtns.innerHTML = pagMarkup;


    const pagBtns = paginationBtns.querySelectorAll('.pagination-button');
    pagBtns.forEach(pagBtn => {
        if (+pagBtn.textContent === page) {
            pagBtn.classList.add('current-page');
        }
    })

}
pagBtnRender(totalPages, page)

const currentPage = paginationBtns.querySelector('.current-page');

pagination.addEventListener('click', function (e) {
    if (e.target.nodeName !== "BUTTON") { return }
    const activeBtn = e.target
    if (e.target.classList.contains('pagination-button')) {
        page = +activeBtn.textContent
        console.log(page)
        currentPage.textContent = page
    } else if (e.target.id === 'arrow-left') {
        page = +currentPage.textContent - 1;
        currentPage.textContent = page
        console.log('work1');
    } else if (e.target.id === 'arrow-right') {
        page = +currentPage.textContent
        currentPage.textContent = page + 1;
        console.log('work2');
    }
    pagBtnRender(totalPages, page);
});