const postId = document.querySelector('input[name="post-id"]').value;

async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const description = document.querySelector('input[name="post-description"]').value;
  const salary = document.querySelector('input[name="post-salary"]').value;
  const category_id = document.querySelector('input[name="post-category"]').value;

  const response = await fetch(`/api/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      description,
      salary,
      category_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

async function deleteFormHandler(event) {
  event.preventDefault();

  const response = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#listing-form').addEventListener('submit', editFormHandler);
document.querySelector('#delete-button').addEventListener('click', deleteFormHandler);
