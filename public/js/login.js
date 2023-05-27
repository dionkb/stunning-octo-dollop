// COMPLETE:
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
        console.log("You are logged in!");
        document.location.replace('/');
        } else {
        alert('Failed to log in.');
        }
    }
};

function redirectCreateAccount() {
    document.location.replace('/createAccount');
}

document.querySelector('.loginForm').addEventListener('submit', loginFormHandler);

document.querySelector('#createAccountBtn').addEventListener('click', redirectCreateAccount);