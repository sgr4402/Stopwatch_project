let timer;
  let isRunning = false;
  let startTime;
  let elapsedTime = 0;
  
  const timeDisplay = document.querySelector('.time');
  const startBtn = document.getElementById('start');
  const pauseBtn = document.getElementById('pause');
  const resetBtn = document.getElementById('reset');
  const lapBtn = document.getElementById('lap');
  const lapList = document.getElementById('lapList');
  
  function formatTime(time) {
    const pad = (num) => (num < 10 ? '0' : '') + num;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  
  function updateTime() {
    const currentTime = Math.floor((Date.now() - startTime) / 1000) + elapsedTime;
    timeDisplay.textContent = formatTime(currentTime);
  }
  
  function startTimer() {
    if (!isRunning) {
      startTime = Date.now();
      timer = setInterval(updateTime, 1000);
      isRunning = true;
    }
  }
  
  function pauseTimer() {
    clearInterval(timer);
    elapsedTime += Math.floor((Date.now() - startTime) / 1000);
    isRunning = false;
  }
  
  function resetTimer() {
    clearInterval(timer);
    elapsedTime = 0;
    timeDisplay.textContent = '00:00:00';
    isRunning = false;
    lapList.innerHTML = '';
  }
  
  function lapTimer() {
    const lapTime = formatTime(Math.floor((Date.now() - startTime) / 1000) + elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
  }
  
  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);
  lapBtn.addEventListener('click', lapTimer);


