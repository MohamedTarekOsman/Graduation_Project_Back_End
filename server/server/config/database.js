// const mongoose = require('mongoose');
// const dbConnection=()=>{
//     mongoose.connect(process.env.DB_URI).then((connection)=>{
//         console.log("DB Connected "+connection.connection.host)
//     })
// }
// module.exports = dbConnection;

const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose.connect('mongodb://localhost:27017/graduation_project', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Remove useFindAndModify and useCreateIndex options
    }).then((connection) => {
        console.log("DB Connected " + connection.connection.host);
    }).catch((error) => {
        console.error("DB Connection Error: " + error.message);
    });

    // Set global options (optional, recommended)
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
}

module.exports = dbConnection;
