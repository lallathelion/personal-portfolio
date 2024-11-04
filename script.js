// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = "Top";
scrollTopBtn.id = "scrollTopBtn";
document.body.appendChild(scrollTopBtn);

// Show/hide scroll-to-top button on scroll
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll to top when button is clicked
scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Simple modal popup for project details
const modal = document.createElement('div');
modal.id = "modal";
modal.innerHTML = `
    <div id="modalContent">
        <span id="closeModal">&times;</span>
        <h2>Library Management System</h2>
        <p>This project is a command-line-based Library Management System developed in C++. It allows users to manage books and student records, including adding, removing, and searching for books.</p>
    </div>
`;
document.body.appendChild(modal);

const projectLink = document.querySelector(".project h3");
projectLink.style.cursor = "pointer";
projectLink.addEventListener("click", function () {
    modal.style.display = "block";
});

// Close modal when the 'x' is clicked
document.getElementById("closeModal").addEventListener("click", function () {
    modal.style.display = "none";
});

// Close modal when clicking outside of modal content
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
