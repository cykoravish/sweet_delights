// Initialize Swiper
const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    effect: "fade",
    fadeEffect: { crossFade: true },
  })
  
  // Initialize AOS (Animate on Scroll)
  document.addEventListener("DOMContentLoaded", () => {
    // Add AOS CSS
    const aosCSS = document.createElement("link")
    aosCSS.rel = "stylesheet"
    aosCSS.href = "https://unpkg.com/aos@next/dist/aos.css"
    document.head.appendChild(aosCSS)
  
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    })
  
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("mobile-menu-toggle")
    const mainNav = document.getElementById("main-nav")
  
    if (menuToggle && mainNav) {
      menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        mainNav.classList.toggle("active")
      })
    }
  
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll("#main-nav a")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active")
        mainNav.classList.remove("active")
      })
    })
  
    // Trivia Items Toggle
    const triviaItems = document.querySelectorAll(".trivia-item")
    triviaItems.forEach((item) => {
      item.addEventListener("click", function () {
        this.classList.toggle("active")
      })
    })
  
    // Scroll to Top Button
    const scrollTopBtn = document.getElementById("scroll-top")
  
    if (scrollTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          scrollTopBtn.classList.add("visible")
        } else {
          scrollTopBtn.classList.remove("visible")
        }
      })
  
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
  
    // Cursor Sparkle Effect
    const cursorSparkle = document.querySelector(".cursor-sparkle")
  
    if (cursorSparkle) {
      document.addEventListener("mousemove", (e) => {
        cursorSparkle.style.left = e.clientX + "px"
        cursorSparkle.style.top = e.clientY + "px"
      })
  
      document.addEventListener("click", (e) => {
        cursorSparkle.style.opacity = "1"
        cursorSparkle.style.transform = "translate(-50%, -50%) scale(1.5)"
  
        setTimeout(() => {
          cursorSparkle.style.opacity = "0"
          cursorSparkle.style.transform = "translate(-50%, -50%) scale(0)"
        }, 500)
      })
    }
  })
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
  
  // Contact Form Submission
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault()
  
    // Add form submission animation
    const button = this.querySelector("button")
    const originalText = button.textContent
  
    button.innerHTML = '<i class="fas fa-magic fa-spin"></i> Sending Magic...'
    button.disabled = true
  
    setTimeout(() => {
      // Show success message
      const formGroups = this.querySelectorAll(".form-group")
      formGroups.forEach((group) => {
        group.style.display = "none"
      })
  
      button.style.display = "none"
  
      const successMessage = document.createElement("div")
      successMessage.className = "success-message"
      successMessage.innerHTML = `
              <i class="fas fa-check-circle" style="font-size: 3rem; color: #ffe066; margin-bottom: 1rem;"></i>
              <h3>Your message has been whisked away by pixies!</h3>
              <p>Expect a sprinkle-filled reply soon!</p>
          `
  
      this.appendChild(successMessage)
  
      // Reset form after delay
      setTimeout(() => {
        this.reset()
        successMessage.remove()
        formGroups.forEach((group) => {
          group.style.display = "block"
        })
        button.style.display = "inline-block"
        button.innerHTML = originalText
        button.disabled = false
      }, 3000)
    }, 1500)
  })
  
  // Animation on Scroll (Fallback for browsers without AOS)
  if (typeof AOS === "undefined") {
    const items = document.querySelectorAll(".menu-item, .gallery-item, .workshop-item")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "wobble 1s ease forwards"
          }
        })
      },
      { threshold: 0.3 },
    )
  
    items.forEach((item) => observer.observe(item))
  }
  
  // Add parallax effect to hero section
  window.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset
    const heroSection = document.querySelector(".hero")
  
    if (heroSection) {
      const slides = heroSection.querySelectorAll(".swiper-slide")
      slides.forEach((slide) => {
        const background = slide.style.backgroundImage
        if (background) {
          slide.style.backgroundPosition = `center ${50 + scrollPosition * 0.05}%`
        }
      })
    }
  })
  
  document.addEventListener("DOMContentLoaded", () => {
    // Create interactive sugar particles
    const storyImage = document.querySelector(".story-image")
  
    if (storyImage) {
      // Create sugar particles on mouse move
      storyImage.addEventListener("mousemove", (e) => {
        createSugarParticle(e, storyImage)
      })
  
      // Make cake elements interactive
      const cakes = document.querySelectorAll(".floating-cake")
      cakes.forEach((cake) => {
        cake.addEventListener("mouseenter", function () {
          this.style.transform = "scale(1.3) rotate(10deg)"
          createSparkleEffect(this)
        })
  
        cake.addEventListener("mouseleave", function () {
          this.style.transform = ""
        })
      })
    }
  })
  
  // Function to create sugar particles
  function createSugarParticle(e, parent) {
    const particle = document.createElement("div")
    particle.className = "sugar-particle"
  
    // Calculate position relative to the parent
    const rect = parent.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
  
    // Set particle styles
    particle.style.cssText = `
          position: absolute;
          width: 5px;
          height: 5px;
          background: white;
          border-radius: 50%;
          top: ${y}px;
          left: ${x}px;
          opacity: 0.8;
          pointer-events: none;
          z-index: 10;
          animation: particle-fade 1.5s forwards;
      `
  
    parent.appendChild(particle)
  
    // Remove particle after animation
    setTimeout(() => {
      particle.remove()
    }, 1500)
  }
  
  // Function to create sparkle effect
  function createSparkleEffect(element) {
    for (let i = 0; i < 5; i++) {
      const sparkle = document.createElement("div")
      sparkle.className = "cake-sparkle"
  
      // Random position around the element
      const x = Math.random() * 60 - 30
      const y = Math.random() * 60 - 30
  
      sparkle.style.cssText = `
              position: absolute;
              content: '✨';
              font-size: 1.5rem;
              top: 50%;
              left: 50%;
              transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px));
              opacity: 0;
              pointer-events: none;
              z-index: 20;
              animation: sparkle-pop 1s forwards;
          `
  
      sparkle.textContent = "✨"
      element.appendChild(sparkle)
  
      // Remove sparkle after animation
      setTimeout(() => {
        sparkle.remove()
      }, 1000)
    }
  }
  
  // Add these animations to your CSS
  document.head.insertAdjacentHTML(
    "beforeend",
    `
      <style>
          @keyframes particle-fade {
              0% {
                  transform: translate(0, 0) scale(1);
                  opacity: 0.8;
              }
              100% {
                  transform: translate(${Math.random() * 40 - 20}px, ${-30 - Math.random() * 20}px) scale(0);
                  opacity: 0;
              }
          }
          
          @keyframes sparkle-pop {
              0% {
                  transform: translate(calc(-50% + ${Math.random() * 60 - 30}px), calc(-50% + ${Math.random() * 60 - 30}px)) scale(0);
                  opacity: 0;
              }
              50% {
                  opacity: 1;
                  transform: translate(calc(-50% + ${Math.random() * 80 - 40}px), calc(-50% + ${Math.random() * 80 - 40}px)) scale(1.2);
              }
              100% {
                  transform: translate(calc(-50% + ${Math.random() * 100 - 50}px), calc(-50% + ${Math.random() * 100 - 50}px)) scale(0);
                  opacity: 0;
              }
          }
      </style>
  `,
  )
  
  