const newPostBtn = document.getElementById("")




const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-name').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {
       await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    // if (res.status == 200) {
    //     res.reload('/');
    // }
  };
  
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);