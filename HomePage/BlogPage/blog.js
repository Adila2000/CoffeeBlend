function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  
  const header = document.querySelector('.compNav');
  console.log(header);
  
  if (screen.width >= 751) {
    document.addEventListener('scroll', (e) => {
      if (window.scrollY > 300) {
        header.style.display = 'block';
        header.style.position = 'sticky';
        header.style.top = '0';
        header.style.transform = 'translateY(0%)';
        header.style.backgroundColor = 'black';
      } else {
        header.style.transform = 'translateY(-100%)';
        header.style.position = "absolute";
        header.style.backgroundColor = "transparent";
      }
  
      if (window.scrollY < 108) {
        header.style.transform = 'translateY(0%)';
      }
    })
  } else {
    header.style.display = 'none !important';
  }