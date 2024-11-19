// Scroll naar de collage-sectie
document.getElementById("collage-btn").addEventListener("click", () => {
    document.getElementById("collage").classList.remove("hidden");
    document.getElementById("collage").scrollIntoView({ behavior: "smooth" });
  });
  
  // Foto slideshow data
  const photos = [
    {
      src: "photo1.jpg",
      info: "Foto 1: Schildering door Kunstenaar A",
      meta: "Gemaakt op 12-11-2024, door Fotograaf X, locatie Y"
    },
    {
      src: "photo2.jpg",
      info: "Foto 2: Graffiti van Kunstenaar B",
      meta: "Gemaakt op 10-10-2024, door Fotograaf Y, locatie Z"
    },
    {
      src: "photo3.jpg",
      info: "Foto 3: Abstract werk door Kunstenaar C",
      meta: "Gemaakt op 05-09-2024, door Fotograaf Z, locatie W"
    }
  ];
  
  let currentPhotoIndex = 0;
  
  // Elementen selecteren
  const photoContainer = document.getElementById("photo-container");
  const photoInfo = document.getElementById("photo-info");
  const photoMeta = document.getElementById("photo-meta");
  
  // Foto weergeven
  function showPhoto(index) {
    const photo = photos[index];
    photoContainer.innerHTML = `<img src="${photo.src}" alt="Photo ${index + 1}" style="width: 100%; height: 100%;">`;
    photoInfo.textContent = photo.info;
    photoMeta.textContent = photo.meta;
  }
  
  // Start met de eerste foto
  showPhoto(currentPhotoIndex);
  
  // Navigatieknoppen
  document.getElementById("prev-btn").addEventListener("click", () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    showPhoto(currentPhotoIndex);
  });
  
  document.getElementById("next-btn").addEventListener("click", () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto(currentPhotoIndex);
  });
  