# Restaurant Page

A dynamic, modern restaurant website built from scratch using vanilla Javascript and structured with Webpack.

The main goal of this project was to practise separating code into independent modules and using Javascript to dynamically generate the entire user interface, rather than writing static HTML.

## Key Features
- ## Key Features
- **Single Page Application:** The website changes pages (Home, Menu, Contact) instantly when you click the tabs, without reloading the browser.
- **Completely Modular Architecture:** Every page has its own dedicated JavaScript file to keep the code organized and easy to maintain.
- **Automated Asset Management:** Uses Webpack to combine separate code files and automatically bundle them along with the CSS layout into a single production folder (`dist`).

## Technologies Used
- **JavaScript (ES6 Modules)** - For handling page layouts and tab-switching logic.
- **npm (Node Package Manager)** - For managing development dependencies.
- **Webpack & Webpack CLI** - For bundling code and assets.
- **HTML Webpack Plugin** - For generating the final HTML script injections automatically.
- **CSS & Style Loaders** - For importing styles directly into the JavaScript workflow.