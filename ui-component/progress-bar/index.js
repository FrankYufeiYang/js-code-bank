function progressBar(element, initialValue) {
  const MIN = 0;
  const MAX = 100;

  const progressBarEle = document.createElement('div');
  progressBarEle.className = 'progress-bar';
  // Set attributes for a11y.
  progressBarEle.setAttribute('role', 'progressbar');
  progressBarEle.setAttribute('aria-valuemin', MIN);
  progressBarEle.setAttribute('aria-valuemax', MAX);

  function setValue(value) {
    const clampedValue = Math.min(Math.max(value, MIN), MAX);
    progressBarEle.style.width = `${clampedValue}%`;
    progressBarEle.textContent = `${clampedValue}%`;
    progressBarEle.setAttribute('aria-valuenow', clampedValue);
  }

  element.appendChild(progressBarEle);
  setValue(initialValue)
  return setValue;
}
progressBar(document.querySelector('#progress-25'), 25);
progressBar(document.querySelector('#progress-10'), 10);
progressBar(document.querySelector('#progress-80'), 80);

let setValue = progressBar(document.querySelector('#progress-slider'), 50);
let slider = document.querySelector('#slider');
slider.addEventListener('change',(e)=>setValue(e.target.value));

