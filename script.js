const resetBtn = document.querySelector(".reset-btn");

const getData = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("keyup", function () {
            let meter = +this.value;
            if (this.id == "kelometer") {
                meter = +this.value * 1000
                document.getElementById("kelometer").value = this.value
            }

            else if (this.id == "centi") {
                meter = +this.value / 100;
                document.getElementById("centi").value = +this.value;
            }

            else if (this.id == "inch") {
                meter = +this.value / 39.37;
                document.getElementById("inch").value = +this.value
            }

            else if (this.id == "feet") {
                meter = +this.value / 3.281
                document.getElementById("feet").value = +this.value
            }

            else if (this.id == "yards") {
                meter = +this.value / 1.094
                document.getElementById("yards").value = +this.value
            }

            else if (this.id == "mile") {
                meter = +this.value * 1609
                document.getElementById("mile").value = +this.value
            }
            displayData(meter)
        })

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