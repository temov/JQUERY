

$(document).ready(function () {
    let textInput = $('#tekst');
    let colorInput = $('#color');

    let message = $('#messages').first();

    let button = $('#btn').first();

    let colorChoice = ['red', 'green', 'blue'];

    button.on('click', function () {


        for(let i=0; i<colorChoice.length; i++){
                 
            if((textInput.val() !== '') && (colorInput.val() === colorChoice[i])){

                let createH1 = $(`<h1>${textInput.val()}</h1>`);

                createH1.css({'color':`${colorInput.val()}`})
        
                message.append(createH1);
               


            }else if((textInput.val() === '') && (colorInput.val() !== colorChoice[i])){

                message.html('Please enter a valid value for text and color');
               


            }
            
        }
    })


})

