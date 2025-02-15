const music = new Audio("musics/9.mp3");

//create Array

const songs = [
  {
    id: "1",
    songName: `Baby <br>
        <div class="subtitle">Justin Bieber</div>`,
    poster: "images/1.jpg",
  },
  {
    id: "2",
    songName: `Believer <br>
        <div class="subtitle">Jessy</div>`,
    poster: "images/2.jpg",
  },
  {
    id: "3",
    songName: `Ek Pyar Ka Nagma <br>
        <div class="subtitle">Sanam Puri</div>`,
    poster: "images/3.jpg",
  },
  {
    id: "4",
    songName: `Mera Mann <br>
        <div class="subtitle">Falak Shabir</div>`,
    poster: "images/4.jpg",
  },
  {
    id: "5",
    songName: `Raat Kali Ek Khwab Me Aai  <br>
        <div class="subtitle">Kishor Kumar</div>`,
    poster: "images/5.jpg",
  },
  {
    id: "6",
    songName: `O-Haseena-Zulfo-Wali <br>
        <div class="subtitle">Asha Bhosle and Mohammed Rafi</div>`,
    poster: "images/6.jpg",
  },
  {
    id: "7",
    songName: `Saiyaan <br>
        <div class="subtitle">Rahat Fateh Ali Khan</div>`,
    poster: "images/7.jpg",
  },
  {
    id: "8",
    songName: `Rubaru <br>
        <div class="subtitle">Vishal Mishra</div>`,
    poster: "images/8.jpg",
  },
  {
    id: "9",
    songName: `Piya Tose Naina Laage <br>
        <div class="subtitle">Jonita Gandhi</div>`,
    poster: "images/9.jpg",
  },
  {
    id: "10",
    songName: `Agar Tum Saath Ho <br>
        <div class="subtitle">Arijit Singh</div>`,
    poster: "images/10.jpg",
  },
  {
    id: "11",
    songName: `Toota Jo Kabhi Tara <br>
        <div class="subtitle">Sachin Jigar</div>`,
    poster: "images/11.jpg",
  },
  {
    id: "12",
    songName: `Matkar-Maya-Ko-Ahankar <br>
        <div class="subtitle">Kabir Cafe</div>`,
    poster: "images/12.jpg",
  },
  {
    id: "13",
    songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
    poster: "images/13.jpg",
  },
  {
    id: "14",
    songName: `Hawa Banke <br>
        <div class="subtitle">Darshan Raval</div>`,
    poster: "images/14.jpg",
  },
  {
    id: "15",
    songName: `Moh Moh Ke Dhage <br>
        <div class="subtitle">Monali Thakur</div>`,
    poster: "images/15.jpg",
  },
  {
    id: "16",
    songName: `STAY <br>
        <div class="subtitle">Justin Bieber</div>`,
    poster: "images/16.jpg",
  },
  {
    id: "17",
    songName: `Chip Thrills <br>
        <div class="subtitle">Sia</div>`,
    poster: "images/17.jpg",
  },
  {
    id: "18",
    songName: `Udaarian <br>
        <div class="subtitle">Satindar Sartaj</div>`,
    poster: "images/18.jpg",
  },
  {
    id: "19",
    songName: `Kahani <br>
        <div class="subtitle"><Amitabh Bhattacharya/div>`,
    poster: "images/19.jpg",
  },
  {
    id: "20",
    songName: `Tere Hawale <br>
        <div class="subtitle">Arijit Singh</div>`,
    poster: "images/20.jpg",
  },
  {
    id: "21",
    songName: `love me like you do <br>
        <div class="subtitle">sia</div>`,
    poster: "images/21.jpg",
  },
  {
    id: "22",
    songName: `Rubaaiyaan <br>
        <div class="subtitle">Amit Trivedi,Shalid Mallya & Swanand</div>`,
    poster: "images/22.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("playlistPlay")).forEach((el) => {
    el.classList.add("bi-play-circle-fill");
    el.classList.remove("bi-pause-circle-fill");
  });
};

//control main play & pause btn with current played btns

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "rgb(105, 105, 170, .0)";
  });
};

//change the poster and songs by using their Id's -->

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playlistPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    music.src = `musics/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105, 105, 170, .1)";
    makeAllPlay();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
  });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  //for music ending time

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  //for music starting time

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);

  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

// control volume bar

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }

  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }

  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

//control back btn from the bottom bar->

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1){
    index = Array.from(document.getElementsByClassName('songItem')).length;
  }

  music.src = `musics/${index}.mp3`;
  poster_master_play.src = `images/${index}.jpg`;
  music.play();

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 170, .1)";
  makeAllPlay();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});


// control next btn from menu bar -->

next.addEventListener('click',()=>{
  index ++;
  if (index > Array.from(document.getElementsByClassName('songItem')).length){
    index = 1;
  }

  music.src = `musics/${index}.mp3`;
  poster_master_play.src = `images/${index}.jpg`;
  music.play();

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 170, .1)";
  makeAllPlay();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});




//Popolar Songs

let pop_left_scroll = document.getElementById("pop_left_scroll");
let pop_right_scroll = document.getElementById("pop_right_scroll");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_right_scroll.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});

pop_left_scroll.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

//for popular Artists
let art_left_scrolls = document.getElementById("art_left_scrolls");
let art_right_scrolls = document.getElementById("art_right_scrolls");
let item = document.getElementsByClassName("item")[0];

art_right_scrolls.addEventListener("click", () => {
  item.scrollLeft += 330;
});

art_left_scrolls.addEventListener("click", () => {
  item.scrollLeft -= 330;
});
