export function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const heading = document.createElement('h1');
    heading.textContent = "Our Menu";
    content.appendChild(heading);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-grid');

    function createMenuItem(name, price, description) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');

        const itemName = document.createElement('h3');
        itemName.textContent = `${name} - ${price}`;

        const itemDesc = document.createElement('p');
        itemDesc.textContent = description;

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemDesc);

        return itemDiv;
    }

    const dish1 = createMenuItem("Truffle Mushroom Pasta", "$18", "Creamy fettuccine tossed with wild mushrooms and white truffle oil.");
    const dish2 = createMenuItem("Classic Bistro Burger", "$16", "Prime beef patty, aged cheddar, special house sauce, served with rosemary fries.");
    const dish3 = createMenuItem("Artisanal Avocado Toast", "$12", "Sourdough bread topped with smashed avocado, cherry tomatoes, and a poached egg.")

    menuContainer.appendChild(dish1);
    menuContainer.appendChild(dish2);
    menuContainer.appendChild(dish3);

    content.appendChild(menuContainer);

}