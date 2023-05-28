const editPostHandler = async (event) => {
    event.preventDefault();

    const id = document.querySelector('#blogPostID').value.trim();
    const title = document.querySelector('#titleInput').value.trim();
    const body_text = document.querySelector('#bodyInput').value.trim();

    if (id && title && body_text) {
        const response = await fetch('/dashboard/editPost/:id', {
            method: 'PUT',
            body: JSON.stringify({ id, title, body_text }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Edit unsuccessful');
        }
    }
};

const deletePostHandler = async (event) => {
    event.preventDefault();

    const id = document.querySelector('#blogPostID').value.trim();

    if (id) {
        const response = await fetch('/dashboard/editPost/:id', {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Delete unsuccessful');
        }
    }
};

document.querySelector('#editPostButton').addEventListener('click', editPostHandler);
document.querySelector('#deletePostButton').addEventListener('click', deletePostHandler);
