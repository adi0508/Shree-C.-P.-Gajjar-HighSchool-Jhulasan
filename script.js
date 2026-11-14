document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle & Hamburger-to-X Animation
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  const siteHeader = document.querySelector(".site-header");
  const tickerBar = document.querySelector(".top-announcement-bar");

  // Dynamically align mobile menu right below the ticker + header on any screen height
  function adjustMobileMenuOffset() {
    if (!navLinks) return;
    if (window.innerWidth <= 768) {
      const tickerHeight = tickerBar ? tickerBar.offsetHeight : 0;
      const headerHeight = siteHeader ? siteHeader.offsetHeight : 0;
      const totalTop = tickerHeight + headerHeight;

      if (siteHeader) siteHeader.style.top = `${tickerHeight}px`;
      navLinks.style.top = `${totalTop}px`;
      navLinks.style.height = `calc(100vh - ${totalTop}px)`;
    } else {
      navLinks.style.top = "";
      navLinks.style.height = "";
    }
  }

  function closeMobileMenu() {
    if (!navLinks || !mobileBtn) return;
    navLinks.classList.remove("active");
    mobileBtn.classList.remove("open");
    mobileBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  function openMobileMenu() {
    if (!navLinks || !mobileBtn) return;
    adjustMobileMenuOffset();
    navLinks.classList.add("active");
    mobileBtn.classList.add("open");
    mobileBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  adjustMobileMenuOffset();
  window.addEventListener("resize", () => {
    adjustMobileMenuOffset();
    if (window.innerWidth > 768 && navLinks && navLinks.classList.contains("active")) {
      closeMobileMenu();
    }
  });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (navLinks.classList.contains("active")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  // 2. Smooth Scrolling for Anchor Links & Auto-close Mobile Drawer
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          closeMobileMenu();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Also close mobile menu if external portal link is clicked
  const portalLink = document.querySelector(".nav-portal-btn");
  if (portalLink) {
    portalLink.addEventListener("click", closeMobileMenu);
  }
});

// 3. Event Gallery Database & Logic
const eventPhotos = {
  independenceDay: {
    title: "Independence Day Celebration 2026",
    photos: [
      "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.20.15 PM.jpeg",
      "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.20.15 PM (1).jpeg",
      "Images/Independence Day Celebration/Video.mp4",
      "https://www.youtube.com/embed/hA8MFZ76Jbc"
    ]
  }
};

function openEventGallery(eventId) {
  const modal = document.getElementById("eventModal");
  const titleElem = document.getElementById("modalEventTitle");
  const gridElem = document.getElementById("modalPhotoGrid");

  if (!modal || !gridElem) return;

  const eventData = eventPhotos[eventId];
  if (!eventData) return;

  titleElem.innerText = eventData.title;
  gridElem.innerHTML = "";
  modal.style.display = "flex";
  history.pushState({ modalOpen: true }, "");

  eventData.photos.forEach((src) => {
    const wrapper = document.createElement("div");
    wrapper.className = "uniform-media-box interactive-card";

    if (src.includes("youtube.com") || src.includes("youtu.be")) {
      let embedSrc = src;
      if (src.includes("watch?v=")) {
        embedSrc = src.replace("watch?v=", "embed/");
      } else if (src.includes("youtu.be/")) {
        embedSrc = src.replace("youtu.be/", "www.youtube.com/embed/");
      }

      wrapper.innerHTML = `
        <iframe 
          src="${embedSrc}?autoplay=0&modestbranding=1" 
          title="${eventData.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      `;
    } else if (src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov")) {
      const videoElem = document.createElement("video");
      videoElem.src = src;
      videoElem.controls = true;
      wrapper.appendChild(videoElem);
    } else {
      const imgElem = document.createElement("img");
      imgElem.src = src;
      imgElem.alt = eventData.title;
      imgElem.onclick = () => openLightbox(imgElem);
      wrapper.appendChild(imgElem);
    }

    gridElem.appendChild(wrapper);
  });
}

function closeEventGallery() {
  const modal = document.getElementById("eventModal");
  const gridElem = document.getElementById("modalPhotoGrid");
  if (modal) {
    modal.style.display = "none";
    if (gridElem) gridElem.innerHTML = "";
  }
}

// 4. Lightbox Logic
function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

  if (!lightbox || !lightboxImg) return;

  lightboxImg.src = imgElement.src;
  if (caption) caption.textContent = imgElement.alt || "";
  lightbox.style.display = "flex";
  history.pushState({ modalOpen: true }, "");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (lightbox) {
    lightbox.style.display = "none";
    if (lightboxImg) lightboxImg.src = "";
  }
}

// 5. Trustee Modal Logic
function openTrusteeModal() {
  const modal = document.getElementById("trusteeModal");
  if (modal) {
    modal.style.display = "flex";
    history.pushState({ modalOpen: true }, "");
  }
}

function closeTrusteeModal() {
  const modal = document.getElementById("trusteeModal");
  if (modal) modal.style.display = "none";
}

// 6. Faculty Card Flip Logic
function flipCard(container) {
  container.classList.toggle("flipped");
}

// 7. Global Unified Modal Backdrop Closer
window.addEventListener("click", (event) => {
  const eventModal = document.getElementById("eventModal");
  const lightbox = document.getElementById("lightbox");
  const trusteeModal = document.getElementById("trusteeModal");

  if (event.target === eventModal) closeEventGallery();
  if (event.target === lightbox) closeLightbox();
  if (event.target === trusteeModal) closeTrusteeModal();
});

// Handle phone/browser back button to close open modals
window.addEventListener("popstate", () => {
  closeEventGallery();
  closeLightbox();
  closeTrusteeModal();
});