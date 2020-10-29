// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  */



  // Step 1
  // Created a component
  function menuMaker(){

    // Created elements needed, in this case a div and an unordered list
    const menuDiv = document.createElement('div');
    const menuList = document.createElement('ul');

    // Added a class to the div called 'menu'
    menuDiv.classList.add('menu');

    // Made the div menuDiv wrap around the ul menuList 
    menuDiv.appendChild(menuList);

    // Step 2
    // menuItems loops through 
    menuItems.forEach(items => {
      const listItem = document.createElement('li'); // Created variable listItem that's assigned to newly created element li
      listItem.textContent = items; // Added text to listItem
      menuList.appendChild(listItem); // Made the div menuList wrap around the li listItem
    });

    // Step 3
    // Created variable menuButton that's assigned to selected class 'menu-button'
    const menuButton = document.querySelector('.menu-button')

    // Step 4
    menuButton.addEventListener('click', () => { // Added event listener to menuButton using 'click'
    menuDiv.classList.toggle('menu-open'); // Give menuDiv the ability to toggle 'menu-open'
    })

    // Step 5
    // return the main newly created parent
    return menuDiv;

  }

  // Declared variable of header that selects the class 'header'
  const header = document.querySelector('.header')

  // Step 6

  // header wraps menuMaker function that's invoking menuItems
  header.append(menuMaker(menuItems))

  /*

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu-open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
  
*/
