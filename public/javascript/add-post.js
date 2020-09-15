// Not working need to fix - identifying category_id to be NULL
async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const description = document.querySelector('input[name="post-description"]').value;
    const salary = document.querySelector('input[name="post-salary"]').value;
    const category = document.querySelector('input[type="post-category"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
          salary,
          category
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
    
    document.querySelector('#listing-form').addEventListener('submit', newFormHandler);




{/* <div>
      <label for="post-title">Title</label>
      <input type="text" id="post-title" name="post-title" />
    </div> */}