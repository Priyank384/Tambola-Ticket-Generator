const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`mongodb+srv://priyankgupta384:Priyank384@onito.aq7caf7.mongodb.net/?retryWrites=true&w=majority`)
    .then(res => console.log("Database connected"))
    .catch(err => console.log(err))
