var postsData = null;

function fetchPosts() {
  return fetch('/posts.json').then(function (r) {
    return r.json();
  });
}

function renderPosts(tag) {
  var container = document.getElementById('tag-posts');
  if (!tag || !postsData) {
    container.innerHTML = '';
    return;
  }
  var filtered = [];
  for (var i = 0; i < postsData.length; i++) {
    var post = postsData[i];
    if (post.tags && post.tags.indexOf(tag) !== -1) {
      filtered.push(post);
    }
  }
  if (filtered.length === 0) {
    container.innerHTML = '<p>No posts found for tag &ldquo;' + tag + '&rdquo;.</p>';
    return;
  }
  var html = '<ul>';
  for (var j = 0; j < filtered.length; j++) {
    html += '<li><a href="' + filtered[j].url + '">' + filtered[j].title + '</a></li>';
  }
  html += '</ul>';
  container.innerHTML = html;
}

function setSelectedTag(tag) {
  var tags = document.querySelectorAll('.clickable-tag');
  for (var i = 0; i < tags.length; i++) {
    if (tags[i].getAttribute('data-tag') === tag) {
      tags[i].classList.add('selected-tag');
    } else {
      tags[i].classList.remove('selected-tag');
    }
  }
}

function selectTag(tag) {
  setSelectedTag(tag);
  renderPosts(tag);
}

function getTagFromQueryParam() {
  var params = new URLSearchParams(window.location.search);
  return params.get('tag') || null;
}

function updateUrl(tag) {
  var base = window.location.pathname;
  var url = tag ? base + '?tag=' + encodeURIComponent(tag) : base;
  history.pushState({ tag: tag }, '', url);
}

function onDOMContentLoaded() {
  fetchPosts().then(function (data) {
    postsData = data;
    const tagFromQuery = getTagFromQueryParam();
    if (tagFromQuery) {
      selectTag(tagFromQuery);
    }
  });

  const tags = document.querySelectorAll('.clickable-tag');
  for (var i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', function () {
      const tag = this.getAttribute('data-tag');
      if (tag === getTagFromQueryParam()) {
        selectTag(null);
        updateUrl(null);
      } else {
        selectTag(tag);
        updateUrl(tag);
      }
    });
  }

  window.addEventListener('popstate', function () {
    var tag = getTagFromQueryParam();
    selectTag(tag);
  });
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
