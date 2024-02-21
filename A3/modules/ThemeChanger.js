document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-controller');
    
    themeToggle.addEventListener('change', () => {
      if(themeToggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dim');
      } else {
        document.documentElement.setAttribute('data-theme', 'emerald');
      }
    });
  
    const currentTheme = document.documentElement.getAttribute('data-theme');
    themeToggle.checked = currentTheme === 'dim';
  });
  