let posts = null;  // As JSON

function renderPosts(selectedTagName) {
  /* Clears the #tag-posts element and populates it with posts corresponding to the selected tag. */

  const container = document.getElementById('tag-posts');
  container.replaceChildren();  // Clear contents in tag-posts container

  if (!(selectedTagName && posts)) {
    return;
  }

  const postsMatchingSelectedTag = posts.filter(post => post.tags && post.tags.indexOf(selectedTagName) !== -1);

  if (postsMatchingSelectedTag.length === 0) {
    const noPostsFoundMessage = document.createElement("p");
    noPostsFoundMessage.style.textAlign = "center";
    noPostsFoundMessage.style.fontStyle = "italic";
    noPostsFoundMessage.textContent = `No posts featuring this tag are found.`;
    container.appendChild(noPostsFoundMessage);
    return;
  }

  const bulletedList = document.createElement("ul");
  for (const postMatchingTag of postsMatchingSelectedTag) {
    const listItem = document.createElement("li");

    linkInListItem = document.createElement("a");
    linkInListItem.href = postMatchingTag.url;
    linkInListItem.textContent = postMatchingTag.title;

    listItem.appendChild(linkInListItem);

    bulletedList.append(listItem);
  }

  container.appendChild(bulletedList);
}

function selectTag(selectedTagName) {
  /*
    Selects the tag corresponding to the given name.
    Adds the .selected-tag class to that tag element and updates the list of posts accordingly.
  */

  const tags = document.querySelectorAll('.clickable-tag');
  for (const tag of tags) {
    if (tag.getAttribute('data-tag-name') === selectedTagName) {
      tag.classList.add('selected-tag');
    } else {
      tag.classList.remove('selected-tag');
    }
  }

  renderPosts(selectedTagName);
}

function getTagNameFromQueryParameters() {
  /* Returns the tag name specified by the query parameter 'tag'. If there is no such query parameter, returns null. */

  const parameters = new URLSearchParams(window.location.search);
  return parameters.get('tag') || null;
}

function updateUrl(tagName) {
  /* Updates the query parameter 'tag' with the value tagName. */

  const base = window.location.pathname;
  const url = base + (tagName ? `?tag=${encodeURIComponent(tagName)}` : '');
  history.pushState({ tag: tagName }, '', url);
}

function onDOMContentLoaded() {
  /*
    Loads post data from posts.json and caches it in the posts variable.
    Selects the tag specified in the query parameter 'tag', if any.
    Initialises clickable tags.
   */

  fetch('/posts.json')
    .then(r => r.json())
    .then(function (data) {
      posts = data;
      const tagNameFromQueryParameters = getTagNameFromQueryParameters();
      if (tagNameFromQueryParameters) {
        selectTag(tagNameFromQueryParameters);
      }
    });

  const tags = document.querySelectorAll('.clickable-tag');
  for (const tag of tags) {
    tag.addEventListener('click', function () {
      const tagName = this.getAttribute('data-tag-name');
      if (tagName === getTagNameFromQueryParameters()) {
        // Clicking an already selected tag should unselect it
        selectTag(null);
        updateUrl(null);
      } else {
        // Clicking an unselected tag should select it
        selectTag(tagName);
        updateUrl(tagName);
      }
    });
  }

  window.addEventListener('popstate', function () { selectTag(getTagNameFromQueryParameters()); });
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
