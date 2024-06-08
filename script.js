// get the game frame and settings popup elements
const gameFrame = document.getElementById('game-frame');
const settingsPopup = document.getElementById('settings-popup');

// get the game select dropdown and play button
const gameSelect = document.getElementById('game-select');
const playBtn = document.getElementById('play-btn');

// set the initial iframe content to the first game option
gameFrame.src = gameSelect.options[0].value;

// add event listener to the play button
playBtn.addEventListener('click', () => {
    gameFrame.src = gameSelect.value;
});

// add event listener to the full screen button
const fullScreenBtn = document.getElementById('full-screen-btn');
fullScreenBtn.addEventListener('click', () => {
    if (gameFrame.requestFullscreen) {
        gameFrame.requestFullscreen();
    } else if (gameFrame.webkitRequestFullscreen) {
        gameFrame.webkitRequestFullscreen();
    } else if (gameFrame.msRequestFullscreen) {
        gameFrame.msRequestFullscreen();
    }
});

// add event listener to the save options button
const saveOptionsBtn = document.getElementById('save-options-btn');
saveOptionsBtn.addEventListener('click', () => {
    alert('Save options not implemented yet!');
});

// add event listener to the settings button
const settingsBtn = document.getElementById('settings-btn');
settingsBtn.addEventListener('click', () => {
    settingsPopup.style.display = 'block';
});

// add event listener to the close settings button
const closeSettingsBtn = document.createElement('button');
closeSettingsBtn.textContent = 'Close';
closeSettingsBtn.style.position = 'absolute';
closeSettingsBtn.style.top = '0';
closeSettingsBtn.style.right = '0';
closeSettingsBtn.style.background = 'none';
closeSettingsBtn.style.border = 'none';
closeSettingsBtn.style.cursor = 'pointer';
closeSettingsBtn.addEventListener('click', () => {
    settingsPopup.style.display = 'none';
});

settingsPopup.appendChild(closeSettingsBtn);

// add event listener to the background music play button
const musicPlayBtn = document.getElementById('music-play-btn');
let musicInterval;

musicPlayBtn.addEventListener('click', () => {
    const audioElement = document.createElement('audio');
    audioElement.src = document.getElementById('music-file-input').files[0];
    audioElement.playbackRate = 1.0; // adjust playback rate as needed
    audioElement.loop = true; // loop the music

    musicInterval = setInterval(() => {
        audioElement.currentTime += audioElement.duration / 100; // increment time by one second
    }, audioElement.duration / 100); // adjust interval time as needed

    musicPlayBtn.disabled = true; // disable button while music is playing
});

// add event listener to the background music pause button
document.addEventListener('pause', () => {
    clearInterval(musicInterval);
    musicPlayBtn.disabled = false; // enable button when music is paused
});

// add event listener to the background music stop button
document.addEventListener('stop', () => {
    clearInterval(musicInterval);
    musicPlayBtn.disabled = false; // enable button when music is stopped
});
