function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports = {
    add,
    subFn: sub
}; //export in node WAY 1

exports.Add = (a, b) => {
    return a + b;
} // WAY 2

exports.Sub = (a, b) => {
    return a - b;
} // WAY 2