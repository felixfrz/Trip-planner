const form = document.querySelector("form");
let image = document.querySelector(".image");
let second = document.querySelector(".second-details");
let imageTwo = document.querySelector('.image2');
console.log(image);

let date = new Date();
let dat = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
console.log(dat);

// updateUiPic
let updateUiPic = (data) => {
  picDetails = data.picDetails;
  console.log(picDetails);
  image.innerHTML = `<img style="width:300px; height:300px" class="shadow-lg rounded img-rounded img-responsive" src=${picDetails.hits[0].largeImageURL} alt="">`;
    imageTwo.innerHTML = `<div class="image img-fluid image2">
                        <img style="width:250px; height:250px" class="shadow-lg img-fluid rounded" src=${picDetails.hits[1].largeImageURL} alt="">
                        </div>`;


};

// updateUiWaether
let updateUiWeather = (data) => {
  // console.log(data);
  // picDetails = data.picDetails;
  weatherDetails = data.weatherDetails;

  second.innerHTML = `
            <h3 class="text-center pt-5 h2 trip">My Trip to ${weatherDetails.city_name}, ${weatherDetails.country_code}.</h3>
                    <h3 class="text-center h4 mt-3"">Departing: ${departDate}</h3>
                    <span>
            <button type="button" class="btn btn-primary btn-sm mt-3">
              Save Trip
            </button>
          </span>
                    <div><img src="./img/icons/${weatherDetails.data[0].weather.icon}.png" alt=""></div>
                    <span></span>
                    <h2>Typical weather</h2>
                    <h4>Maximum Temp: ${weatherDetails.data[0].max_temp}&deg;</h4>
                    <h3>Minimum Temp: ${weatherDetails.data[0].min_temp}&deg;</h3>
                    <p>Description: ${weatherDetails.data[0].weather.description}</p>
                    <p class="pb-5">Time Zone: ${weatherDetails.timezone}</p>
    `;
};

//updated detials

let updatePic = async (city) => {
  let picDetails = await cityPic(city);

  return { picDetails };
};

let updateWet = async (city) => {
  let weatherDetails = await getWeather(city);

  return { weatherDetails };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let city = form.city.value.trim();

  departDate = form.date.value;

  form.reset();

  updatePic(city).then((data) => {
    console.log(data);
    updateUiPic(data);
  });

  updateWet(city).then((data) => {
    console.log(data);
    updateUiWeather(data);
  });
});
