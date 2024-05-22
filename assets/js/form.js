const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

const postsArray = JSON.parse(localStorage.getItem('posts')) || [];

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

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
});
