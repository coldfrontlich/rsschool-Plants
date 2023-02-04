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
    if (e.target.firstElementChild.nextElementSibling.classList.contains('select-arrow_unactive')) {
      openMenuByArrow(e.target.firstElementChild.nextElementSibling);
      changeCityColor(e.target);
    } else {
      closeMenuByArrow(e.target.firstElementChild.nextElementSibling);
      changeCityColor(e.target);
    }
  }
})

document.querySelector('.contact-list').addEventListener('click', (e) => {
  const isCanandaiguaItem = e.target.matches('[data-Canandaigua-item]');
  const isNewYorkItem = e.target.matches('[data-NewYork-item]');
  const isYonkersItem = e.target.matches('[data-Yonkers-item]');
  const isSherrillItem = e.target.matches('[data-Sherrill-item]');
  if (isCanandaiguaItem) {
    changeMenuText(e.target);
    removeAllListElements();
    changeListElement(e.target);
    closeMenuByArrow(e.target.parentElement.parentElement.previousElementSibling);
    changeCityColor(e.target.parentElement.parentElement.parentElement);
    closeAllCards();
    openCard(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling);
    settingImage(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling);
  }
  if (isNewYorkItem) {
    changeMenuText(e.target);
    removeAllListElements();
    changeListElement(e.target);
    closeMenuByArrow(e.target.parentElement.parentElement.previousElementSibling);
    changeCityColor(e.target.parentElement.parentElement.parentElement);
    closeAllCards();
    openCard(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling);
    settingImage(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling);
  }
  if (isYonkersItem) {
    changeMenuText(e.target);
    removeAllListElements();
    changeListElement(e.target);
    closeMenuByArrow(e.target.parentElement.parentElement.previousElementSibling);
    changeCityColor(e.target.parentElement.parentElement.parentElement);
    closeAllCards();
    openCard(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling);
    settingImage(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling);
  }
  if (isSherrillItem) {
    changeMenuText(e.target);
    removeAllListElements();
    changeListElement(e.target);
    closeMenuByArrow(e.target.parentElement.parentElement.previousElementSibling);
    changeCityColor(e.target.parentElement.parentElement.parentElement);
    closeAllCards();
    openCard(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
    settingImage(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling);
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

const changeMenuText = (textMain) => {
  textMain.parentElement.parentElement.parentElement.firstElementChild.textContent = textMain.textContent;
}

const removeAllListElements = () => {
  document.querySelectorAll('.contact-list-item').forEach(listElement => {
    listElement.classList.add('contact-list-item_unactive');
    listElement.classList.remove('contact-list-item_active');
  })
  document.querySelectorAll('.contact-line').forEach(lineElement => {
    lineElement.classList.add('contact-line_unactive');
    lineElement.classList.remove('contact-line_active');
  })
}

const changeListElement = (listElement) => {
  if (listElement.classList.contains('contact-list-item_unactive')) {
    listElement.classList.remove('contact-list-item_unactive');
    listElement.classList.add('contact-list-item_active');
    listElement.nextElementSibling.classList.remove('contact-line_unactive');
    listElement.nextElementSibling.classList.add('contact-line_active');
  }
}

const openCard = (card) => {
  if (card.classList.contains('city-card_unactive')) {
    card.classList.add('city-card_active');
    card.classList.remove('city-card_unactive');
  }
}

const closeAllCards = () => {
  document.querySelectorAll('.city-card').forEach(card => {
    card.classList.remove('city-card_active');
    card.classList.add('city-card_unactive');
  })
}

const settingImage = (image) => {
  image.classList.add('contacts-woman_active');
  image.classList.remove('contacts-woman_unactive');
}