// const input = document.querySelector('input[name="firstName"]');

// input.addEventListener('invalid', function (event) {
//   if (event.target.validity.valueMissing) {
//     event.target.setCustomValidity('Please tell us how we should address you.');
//   }
// })

// input.addEventListener('change', function (event) {
//   event.target.setCustomValidity('');
// })

document.querySelectorAll('.input-container[data-error] input').forEach(inpEl => {
    inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'));
})