function forPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => allPhotos(data))
}

function allPhotos(photos) {
    console.log(photos.photos)
    const photoContainer = document.getElementById('photoContainer');
    for (const photo of photos) {
        const div = document.createElement('div');
        div.innerText = photo.albumId;
        photoContainer.appendChild(div);
    }
}
