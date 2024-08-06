const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const searchContainer = document.querySelector('.search-container');

searchIcon.addEventListener('click',   
 () => {
  searchInput.focus();
  searchContainer.classList.toggle('active');
});