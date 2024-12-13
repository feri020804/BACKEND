const mulai = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sedang Download");
        }, 3000);
    });
};

const selesai = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Donwload selesai");
        }, 7000);
    });
};

const hasil = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = "file_download.exe";
            resolve("Hasil download " + result);
        }, 5000);
    });
};

/**
 * async digunakan untuk memberitahukan ada proses asynchronous
 * await digunakan untuk menunggu promise selesai
 * await hanya bisa digunakan di dalam function
 */
const main = async () => {
    console.log(await mulai());
    console.log(await selesai());
    console.log(await hasil());
}

main();