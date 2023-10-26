const toggleButton = document.querySelector('.toggle-btn');
const btnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleButton.onclick = function(){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    
    btnIcon.classList = isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars';
}

