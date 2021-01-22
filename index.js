const container = document.getElementById("emojiContainer");
const emojiContainer = document.getElementById("emoji");

import emojis from './emojis';

export const init = () => {

    const update = () => {
        const gen = Math.floor(Math.random() * emojis.length);

        emojiContainer.innerText = emojis[gen];
    };

    update();
    container.onmouseenter = update;
}
