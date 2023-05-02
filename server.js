const app = require('./app');
const mongoose = require('mongoose');

// const DB_HOST = require('./config')
const DB_HOST = "mongodb+srv://Valerij:yYyX7ophSwjPTr40@cluster0.ibb8iqz.mongodb.net/contacts_reader?retryWrites=true&w=majority";

mongoose.connect(DB_HOST).then(app.listen(3000)).catch(e => { console.log(e.message); process.exit(1) });

// app.listen(3000, console.log('server running on port 3000'));