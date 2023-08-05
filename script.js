const resetBtn = document.querySelector(".reset-btn");

const getData = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.onkeyup = function () {
            if (this.value == "") {
                inputs.forEach(input => input.value = "")
                return;
            }
            displayData(inputs, this)
        }
    })
}
getData()


const displayData = (inputs, input) => {
    const arrayOfUnitName = Object.keys(input.dataset);
    const arrayOfConvertResult = [];
    const objOfDataSet = input.dataset;

    for (let i = 0; i < arrayOfUnitName.length; i++) {
        arrayOfConvertResult.push(eval(objOfDataSet[arrayOfUnitName[i]].replace("value", input.value)))
    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = arrayOfConvertResult[i];
    }

}

const resetInputs = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = ''
    })
}


resetBtn.addEventListener("click", resetInputs)






