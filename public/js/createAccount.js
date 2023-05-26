// COMPLETE: ?
const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#usernameSignUp').value.trim();
    const email = document.querySelector('#emailSignUp').value.trim();
    const password = document.querySelector('#passSignUp').value.trim();

    console.log(username + email + password);

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace('/');
        } else {
        alert('Failed to sign up.');
        }
    }
};

document.querySelector('.signUpForm').addEventListener('submit', signupFormHandler);
