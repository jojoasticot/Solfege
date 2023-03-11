var parent = document.getElementById("up");
var output = document.getElementById("output");
var notes = ["do1","re","mi","fa","sol","la","si","do2"];
var note;
var cptBon = -1;
var cptBad = 0;

// cle de sol = 45px de largeur
// note = 42 - 10px de largeur
var cpt = 0;

function noteRandom(){
  var reponse = this.id;
  console.log(note,reponse);
  var img = document.createElement("img");
  img.src = "images/note.png";
  img.classList.add("note");

  if(reponse == note){
    cptBon++;
  } else if (reponse != note){
    cptBad++;
  }

  var limite = 45 + 42 + (cptBad+cptBon) * 32 - 6 - Math.round((cpt * (innerWidth*0.45 - 45 - 42)));
  console.log(limite,cpt);
  if(limite > (innerWidth * 0.45)){
    var notesHTML = document.getElementsByClassName("note");
    var longueurNotes = notesHTML.length;
    for(var i = longueurNotes-1; i > -1; i--){
      notesHTML[i].remove();
    }
    console.log(notesHTML);
    cpt++;
  }
  var tirage = Math.round(Math.random() * (notes.length-1));
  note = notes[tirage];
  img.classList.add(note);
  parent.appendChild(img);
  var pourcentage = Math.round((cptBon/(cptBon+cptBad))*100);
  if(cptBad + cptBon === 0){
    pourcentage = 0;
  }
  output.innerText = "Bon points: " + cptBon + " || Mauvais points: " + cptBad + " || Pourcentage de bonnes réponses: " + pourcentage + "%";
}
noteRandom();

var buttons = document.getElementsByClassName("button");
// On copie les éléments dans un autre array pck sinon le buttons.forEach() marche pas mdr et je sais pas pk
var arr = [];
for(var i = 0; i < buttons.length; i++){
  arr.push(buttons[i]);
}
console.log("fdp");

arr.forEach(el => el.addEventListener("click",noteRandom));
