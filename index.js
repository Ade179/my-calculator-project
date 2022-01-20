const numberButtons = document.getElementById('numberBtn')

let buttons = Array.from(document.getElementsByClassName('button'))

const display = document.getElementById('display')


// functions for my logical operators
function add (a,b){
    return a+b
}
function multiply (a,b){
    return a*b
}
function divide (a,b){
    return a/b
}
function substract (a,b) {
    return a-b
}



buttons.map(button =>{
    button.addEventListener('click', (e) =>{
        switch (e.target.innerText){
            case 'C':
                display.innerText = ''; 
                break;
                case '⌫':
                  if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1)
                  }
                  break;
                  case '=':
                    try {
                      display.innerText = eval(display.innerText);
                    } catch {
                      display.innerText = 'Error!'
                    }
                   
                    break;
            default:
                display.innerText += e.target.innerText
               
        }
    })
})





 
  
  


