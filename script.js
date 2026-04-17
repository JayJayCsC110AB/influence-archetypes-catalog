/*********
 * build an array of the categories of different types of influencers, such as the philosopher type, trendsetter type, storyteller type, etc...
 * so this will be easier to store each into the html this will output the category which will have 2 different funtions
 * Homepage Browser function:
 *          this first function on the home page will be viewed by clicking on the category 
 *          of archetypes It will display all archetypes inside that category
 * Search Bar function:
 *      the second function will be searching the creator which will match it 
 *      to the archetype category, then display the related archetype result.
 * 
 * Homepage Browser Function: Looping through each index of archetypes will have the time complexity of O(n) and space complexity of O(1)
 * Search Bar Function: this will map the modern day influencer with the era of 1600's the time complexity will be O(1) since a hashmap has O(1) lookup
 * space complexity will be O(n)
 */

//Homepage Browser function

//initializing array
const archetypes = [
  {
    name: "The Philosopher",
    era1600s: "René Descartes",
    modern: "Jordan Peterson",
    current: "Sense-Maker",
    image: "https://cdn.britannica.com/96/142296-050-EF68BC38/Aristotle-types-reasoning.jpg",
    html: "the-philosopher.html"
  },
  {
    name: "The Trendsetter",
    era1600s: "Louis XIV",
    modern: "IShowSpeed",
    current: "Viral Personality",
    image: "https://upwardtrendmanagementservices.com/wp-content/uploads/2018/05/trendsetter400x300.jpg",
    html: "the_trendsetter.html"
  },
  {
    name: "The Storyteller",
    era1600s: "William Shakespeare",
    modern: "MrBeast",
    current: "Narrative Creator",
    image: "https://morningbrew.com/cdn-cgi/image/width=412,height=275,quality=80,format=auto,dpr=2.625/https://storage.morningbrew.com/image/2025-12-15/image-087245a370915159d5c3ddc37efa8d47cddc54cc-1500x1000-png/storytellerillo.png",
    html: "the-storyteller.html"
  }
];

function renderCards(list) {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = "";
  // if list is empty throw an exception
  if (list.length === 0) {
    catalog.innerHTML = "<p style='text-align:center;color:#999;'>No archetypes found.</p>";
    return;
  }

  //loop through elements in the html file and initialize the cards attributes
  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${item.name}</h2>
      ${item.image ? `<img class="card-img" src="${item.image}" alt="${item.name}">` : ""}
       <a href="${item.html}">
            <button class = "card-button">View Page</button>
       </a>
      
    `;
    catalog.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => renderCards(archetypes));

document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = archetypes.filter(item =>
    item.name.toLowerCase().includes(query)
  );
  renderCards(filtered);
});

//Search bar Initialization