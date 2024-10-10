window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav-container');
    const sections = document.querySelectorAll('section');
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
  
    // Change navbar background color based on the current section
    switch (currentSection) {
      case 'home':
        navbar.style.backgroundColor = 'lightblue';
        break;
      case 'about':
        navbar.style.backgroundColor = 'lightcoral';
        break;
      case 'projects':
        navbar.style.backgroundColor = 'lightgreen';
        break;
      case 'contact':
        navbar.style.backgroundColor = 'lightyellow';
        break;
      default:
        navbar.style.backgroundColor = 'transparent'; // Default when not in any section
    }
  });
  