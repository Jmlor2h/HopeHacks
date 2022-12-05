const submit = document.getElementById("submit");
const cityData = document.querySelector(".cityData");
const searchBar = document.getElementById("search");

function clearCity() {
  cityData.innerHTML = "";
};
const getCity = (query) => {
  // let url = `http://127.0.0.1:3000/${query}`;
  // if (query === undefined) url = `http://127.0.0.1:3000`;

  /*
    Example response:
    {
      "CO": {
        "concentration": 216.96,
        "aqi": 2
      },
      "NO2": {
        "concentration": 2.64,
        "aqi": 3
      },
      "O3": {
        "concentration": 60.8,
        "aqi": 55
      },
      "SO2": {
        "concentration": 0.47,
        "aqi": 0
      },
      "PM2.5": {
        "concentration": 5.03,
        "aqi": 16
      },
      "PM10": {
        "concentration": 5.14,
        "aqi": 4
      },
      "overall_aqi": 55
    }
​
  */
  /*
  [
    {
      "element: "CO",
      "value": {"concentration": 216.96,"aqi": 2}
    },
  ]
​
  arr[0].element == "CO",
  arr[0].value.concentration == 216.96
​
 */

  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)
  //   });

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b8c7b308d3msh5b11ef2c6240067p1b14e8jsn16d0721b371d',
      'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${query}`, options)
    .then(response => response.json())
    .then(data =>{
      // Object.keys(data) == ["CO", "NO2", "O3", ...]
      const listElements = Object.keys(data).map((k) => {
        // return data[k] would return an array of each
        // of the objects within data

        // for the first iteration of map:
        // k == "CO"
        // data[k] == {"concentration": 216.96,"aqi": 2}

        //const info;
        return `<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid row-gap-8 sm:grid-cols-3">
          <div class="text-center mb-2">
          <p class="font-bold text-deepGreen font-mukta">Element</p>
            <h6 class="text-4xl font-bold text-sage font-ptSans">${k}</h6>
          </div>
          <div class="text-center mb-2">
          <p class="font-bold text-deepGreen font-mukta">Concentration</p>
            <h6 class="text-3xl font-bold text-armyGreen font-ptSans">${data[k].concentration}</h6>
          </div>
          <div class="text-center mb-2">
          <p class="font-bold text-deepGreen font-mukta">AQI</p>
            <h6 class="text-3xl font-bold text-armyGreen font-ptSans">${data[k].aqi}</h6>
          </div>
        </div>
      </div>`;
      });

      for (let i = 0; i < listElements.length; i++) {
        if (i===6){break;}
        cityData.innerHTML += listElements[i];
      }
    })
    .catch((err) => {
      console.log("Error ocurred:", err);
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const query = searchBar.value;
  clearCity();
  getCity(query);

  setTimeout(() => {
    searchBar.value = "";
  }, 2000);
});