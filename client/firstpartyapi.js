const dataLocation = document.getElementById("dataLocation");

function loadJSON() {
  fetch("solutions.json") // grabs json data
    .then((response) => response.json()) // sends a response and returns promise (parses data from json)
    .then((data) => {
      let html = ""; // sets html variable
      data.solutions.forEach((solutions) => {
        // runs for each product array/object.
        html += ` 

            <li class="text-deepGreen font-ptSans lg:w-1/3 mb-1 w-1/2">${solutions.heading}<br>${solutions.description}<br><a class="h-5 px-2 py-1 m-1 text-white font-mukta transition-colors duration-300 transform bg-sage rounded-md hover:bg-grayGreen focus:outline-none focus:ring ring-armyGreen" href="${solutions.link}">Learn More</a></li> <br>`; //html and data
      });
      dataLocation.innerHTML = html; // loads html and data into .product-list class.
    });
}
