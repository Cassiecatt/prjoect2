const path = require('path');
const express = require('express'); //express
const sequelize = require('./config/connection'); // sequelize
const routes = require('./controllers');
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Secret secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

//handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001 //heroku middleware
app.set('port', PORT);

//middleware
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//turn on routes
app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Port listening on 3001'));
});
