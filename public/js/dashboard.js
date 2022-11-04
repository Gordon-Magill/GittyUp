const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#snippet-name').value.trim();
    const needed_funding = document.querySelector('#snippet-funding').value.trim();
    const description = document.querySelector('#snippet-desc').value.trim();

    if (name && description) {
      const response = await fetch(`/api/snippets`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create snippet');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/snippets/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete snippet');
      }
    }
  };

  document
    .querySelector('.new-snippet-form')
    .addEventListener('submit', newFormHandler);

  document
    .querySelector('.snippet-list')
    .addEventListener('click', delButtonHandler);
