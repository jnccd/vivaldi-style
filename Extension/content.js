window.onload = PublicStaticMainStringArgs;
window.onafterupdate = PublicStaticMainStringArgs;
window.ontransitionend = PublicStaticMainStringArgs;
window.onclick = PublicStaticMainStringArgs;

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

function InitEvent() {
  console.log('OwO wat dis!');
}

function RepeatedEvent() {
  // Fix instagram videos
  if (window.location.hostname === "www.instagram.com") {
	document.querySelectorAll('video').forEach(video => {
	  // Add controls attribute
	  video.setAttribute('controls', 'true');
	  // Fix volume
	  video.muted = false;
	  video.volume = parseFloat(localStorage.getItem('videoVolume')) || 0.7;
	  video.addEventListener('volumechange', () => {
		localStorage.setItem('videoVolume', video.volume);
	  });

	  // Remove weird instagram controls
	  const parent = video.parentElement;
	  Array.from(parent.children).forEach(child => {
		if (child !== video) {
		  parent.removeChild(child);
		}
	  });
	});
  }
}

PublicStaticMainStringArgs();