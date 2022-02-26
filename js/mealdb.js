const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchDetails(data.meals))
}

const searchDetails = meals =>{
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // console.log(meals);
    meals.forEach(meal => {
    const showDiv = document.createElement('div');
    showDiv.classList.add('col');
    if(meals.length == 0){
        // home work
    }
    showDiv.innerHTML = `
    <div onclick="foodItemId(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
    </div>
    `;
    searchResult.appendChild(showDiv);
    });

}

const foodItemId = async mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url);
    const data = await res.json();
    displayMeal(data.meals[0])


    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayMeal(data.meals[0]))

}

const displayMeal = idMeal =>{
    // console.log(idMeal);
    const mealIdDetails = document.getElementById('meal-id');
    mealIdDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${idMeal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Code : ${idMeal.idMeal}</h5>
      <p class="card-text">${idMeal.strInstructions.slice(0, 100)}</p>
      <a href="${idMeal.strYoutube}" class="btn btn-primary">Test Now</a>
    </div>`;
  mealIdDetails.appendChild(div);
}


