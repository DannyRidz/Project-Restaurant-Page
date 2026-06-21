export function loadContact() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const heading = document.createElement('h1');
    heading.textContent = "Contact Us";

    const contactCard = document.createElement('div');
    contactCard.classList.add('contact-card');

    const phone = document.createElement('p');
    phone.textContent = "📞 Phone: +673 234-5678";

    const email = document.createElement('p');
    email.textContent = "✉️ Email: hello@cozycornerbistro.com";

    const address = document.createElement('p');
    address.textContent = "📍 Location: Simpang 123, Jalan Gadong, Bandar Seri Begawan, Brunei"

    contactCard.appendChild(phone);
    contactCard.appendChild(email);
    contactCard.appendChild(address);

    content.appendChild(heading);
    content.appendChild(contactCard);
}