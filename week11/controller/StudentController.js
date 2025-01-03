// Membuat class StudentController
class StudentController {
    index(req, res) {
        const data = {
            message: "Menampilkan semua students",
            data: [],
        };
        res.json(data);
    }

    store(req, res) {
        const { nama } = req.body;
        const data = {
            message: `Menambahkan data student: ${nama}`,
            data: [],
        };
        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        const data = {
            message: `Mengedit student id ${id}, nama ${nama}`,
            data: [],
        };
        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;

        const data = {
            message: `Menghapus student id ${id}`,
            data: [],
        };

        res.json(data);
    }
}
// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;


// yang kedua
// // Membuat class StudentController
// class StudentController {
//     index(req, res) {
//         res.send('Menampilkan semua students');
//     }

//     store(req, res) {
//         const { nama } = req.body;
//         res.send(`Menambahkan data student: ${nama}`);
//     }

//     update(req, res) {
//         const { id } = req.params;
//         const { nama } = req.body;
//         res.send(`Mengedit student id ${id}, nama ${nama}`);
//     }

//     destroy(req, res) {
//         const { id } = req.params;
//         res.send(`Menghapus student id ${id}`);
//     }
// }

// // Membuat object StudentController
// const object = new StudentController();

// // Export object StudentController
// module.exports = object;


// yang pertama
// // Membuat class StudentController
// class StudentController {
//     index(req, res) {
//         res.send('Menampilkan semua students');
//     }

//     store(req, res) {
//         res.send('Menambahkan data student');
//     }

//     update(req, res) {
//         const { id } = req.params;
//         res.send(`Mengedit student id ${id}`);
//     }

//     destroy(req, res) {
//         const { id } = req.params;
//         res.send(`Menghapus student id ${id}`);
//     }
// }

// // Membuat object StudentController
// const object = new StudentController();

// // Export object StudentController
// module.exports = object;