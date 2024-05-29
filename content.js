// URL of the new profile picture
const newProfilePicUrl = 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D';

// Function to replace profile pictures
function replaceProfilePictures() {
  const profilePics = document.querySelectorAll('img');

  profilePics.forEach(pic => {
    // Check if the image element is a profile picture
    if (pic.alt.includes("Profile photo") || pic.className.includes("ivm-view-attr__img--centered")) {
      pic.src = newProfilePicUrl;
    }
  });
}

// Run the function initially
replaceProfilePictures();

// Set up a MutationObserver to monitor changes in the feed and update profile pictures dynamically
const observer = new MutationObserver(replaceProfilePictures);

observer.observe(document.body, {
  childList: true,
  subtree: true
});


// id="ember845" class="ivm-view-attr__img--centered  feed-shared-image-viewer__image evi-image lazy-image ember-view">

// id="ember1089" class="ivm-view-attr__img--centered  feed-shared-image-viewer__image evi-image lazy-image ember-view">