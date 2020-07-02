const playSound = () => {
  const audioContext = new AudioContext();
  const osc = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const playSoundSequence = () => {
    setTimeout(() => osc.frequency.value = 250, 500);
    setTimeout(() => osc.frequency.value = 500, 1000);
  };

  osc.connect(gainNode);
  gainNode.connect(audioContext.destination);

  gainNode.gain.setValueAtTime(0.25, audioContext.currentTime);

  osc.type = 'sine';
  osc.frequency.value = 500;
  osc.start();

  playSoundSequence();
  const interval = setInterval(playSoundSequence, 1000);

  return {
    stop: () => {
      clearInterval(interval);
      osc.stop();
    }
  };
}

export default playSound;