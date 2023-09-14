import { CardSong } from "";

export const setCurrentSong = (song) => {
  const title = document.getElementById("current-song-title");
  const author = document.getElementById("current-song-author");
  const audio = document.getElementById("current-song-audio");
  const img = document.getElementById("current-song-img");

  title.innerText = song.title || null;
  author.innerText = song.author || null;
  audio.setAttribute("src", song.path.audio || null);
  img.setAttribute("src", song.path.front || null);

  const container = document.getElementById("current-song-play");
  container.addEventListener("click", playCurrentSong);
};

export const playCurrentSong = () => {
  const audio = document.getElementById("current-song-audio");
  const imgButtonPlay = document.getElementById("current-song-play-img");

//   if (audio && audio instanceof HTMLAudioElement) {
//     if (audio.paused) {
//       audio.play();
//       imgButtonPlay.setAttribute("src", "/pause.svg");
//     } else {
//       audio.pause();
//       imgButtonPlay.setAttribute("src", "/play.svg");
//     }
  }
// };

// export const reloadButtonPlay = () => {
//   const imgButtonPlay = document.getElementById("current-song-play-img");
//   imgButtonPlay.setAttribute("src", "/pause.svg");
// };