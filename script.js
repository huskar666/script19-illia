const openButton = document.querySelector('[data-action="open-modal"]');
const closeButton = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.js-backdrop');

function openModal() {
    document.body.classList.add('show-modal');
}
function closeModal() {
    document.body.classList.remove('show-modal');
}
function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
}
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
backdrop.addEventListener('click',onBackdropClick)


const radios = document.querySelectorAll('input[name="color"]');

radios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.body.style.backgroundColor = event.target.value;
        }
    });
});


const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const requiredLength = parseInt(validationInput.dataset.length, 10);
  
  if (validationInput.value.length === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});


const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
});
