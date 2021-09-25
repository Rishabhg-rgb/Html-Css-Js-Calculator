let screen = document.getElementById('screen')
buttons = document.querySelectorAll('button')
let screenValue = ''


for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText)
        if (buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText
            screen.value = screenValue
        }
        else if(buttonText == '+'){
            buttonText = '+'
            screenValue += buttonText
            screen.value = buttonText
        }
        else if(buttonText == '-'){
            buttonText = '-'
            screenValue += buttonText
            screen.value = buttonText 
        }
        else if(buttonText == 'C'){
            screenValue = ''
            screen.value = screenValue
        }
        else if(buttonText == '/'){
            buttonText = '/'
            screenValue += buttonText
            screen.value = buttonText
        }
        else if(buttonText == '='){ 
            screen.value = eval(screen.value)
        }
        else {
            screenValue += buttonText
            screen.value = screenValue 
        }
        
    })
}












