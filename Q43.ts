//  Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array 
//  to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ['David Copperfield', 'Penn & Teller', 'David Blaine'];

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians = [...magicians];
    for (let i = 0; i < great_magicians.length; i++) {
        great_magicians[i] = `the Great ${great_magicians[i]}`;
    }
    return great_magicians;
}

let great_magicians = make_great(magicians);
show_magicians(great_magicians);
show_magicians(magicians);


