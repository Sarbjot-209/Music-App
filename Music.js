const toggleTheme = document.getElementById('toggle-theme');
    toggleTheme.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      document.body.classList.toggle('light');
    });