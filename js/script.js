const contactsButton = document.querySelector(".contacts-button");
const modalFeedback = document.querySelector(".modal-feedback");
const modalFeedbackClose = modalFeedback.querySelector(".modal-close");
const mapLink = document.querySelector(".map-link");
const modalMap = document.querySelector(".modal-map");
const modalMapClose = modalMap.querySelector(".modal-close");
const feedbackForm = modalFeedback.querySelector(".feedback-form");
const feedbackName = modalFeedback.querySelector(".feedback-name");
const feedbackEmail = modalFeedback.querySelector(".feedback-email");
const feedbackText = modalFeedback.querySelector(".feedback-text");
const servicesTabDelivery = document.querySelector(".services-tab-delivery");
const servicesTabGuarantee = document.querySelector(".services-tab-guarantee");
const servicesTabCredit = document.querySelector(".services-tab-credit");
const servicesDelivery = document.querySelector(".services-delivery");
const servicesGuarantee = document.querySelector(".services-guarantee");
const servicesCredit = document.querySelector(".services-credit");

let isStorageSupport = true;

try {
} catch (err) {
  isStorageSupport = false;
}

servicesTabDelivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  servicesTabDelivery.classList.add("services-tab-item-selected");
  servicesDelivery.classList.add("services-item-selected");
  servicesTabGuarantee.classList.remove("services-tab-item-selected");
  servicesTabCredit.classList.remove("services-tab-item-selected");
  servicesGuarantee.classList.remove("services-item-selected");
  servicesCredit.classList.remove("services-item-selected");
});

servicesTabGuarantee.addEventListener("click", function (evt) {
  evt.preventDefault();
  servicesTabGuarantee.classList.add("services-tab-item-selected");
  servicesGuarantee.classList.add("services-item-selected");
  servicesTabDelivery.classList.remove("services-tab-item-selected");
  servicesTabCredit.classList.remove("services-tab-item-selected");
  servicesDelivery.classList.remove("services-item-selected");
  servicesCredit.classList.remove("services-item-selected");
});

servicesTabCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  servicesTabCredit.classList.add("services-tab-item-selected");
  servicesCredit.classList.add("services-item-selected");
  servicesTabGuarantee.classList.remove("services-tab-item-selected");
  servicesTabDelivery.classList.remove("services-tab-item-selected");
  servicesGuarantee.classList.remove("services-item-selected");
  servicesDelivery.classList.remove("services-item-selected");
});

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");
  if (isStorageSupport) {
    feedbackName.value = localStorage.getItem("Name");
    feedbackEmail.value = localStorage.getItem("Email");
  }
  if (feedbackName.value && feedbackEmail.value) {
    feedbackText.focus();
  } else {
    if (feedbackName.value) {
      feedbackEmail.focus();
    } else {
      feedbackName.focus();
    }
  }
});

modalFeedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show");
  if (feedbackForm.classList.contains("modal-error")) {
    feedbackForm.classList.remove("modal-error");
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

modalMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (feedbackForm.classList.contains("modal-error")) {
    feedbackForm.classList.remove("modal-error");
  }
  if (!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    feedbackForm.classList.add("modal-error");
  }
  if (feedbackName.value) {
    if (isStorageSupport) {
      localStorage.setItem("Name", feedbackName.value);
    }
  }
  if (feedbackEmail.value) {
    if (isStorageSupport) {
      localStorage.setItem("Email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show");
    }
    if (feedbackForm.classList.contains("modal-error")) {
      feedbackForm.classList.remove("modal-error");
    }
  }
});
