// importing the module
const mongoose=require('mongoose');

//connecting the database
const CONNECTION_URI = 'mongodb+srv://rockyrockstar:qwerty123123123123123@cluster0.s8lil.mongodb.net/Codeal_development?retryWrites=true&w=majority';
const db = mongoose.connect(CONNECTION_URI, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then( () => {
    console.log(`Connected to database`);
  }).catch(err => {
    console.log(`Connection Error: ${err.message}`);
  });

module.exports =db