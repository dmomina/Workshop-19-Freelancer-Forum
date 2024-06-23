/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

const possibleNames = ["Alice", "Bob", "Carol", "David"];
const possibleOccupations = ["writer", "teacher", "programmer", "driver"];
  
  // `setInterval` will call `addShape` every 1000 milliseconds (1 second)
  // and return an interval ID that we can use to stop the interval later.
  // Calling `clearInterval(addShapeIntervalId)` will stop the interval.
  const addFreeLancerIntervalId = setInterval(addFreelancer, 1000);
  
  render(); // We call this function once to render the initial state
  
  /**
   * Update the DOM to reflect the current state.
   * The term "render" is often used to describe this process.
   */
  function render() {
    // Render the squares
    const freelancerList = document.querySelector("#freelancers");
    const listings = freelancers.map((person) => {
      const newListing = document.createElement("p");
      newListing.innerText = `Name:${person.name} Occupation:${person.occupation} Price:$${person.price}`;
      return newListing;
    });
    freelancerList.replaceChildren(...listings);
    const avgPriceElement = document.querySelector("#avg-price");
    const averagePrice = calculateAveragePrice();
    avgPriceElement.innerText = averagePrice.toFixed(2);
    } 

  
  
  /**
   * Add a random shape to the `shapes` array
   */
  function addFreelancer() {
    // TODO: Randomize the size of the shape
    const randomName = possibleNames[Math.floor(Math.random() * possibleNames.length)];
    const randomOccupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 1;

    freelancers.push({ name: randomName, occupation: randomOccupation, price: randomPrice });
  
    render();
  
    // TODO: Stop adding shapes if we've reached the maximum number of shapes
  }
  function calculateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    return total / freelancers.length;
}

const addFreelancerIntervalId = setInterval(addFreelancer, 5000); 

render();