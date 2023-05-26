const postComment = async () => {
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ commentInput }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
    };

    document.querySelector('#commentInput').addEventListener('click', postComment);
