/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(229, 204, 255);
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  fill(153, 153, 255);

  //rechthoek voor getal
  rect(400, 150, 100, 150);
  rect(570, 150, 100, 150);
  rect(740, 150, 100, 150);

  //rechthoek voor turn
  rect(480, 500, 300, 100);
}