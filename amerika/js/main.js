let star = document.querySelector('.star__cage');
let blauw = star.parentElement;

for (var i = 0; i < 51; i++) {
  var clonedDiv = star.cloneNode(true); 
  blauw.appendChild(clonedDiv);
}

// dit is er om de div '.star__cage' 50 keer te clone ziet er beter ui in de html