const resetBtn = document.querySelector(".reset-btn");

const getData = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.onkeyup = function () {
            if (this.value == "") {
                inputs.forEach(input => input.value = "")
                return;
            }
            const meter = eval(this.dataset.converttometer.replace("value", this.value))
            displayData(meter,inputs)
        }
    })
}
getData()


const displayData = (meter,inputs) => {
    for (let i = 0; i < inputs.length; i++) {
        const equation = eval(inputs[i].dataset.convertfrommeter.replace("value", meter))
        inputs[i].value = equation;
    }
}

const resetInputs = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = ''
    })
}


resetBtn.addEventListener("click", resetInputs)






