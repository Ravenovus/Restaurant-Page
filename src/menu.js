//content is being queried in the main file
export function LoadMenu(){
    let block = document.createElement("div"); 
    let title = document.createElement("h1");
    let page = document.createElement("div");
    let drinkTitle = document.createElement("h2");
    let foodTitle = document.createElement("h2");
    let drinkPair = document.createElement("div");
    let foodPair = document.createElement("div");
    let nonAlcoholicTitle = document.createElement("h3");
    let alcoholicTitle = document.createElement("h3");
    let mainDishTitle = document.createElement("h3");
    let sideDishTitle = document.createElement("h3");
    let nonAlcoholicCard = document.createElement("div");
    let alcoholicCard = document.createElement("div");
    let mainDishCard = document.createElement("div");
    let sideDishCard = document.createElement("div");

    let beer = document.createElement("div");
    let whisky = document.createElement("div");
    let vodka = document.createElement("div");
    let sake = document.createElement("div");

    let water = document.createElement("div");
    let juice = document.createElement("div");
    let coffee = document.createElement("div");
    let tea = document.createElement("div");

    let burger = document.createElement("div");
    let sandwich = document.createElement("div");
    let steak = document.createElement("div");
    let soup = document.createElement("div");

    let fries = document.createElement("div");
    let onionRings = document.createElement("div");
    let sweetPotato = document.createElement("div");
    let edamame = document.createElement("div");

    let beerName = document.createElement("p");
    let beerPrice = document.createElement("p");

    let whiskyName = document.createElement("p");
    let whiskyPrice = document.createElement("p");

    let vodkaName = document.createElement("p");
    let vodkaPrice = document.createElement("p");

    let sakeName = document.createElement("p");
    let sakePrice = document.createElement("p");

    let waterName = document.createElement("p");
    let waterPrice = document.createElement("p");

    let juiceName = document.createElement("p");
    let juicePrice = document.createElement("p");

    let teaName = document.createElement("p");
    let teaPrice = document.createElement("p");

    let coffeeName = document.createElement("p");
    let coffeePrice = document.createElement("p");

    let burgerName = document.createElement("p");
    let burgerPrice = document.createElement("p");

    let sandwichName = document.createElement("p");
    let sandwichPrice = document.createElement("p");

    let steakName = document.createElement("p");
    let steakPrice = document.createElement("p");

    let soupName = document.createElement("p");
    let soupPrice = document.createElement("p");

    let friesName = document.createElement("p");
    let friesPrice = document.createElement("p");

    let onionRingsName = document.createElement("p");
    let onionRingsPrice = document.createElement("p");

    let sweetPotatoName = document.createElement("p");
    let sweetPotatoPrice = document.createElement("p");

    let edamameName = document.createElement("p");
    let edamamePrice = document.createElement("p");

    block.classList.add("contentBlock");
    page.classList.add("page");
    drinkPair.classList.add("pair");
    foodPair.classList.add("pair");
    nonAlcoholicCard.classList.add("card");
    alcoholicCard.classList.add("card");
    mainDishCard.classList.add("card");
    sideDishCard.classList.add("card");

    beer.classList.add("pair");
    whisky.classList.add("pair");
    vodka.classList.add("pair");
    sake.classList.add("pair");
    water.classList.add("pair");
    juice.classList.add("pair");
    tea.classList.add("pair");
    coffee.classList.add("pair");
    burger.classList.add("pair");
    sandwich.classList.add("pair");
    steak.classList.add("pair");
    soup.classList.add("pair");
    fries.classList.add("pair");
    onionRings.classList.add("pair");
    sweetPotato.classList.add("pair");
    edamame.classList.add("pair");




    title.textContent = "THE MENU";
    drinkTitle.textContent = "Drinks:";
    foodTitle.textContent = "Food:";
    nonAlcoholicTitle.textContent = "Non Alcoholic:";
    alcoholicTitle.textContent = "Alcohol:";
    mainDishTitle.textContent = "Main Dishes:";
    sideDishTitle.textContent = "Side Dishes:";

    beerName.textContent ="Beer";
    beerPrice.textContent = "10$";
    beer.appendChild(beerName);
    beer.appendChild(beerPrice);

    whiskyName.textContent = "Whisky";
    whiskyPrice.textContent = "5$";
    whisky.appendChild(whiskyName);
    whisky.appendChild(whiskyPrice);

    vodkaName.textContent = "Vodka";
    vodkaPrice.textContent = "5$";
    vodka.appendChild(vodkaName);
    vodka.appendChild(vodkaPrice);
    
    sakeName.textContent = "Sake";
    sakePrice.textContent = "8$";
    sake.appendChild(sakeName);
    sake.appendChild(sakePrice);

    waterName.textContent = "Water";
    waterPrice.textContent = "Free";
    water.appendChild(waterName);
    water.appendChild(waterPrice);

    juiceName.textContent = "Orange Juice";
    juicePrice.textContent = "3$";
    juice.appendChild(juiceName);
    juice.appendChild(juicePrice);

    coffeeName.textContent = "Coffee";
    coffeePrice.textContent = "5$";
    coffee.appendChild(coffeeName);
    coffee.appendChild(coffeePrice);

    teaName.textContent = "Black Tea";
    teaPrice.textContent = "5$";
    tea.appendChild(teaName);
    tea.appendChild(teaPrice);

    burgerName.textContent = "Burger";
    burgerPrice.textContent = "18$";
    burger.appendChild(burgerName);
    burger.appendChild(burgerPrice);

    sandwichName.textContent = "Ham Sandwich";
    sandwichPrice.textContent = "15$";
    sandwich.appendChild(sandwichName);
    sandwich.appendChild(sandwichPrice);

    steakName.textContent = "Steak";
    steakPrice.textContent = "20$";
    steak.appendChild(steakName);
    steak.appendChild(steakPrice);

    soupName.textContent = "Soup";
    soupPrice.textContent = "12$";
    soup.appendChild(soupName);
    soup.appendChild(soupPrice);

    friesName.textContent = "Fries";
    friesPrice.textContent = "6$";
    fries.appendChild(friesName);
    fries.appendChild(friesPrice);

    onionRingsName.textContent = "Onion Rings";
    onionRingsPrice.textContent = "6$";
    onionRings.appendChild(onionRingsName);
    onionRings.appendChild(onionRingsPrice);

    sweetPotatoName.textContent = "Sweet Potato Fries";
    sweetPotatoPrice.textContent = "8$";
    sweetPotato.appendChild(sweetPotatoName);
    sweetPotato.appendChild(sweetPotatoPrice);

    edamameName.textContent = "Edamame";
    edamamePrice.textContent = "7$";
    edamame.appendChild(edamameName);
    edamame.appendChild(edamamePrice);

    alcoholicCard.appendChild(alcoholicTitle);
    alcoholicCard.appendChild(beer);
    alcoholicCard.appendChild(vodka);
    alcoholicCard.appendChild(whisky);
    alcoholicCard.appendChild(sake);

    nonAlcoholicCard.appendChild(nonAlcoholicTitle);
    nonAlcoholicCard.appendChild(water);
    nonAlcoholicCard.appendChild(juice);
    nonAlcoholicCard.appendChild(coffee);
    nonAlcoholicCard.appendChild(tea);

    mainDishCard.appendChild(mainDishTitle);
    mainDishCard.appendChild(burger);
    mainDishCard.appendChild(sandwich);
    mainDishCard.appendChild(steak);
    mainDishCard.appendChild(soup);

    sideDishCard.appendChild(sideDishTitle);
    sideDishCard.appendChild(fries);
    sideDishCard.appendChild(onionRings);
    sideDishCard.appendChild(sweetPotato);
    sideDishCard.appendChild(edamame);

    drinkPair.appendChild(alcoholicCard);
    drinkPair.appendChild(nonAlcoholicCard);

    foodPair.appendChild(mainDishCard);
    foodPair.appendChild(sideDishCard);

    page.appendChild(drinkTitle);
    page.appendChild(drinkPair);
    page.appendChild(foodTitle);
    page.appendChild(foodPair);

    block.appendChild(title);
    block.appendChild(page);

    return block;

}