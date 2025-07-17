class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
}

let movie = new Video("Harry Potter", "Jake", "22 hours")
let movie2 = new Video("Game of thrones", "Rob", "9 hours")
let movie3 = new Video("Game of thrones", "Rob", "9 hours")
let movie4 = new Video("Game of thrones", "Rob", "9 hours")
let movie5 = new Video("Game of thrones", "Rob", "9 hours")
movie.watch()
movie2.watch()

const videoData = [
  { title: "Intro to HTML", uploader: "Charlie", time: 200 },
  { title: "Advanced CSS", uploader: "Dana", time: 350 },
  { title: "JavaScript Basics", uploader: "Eli", time: 400 },
  { title: "React in 10 Minutes", uploader: "Faith", time: 600 },
  { title: "Node.js Crash Course", uploader: "George", time: 500 }
];

const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));

videos.forEach(video => video.watch())