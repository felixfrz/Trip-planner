
const weatherBitKey = "db6a6483599c429a86d07f6c8e51efbc";
const pixaBaykey = "18003247-f5a47149eb8544eb2fb6a3c8c";

const cityPic = async (city) =>{
const response = await fetch(
  `https://pixabay.com/api/?key=${pixaBaykey}&q=${city}&image_type=photo&min_width=300&min_height=300`
);
const data = await response.json();

return data;

}



const getWeather = async (city) =>{
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${weatherBitKey}`
    );
    const data = await response.json();
    return data;
  
}





// console.log(data.city_name);
// console.log(data.data[0].high_temp);
// console.log(data.data[0].low_temp);
// console.log(data.data[0].weather.icon);
// console.log(data.data[0].weather.description);


// console.log(data.hits[0].userImageURL);


