export default function loadMenuPage() {
    const content = document.querySelector("#content");

    const img = document.createElement("img");
    img.src = '/assets/pizza.jpg';
    img.alt = 'A delicious pizza';
    img.style.width = '100%';
    img.style.height = '30vh';
    img.style.objectFit = 'cover';

    const headTitle = document.createElement("h1");
    headTitle.innerHTML = "Menu Pizza normal 30cm";

    const description1 = document.createElement("h2");
    description1.innerHTML = "Margherita"

    const ingredients1 = document.createElement("h3");
    ingredients1.innerHTML = "Tomato sauce, mozzarella (Italy), oregano BIO"

    const description2 = document.createElement("h2");
    description2.innerHTML = "Napoli"

    const ingredients2 = document.createElement("h3");
    ingredients2.innerHTML = "Tomato sauce, mozzarella (Italy), fresh pepperoni, olives, oregano BIO"

    content.appendChild(img);
    content.appendChild(headTitle);
    content.appendChild(description1);
    content.appendChild(ingredients1);
    content.appendChild(description2);
    content.appendChild(ingredients2);
}