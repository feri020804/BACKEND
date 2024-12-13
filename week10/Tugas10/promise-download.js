function showDownload(result) {
    console.log('download selesai');
    console.log('Hasil dwnload ' + result);
}

function download() {
    return new Promise((resolve) => 
    {
        setTimeout(() => {
            const result = "name-file.exe";
            resolve(result);
        }, 5000);
    }); 
}

download()
  .then((result) => {
    showDownload(result);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
