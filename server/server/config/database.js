// const mongoose = require('mongoose');
// const dbConnection=()=>{
//     mongoose.connect(process.env.DB_URI).then((connection)=>{
//         console.log("DB Connected "+connection.connection.host)
//     })
// }
// module.exports = dbConnection;



const mongoose = require('mongoose');

const dbConnection = () => {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connection) => {
    console.log("DB Connected " + connection.connection.host);
  })
  .catch((err) => {
    console.error("DB Connection Error: " + err.message);
    process.exit(1);
  });
};

module.exports = dbConnection;

