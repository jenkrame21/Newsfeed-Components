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

  // const 

  function menuMaker(array){

    const menuDiv = document.createElement('div');
    const menuUL = document.createElement('ul');
    const studentsUL = document.createElement('li');
    const facultyUL = document.createElement('li');
    const whatsNewUL = document.createElement('li');
    const techTrendsUL = document.createElement('li');
    const musicUL = document.createElement('li');
    const logOutUL = document.createElement('li');

    menuDiv.classList.add('menu');

    menuDiv.appendChild(menuUL);
    menuUL.appendChild(studentsUL);
    menuUL.appendChild(facultyUL);
    menuUL.appendChild(whatsNewUL);
    menuUL.appendChild(techTrendsUL);
    menuUL.appendChild(musicUL);
    menuUL.appendChild(logOutUL);

    studentsUL.textContent = array.students
    facultyUL.textContent = array.faculty
    whatsNewUL.textContent = array.whatsNew
    techTrendsUL.textContent = array.techTrends
    musicUL.textContent = array.music
    logOutUL.textContent = array.logOut


    menuDiv.addEventListener('click', () => { // created eventListener on element we want to 'click'
    menuDiv.classList.toggle('menu--open');
    })

    return menuDiv;

  }

  const menuButton = document.querySelector('.menu-button')

  menuItems.map(item => {

    const connector = menuMaker(item)
  
    menuButton.appendChild(connector)
    console.log(connector)
    
  });

  /*

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
