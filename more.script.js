// This is useful for applying specific styles or behaviors (like larger touch targets) for touch-enabled devices.
!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);

// Bottom navbar detection of background section
document.addEventListener('DOMContentLoaded', function() {
  const bottomNav = document.querySelector('.bottom-nav');
  
  // Function to check if bottom navbar is over a dark section
  function checkBottomNavBackground() {
    const scrollPosition = window.scrollY + window.innerHeight - 80; // Position of bottom nav
    const darkSections = document.querySelectorAll('[data-bg-section="dark"]');
    
    let isOverDarkSection = false;
    
    darkSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        isOverDarkSection = true;
      }
    });
    
    if (isOverDarkSection) {
      bottomNav.setAttribute('data-over-dark', 'true');
    } else {
      bottomNav.removeAttribute('data-over-dark');
    }
  }
  
  // Initial check and setup scroll listener
  if (bottomNav) {
    checkBottomNavBackground();
    window.addEventListener('scroll', checkBottomNavBackground);
  }
});

