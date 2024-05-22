const blogBlock = document.getElementById('blogPosts');

function buildBlogView(posts) {
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

  // call the function to build the blog view
  buildBlogView(postsArray);
}

init();
