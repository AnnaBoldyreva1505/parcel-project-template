import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');

// if (savedTime) player.setCurrentTime(savedTime);

player
  .setCurrentTime(savedTime)
  .then(seconds => {
    // `seconds` indicates the actual time that the player seeks to
  })
  .catch(error => {
    switch (error.name) {
      case 'RangeError':
        // The time is less than 0 or greater than the video's duration
        break;
      default:
        // Some other error occurred
        break;
    }
  });
