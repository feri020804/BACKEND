const { index, store, update, destroy } = require("./Controller/FruitController");

const main = () => {
    console.log("Daftar buah awal:");
    index(); // Menampilkan daftar buah awal

    console.log("\nMenambahkan buah baru:");
    store("Apple"); // Menambah buah baru dan menampilkan daftar terbaru

    console.log("\nMemperbarui buah di posisi tertentu:");
    update(1, "Mangga"); // Mengupdate buah di posisi 1 menjadi "Mangga"

    console.log("\nMenghapus buah di posisi tertentu:");
    destroy(0); // Menghapus buah di posisi 0
};

main();
