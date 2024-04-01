# Dropdown Module

A simple, lightweight JavaScript module for creating dropdown menus. It allows you to easily add interactive dropdown menus to your web projects with minimal effort.

## Installation

You can install this module via npm:

```bash
npm install easy-dropdown-menu
```

## Usage
After installing the module, you can use it in your project as follows:

## Importing the Module
First, import the Dropdown module into your file.

```javascript
import Dropdown from 'easy-dropdown-menu';
```

## Initializing a Dropdown
To initialize a dropdown, simply create a new instance of Dropdown and pass the selector of your dropdown element along with any optional configuration options.

For example, given the following HTML structure:

```html
<li class="dropdown">
    <a href="#" class="dropbtn">Dropdown 1</a>
    <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
    </div>
</li>
<li class="dropdown">
    <a href="#" class="dropbtn">Dropdown 2</a>
    <div class="dropdown-content">
        <a href="#">Link 4</a>
        <a href="#">Link 5</a>
        <a href="#">Link 6</a>
    </div>
</li>
```

You can initialize the dropdown with:

```javascript
new Dropdown('.dropdown')
```

## Styling
The Dropdown module does not come with predefined styles. You will need to add your own CSS to style your dropdown. Here is a simple example:

```css
/* Style for the dropdown content (the links) */
.dropdown-content {
    display: none; /* Hide the dropdown menu */
    position: absolute;
    background-color: #f9f9f9; /* Light grey */
    min-width: 160px; /* Minimum width */
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

/* Style for the links within the dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Change the color of the links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu when the dropdown button is focused (for accessibility) */
.dropbtn:focus + .dropdown-content {
    display: block;
}

/* Show the dropdown menu when the 'is-active' class is present */
.dropdown-content.is-active {
    display: block;
}

```


## Contributing
Contributions are always welcome! Please create an issue or submit a pull request if you'd like to help improve this module.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.