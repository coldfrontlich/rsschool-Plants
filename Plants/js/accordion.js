document.querySelector('.prices-items').addEventListener('click', (e) => {
  if (e.target.classList.contains('price-arrow')) {
    if(e.target.classList.contains('price-arrow_unactive')) {
      closeAllAccordions();
      openAccordion(e.target)
    } else if (e.target.classList.contains('price-arrow_active')) {
      closeAccordion(e.target);
    }
  } else if (e.target.classList.contains('prices-item')) {
    if(e.target.classList.contains('prices-item_unactive')) {
      closeAllAccordions();
      openAccordion(e.target.firstElementChild)
    } else if (e.target.classList.contains('prices-item_active')) {
      closeAccordion(e.target.firstElementChild);
    }
  }
})

const openAccordion = (arrow) => {
  arrow.classList.add('price-arrow_active');
  arrow.classList.remove('price-arrow_unactive');
  arrow.parentElement.classList.add('prices-item_active');
  arrow.parentElement.classList.remove('prices-item_unactive');
  arrow.parentElement.nextElementSibling.classList.add('accordion_active');
  arrow.parentElement.nextElementSibling.classList.remove('accordion_unactive');
}

const closeAccordion = (arrow) => {
  arrow.classList.add('price-arrow_unactive');
  arrow.classList.remove('price-arrow_active');
  arrow.parentElement.classList.add('prices-item_unactive');
  arrow.parentElement.classList.remove('prices-item_active');
  arrow.parentElement.nextElementSibling.classList.add('accordion_unactive');
  arrow.parentElement.nextElementSibling.classList.remove('accordion_active');
}

const closeAllAccordions = () => {
  document.querySelectorAll('.price-arrow').forEach(arrow => {
    closeAccordion(arrow);
  })
}