const searchButton = document.querySelector(".search-button");
const searchInputBar = document.querySelector(".search-bar");

async function getWeather(city) {
    const res = await fetch(API_URL + API_KEY + city);

    if (res.status === 404) {
        console.log("Error fetching data");
        return;
    }

    if (res.staus === 200) {
        return;
    }

    document.querySelector('.city').innerHTML();

}