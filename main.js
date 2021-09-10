let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
       if(buttonText == 'x' && screen.value == ''){
            screenValue = '0';
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        if(buttonText == 'x' && screen.value != null){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
           screenValue = '';
           screen.value = eval(screen.value);
        }
        else {
            screenValue +=buttonText;
            screen.value = screenValue;
        }
})
}
