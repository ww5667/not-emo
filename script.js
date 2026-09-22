const moods = document.querySelectorAll('.mood');
const note = document.querySelector('#note');
const counter = document.querySelector('#counter');
const toast = document.querySelector('#toast');
const time = document.querySelector('.time');

function updateTime() {
  time.textContent = new Intl.DateTimeFormat('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
}
updateTime();

moods.forEach((button) => button.addEventListener('click', () => {
  moods.forEach((item) => item.classList.remove('selected'));
  button.classList.add('selected');
}));

note.addEventListener('input', () => { counter.textContent = `${note.value.length} / 200`; });

document.querySelector('#record').addEventListener('click', () => {
  const selectedMood = document.querySelector('.mood.selected').dataset.mood;
  localStorage.setItem('moment', JSON.stringify({ mood: selectedMood, note: note.value, savedAt: new Date().toISOString() }));
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2400);
});

document.querySelectorAll('.pills button').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.pills button').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
}));
