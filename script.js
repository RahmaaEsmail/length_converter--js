const resetBtn = document.querySelector(".reset-btn");
const inputs = document.querySelectorAll("input");

const getData = () => {
    inputs.forEach(input => {
        input.onkeyup = function () {
            if (this.value == "") {
                inputs.forEach(input => input.value = "")
                return;
            }
            const meter = eval(this.dataset.converttometer.replace("value", this.value))
            displayData(meter)
        }
    })
}
getData()


const displayData = (meter) => {
    for (let i = 0; i < inputs.length; i++) {
        const equation = eval(inputs[i].dataset.convertfrommeter.replace("value", meter))
        inputs[i].value = equation;
    }
}

const resetInputs = () => {
    inputs.forEach(input => {
        input.value = ''
    })
}


resetBtn.addEventListener("click", resetInputs)






