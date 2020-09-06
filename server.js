const express = require('express'); //express
const sequelize = require('./config/connection'); // sequelize

const app = express();
const PORT = process.env.PORT || 3001 //heroku middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// app.use(express.static(path.join(_dirname, 'public')));

// connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Port listening on 3001'));
});

