// Navigation smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

  lightboxImg.src = img.src;
  caption.textContent = img.alt;

  lightbox.classList.add("flex");
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("flex");
  lightbox.style.display = "none";
}

// Database of photos for specific events
const eventPhotos = {
    independenceDay: {
        title: "Independence Day Celebration 2026",
        photos: [
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.20.15 PM.jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.20.15 PM (1).jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.20.16 PM (1).jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.20.16 PM (2).jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.20.16 PM.jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.20.17 PM.jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.22.40 PM (1).jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.22.40 PM.jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.22.41 PM (1).jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.22.41 PM (2).jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.22.41 PM (3).jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.22.41 PM.jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.22.42 PM (1).jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.22.42 PM (2).jpeg",
            "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.22.42 PM.jpeg",
            "Images/Independence Day Celebration/video.mp4"
          ]
    }
};

function openEventGallery(eventId) {
    const modal = document.getElementById("eventModal");
    const titleElem = document.getElementById("modalEventTitle");
    const gridElem = document.getElementById("modalPhotoGrid");

    const eventData = eventPhotos[eventId];
    if (!eventData) return;

    titleElem.innerText = eventData.title;
    gridElem.innerHTML = ""; // Clear old images

    // Loop through and inject all photos for that day
    eventData.photos.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = eventData.title;
        // Optional: clicking an individual photo opens your main lightbox view
        img.onclick = function() {
            openLightbox(img); 
        };
        gridElem.appendChild(img);
    });

    modal.style.display = "flex";
}

function closeEventGallery() {
    document.getElementById("eventModal").style.display = "none";
}

// Close modal if user clicks outside the content box
window.onclick = function(event) {
    const modal = document.getElementById("eventModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}