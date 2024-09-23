export const enableMusic = () => {
  const audio = new Audio('../../../public/sounds/1-02 Extraction Action.mp3');
  audio.loop = true;
  audio.play();
};
