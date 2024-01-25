const convertButton = document.querySelector(".convert-button")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dollarValue = 4.92

    const conversionResult = inputCurrencyValue / dollarValue

    const realValueResult = document.querySelector("#real-value").textContent = inputCurrencyValue

    const dollarValueResult = document.querySelector("#dollar-value").textContent = conversionResult

}


convertButton.addEventListener("click", convertValues)