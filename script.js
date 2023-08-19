//selects a specific portfolio's type by the class I assigned to the card and assigns it to a var
var painting = document.getElementsByClassName("painting");
var design = document.getElementsByClassName("design");
var misc = document.getElementsByClassName("misc")

//hide all cards except the one that is to be displayed
function showDesign(){
    //for each card with the class painting, hide it (done by setting display to none)
    for (i = 0, len = painting.length; i < len; i++) {
        painting[i].style.display = "none";
      }
    //make sure design cards are displaying. I'm not sure if it matters which kind, because I made them flex in the css file.
    for (i = 0, len = design.length; i < len; i++) {
        design[i].style.display = "inline";
      }

      for (i = 0, len = design.length; i < len; i++) {
        misc[i].style.display = "none";
      }
}

//Same as example above but displays paintings
function showPainting(){
    for (i = 0, len = painting.length; i < len; i++) {
        painting[i].style.display = "inline";
      }

      for (i = 0, len = design.length; i < len; i++) {
        design[i].style.display = "none";
      }

      for (i = 0, len = design.length; i < len; i++) {
        misc[i].style.display = "none";
      }
}

//Same as example above but displays anything not painting or design
function showOther(){
    for (i = 0, len = painting.length; i < len; i++) {
        painting[i].style.display = "none";
      }

      for (i = 0, len = design.length; i < len; i++) {
        design[i].style.display = "none";
      }

      for (i = 0, len = design.length; i < len; i++) {
        misc[i].style.display = "inline";
      }

    
}

//Displays all the cards
function showAll(){
    for (i = 0, len = painting.length; i < len; i++) {
        painting[i].style.display = "inline";
      }

      for (i = 0, len = design.length; i < len; i++) {
        design[i].style.display = "inline";
      }

      for (i = 0, len = design.length; i < len; i++) {
        misc[i].style.display = "inline";
      }
}