let countAdult = 0
let countSenior = 0
const price = document.getElementById('price')

document.querySelectorAll('.counter__btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const counter = this.closest('.counter');
      const valueElement = counter.querySelector('.counter__value');
      let value = parseInt(valueElement.textContent);
      
      if (this.classList.contains('counter__plus')) {
        value++;
      } else if (this.classList.contains('counter__minus') && value > 0) {
        value--;
      }
      if(valueElement.id === 'basicId')
        countAdult = value
      else
        countSenior = value
      price.textContent = countAdult * 120 + countSenior * 100
      valueElement.textContent = value;
    });
  });