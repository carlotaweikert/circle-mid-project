const fullName=document.querySelector('#fname');
const submitButton=document.querySelector('.submit-button');
const email=document.querySelector('#email-contact');
const phone=document.querySelector('#phone'); 
const message=document.querySelector('#message');

submitButton.addEventListener('click',()=>{
    
    if (fullName.value.length===0) {
        alert("You didn't write anything!")
    } else if (fullName.value==='Ironhack') {
        alert("This already exist!")
    }

    let emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!emailFilter.test(email.value)) {
        alert('Please provide a valid email address');
            email.focus;
        return false;
    }

    if (phone.value.length>9) {
        alert("That number is too long!")
    } else if ((phone.value.length<9)) {
        alert ("That number is too short!"); 
    }

    if (message.value.length>201) {
        alert("Remember, max lenght is 200 characters!");
    } else if (message.value.length===0) {
        alert("You didn't write anything!")
    }

})
