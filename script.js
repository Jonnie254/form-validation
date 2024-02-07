document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('.mainForm');
    const name= document.getElementById('.name');
    const email= document.getElementById('.email');
    const message= document.getElementById('.message');
    const phone= document.getElementById('.phone');
    const password= document.getElementById('.password');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        if(checkInputs()){
            showModal();
        }
    });
    // validation for name field
    name.addEventListener('input', () =>{
        validateField(name, name.value.trim() !== '', 'Name cannot be blank');
    });
    // validation for email field
    email.addEventListener('input', () =>{
        validateField(email, isEmail(email.value.trim()), 'Email is not valid');
    });
    //validation for phone field
    phone.addEventListener('input', () =>{
        validateField(phone, isPhone(phone.value.trim()), 'Phone number is not valid');
    });
    //validation for password field
    password.addEventListener('input', () =>{
        validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters');

    });




});