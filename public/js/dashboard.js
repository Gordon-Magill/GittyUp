const newFormHandler = async (event) => {
    event.preventDefault();

  const name = document.querySelector('#submission-name').value.trim();
  const description = document.querySelector('#submission-desc').value.trim();
  const content = document.querySelector('#submission-content').value.trim();
  const language = document.querySelector('#submission-language').value.trim();


    if (name && content && description && language) {
      const response = await fetch(`/api/submission/create`, {
        method: 'POST',
        body: JSON.stringify({ name, content, description, language }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create submission');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/submissions/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete submission');
      }
    }
  };

  document
    .querySelector('#form-submit')
    .addEventListener('click', newFormHandler);

  document
    .querySelector('.submission-list')
    .addEventListener('click', delButtonHandler);
