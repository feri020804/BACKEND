// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
    /**
     * Membuat method static all.
     */
    static all() {
        // return Promise sebagai solusi Asynchronous
        return new Promise((resolve, reject) => {
            const sql = "SELECT * from students";
            /**
             * Melakukan query menggunakan method query.
             * Menerima 2 params: query dan callback
             */
            db.query(sql, (err, results) => {
                resolve(results);
            });
        });
    }

    /**
     * TODO 1: Buat fungsi untuk insert data.
     * Method menerima parameter data yang akan diinsert.
     * Method mengembalikan data student yang baru diinsert.
     */
    static create() {
        // code here
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO students (nama) VALUES (?)";
            db.query(sql, [data.nama], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    // Mengembalikan data student yang baru diinsert
                    resolve({
                        id: result.insertId,
                        nama: data.nama,
                    });
                }
            });
        });
    }
}

// export class Student
module.exports = Student;