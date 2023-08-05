const getData = (container) => {
    const inputs = container.querySelectorAll("input");

    inputs.forEach(input => {
        input.onkeyup = function() {
           let meter = this.id == "kelometer" ? parseFloat(this.value * 1000) : this.id == "centi" ? parseFloat(this.value / 100) : this.id == "inch" ? parseFloat(this.value / 39.37) : this.id == "feet" ? parseFloat(this.value / 3.281) : this.id == "yards" ? parseFloat(this.value / 1.094) : this.id == "mile" ? parseFloat(this.value * 1609 ): parseFloat(this.value)
           this.value = parseFloat(this.value) || ''
           displayData(meter , inputs)
        }
    })
}


const createElements = () => {
    const container = document.querySelector(".container");
    let html = `
    <div>
            <label for="meter">Enter length in Meters here</label>
            <input type="number" placeholder="Enter length in Meters here" id="meter">
        </div>

        <div>
            <label for="kelometer">Enter length in Kilometers here</label>
            <input type="number" placeholder="Enter length in Kilometers here" id="kelometer">
        </div>

        <div>
            <label for="centi">Enter length in Centimeters here</label>
            <input type="number" placeholder="Enter length in Centimeters here" id="centi">
        </div>

        <div>
            <label for="inch">Enter length in Inches here</label>
            <input type="number" placeholder="Enter length in Inches here" id="inch">
        </div>

        <div>
            <label for="feet">Enter length in Feets here</label>
            <input type="number" placeholder="Enter length in Feets here" id="feet">
        </div>

        <div>
            <label for="yards">Enter length in Yards here</label>
            <input type="number" placeholder="Enter length in Yards here" id="yards">
        </div>

        <div>
            <label for="mile">Enter length in Miles here</label>
            <input type="number" placeholder="Enter length in Miles here" id="mile">
        </div>

        <div class="reset-btn">
            <button>Reset</button>
        </div>
    `

    container.innerHTML += html
    return container
}



const displayData = (meter , inputs) => {
    let array = [meter, meter / 1000, meter * 100, meter * 39.37, meter * 3.281, meter * 1.094, meter / 1609]
    for(let i =0;i<inputs.length ;i++) {
        inputs[i].value = array[i];
    }

}

const resetInputs = () => {
  const inputs = document.querySelectorAll("input")
  inputs.forEach(input =>{
    input.value = ''
  })
}


const init = ()=>{
   const dataContainer = createElements()
   getData(dataContainer)
   const resetBtn = dataContainer.querySelector(".reset-btn");
   resetBtn.addEventListener("click",resetInputs)
}
init()