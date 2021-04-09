const pagination = document.querySelector('.pagination-container')
const pagList = document.getElementById('pagination-list')
const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')

const firstPage = document.getElementById('first-page')
const interval1 = document.getElementById('interval1')
const prevSibling2 = document.getElementById('prev-sibling2')
const prevSibling1 = document.getElementById('prev-sibling1')
const currentPage = document.getElementById('current-page')
const nextSibling1 = document.getElementById('next-sibling1')
const nextSibling2 = document.getElementById('next-sibling2')
const interval2 = document.getElementById('interval2')
const lastPage = document.getElementById('last-page')


function pagBtnMarkup({totalPages, page},listener) {
    prevSibling2.textContent = page - 2;
    prevSibling1.textContent = page - 1;
    currentPage.textContent = page;
    nextSibling1.textContent = page + 1;
    nextSibling2.textContent = page + 2;
    lastPage.textContent = totalPages

    listener.addEventListener('click', function (e) {
        if (!e.target.classList.contains("arrow-btn")){
            options.page = +e.target.textContent
        }
        
         if (e.target.classList.contains('pagination-item')) {
            currentPage.textContent = e.target.textContent
            prevSibling2.textContent = currentPage.textContent - 2;
            prevSibling1.textContent = currentPage.textContent - 1;
            nextSibling1.textContent = +currentPage.textContent + 1;
            nextSibling2.textContent = +currentPage.textContent + 2;
         } else if (e.target.id === 'arrow-left') {
             options.page--;
            currentPage.textContent = options.page
            prevSibling2.textContent = currentPage.textContent - 2;
            prevSibling1.textContent = currentPage.textContent - 1;
            nextSibling1.textContent = +currentPage.textContent + 1;
            nextSibling2.textContent = +currentPage.textContent + 2;
         } else if (e.target.id === 'arrow-right') {
             options.page++;
            currentPage.textContent = options.page
            prevSibling2.textContent = currentPage.textContent - 2;
            prevSibling1.textContent = currentPage.textContent - 1;
            nextSibling1.textContent = +currentPage.textContent + 1;
            nextSibling2.textContent = +currentPage.textContent + 2;
        }
        // ARROW-LEFT
        if (currentPage.textContent === '1') {
            arrowLeft.setAttribute("disabled", "disabled")
            firstPage.classList.add("hidden")
            interval1.classList.add("hidden")
            prevSibling2.classList.add("hidden")
            prevSibling1.classList.add("hidden")
        } else if (currentPage.textContent === '2') {
            arrowLeft.removeAttribute("disabled")
            firstPage.classList.remove("hidden")
            interval1.classList.add("hidden")
            prevSibling2.classList.add("hidden")
            prevSibling1.classList.add("hidden")
        }else if (currentPage.textContent === '3') {
            interval1.classList.add("hidden")
            prevSibling2.classList.add("hidden")
            prevSibling1.classList.remove("hidden")
        } else if (currentPage.textContent === '4') {
            interval1.classList.add("hidden")
        }else {
            
            firstPage.classList.remove("hidden")
            interval1.classList.remove("hidden")
            prevSibling2.classList.remove("hidden")
            prevSibling1.classList.remove("hidden")
        }
    // ================================================================================
        if (currentPage.textContent === `${totalPages}`) {
            arrowRight.setAttribute("disabled", "disabled")
            lastPage.classList.add("hidden")
            interval2.classList.add("hidden")
            nextSibling2.classList.add("hidden")
            nextSibling1.classList.add("hidden")
        } else if (currentPage.textContent === `${totalPages - 1}`) {
            arrowRight.removeAttribute("disabled")
            lastPage.classList.add("hidden")
            interval2.classList.add("hidden")
            nextSibling2.classList.add("hidden")
            nextSibling1.classList.remove("hidden")
            
        }else if (currentPage.textContent === `${totalPages - 2}`) {
            lastPage.classList.add("hidden")
            nextSibling2.classList.remove("hidden")
            
        } else if (currentPage.textContent === `${totalPages - 3}`) {
            lastPage.classList.remove("hidden")
            interval2.classList.add("hidden")
        } else if (currentPage.textContent === `${totalPages - 4}`) {
            interval2.classList.remove("hidden")
        } else {
            lastPage.classList.remove("hidden")
            interval2.classList.remove("hidden")
        }
    })
    
}
