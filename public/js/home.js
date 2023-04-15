const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#post-name').value.trim();
    const description = document.querySelector('#post-content').value.trim();
  
    if (name && description) {
      console.log("name = ", name, "description = ", description);
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert("ok");
        document.location.replace('/');
      } else {
        alert('unable to create post');
      }
    }
  };
  
  // const delButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/projects/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert('Failed to delete project');
  //     }
  //   }
  // };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);
  