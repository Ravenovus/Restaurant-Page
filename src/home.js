//content is being queried in the main file
export function LoadHomePage(){
    let block = document.createElement("div");
    let title = document.createElement("h1");
    let page = document.createElement("div");
    let introCard = document.createElement("div");
    let outroCard = document.createElement("div");
    let about = document.createElement("p");
    let outro = document.createElement("p");
    let hourCard = document.createElement("div");
    let hourTitle = document.createElement("h3");
    let locationCard = document.createElement("div");
    let locationTitle = document.createElement("h3");
    let location = document.createElement("p");

    let sunday = document.createElement("p");
    let tuesday = document.createElement("p");
    let wednesday = document.createElement("p");
    let thursday = document.createElement("p");
    let friday  = document.createElement("p");


    block.classList.add("contentBlock");
    title.textContent = "THE RESTAURANT";
    page.classList.add("page");
    introCard.classList.add("card");
    hourCard.classList.add("card");
    locationCard.classList.add("card");
    outroCard.classList.add("card");
    about.id = "about";
    outro.id = "about";

    about.textContent = `This reastaurant is actually a fictional one,\ 
                         it was created entirely for the purposes of\
                         the TOP course. Purpose of current project\
                         is to practice and learn the usage of\
                         webpack as well as import-export between\
                         multiple JS files. I think this paragraph\
                         is long enough to constitute an introduction\
                         section on the page`;
    
    outro.textContent = `P.S the website is not aesthetically pleasing\
                         because the visuals were never part of the equation.`;


    hourTitle.textContent = "Hours:";
    sunday.textContent = "Sunday: 16:00 - 2:00";
    tuesday.textContent = "Tuesday: 16:00 - 2:00"
    wednesday.textContent = "Wednesday: 16:00 - 2:00";
    thursday.textContent = "Thursday: 18:00 - 3:00";
    friday.textContent = "Friday: 14:00 - 00:00";

    locationTitle.textContent = "Location:";
    location.textContent = "Somewhere in space";

    locationCard.appendChild(locationTitle);
    locationCard.appendChild(location);

    outroCard.appendChild(outro);
    introCard.appendChild(about);

    hourCard.appendChild(hourTitle);
    hourCard.appendChild(sunday);
    hourCard.appendChild(tuesday);
    hourCard.appendChild(wednesday);
    hourCard.appendChild(thursday);
    hourCard.appendChild(friday);

    page.appendChild(introCard);
    page.appendChild(hourCard);
    page.appendChild(locationCard);
    page.appendChild(outroCard);

    block.appendChild(title);
    block.appendChild(page);

    return(block);


}

