const apiKey = "f245c8a120954c769a6e9f264f03dc3e";
const apiBaseURL = "https://api.spoonacular.com/recipes/complexSearch"

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const resultsContainer = document.getElementById("results-container");


function showDetails(event) {
    event.preventDefault();

    if(input.value === "") {
        return;
    }

    //const apiURL = `${apiBaseURL}?apiKey=${apiKey}&query=${input.value}}`;

    axios.get(apiBaseURL, {
        params: {
            apiKey: apiKey,
            query: input.value
        }
    })
    .then(response => {
        resultsContainer.innerHTML = '';

        response.data.results.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipeCard');

            const recipeImg = document.createElement('img');
            recipeImg.src = recipe.image;

            const recipeTitle = document.createElement('h2');
            recipeTitle.innerHTML = recipe.title;

            recipeDiv.appendChild(recipeImg);
            recipeDiv.appendChild(recipeTitle);

            resultsContainer.appendChild(recipeDiv);
        })
    })
    .catch(error => console.error(error))
}

form.addEventListener('submit', showDetails);