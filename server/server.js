const express = require('express');
const cors = require('cors');
const app = express();


require('./config/mongoose.config');
app.use(cors())
app.use( express.json(), express.urlencoded({extended:true}))


require('./routes/author.routes')(app);
const PORT = 8000;




app.listen(PORT, function () {
    console.log(`The server has started in Port: ${PORT}`)
})
