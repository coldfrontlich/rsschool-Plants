document.querySelector('.select-city').addEventListener('click' , (e) => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]');
  const isDropdown = e.target.matches('[data-dropdown]');
  if (isDropdownButton) {
    if (e.target.classList.contains('select-arrow_unactive')) {
      openMenuByArrow(e.target);
      changeCityColor(e.target.parentElement);
    } else {
      closeMenuByArrow(e.target);
      changeCityColor(e.target.parentElement);
    }
  } else if (isDropdown) {
    if (e.target.firstElementChild.classList.contains('select-arrow_unactive')) {
      openMenuByArrow(e.target.firstElementChild);
      changeCityColor(e.target);
    } else {
      closeMenuByArrow(e.target.firstElementChild);
      changeCityColor(e.target);
    }
  } else {
    console.log(e.target);
  }
})

const openMenuByArrow = (arrow) => {
  arrow.classList.add('select-arrow_active');
  arrow.classList.remove('select-arrow_unactive');
  arrow.nextElementSibling.classList.add('dropdown-contacts-menu_active');
  arrow.nextElementSibling.classList.remove('dropdown-contacts-menu_unactive');
}

const closeMenuByArrow = (arrow) => {
  arrow.classList.add('select-arrow_unactive');
  arrow.classList.remove('select-arrow_active');
  arrow.nextElementSibling.classList.add('dropdown-contacts-menu_unactive');
  arrow.nextElementSibling.classList.remove('dropdown-contacts-menu_active');
}

const changeCityColor = (city) => {
  if (city.classList.contains('select-city_unactive')) {
    city.classList.add('select-city_active');
    city.classList.remove('select-city_unactive');
  } else {
    city.classList.add('select-city_unactive');
    city.classList.remove('select-city_active');
  }
}