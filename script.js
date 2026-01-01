let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
 
let string = "";
let history = [];
let arr = Array.from(buttons);

function updateInput(val){
    input.value = val;
    input.scrollTop = input.scrollHeight;
}

arr.forEach(button => {
    button.addEventListener('click' , (e) => {
        if(e.target.innerHTML == '='){
            let result = eval(string);
            history.push(string + ' = ' + result);
            updateInput(result);
            string = result.toString();
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            updateInput(string);
        }
        
        else if(e.target.innerHTML == 'DEL'){
              string = string.substring(0, string.length - 1);
              updateInput(string);
        }
        else if(e.target.innerHTML == 'HIST'){
            if(string || input.value){
                history.push(input.value || string);
            }
            let histDiv = document.getElementById('history');
            if(histDiv.style.display === 'none' || histDiv.style.display === ''){
                histDiv.style.display = 'block';
                histDiv.innerHTML = history.length ? history.join('<br>') : 'No history';
            } else {
                histDiv.style.display = 'none';
            }
        }
       else{
         string += e.target.innerHTML;
    updateInput(string);      
       }
             
    })
})