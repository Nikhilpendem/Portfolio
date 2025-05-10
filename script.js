// Smooth fade-in animation on scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.6s ease-out";
  observer.observe(section);
});

// Optional alert on CV download
const downloadLink = document.querySelector('a[download]');
if (downloadLink) {
  downloadLink.addEventListener('click', () => {
    alert("Your CV will start downloading shortly.");
  });
}
