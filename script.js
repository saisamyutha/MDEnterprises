function modeChangeHandler () {
    const prevMode = document.body.getAttribute("class");
    if (prevMode === 'whiteMode') {
        document.body.className = 'blackMode';
        document.querySelector(".goaImg").src="images/whitegoa.png";
        document.querySelector(".modeImg").src="images/darksun.png";
    } else {
        document.body.className = 'whiteMode';
        document.querySelector(".goaImg").src="images/blackgoa.png";
        document.querySelector(".modeImg").src="images/lightsun.png";
    }
}

function modeChange () {
    const prevMode = document.body.getAttribute("class");
    if (prevMode === 'whiteMode') {
        document.body.className = 'blackMode';
        document.querySelector(".modeImg").src="images/darksun.png";
    } else {
        document.body.className = 'whiteMode';
        document.querySelector(".modeImg").src="images/lightsun.png";
    }
}


function modeChangelogo () {
    const prevMode = document.body.getAttribute("class");
    if (prevMode === 'whiteMode') {
        document.body.className = 'blackMode';
        document.querySelector(".logoimg").src="images/Logodarkmode.png";
        document.querySelector(".modeImg").src="images/darksun.png";
    } else {
        document.body.className = 'whiteMode';
        document.querySelector(".logoimg").src="images/logowhitemode.png";
        document.querySelector(".modeImg").src="images/lightsun.png";
    }
}




document.querySelectorAll('.founder').forEach(function(el) {
  el.addEventListener('mouseenter', function(e) {
    const id = el.getAttribute('data-founder');
    const card = document.getElementById(id);
    if (card) {
      // Position the card below the hovered name
      const rect = el.getBoundingClientRect();
      card.style.position = 'absolute';
      card.style.display = 'block';
      card.style.left = (window.scrollX + rect.left) + 'px';
      card.style.top = (window.scrollY + rect.bottom + 8) + 'px';
      card.style.zIndex = 1000;
    }
  });
  el.addEventListener('mouseleave', function(e) {
    const id = el.getAttribute('data-founder');
    const card = document.getElementById(id);
    if (card) card.style.display = 'none';
  });
});

// Optional: Keep the card visible when hovering over it
document.querySelectorAll('.founder-details').forEach(function(card) {
  card.addEventListener('mouseenter', function() {
    card.style.display = 'block';
  });
  card.addEventListener('mouseleave', function() {
    card.style.display = 'none';
  });
});

function doToggle() {
  console.log('in doTogge')
  const prevImg = document.getElementById("logo").src;
  let currentImg;
  if (document.querySelector('.whiteMode')) {
    currentImg = (prevImg.includes('images/logowhitemode.png')) ? 'images/logowidewhitemode.png' : 'images/logowhitemode.png';
  } else {
    currentImg = (prevImg.includes('images/Logodarkmode.png')) ? 'images/logowidedarkmode.png' : 'images/Logodarkmode.png';
  }
  document.getElementById("logo").src = currentImg;
}

function toggleLogo() {
  console.log('in toffleLogo');
  setInterval(doToggle , 4000);
}