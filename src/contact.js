//content is being queried in the main file
export function LoadContact(){
    let block = document.createElement("div");
    let title = document.createElement("h1");
    let page = document.createElement("div");
    let contactOne = document.createElement("div");
    let contactTwo = document.createElement("div");
    let contactOneTitle = document.createElement("h3");
    let contactTwoTitle = document.createElement("h3");
    let contactOneName = document.createElement("p");
    let contactOneNumber = document.createElement("p");
    let contactOneEmail = document.createElement("p");
    let contactTwoName = document.createElement("p");
    let contactTwoNumber = document.createElement("p");
    let contactTwoEmail = document.createElement("p");

    block.classList.add("contentBlock");
    page.classList.add("page");
    contactOne.classList.add("card");
    contactTwo.classList.add("card");

    title.textContent = "Contact Us";
    contactOneTitle.textContent = "Owner";
    contactTwoTitle.textContent = "Manager";

    contactOneName.textContent = "Ownerson";
    contactOneNumber.textContent = "09823410673";
    contactOneEmail.textContent = "ownerson@definitelyrealemail.com";

    contactTwoName.textContent = "Managerio";
    contactTwoNumber.textContent ="08919788225";
    contactTwoEmail.textContent = "managerio@recyclingbinmail.com";

    contactOne.appendChild(contactOneTitle);
    contactOne.appendChild(contactOneName);
    contactOne.appendChild(contactOneNumber);
    contactOne.appendChild(contactOneEmail);

    contactTwo.appendChild(contactTwoTitle);
    contactTwo.appendChild(contactTwoName);
    contactTwo.appendChild(contactTwoNumber);
    contactTwo.appendChild(contactTwoEmail);

    page.appendChild(contactOne);
    page.appendChild(contactTwo);

    block.appendChild(title);
    block.appendChild(page);

    return block;
}