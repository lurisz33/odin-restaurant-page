export default function loadAboutPage() {
    const content = document.querySelector("#content");

    const img = document.createElement("img");
    img.src = '/assets/pizza.jpg';
    img.alt = 'A delicious pizza';
    img.style.width = '100%';
    img.style.height = '30vh';
    img.style.objectFit = 'cover';

    const headTitle = document.createElement("h1");
    headTitle.innerHTML = "About me";

    const description = document.createElement("h3");
    description.innerHTML = "Young computer scientist with special love for pizza"

    content.appendChild(img);
    content.appendChild(headTitle);
    content.appendChild(description);
}