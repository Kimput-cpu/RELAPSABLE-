const button = document.getElementById("startBtn");
const video = document.getElementById("chorusVideo");
const lyricsDiv = document.getElementById("lyrics");

// Split lyrics + timestamp (time in seconds)
const lyricsTimeline = [
    { time: 1, text: " Mula noon bukas at kailanman" },
    { time: 8, text: "Pag-ibig mo ang hanap ng pusong ligaw" },
    { time: 16, text: " Mula noon bukas at kailanman" },
    
];

button.addEventListener("click", () => {
    video.currentTime = 0;
    video.play();
    lyricsDiv.textContent = "";

    let index = 0;

    const interval = setInterval(() => {
        const currentTime = video.currentTime;

        if (index < lyricsTimeline.length && currentTime >= lyricsTimeline[index].time) {
            lyricsDiv.textContent = lyricsTimeline[index].text;
            index++;
        }

        // Stop interval kapag tapos na ang lyrics
        if (index >= lyricsTimeline.length) {
            clearInterval(interval);
        }
    }, 100); // check every 0.1 second
});
