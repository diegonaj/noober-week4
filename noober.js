window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  // Create a variable that returns the class = ride
  let ride0 = document.querySelector(`.rides`)

  // Erase the html
  ride0.innerHTML=``

  // Loop through the rides data
  for (let i=0; i<json.length; i++){

  // Create a variable 
  let item = json[i]

    // Noober Purple (if was requested)

    if (item.purpleRequested == true) {ride0.insertAdjacentHTML(`beforeend`,    
    `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober Purple</span>
  </h1>

  <div class="border-4 border-gray-500 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${item.passengerDetails.first}${item.passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${item.passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${item.numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${item.pickupLocation.address}</p>
        <p>${item.pickupLocation.city}, ${item.pickupLocation.state} ${item.pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${item.dropoffLocation.address}</p>
        <p>${item.dropoffLocation.city}, ${item.dropoffLocation.state}, ${item.dropoffLocation.zip}</p>
      </div>
    </div>
  </div>`
    )

      // Noober XL (when number of passengers > 3)

  } else if (item.numberOfPassengers > 3){ride0.insertAdjacentHTML(`beforeend`, 
  `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober XL</span>
    </h1>
    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${item.passengerDetails.first}${item.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${item.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${item.numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${item.pickupLocation.address}</p>
          <p>${item.pickupLocation.city}, ${item.pickupLocation.state} ${item.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${item.dropoffLocation.address}</p>
          <p>${item.dropoffLocation.city}, ${item.dropoffLocation.state}, ${item.dropoffLocation.zip}</p>
        </div>
      </div>
    </div>`
  )

        //Else: Noober X

 } else {ride0.insertAdjacentHTML(`beforeend`,
    `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober X</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${item.passengerDetails.first}${item.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${item.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${item.numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${item.pickupLocation.address}</p>
          <p>${item.pickupLocation.city}, ${item.pickupLocation.state} ${item.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${item.dropoffLocation.address}</p>
          <p>${item.dropoffLocation.city}, ${item.dropoffLocation.state}, ${item.dropoffLocation.zip}</p>
        </div>
      </div>
    </div>`
    )
  }
 } 
})