const express = require("express"); 
const bodyParser = require("body-parser");

const v1Router = require("./routes");

const app = express(); 
const PORT = process.env.PORT || 3000; 



app.use(bodyParser.json());
app.use("/api/orders/", v1Router);
 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});