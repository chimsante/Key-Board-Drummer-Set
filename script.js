function playSound(e) { // This function plays a sound when a key is pressed.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);   // Find the audio element corresponding to the pressed key's data-key attribute.

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;   // Check if the transition property is not 'transform', then return.

    e.target.classList.remove('playing'); // Remove the 'playing' class from the element.
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);