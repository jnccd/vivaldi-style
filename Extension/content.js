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
}

code()