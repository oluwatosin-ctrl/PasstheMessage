//var button = document.getElementById('button')
//var input = document.getElementById('inputarea')

//button.addEventListener('click',function(){

    //input.innerHTML = "This is my text"
//})






//document.getElementById('inputarea').innerHTML = "This is my text"
//$('#text').html("This is now my text");
(function() {
//Select the input element
const form = document.querySelector('#message-form')
//Set up Submit Button
form.addEventListener('submit', function(e){
    // prevent the form's default submission action
    e.preventDefault()
    //Get user's input from from
    const message = document.querySelector('#inputarea')
    const feedback = document.querySelector('.feedback')
    const messageContent = document.querySelector('.message-content')

    if (inputarea.value === ''){
        feedback.classList.add('show')
        setTimeout(function(){
        feedback.classList.remove('show')
        }, 2000)
    } else {
        //Change message content and clear the message input
        messageContent.textContent = inputarea.value
        inputarea.value = ''
    }
})
})()