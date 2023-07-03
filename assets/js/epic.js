let section = document.querySelector('section');
let epic = document.getElementById('epic');
let arrayData = [];
const api_key = 'glPcXKBtXUS93UVEHm05ApirEaD1lXNqr3cTozps';

async function getEpic(){
    let response = await fetch(`https://api.nasa.gov/EPIC/api/natural?api_key=${api_key}`);
    let data = await response.json();
    arrayData = data;
    arrayData = arrayData.slice(0, 8);
    arrayData.forEach(element => {
        section.style.height = 'auto';
        epic.innerHTML += `
        <div class="col-md-4 col-lg-3">
            <div class="card mb-4">
                <img src="https://epic.gsfc.nasa.gov/archive/natural/${element.date.split(' ')[0].replace(/-/g, '/')}/png/${element.image}.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${element.caption}</p>
                    <div class="d-flex justify-content-between align-items-center"> 
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                        <small class="text-muted">${element.date}</small>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
}

getEpic();
