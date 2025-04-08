// Import AOS
import AOS from 'aos';

// Initialize JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  AOS.init({
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    offset: 120, // offset (in px) from the original trigger point
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;

  navLinks.forEach(link => {
    link.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const elementPosition = (targetElement as HTMLElement).offsetTop;
          window.scrollTo({
            top: elementPosition - 80,
            behavior: 'smooth'
          });

          // Close the mobile menu after clicking
          if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
          }
        }
      }
    });
  });

  // Form submission handling
  const contactForm = document.getElementById('submitContactForm') as HTMLFormElement;
  if (contactForm) {
    contactForm.addEventListener('submit', function(this: HTMLFormElement, e: Event) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }

  // Back to Top button functionality
  const backToTopButton = document.getElementById('backToTop');

  if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function(e: Event) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Custom hover animations for info boxes
  const infoBoxes = document.querySelectorAll('.info_box');
  infoBoxes.forEach(box => {
    box.addEventListener('mouseenter', function(this: HTMLElement) {
      const icon = this.querySelector('i');
      if (icon) {
        icon.classList.add('animate-icon');
        setTimeout(() => {
          icon.classList.remove('animate-icon');
        }, 1000);
      }
    });
  });

  // Animate navigation links on hover
  const links = document.querySelectorAll('.navbar-nav .nav-link');
  links.forEach(link => {
    link.addEventListener('mouseenter', function(this: HTMLElement) {
      this.classList.add('pulse');
      setTimeout(() => {
        this.classList.remove('pulse');
      }, 1000);
    });
  });

  // Add parallax effect to hero section
  const heroSection = document.querySelector('.intro_main');
  if (heroSection) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 600) {
        const heroImage = document.querySelector('.hero-image img');
        if (heroImage) {
          (heroImage as HTMLElement).style.transform = `translateY(${scrollPosition * 0.1}px)`;
        }
      }
    });
  }
});

