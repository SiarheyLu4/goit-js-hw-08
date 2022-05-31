import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


    const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

const onPlay = function(data) {
    const value = data.seconds;
    console.log(value);
    localStorage.setItem("videoplayer-current-time", value);
    };
    player.on('timeupdate', throttle(onPlay, 1000));

    player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});