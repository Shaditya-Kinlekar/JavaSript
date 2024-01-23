function theme() {
  document.getElementById('theme-selector').addEventListener('change', function (event) {
    const theme = event.target.value;
    switch (theme) {
      case 'blue':
        document.documentElement.style.setProperty('--hue', '200');
        break;
      case 'red':
        document.documentElement.style.setProperty('--hue', '0');
        break;
      case 'green':
        document.documentElement.style.setProperty('--hue', '120');
        break;
      case 'yellow':
        document.documentElement.style.setProperty('--hue', '60');
        break;
      case 'purple':
        document.documentElement.style.setProperty('--hue', '270');
        break;
    }
  });
}

export default theme;
