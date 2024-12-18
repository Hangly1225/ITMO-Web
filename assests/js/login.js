// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 100,
    once: true,
});

// Function to show success alert on login
function showLoginSuccess() {
    Swal.fire({
        title: 'Successful login!',
        text: 'You have successfully logged in!',
        icon: 'success',
        confirmButtonText: 'ОК',
        background: '#f0f0f0',
        customClass: {
            confirmButton: 'btn btn--primary'
        }
    });
}

// Function to show error alert on login failure
function showLoginError() {
    Swal.fire({
        title: 'Error!',
        text: 'Incorrect login or password!',
        icon: 'error',
        confirmButtonText: 'Try again',
        background: '#f9d6d5',
        customClass: {
            confirmButton: 'btn btn--primary'
        }
    });
}

// Event listener for the sign-in button
document.getElementById('sign-in-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Check if email and password fields are filled
    if (!email || !password) {
        Swal.fire({
            title: 'Input Error!',
            text: 'Please enter both email and password!',
            icon: 'warning',
            confirmButtonText: 'OK',
            background: '#f0f0f0',
            customClass: {
                confirmButton: 'btn btn--primary'
            }
        });
        return; // Exit the function if inputs are invalid
    }

    // Fetch saved email and password from localStorage
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');

    // Verify login credentials
    if (email === savedEmail && password === savedPassword) {
        showLoginSuccess();
    } else {
        showLoginError();
    }
});
