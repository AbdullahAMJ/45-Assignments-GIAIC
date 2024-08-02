// Magicians: Make a array of magician’s names. Pass the array to a 
// function called show_magicians(), which prints the name of each magician in the array.

let magicians: string[] = ['David Copperfield', 'Penn & Teller', 'David Blaine'];

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magicians);
