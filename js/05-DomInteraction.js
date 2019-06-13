const classArray = ['padded', 'bigger', 'borderAdd'];
const selClasses = document.querySelector('select[name=classes]');
const selElement = document.querySelector('div');
const seInput = document.querySelector('input[name=outputText]');
const seBg = document.querySelector('input[name=bg]');
const seTxt = document.querySelector('input[name=txt]');
const btn = document.querySelector('.btn');
btn.addEventListener('click', function(event) {
  selElement.textContent = seInput.value;
  selElement.style.backgroundColor = seBg.value;
  selElement.style.color = seTxt.value;
  selElement.classList.toggle(selClasses.value);
  console.log(selClasses.value);
});
document.addEventListener('DOMContentLoaded', function() {
  classArray.forEach(function(item) {
    let opt = document.createElement('option');
    opt.value = item;
    opt.innerHTML = item;
    selClasses.appendChild(opt);
    console.log(opt);
  });
});
