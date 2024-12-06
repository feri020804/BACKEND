const fruits = require("../data/fruits.js");

function index() {
    for (const fruit of fruits) {
        console.log(fruit);
    }
}

function store(name) {
    fruits.push(name);
    index(); // Memanggil fungsi index() untuk menampilkan daftar buah terbaru
}

function update(position, name) {
    if (position >= 0 && position < fruits.length) {
        fruits[position] = name;
        console.log(`Buah di posisi ${position} telah diperbarui menjadi ${name}`);
    } else {
        console.log("Posisi tidak valid");
    }
}

function destroy(position) {
    if (position >= 0 && position < fruits.length) {
        const deletedFruit = fruits.splice(position, 1);
        console.log(`Buah ${deletedFruit} telah dihapus`);
    } else {
        console.log("Posisi tidak valid");
    }
}

module.exports = { index, store, update, destroy };
