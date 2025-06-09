let countAdult = 0;
let countSenior = 0;

document.addEventListener('DOMContentLoaded', function() {
    const priceElements = document.querySelectorAll('[name="price"]');
    const basicCounter = document.querySelectorAll('[id="basicId"]');
    const seniorCounter = document.querySelectorAll('[id="seniorId"]');

    document.querySelectorAll('.counter__btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const counter = this.closest('.counter');
            const valueElement = counter.querySelector('.counter__value');
            let value = parseInt(valueElement.textContent) || 0;

            if (this.classList.contains('counter__plus')) {
                value++;
            } else if (this.classList.contains('counter__minus') && value > 0) {
                value--;
            }

            valueElement.textContent = value;

            console.log(valueElement)

            if (valueElement.id === 'basicId') {
              countAdult = value
              basicCounter.forEach(el => {
                el.textContent= countAdult;
              })
              document.getElementById('basicSaleCountId').textContent = countAdult * 20
            } else if (valueElement.id === 'seniorId') {
                countSenior = value
                seniorCounter.forEach(el => {
                  el.textContent = countSenior;
                })
                document.getElementById('seniorSaleCountId').textContent = countSenior * 10
            }

            const total = countAdult * 20 + countSenior * 10;
            priceElements.forEach(el => {
                el.textContent = total;
            });
        });
    });
});