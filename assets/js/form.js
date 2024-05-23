const blogForm = document.getElementById('blogForm');
const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const errorElement = document.createElement('p');
const errorText = document.createTextNode('*All fields are required');

const postsArray = JSON.parse(localStorage.getItem('posts')) || [];

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  errorElement.remove();
  if (
    nameInput.value !== '' &&
    titleInput.value !== '' &&
    contentInput !== ''
  ) {
    // create blog post from form
    const post = {
      name: nameInput.value.trim(),
      title: titleInput.value.trim(),
      content: contentInput.value.trim(),
    };

    postsArray.push(post);

    // add the post to local storage
    localStorage.setItem('posts', JSON.stringify(postsArray));

    // navigate to blog page after submit
    window.location.href = '/blog.html';
  } else {
    errorElement.appendChild(errorText);
    blogForm.insertBefore(errorElement, submitButton);
    return;
  }
});
