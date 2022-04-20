const apiURL = 'https://randomuser.me/api/'

function fetchFromAPI() {

    $('count')
    const a=document.getElementById('gender')?.value;
    const b=document.getElementById('count')?.value;
    const nationality   = document.getElementById('nationality')?.value;

    let url = new URL(apiURL);
    let param = {}

    gender      ? param.gender = gender             : null;
    count       ? param.results = count             : null;
    nationality ? param.nationality = nationality   : null;

    console.log(param);

    url.search = new URLSearchParams(param).toString();

    fetch(url)
        .then(response => response.json())
        .then(data => renderUserData(data))
        .catch(error => alert(error));
}

function renderUserData(data) {
    const cardElem = document.querySelector('.cards'); 


    data.results.forEach(user => {
        cardElem.innerHTML += `
        <div class = "card">
            <div class = "card-head">
                <a href = "#"><i class = "fas fa-envelope"></i> Email</a>
                <div class = "user-image">
                    <img src= "${user.picture.large}" alt = "">
                </div>
            </div>

            <div class = "card-body">
                <div class = "user-post-address">
                    <div>
                        <span>${user.location.street.number}</span><span>Street Address</span>
                    </div>
                    <div>
                        <span>20054</span><span>Postcode</span>
                    </div>
                    <div>
                        <span>Esplanadi</span><span>Street Name</span>
                    </div>
                </div>

                <div class = "user-name">
                    <span class = "user-name-title">${user.name.title}</span>
                    <span class = "user-name-full">${user.name.first} ${user.name.last}</span>
                    <span class = "user-age">${user.dob.age}</span>
                </div>

                <div class = "user-location-address">
                    <span>Kouvola, Satakunta, Finland</span>
                </div>
            </div>

            <div class = "card-foot">
                <div class = "user-contact-info">
                    <span>
                        <i class = "fas fa-phone"></i> 07-567-990
                    </span>
                    <span>
                        <i class = "fa-solid fa-mobile-button"></i> 044-391-36-63
                    </span>
                </div>
            </div>
        </div>
        `
    });

}


function onResponseError(response) {
    if (response.ok) {
        console.log('OK');
    } else {
        if (response.status === 404) {
            console.log('BAD');
        }  
    }
}

function onError(error) {
    alert(error);
}

document.getElementById('generate-btn').addEventListener('click', () => {
    fetchFromAPI();
});