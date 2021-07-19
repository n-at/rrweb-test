import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'

import 'rrweb-player/dist/style.css'
import rrwebPlayer from 'rrweb-player'

const playButton = document.getElementById('play');
const recordedEvents = document.getElementById('events');

playButton.onclick = () => {
    const events = JSON.parse(recordedEvents.value);
    new rrwebPlayer({
        target: document.getElementById('player-root'),
        props: {
            events,
            autoPlay: false,
        },
    });
};
