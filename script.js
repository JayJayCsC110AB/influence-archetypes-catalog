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
    modern: "Zendaya",
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
  },
  {
    name: "The Jester",
    era1600s: "Null",
    modern: "IShowSpeed",
    current: "Null",
    image: "https://www.discoverbritain.com/_gatsby/file/bd1b8f924d70bbdc370cca1b1058331c/16th%20century%20french%20engraving%20of%20a%20jester.png",
    html: "the_jester.html",
  },
  {
    name: "The Orator",
    era1600s: "Null",
    modern: "Charlie Kirk",
    current: "Null",
    image: "https://www.meisterdrucke.uk/kunstwerke/1260px/Unknown_Artist_-_Roman_political_system_The_Senate_-_%28MeisterDrucke-932378%29.jpg",
    html: "the_orator.html",
  },
  {
    name: "The Builder",
    era1600s: "Null",
    modern: "Mark Rober",
    image: "https://jamesngart.com/img/art/Imperial-Inventor1.jpg",
    html: "the_builder.html"
  }
];

const archetypeMap = {};
archetypes.forEach(archetype => {
  [archetype.name, archetype.era1600s, archetype.modern, archetype.current].forEach(field => {
    if (field && field !== "Null") {
      archetypeMap[field.toLowerCase()] = archetype;
    }
  });
});

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
//Search bar Initialization
document.addEventListener("DOMContentLoaded", () => renderCards(archetypes));

document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase().trim();
  if (query === "") {
    renderCards(archetypes);
    return;
  }
  const found = archetypeMap[query];
  if (found) {
    renderCards([found]);
    return;
  }
  if (query.length < 4) {
    renderCards(archetypes);
    return;
  }
  const results = archetypes.filter(a =>
    a.modern && a.modern.toLowerCase().includes(query)
  );
  renderCards(results);
});
