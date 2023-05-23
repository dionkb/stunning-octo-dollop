const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#emailInput').value.trim();
    const password = document.querySelector('#passInput').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace('/');
        console.log("You are logged in!");
        } else {
        alert('Failed to log in.');
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#usernameSignUp').value.trim();
    const email = document.querySelector('#emailSignUp').value.trim();
    const password = document.querySelector('#passSignUp').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace('/test');
        } else {
        alert('Failed to sign up.');
        }
    }
};

document
    .querySelector('.loginForm')
    .addEventListener('submit', loginFormHandler);

// document
//     .querySelector('.signUpForm')
//     .addEventListener('submit', signupFormHandler);
