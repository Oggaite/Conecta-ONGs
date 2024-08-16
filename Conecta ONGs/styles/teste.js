const itemsContainer = document.getElementById('items');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');
const pageNumbersContainer = document.getElementById('page-numbers');

let currentPage = 0;
const itemsPerPage = 20;
const totalItems = 60; 


function generateItems() {
    for (let i = 0; i < totalItems; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerText = `Item ${i + 1}`;
        itemsContainer.appendChild(itemDiv);
    }
}

function showItems(page) {
    const items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
        item.style.display = 'none'; 
        if (index >= page * itemsPerPage && index < (page + 1) * itemsPerPage) {
            item.style.display = 'block'; 
        }
    });
    updatePagination(page);
}

function updatePagination(page) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    pageNumbersContainer.innerHTML = ''; 
    for (let i = 0; i < totalPages; i++) {
        const pageNumber = document.createElement('div');
        pageNumber.classList.add('page-number');
        if (i === page) {
            pageNumber.classList.add('active');
        }
        pageNumber.innerText = i + 1;
        pageNumber.addEventListener('click', () => goToPage(i));
        pageNumbersContainer.appendChild(pageNumber);
    }
}

function nextPage() {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    currentPage++;
    if (currentPage >= totalPages) {
        currentPage = 0;
    }
    showItems(currentPage);
}

function prevPage() {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    currentPage--;
    if (currentPage < 0) {
        currentPage = totalPages - 1;
    }
    showItems(currentPage);
}

function goToPage(page) {
    currentPage = page;
    showItems(currentPage);
}

prevPageButton.addEventListener('click', prevPage);
nextPageButton.addEventListener('click', nextPage);


generateItems();
showItems(currentPage);

