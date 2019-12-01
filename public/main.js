// let mediaRecorder
// const audioChunks = [];

// navigator.mediaDevices.getUserMedia({ audio: true })
//   .then(stream => {
//     mediaRecorder = new MediaRecorder(stream);

//     mediaRecorder.addEventListener("dataavailable", event => {
//       console.log(event)
//       audioChunks.push(event.data);
//     });
//   });

// function start() {
//   mediaRecorder.start();
// }
// function stop() {
//   mediaRecorder.stop();
// }
// function play() {
//   const audioBlob = new Blob(audioChunks);
//   const audioUrl = URL.createObjectURL(audioBlob);
//   const audio = new Audio(audioUrl);
//   audio.play();
// }
document.addEventListener("pointermove", e => {
  try {

    let a = Object.create(null)
    let b=[],c=''
    for (let n in e) {
      b.push(n)
      a[n] = e[n]
      c+=n+'='+e[n]+'\n'
    }
    // alert(c)
    document.querySelector('#txt').innerHTML = c
  } catch (error) {
    alert(error)
  }
})