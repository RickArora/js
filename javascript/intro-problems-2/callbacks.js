function titleize(param,callback) {
    const transformedParam = param.map(name => `Mx. ${name} Jingleheimer Schmidt`);
    callback(transformedParam);

    function callback(array) {
        array.forEach(el => console.log(el));
    }
}

titleize(['Ricky', 'Sharan', 'Arora']);

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
    console.log(this.name + ' the elephant goes phRRRRRRRR');
}

Elephant.prototype.grow = function() {
    this.height = this.height + 12;
}

Elephant.prototype.addTrick = function (trick) {
    this.tricks.push(trick);
}

let e = new Elephant('Ricky',  72, ['t1','t2','t3']);
e.trumpet();
e.grow();
e.addTrick('t4 new');
console.log(e);

// Function Invocation

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

function paradeHelper(el) {
    console.log(`${el.name} is walking by`);
}

herd.forEach(el => paradeHelper(el));

// Closures

// comes back to this later
function bfastOrder(param) {
    `I'd like a ${param}`
}

let bfastOrder = dinerBreakfast();
bfastOrder('choc chip pancakes');
bfastOrder('grits');