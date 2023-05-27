const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#titleInput').value.trim();
    const body_text = document.querySelector('#bodyInput').value.trim();

    console.log(title + body_text);

    if (title && body_text) {
        const response = await fetch('/api/blogPosts', {
            method: 'POST',
            body: JSON.stringify({ title, body_text }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert('Post unsuccessful');
        }
    }
};

document.querySelector('#newPostButton').addEventListener('click', newPostHandler);
