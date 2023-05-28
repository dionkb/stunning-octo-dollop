const postComment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#commentBox').value
    const blogpost_id = document.querySelector('#blogPostID').value

    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment, blogpost_id }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // document.location.reload();
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#commentInput').addEventListener('click', postComment);
