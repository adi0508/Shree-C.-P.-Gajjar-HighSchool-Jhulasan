// Navigation smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
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
            "https://www.youtube.com/embed/M7lc1UVf-VE"
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
    gridElem.innerHTML = ""; 

    // CRITICAL FIX: Make the modal visible BEFORE injecting the iframe.
    // YouTube needs the container to have actual dimensions to configure the player.
    modal.style.display = "flex";

    eventData.photos.forEach(src => {
        let mediaElement;

        if (src.includes("youtube.com") || src.includes("youtu.be") || src.includes("youtube-nocookie.com")) {
            const container = document.createElement("div");
            container.className = "video-container";
            
            container.innerHTML = `
                <iframe 
                    src="${src}" 
                    title="${eventData.title}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            `;
            gridElem.appendChild(container);
            return;
        }
        
        else if (src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov")) {
            mediaElement = document.createElement("video");
            mediaElement.src = src;
            mediaElement.controls = true;
            mediaElement.className = "modal-media-item";
        } 
        
        else {
            mediaElement = document.createElement("img");
            mediaElement.src = src;
            mediaElement.alt = eventData.title;
            mediaElement.className = "modal-media-item";
            mediaElement.onclick = function() {
                openLightbox(mediaElement); 
            };
        }

        gridElem.appendChild(mediaElement);
    });
}
function closeEventGallery() {
    document.getElementById("eventModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("eventModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}