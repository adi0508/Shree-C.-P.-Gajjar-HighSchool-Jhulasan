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
            "Images/Independence Day Celebration/video.mp4",
            "https://www.youtube.com/embed/hA8MFZ76Jbc"
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
    gridElem.innerHTML = ""; // Clear old media

    // Loop through and inject photos, local videos, or YouTube embeds
    eventData.photos.forEach(src => {
        let mediaElement;

        // 1. Check if it's a YouTube link (contains youtube.com or youtu.be)
        if (src.includes("youtube.com") || src.includes("youtu.be")) {
            const container = document.createElement("div");
            container.className = "video-container";
            
            // Extract the video ID or convert to nocookie domain with origin parameter
            let embedUrl = src.replace("youtube.com", "youtube-nocookie.com");
            if (!embedUrl.includes("origin=")) {
                const separator = embedUrl.includes("?") ? "&" : "?";
                embedUrl += `${separator}origin=${encodeURIComponent(window.location.origin)}&enablejsapi=1`;
            }

            container.innerHTML = `
                <iframe 
                    src="${embedUrl}" 
                    title="${eventData.title}" 
                    frameborder="0" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
            gridElem.appendChild(container);
            return;
        }
        
        // 2. Check if it's a local video file (e.g., .mp4, .webm)
        else if (src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov")) {
            mediaElement = document.createElement("video");
            mediaElement.src = src;
            mediaElement.controls = true;
            mediaElement.className = "modal-media-item";
        } 
        
        // 3. Otherwise, treat it as a standard image
        else {
            mediaElement = document.createElement("img");
            mediaElement.src = src;
            mediaElement.alt = eventData.title;
            mediaElement.className = "modal-media-item";
            // Clicking an image opens the fullscreen lightbox view
            mediaElement.onclick = function() {
                openLightbox(mediaElement); 
            };
        }

        gridElem.appendChild(mediaElement);
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