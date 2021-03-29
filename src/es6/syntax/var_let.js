var i = 0;
console.log('👍🏻 i before loop', i);
for (var i = 0; i <= 3; i++) {
    console.log('       i inside loop:', i);
}
// 😈 i thought "i" was equal to 0???
console.log('😈 i after loop:', i);

let j = 0;
console.log('👍🏻 j before loop', j);
for (let j = 0; j <= 3; j++) {
    console.log('       j inside loop:', j);
}
// 😀 yes, "j" is equal to 0
console.log('😀 j after loop:', j);
