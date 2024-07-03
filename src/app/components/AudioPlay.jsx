// import { useRef } from 'react';

const AudioPlayer = () => {
//   const audioRef = useRef(null);

  const playSound = () => {
    const audio = document.createElement('audio');
    audio.src = "/mp3/level-up-191997.mp3"
    audio.play();
    // if (audioRef.current) {
    //   audioRef.current.play();
    // }
  };
  playSound()

//   return (
//     <div>
//       {/* <button onClick={playSound}>Play Sound</button> */}
//       <audio ref={audioRef} src="/src/mp3/level-up-191997.mp3" />
//     </div>
//   );
};

export default AudioPlayer;
