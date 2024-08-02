// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames: string[] = [];

if (usernames.length === 0) {
    console.log('We need to find some users!');
}

usernames.push('admin', 'eric', 'john', 'mike', 'lisa');

while (usernames.length > 0) {
    console.log(`Removing ${usernames.pop()} from the list.`);
}

if (usernames.length === 0) {
    console.log('We need to find some users!');
}
