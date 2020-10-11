
export function playAudio(elementClass, i) {
    let audioEl = document.getElementsByClassName(elementClass)[i];
    audioEl.pause();
    audioEl.load();
    audioEl.play();
    // console.log('the button was clicked', elementClass);
}