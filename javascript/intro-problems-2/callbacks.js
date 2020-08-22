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