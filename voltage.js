let voltage = document.getElementById("voltage");
let resitor = document.getElementById("resistor");
let result = document.getElementById("result");
let current = document.getElementById("current");
let voltage_through_resistor = document.getElementById("voltage_through_resistor");
buttons = document.querySelectorAll('button');
let screenValue = '';
// let resitor = '';
// let voltage = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button Text is ', buttonText);
        if (buttonText == 'Reset') {
            screenValue = "";
            voltage.value = screenValue;
            resistor.value = screenValue;
            result.value = screenValue;
            current.value = screenValue;
            voltage_through_resistor.value = screenValue;
        }
        else if (buttonText == 'Calculate') {
            result.value =  resitor.value * current.value / voltage.value;
            voltage_through_resistor.value = voltage.value - result.value;
        }
        else {
            screenValue += buttonText;
            // result.value += buttonText;
        }
    })
}