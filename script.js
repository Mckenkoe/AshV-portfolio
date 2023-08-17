var painting = document.getElementsByClassName("painting");
var design = document.getElementsByClassName("design");
var misc = document.getElementsByClassName("misc")

function showDesign(){
    for (i = 0, len = painting.length; i < len; i++) {
        painting[i].style.display = "none";
      }

    for (i = 0, len = design.length; i < len; i++) {
        design[i].style.display = "inline";
      }
}


function showPainting(){
    for (i = 0, len = painting.length; i < len; i++) {
        painting[i].style.display = "inline";
      }

      for (i = 0, len = design.length; i < len; i++) {
        design[i].style.display = "none";
      }
}

function showAll(){
    for (i = 0, len = painting.length; i < len; i++) {
        painting[i].style.display = "inline";
      }

      for (i = 0, len = design.length; i < len; i++) {
        design[i].style.display = "inline";
      }
}