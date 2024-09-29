let gallery = document.querySelector('.gallery');
let images = gallery.querySelectorAll('img');
let thumbnails = document.querySelectorAll('.thumbnail');

let currentImageIndex = 0;

images[currentImageIndex].classList.add('active');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = index;
        images[currentImageIndex].classList.add('active');
        thumbnails.forEach((thumbnail) => {
            thumbnail.classList.remove('active');
        });
        thumbnail.classList.add('active');
    });
});

// Add navigation buttons
let prevButton = document.createElement('button');
prevButton.textContent = 'Prev';
prevButton.addEventListener('click', () => {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].classList.add('active');
    thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove('active');
    });
    thumbnails[currentImageIndex].classList.add('active');
});

let nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.addEventListener('click', () => {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
    thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove('active');
    });
    thumbnails[currentImageIndex].classList.add('active');
});

gallery.parentNode.insertBefore(prevButton, gallery);
gallery.parentNode.insertBefore(nextButton, gallery.nextSibling);