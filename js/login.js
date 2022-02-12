document.getElementById('login-submit').addEventListener('click', function () {
    // get email
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;

    // get password
    const passwordFeild = document.getElementById('user-password');
    const userPass = passwordFeild.value;

    // check the email & password
    if (userEmail == 'sontan@gmail.com' && userPass == 'secret') {
        console.log('valid user');
        window.location.href = 'banking.html';
    }

});