async function commentFormHandler(event) {
  event.preventDefault();

  const contents = document.querySelector('textarea[name="comment-body"]').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (contents) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        contents
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to comment. Please try again!");
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
