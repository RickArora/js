function mysteryScoping1() {
    var x = 'out of block 1';
    if (true) {
        var x = 'in block 1';
        console.log(x);
    }
    console.log(x);
}

mysteryScoping1();

function mysteryScoping2() {
    const x = 'out of block 2';
    if (true) {
        const x = 'in block 2';
        console.log(x);
        // so within this closure the value of x is in, outside of it is 'out'
    }
    console.log(x);
}

mysteryScoping2();

function mysteryScoping3() {
    const x = 'out of block 3';
    if (true) {
        //var x = 'in block 3'; // cannot declare global scope after const is already set
        console.log(x);
    }
    console.log(x);
}

mysteryScoping3();

function mysteryScoping4() {
    let x = 'out of block 4';
    if (true) {
        let x = 'in block 4';
        console.log(x);
    }
    console.log(x);
}

mysteryScoping4();

function mysteryScoping5() {
    let x = 'out of block 5';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    //let x = 'out of block again';  x already defined in this function , cannot redeclare but redefine is fine. 
    console.log(x);
}

mysteryScoping5();