
let obj = [
    {
        name: "Germany",
        population: 81770900,
        region: "Europe",
        capital: "Berlin",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    },
    {
        name: "United States of America",
        population: 323947000,
        region: "Americas",
        capital: "Washington DC",
        url:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
    },
    {
        name: "Brazil",
        population: 206135893,
        region: "Americas",
        capital: 'Brasilia',
        url: "https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg",
    },
    {
        name:'Iceland',
        population:334300,
        region: 'Europe',
        capital:'Reykjavik',
        url:"https://cdn.britannica.com/85/1485-004-94C3DEDA/Flag-Iceland.jpg",
    },
    {
        name: 'Afghanistan',
        population: 27657145,
        region: 'Asia',
        capital: 'kabul',
        url: "https://dacq68pa0iusn.cloudfront.net/filters:upscale()/800x1262/AlliedFlag/WorldFlags/Afghanistan-World-Flag/afghanistan_flag-Afghanistan-Variation.jpg"
    },

]
 


function countryData(obj){
    for(i=0;i,5;i++){
const mainParent = document.createElement("div");
mainParent.setAttribute("class", "container");

const flagImage = document.createElement("div");
flagImage.setAttribute("class", "flag");
flagImage.innerHTML = `
<img class="image" src=${obj[i].url} alt="">
`

const information = document.createElement("div");
information.setAttribute("class", "info")
information.innerHTML =
`
<p class="head"> ${obj[i].name} </p>
<p class="sub"><span >Population:</span> ${obj[i].population}</p>
<p class="sub"> <span>Region:</span> ${obj[i].region}</p>
 <p class="sub"> <span> Capital:</span>${obj[i].capital}</p>
`
mainParent.append(flagImage , information);

document.body.append(mainParent);
    }
}

console.log(countryData(obj));
