export function formModal() {
  let modal = document.querySelector(".contactForm");
  let triggers = document.querySelectorAll(".form-trigger");
  let closeButton = document.querySelector(".contactForm__dots");

  function toggleModal() {
    modal.classList.toggle("show-modal");
    document.body.classList.toggle("no-scroll");
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }

  // for (let i = 0; i < trigger.length; i++) {
  //   trigger[i].addEventListener("click", toggleModal);
  // }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", toggleModal);
  });

  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);
}

export function initModal(modalSelectors) {
  const modal = document.querySelector(modalSelectors.modal);
  if (!modal) {
    console.error("Modal element is not found!");
    return;
  }
  const modalImg = modalSelectors.modalImg
    ? modal.querySelector(modalSelectors.modalImg)
    : null;
  const modalTitle = modalSelectors.modalTitle
    ? modal.querySelector(modalSelectors.modalTitle)
    : null;
  const modalDescription = modalSelectors.modalDescription
    ? modal.querySelector(modalSelectors.modalDescription)
    : null;

  const body = document.body;

  function openModal(modalId, titleImg, descriptionImg) {
    const slideImg = document.querySelector(`[data-modal="${modalId}"] img`);

    modalImg.src = slideImg.src;
    modalTitle.textContent = titleImg;
    modalDescription.textContent = descriptionImg;
    modal.classList.add("show-modal");
    // document.body.classList.toggle("no-scroll");
    body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("show-modal");
    // modalImg.src = "";
    // modalTitle.textContent = "";
    // modalDescription.textContent = "";
    body.style.overflow = "auto";
  }
  function modalSwiper() {
    const slideTriggers = document.querySelectorAll(".trigger");

    slideTriggers.forEach((slideTrigger) => {
      slideTrigger.addEventListener("click", () => {
        const modalId = slideTrigger.getAttribute("data-modal");
        const titleImg = slideTrigger.getAttribute("data-title");
        const descriptionImg = slideTrigger.getAttribute("data-description");
        openModal(modalId, titleImg, descriptionImg);
      });
    });

    const closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", closeModal);

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  modalSwiper();
}
