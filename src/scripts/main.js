console.log(businesses)

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

//Lightning exercise 1
// //create a vaiable for zipcode
// let zipCodeProperty = "addressZipCode"
// //add city, state code, and zip code
// businesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//       ${business.addressCity}, ${business["addressStateCode"]} ${business[zipCodeProperty]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });


// Array to contain all the New York businesses
//An example of how to use the filter()
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
//     return inNewYork
//   })

// //create a vaiable for zipcode
// let zipCodeProperty = "addressZipCode"
//   newYorkBusinesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//       ${business.addressCity}, ${business["addressStateCode"]} ${business[zipCodeProperty]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

//second lightning exercise that is filtering by industry === Manufacturing
const manufacturingBusiness = businesses.filter(business => {
    let inManufacturing = false
    if (business.companyIndustry === "Manufacturing") {
        inManufacturing = true
    }
    return inManufacturing
  })

//create a vaiable for zipcode
let zipCodeProperty = "addressZipCode"
manufacturingBusiness.forEach(business => {
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