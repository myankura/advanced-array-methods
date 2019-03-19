console.log(businesses)

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"


//create a vaiable for zipcode
let zipCodeProperty = "addressZipCode"
//add city, state code, and zip code
businesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
      ${business.addressCity}, ${business["addressStateCode"]} ${business[zipCodeProperty]}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});