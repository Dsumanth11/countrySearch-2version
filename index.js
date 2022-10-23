let url = "https://apis.ccbp.in/countries-data";
let countriesobject;
document.getElementById("spinner").classList.remove("d-none");
let options = {
    method: "Get"
};
let inptele = document.getElementById("searchInput");
inptele.addEventListener("keyup", function() {
    document.getElementById("resultCountries").textContent = "";
    for (let each_country_data of countriesobject) {
        let namecountry = each_country_data;
        if (each_country_data.includes(inptele.value)) {
            createAndAppendCountries(each_country_data);
        }
    }
});

function createAndAppendCountries(data) {
    // console.log(data);
    let countrycardCountainer = document.createElement('div');
    document.getElementById("resultCountries").appendChild(countrycardCountainer);
    countrycardCountainer.classList.add("m-auto", "country-card", "col-11", "col-md-5", "d-flex", "flex-row");
    let div1Cont = document.createElement('div');
    countrycardCountainer.appendChild(div1Cont);
    let imgele = document.createElement("img");
    imgele.src = data.flag;
    imgele.classList.add("country-flag");
    div1Cont.appendChild(imgele);
    let div2Cont = document.createElement('div');
    countrycardCountainer.appendChild(div2Cont);
    let containerinsideDiv2 = document.createElement('div');
    div2Cont.appendChild(containerinsideDiv2);
    containerinsideDiv2.classList.add("p-3");
    let countryname = document.createElement("h1");
    countryname.classList.add("country-name");
    countryname.textContent = data.name;
    containerinsideDiv2.appendChild(countryname);
    let populationele = document.createElement("p");
    populationele.textContent = data.population;
    containerinsideDiv2.appendChild(populationele);
}
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        countriesobject = data;
        document.getElementById("spinner").classList.add("d-none");
        for (let each_country_data of data) {
            createAndAppendCountries(each_country_data);
        }
    });