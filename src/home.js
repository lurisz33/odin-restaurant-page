export default function loadHomePage() {
    const content = document.querySelector("#content");

    const img = document.createElement("img");
    img.src = '/assets/pizza.jpg';
    img.alt = 'A delicious pizza';
    img.style.width = '100%';
    img.style.height = '30vh';
    img.style.objectFit = 'cover';

    const headTitle = document.createElement("h1");
    headTitle.innerHTML = "Pizzeria Lurisz";

    const description = document.createElement("h3");
    description.innerHTML = "A pizza-ish experience like no other!"

    content.appendChild(img);
    content.appendChild(headTitle);
    content.appendChild(description);
}