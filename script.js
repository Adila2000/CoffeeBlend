function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  let fullPicturesImages = document.querySelector(".fullPicturesImages");
  let hiddenDiv = document.querySelector(".hiddenDiv");
  function hiddenAgain() {
    hiddenDiv.style.display ="none";
  }
  function showHiddenDiv() {
    hiddenDiv.style.display = "block";
  }

