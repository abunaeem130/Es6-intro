const priya = 'ashif akbar';
const meye = "meye tumi ki dukho cino";
const kobita = `kobita tumi sopcarini hoye`;
const multiline = 'This is my first line\n' +
    'this is my secnd line\n' +
    'this my thrid linr here\n' +
    'forth line text here';

const multilineNew = `
this is my first line
this is second line
this is thrid line
this forth line`;

const friends = ['abul', 'kabul', 'rabul', 'sabul']

const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>'
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

const first = 'mamun';
const last = 'chowduthry';
const fullOld = first + ' ' + last;
const fullNew = ` this person is: ${first} ${last}.has money ${friends.length * 500}.he lives in Dhaka`;

console.log(fullNew);