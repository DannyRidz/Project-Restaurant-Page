export function loadHome() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    const description = document.createElement('p');
    const hours = document.createElement('div');

    headline.textContent = "The Cozy Corner Bistro";
    description.textContent = "Experience authentic, home-cooked comfort food crafted with love and fresh, locally sourced ingredients.";
    hours.textContent = "Open Daily: 8:00 AM - 10:00 PM";

    content.appendChild(headline);
    content.appendChild(description);
    content.appendChild(hours);
}