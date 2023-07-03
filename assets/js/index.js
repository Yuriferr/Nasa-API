let apod = document.getElementById('apod');
const api_key = 'glPcXKBtXUS93UVEHm05ApirEaD1lXNqr3cTozps';

function getApod(){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`).then((res) => {
        return res.json();
    }
    ).then((data) => {
        apod.style.backgroundImage = `url(${data.url})`;
        // limitar a quantidade de caracteres do explanation
        if(data.explanation.length > 300){
            data.explanation = data.explanation.substring(0, 300) + '...';
        }

        apod.innerHTML = `
            <div class="container d-flex flex-column text-light">
                <h1>${data.title}</h1>

                <p>${data.explanation}</p>
                
                <button class="btn btn-primary">Learn More</button>
            </div>
        `;
    }
    ).catch((err) => {
        console.log(err);
    }
    );
}

getApod();
