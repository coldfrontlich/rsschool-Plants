window.onload = function() {
  //buttons in section service
  addButtonsClickHandler();
}

const addButtonsClickHandler = () => {
  document.querySelector('.service-buttons').addEventListener('click', (e) => {
    if (e.target.classList.contains('button-service')) {
      let clickedButton = e.target;
      selectClickedButton(clickedButton);
      clickedButtonsCount = document.querySelectorAll('.button-service_selected').length;
      if (clickedButtonsCount > 2) {
        removeSelectedButtons();
      }
      if (clickedButtonsCount === 0 || clickedButtonsCount > 2) {
        removeSelectedServices();
      }
      if (clickedButtonsCount === 1) {
        filterServicesBySelectedButton(clickedButton);
      }
      if (clickedButtonsCount === 2) {
        filterTwoServicesBySelectedButton(clickedButton);
      }
      
    }
  })
}

const removeSelectedButtons = () => {
  let buttons = document.querySelectorAll('.service-buttons .button-service');
  buttons.forEach(button => {
    button.classList.remove('button-service_selected');
    button.classList.add('button-service_unselected');
  })
}

const removeSelectedServices = () => {
  let services = document.querySelectorAll('.layout-3-column .services');
  services.forEach(service => {
    service.classList.remove('services_selected');
    service.classList.add('services_unselected');
  })
}


const selectClickedButton = (clickedButton) => {
  if (clickedButton.classList.contains('button-service_unselected')) {
    clickedButton.classList.add('button-service_selected');
    clickedButton.classList.remove('button-service_unselected');
  } else {
    clickedButton.classList.add('button-service_unselected');
    clickedButton.classList.remove('button-service_selected');
  }
}

const filterServicesBySelectedButton = (selectedButton) => {
  let services = document.querySelectorAll('.layout-3-column .services');
  if (selectedButton.classList.contains('button-service_selected')){
    services.forEach(service => {
      service.classList.add('services_selected');
      service.querySelectorAll('.service__title').forEach(title => {
        if (title.innerText.slice(0, 1) === selectedButton.innerText.slice(0, 1)) {
          service.classList.remove('services_selected');
          service.classList.add('services_unselected');
        }
      });
    })
  } else {
    services.forEach(service => {
      service.querySelectorAll('.service__title').forEach(title => {
        if (title.innerText.slice(0, 1) === selectedButton.innerText.slice(0, 1)) {
          service.classList.add('services_selected');
          service.classList.remove('services_unselected');
        }
      });
    })
  }
}

const filterTwoServicesBySelectedButton = (selectedButton) => {
  let services = document.querySelectorAll('.layout-3-column .services');
  services.forEach(service => {
    service.querySelectorAll('.service__title').forEach(title => {
      if (title.innerText.slice(0, 1) === selectedButton.innerText.slice(0, 1)) {
        service.classList.remove('services_selected');
        service.classList.add('services_unselected');
      }
    });
  })
}
