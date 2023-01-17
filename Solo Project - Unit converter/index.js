let meterFeet = document.getElementById("length")
let literGallon = document.getElementById("volume")
let kiloPounds = document.getElementById("mass")
let inputed = document.getElementById("input")
let covertBtn= document.getElementById("convert-btn")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

covertBtn.addEventListener("click", function(){
    let baseValue = inputed.value
    meterFeet.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(2)} feet || ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(2)} meter`
    literGallon.textContent = `${baseValue} liter = ${(baseValue * literToGallon).toFixed(2)} gallon || ${baseValue} gallon = ${(baseValue / literToGallon).toFixed(2)} liter`
    kiloPounds.textContent = `${baseValue} kilo = ${(baseValue * kiloToPound).toFixed(2)} pound || ${baseValue} pound = ${(baseValue / kiloToPound).toFixed(2)} kilo`
})
