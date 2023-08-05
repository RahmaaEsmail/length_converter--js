const resetBtn = document.querySelector(".reset-btn");

const getData = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.onkeyup = function() {
           let  meter = this.id == "kelometer" ? parseFloat(this.value * 1000) : this.id == "centi" ? parseFloat(this.value / 100) : this.id == "inch" ? parseFloat(this.value / 39.37) : this.id == "feet" ? parseFloat(this.value / 3.281) : this.id == "yards" ? parseFloat(this.value / 1.094) : this.id == "mile" ? parseFloat(this.value * 1609 ): parseFloat(this.value)
           this.value = parseFloat(this.value)
           displayData(meter)
        }

    })
}
getData()




const displayData = (meter) => {
    document.getElementById("meter").value = meter
    document.getElementById("kelometer").value = meter / 1000
    document.getElementById("centi").value = meter * 100
    document.getElementById("inch").value = meter * 39.37
    document.getElementById("feet").value = meter * 3.281
    document.getElementById("yards").value = meter * 1.094
    document.getElementById("mile").value = meter / 1609
}

const resetInputs = () => {
  const inputs = document.querySelectorAll("input")
  inputs.forEach(input =>{
    input.value = ''
  })
}

resetBtn.addEventListener("click",resetInputs)