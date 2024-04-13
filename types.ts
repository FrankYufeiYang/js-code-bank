// let stringVariable: string = 'string';
// let anyVariable: any;
// let unknownVariable: unknown;
// anyVariable = stringVariable;
// unknownVariable = stringVariable;
// stringVariable = anyVariable;
// stringVariable = unknownVariable;



// let stringVariable: string = 'string';
// let anyVariable: any;
// let neverVariable: never;

// neverVariable = stringVariable;
// neverVariable = anyVariable;
// anyVariable = neverVariable;
// stringVariable = neverVariable;


// 3. `void` pt. 1
let undefinedVariable: undefined 
let voidVariable: void
let unknownVariable: unknown

voidVariable = undefinedVariable
undefinedVariable = voidVariable
voidVariable = unknownVariable

// 4. `void` pt. 2

function fn(cb: () => void): void {
    return cb()
}

fn(() => 'string')