const resetBtn = document.querySelector(".reset-btn");
const inputs = document.querySelectorAll("input");

const getData = () => {
    inputs.forEach(input => {
        input.onkeyup = function () {
            if (this.value == "") {
                resetInputs()
                return;
            }
            const meter = eval(this.dataset.converttometer.replace("value", this.value))
            displayData(meter,this)
        }
    })
}
getData()


const displayData = (meter,input) => {

    inputs.forEach(item => {
        const equation = eval(item.dataset.convertfrommeter.replace("value", meter))
        if (input != item) {
            item.value = equation;
        }
    })

}

const resetInputs = () => {
    inputs.forEach(input => {
        input.value = ''
    })
}


resetBtn.addEventListener("click", resetInputs)






