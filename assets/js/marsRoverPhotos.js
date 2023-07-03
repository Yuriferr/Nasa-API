let section = document.querySelector('section');
let rover = document.getElementById('rover');
const api_key = 'glPcXKBtXUS93UVEHm05ApirEaD1lXNqr3cTozps';

async function getRoverPhotos(){
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${api_key}`);
    let data = await response.json();
    data = data.photos;
    console.log(data);
    data = data.slice(0, 12);
    data.forEach((photo) => {
        section.style.height = 'auto';
        rover.innerHTML += `
        <div class="col-md-4 col-lg-3">
            <div class="card mb-4 shadow-sm">
                <img src="${photo.img_src}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Date: ${photo.earth_date}</p>
                    <p class="card-text">Camera: ${photo.camera.full_name}</p>
                    <p class="card-text">Rover: ${photo.rover.name}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a href="${photo.img_src}" target="_blank" class="btn btn-sm btn-outline-secondary">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
}

getRoverPhotos();
