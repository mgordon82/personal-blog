const blogBlock = document.getElementById('blogPosts');
let posts = [];

console.log('block', blogBlock);

function buildBlogView() {
  if (posts.length > 0) {
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];

      blogBlock.innerHTML += `<section><h2>${post.title}</h2><p>${post.content}</p><p class='posted-by'>Posted by ${post.name}</p></section>`;
    }
  } else {
    blogBlock.innerHTML +=
      '<section><p>There are no posts to display</p></section>';
  }
}

function init() {
  // Get posts from localStorage
  const postsArray = JSON.parse(localStorage.getItem('posts')) || [];

  // Check if the posts exists and add them to the postsArray if there
  if (postsArray !== null) {
    posts = postsArray;
  }

  // call the function to build the blog view
  buildBlogView();
}

init();

console.log('here are some blog posts', posts);
