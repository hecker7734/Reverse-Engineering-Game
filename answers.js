//Hey! Don't spoil the game for yourself, try out the puzzles before hacking :) And hey, if you do hack, just don't ruin the game for others!
// In order

































































































































































const rgf45 = 
[
    "game.score=42",
    "game.money=54000",
    "game.score=42&player.health=100"
]

const esc = 
[
    "btoa('game.score=42')",
    `let b = btoa(btoa("game.money=54000")).split("==")[0] + "#";
    let bArray = b.split("");  // Convert b to an array
    bArray.splice(Math.floor(bArray.length / 2), 0, '#');  // Insert # at the desired position
    let c = bArray.join('');  // Convert the array back to a string`,

    `let input = "game.score=42&player.health=100";

    let b1 = btoa(input).split("==")[0] + "#";
    let b2 = b1.split("").reverse().join("");
    
    
    let bArray = b3.split("");
    bArray.splice(Math.floor(bArray.length / 2), 0, '$');
    let encodedString = bArray.join('');
    
    `
]

const escObsf = [
    "btoa ( sd )",

    `let b = btoa ( btoa ( g.m ) ).split("==")[0] + "#";
    let bArray = b.split("");
    bArray.splice( Math.floor( bArray.length / 2 ), 0, '#' );
    let c = bArray.join ( ' ' ) ;`,

    `let input = v;

    let b1 = btoa ( input ).split ( "==" ) [0] + "#";
    let b2 = b1.split ( "" ).reverse ( ) .join ( "" ) ;
    
    let bArray = b3.split ( "" ) ;
    bArray.splice ( Math.floor ( bArray.length / 2 ) , 0, '$' ) ;
    let encodedString = bArray.join ( '' );
    
    `
];


/*How these work
* 1. encodes to b64
* 2. removes the two equal signs, appends a hash to the end, and a hash at the center.
*
*
*
*
*
*
*
*
*/