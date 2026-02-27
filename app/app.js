const statusList = document.getElementById('status-list');
const refreshBtn = document.getElementById('refresh-btn');

const readStatus = () => {
  const items = [
    '✅ Bootstrap app is runnable',
    '✅ Docs include onboarding guidance',
    '✅ Repository is ready for first feature work',
    `🕒 Last refreshed: ${new Date().toLocaleString()}`
  ];

  statusList.innerHTML = '';
  for (const item of items) {
    const li = document.createElement('li');
    li.textContent = item;
    statusList.appendChild(li);
  }
};

refreshBtn.addEventListener('click', readStatus);
readStatus();
