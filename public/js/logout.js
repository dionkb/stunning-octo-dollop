const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        console.log("WTF?");
        alert(response.statusText);
    }
    };

    document.querySelector('#logoutLink').addEventListener('click', logout);
