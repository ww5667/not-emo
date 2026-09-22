const moods = document.querySelectorAll('.mood');
const note = document.querySelector('#moodNote');
const count = document.querySelector('#charCount');
const recordButton = document.querySelector('#recordButton');
const toast = document.querySelector('#toast');
const savedMessage = document.querySelector('#savedMessage');

moods.forEach((button) => {
  button.addEventListener('click', () => {
    moods.forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');
  });
});

note.addEventListener('input', () => {
  count.textContent = `${note.value.length}/120`;
});

recordButton.addEventListener('click', () => {
  const selected = document.querySelector('.mood.selected');
  const entry = {
    mood: selected.dataset.mood,
    emoji: selected.dataset.emoji,
    note: note.value.trim(),
    createdAt: new Date().toISOString(),
  };
  const entries = JSON.parse(localStorage.getItem('xinqing-entries') || '[]');
  entries.unshift(entry);
  localStorage.setItem('xinqing-entries', JSON.stringify(entries.slice(0, 30)));
  savedMessage.textContent = `${entry.emoji} ${entry.mood}，你的感受已被好好收下。`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
});

document.querySelectorAll('.care-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const isPlaying = button.textContent.trim() === 'Ⅱ';
    document.querySelectorAll('.care-item button').forEach((item) => { item.textContent = '▶'; });
    button.textContent = isPlaying ? '▶' : 'Ⅱ';
  });
});
