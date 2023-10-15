function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  const allPictures = document.querySelector('.fullPictures').children;

  function onHoverImg(index) {
    const findedELement = allPictures[index];
    const hiddenEl = findedELement.querySelector('.hiddenDiv');

      hiddenEl.style.display = 'block';
  }

  function onHoverOutImg(index) {
    const findedELement = allPictures[index];
    const hiddenEl = findedELement.querySelector('.hiddenDiv');

      hiddenEl.style.display = 'none';
  }



let drinkButton = document.querySelector(".drinkButton");
let dishButton = document.querySelector(".dishButton");
let drinkMenu = document.querySelector(".drinkMenu");
let dishMenu = document.querySelector(".dishMenu");
let dessertMenu = document.querySelector(".dessertMenu");
let dessertButton = document.querySelector(".dessertButton");
let menu = document.querySelector(".menu");

if (screen.width <= 751) {

    function showDrinkMenu() {
    dishMenu.style.display = "none";
    menu.style.display = "flex !important";
    menu.style.flexDirection = "column !important";
    dessertMenu.style.display = "none";
    drinkButton.style.backgroundColor = "#c49b63";
    drinkButton.style.color = "black";
    dishButton.style.backgroundColor = 'transparent';
    dishButton.style.color = "#c49b63";
    dishButton.style.borderBottom = "1px solid #c49b63";
    dessertButton.style.backgroundColor = 'transparent';
    dessertButton.style.color = "#c49b63";
    dessertButton.style.borderBottom = "1px solid #c49b63";
    }

    function showDishMenu() {
      dishMenu.style.display = "block";
      drinkMenu.style.display = "none";
      dessertMenu.style.display = "none";
      dishButton.style.backgroundColor = "#c49b63";
      dishButton.style.color = "black";
      drinkButton.style.backgroundColor = 'transparent';
      drinkButton.style.color = "#c49b63";
      drinkButton.style.borderBottom = "1px solid #c49b63";
      dessertButton.style.backgroundColor = 'transparent';
      dessertButton.style.color = "#c49b63";
      dessertButton.style.borderBottom = "1px solid #c49b63";
      }

      function showDessertMenu() {
        dishMenu.style.display = "none";
        drinkMenu.style.display = "none";
        dessertMenu.style.display = "block";
        dessertMenu.style.flexDirection = "column !important";
        dessertButton.style.backgroundColor = "#c49b63";
        dessertButton.style.color = "black";
        dishButton.style.backgroundColor = 'transparent';
        dishButton.style.color = "#c49b63";
        dishButton.style.borderBottom = "1px solid #c49b63";
        drinkButton.style.backgroundColor = 'transparent';
        drinkButton.style.color = "#c49b63";
        drinkButton.style.borderBottom = "1px solid #c49b63";
        }
} else {
  function showDrinkMenu() {
    dishMenu.style.display = "none";
    drinkMenu.style.display = "flex";
    dessertMenu.style.display = "none";
    menu.style.justifyContent = "space-between";
    drinkButton.style.backgroundColor = "#c49b63";
    drinkButton.style.color = "black";
    dishButton.style.backgroundColor = 'transparent';
    dishButton.style.color = "#c49b63";
    dishButton.style.borderBottom = "1px solid #c49b63";
    dessertButton.style.backgroundColor = 'transparent';
    dessertButton.style.color = "#c49b63";
    dessertButton.style.borderBottom = "1px solid #c49b63";
  }

  function showDishMenu() {
    dishMenu.style.display = "flex";
    drinkMenu.style.display = "none";
    dessertMenu.style.display = "none";
    dishMenu.style.justifyContent = "space-between";
    dishButton.style.backgroundColor = "#c49b63";
    dishButton.style.color = "black";
    drinkButton.style.backgroundColor = 'transparent';
    drinkButton.style.color = "#c49b63";
    drinkButton.style.borderBottom = "1px solid #c49b63";
    dessertButton.style.backgroundColor = 'transparent';
    dessertButton.style.color = "#c49b63";
    dessertButton.style.borderBottom = "1px solid #c49b63";
  }

  function showDessertMenu() {
    dessertMenu.style.display = "flex";
    drinkMenu.style.display = "none";
    dishMenu.style.display = "none";
    dessertMenu.style.justifyContent = "space-between";
    dessertButton.style.backgroundColor = "#c49b63";
    dessertButton.style.color = "black";
    drinkButton.style.backgroundColor = 'transparent';
    drinkButton.style.color = "#c49b63";
    drinkButton.style.borderBottom = "1px solid #c49b63";
    dishButton.style.backgroundColor = 'transparent';
    dishButton.style.color = "#c49b63";
    dishButton.style.borderBottom = "1px solid #c49b63";
  }
}

