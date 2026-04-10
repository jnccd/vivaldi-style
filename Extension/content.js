window.onload = PublicStaticMainStringArgs;
window.onafterupdate = PublicStaticMainStringArgs;
window.ontransitionend = PublicStaticMainStringArgs;
window.onclick = PublicStaticMainStringArgs;
document.addEventListener("click", () => {
  PublicStaticMainStringArgs();
});

var executed = false;

function PublicStaticMainStringArgs() {
  RepeatedEvent();

  if (!executed) {
    executed = true;
  } else {
    return;
  }

  InitEvent();
}

// ------------------------------------------------

// --- Init ---

function InitEvent() {
  console.log("OwO wat dis!");
}

// --- Repeated ---

function RepeatedEvent() {
  // Sync chromium webplayer
  document.querySelectorAll("video").forEach((video) => {
    // Add controls attribute
    video.setAttribute("controls", "true");
    // Fix volume
    video.volume = parseFloat(localStorage.getItem("videoVolume")) || 0.7;
    video.removeEventListener("volumechange", () => StoreVideoVolume(video));
    video.addEventListener("volumechange", () => StoreVideoVolume(video));
  });

  // Fix instagram videos
  if (window.location.hostname === "www.instagram.com") {
    document.querySelectorAll("video").forEach((video) => {
      video.muted = false;

      // Remove weird instagram controls
      const parent = video.parentElement;
      Array.from(parent.children).forEach((child) => {
        if (child !== video) {
          parent.removeChild(child);
        }
      });
    });
  }
}

function StoreVideoVolume(video) {
  localStorage.setItem("videoVolume", video?.volume);
}

// ------------------------------------------------

PublicStaticMainStringArgs();
