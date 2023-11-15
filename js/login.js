document.getElementById('login-button').addEventListener('click', function(){
    const emailFild = document.getElementById('email-fild');
    const email = emailFild.value;

    const passwordFild = document.getElementById('password-fild');
    const password = passwordFild.value;
    emailFild.value = '';
    passwordFild.value = '';
    if(email === 'harun@gmail.com' && password === 'password678'){
        window.location.href = "account.html";
    }
    else{
        alert('Please enter valid email and password');
    }

})