async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="editpost-title"]').value.trim();
  const contents = document.querySelector('textarea[name="editpost-content"]').value.trim();
  const id = document.querySelector("input[name='editPostId']").value.trim();
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      contents
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert("Failed to update the post. Please try again!");
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
