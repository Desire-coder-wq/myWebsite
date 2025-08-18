    // Mobile menu toggle
    function toggleMenu() {
        document.getElementById('nav-links').classList.toggle('active');
    }

    // Contact form submit
    function submitForm(e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        e.target.reset();
    }




      AOS.init({
    duration: 1000,
    once: true
  });
  
  function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
}
// Form submission
function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
}

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
});
