window.onload = code;
window.onafterupdate = code;
window.ontransitionend = code;
window.onclick = code;

var autoClose = true;
var executed = false;

async function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(ms, resolve);
  });
}

function code() {
  if (!executed) {
    executed = true;
  } else {
    return;
  }

  console.log('OwO wat dis!');
  
  // FIx instagram videos
  if (window.location.hostname === "www.instagram.com") {
	document.querySelectorAll('video').forEach(video => {
	  // Add controls attribute
	  video.setAttribute('controls', 'true');
	  // Fix volume
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

code()