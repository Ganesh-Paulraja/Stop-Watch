var min = 0;
var sec = 0;
var timer;
var minEle = document.getElementsByClassName('min')[0];
var secEle = document.getElementsByClassName('sec')[0];
const zero = value => (value < 10) ? '0' + value : value;
const updateTimer = () => {
  sec++
  if (sec == 60) {
    min++
    sec = 0;
    minEle.innerText = zero(min);
  } 
  secEle.innerText = zero(sec);
}
const startTimer =  () => {
  timer = setInterval(updateTimer, 1000);
}
const stopTimer = () => {
  clearInterval(timer);
}
const reSet = () => {
  clearInterval(timer);
  minEle.innerText = '00';
  secEle.innerText = '00';
  min = 0;
  sec = 0;
}
