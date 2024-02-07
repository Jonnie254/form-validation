document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mainForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        if(checkInputs()){
            showModal();
        }
    });

    // validation for name field
    nameInput.addEventListener('input', () =>{
        validateField(nameInput, nameInput.value.trim() !== '', 'Name cannot be blank');
    });

    // validation for email field
    emailInput.addEventListener('input', () =>{
        validateField(emailInput, isEmail(emailInput.value.trim()), 'Email is not valid');
    });

    // validation for phone field
    phoneInput.addEventListener('input', () =>{
        validateField(phoneInput, isPhone(phoneInput.value.trim()), 'Phone number is not valid');
    });

    // validation for password field
    passwordInput.addEventListener('input', () =>{
        validateField(passwordInput, passwordInput.value.trim().length >= 8, 'Password must be at least 8 characters');
    });

    // validation for message field
    messageInput.addEventListener('input', () =>{
        validateField(messageInput, messageInput.value.trim() !== '', 'Message cannot be blank');
    });

    // function to check if the input is valid
    function checkInputs(){
        let isValid = true;
        validateField(nameInput, nameInput.value.trim() !== '', 'Name cannot be blank');
        validateField(emailInput, isEmail(emailInput.value.trim()), 'Email is not valid');
        validateField(phoneInput, isPhone(phoneInput.value.trim()), 'Phone number is not valid');
        validateField(passwordInput, passwordInput.value.trim().length >= 8, 'Password must be at least 8 characters');
        validateField(messageInput, messageInput.value.trim() !== '', 'Message cannot be blank');

        document.querySelectorAll('.form-control').forEach((control) => {
            if(control.classList.contains('invalid')){
                isValid = false;
            }
        });
        return isValid;
    }

    function validateField(input, condition, errorMessage){
        if(condition){
            setSuccess(input);
        } else {
            setError(input, errorMessage);
        }
    }
    function setError(input , message){
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control error';
        icon.className = 'icon fas fa-times-circle';
        input.placeholder = message;
    }
    function setSuccess(input){
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control success';
        icon.className = 'icon fas fa-check-circle';
        input.placeholder = '';
    }
    function isEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    function isPhone(phone){
        return /^\d{10}$/.test(phone);
    }
    function showModal(){
        const modal = document.getElementById('successModal');
        modal.style.display = 'block';

        const closeBtn = document.querySelector('.close-button');
       
    }
});
