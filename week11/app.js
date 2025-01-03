// Import express dan routing
const express = require("express");
const router = require("./routes/api.js");

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());

// Menggunakan routing (router)
app.use(router);

// Mendefinisikan port.
app.listen(3000);
// yang kedua
// // import express
// const express = require("express");
// // import router
// const router = require("./routes/api.js");
// // membuat object express
// const app = express();

// // menggunakan routing (router)
// app.use(router);

// // mendefinisikan port
// app.listen(3000);
// yang pertama

// // import express
// const express = require("express");
// // membuat object express
// const app = express();

// /**
//  * membuat routing
//  * method get menerima 2 params
//  * param 1 adalah endpoint
//  * param 2 callback
//  * callback menerima object req dan res
//  */
// app.get("/", (req, res) => {
//     res.send("Hello Express");
// });

// // mendefinisikan port
// const PORT = 3000;
// app.listen(PORT, () =>
//     console.log(`Server is running on http://localhost:${PORT}`));


