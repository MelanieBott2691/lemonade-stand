<<<<<<< HEAD
// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');

// const PORT = process.env.PORT || 3001;
// const app = express();
// // const apiRoutes = require('./routes/apiRoutes');
// const routes = require('./routes');
=======
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const routes = require('./routes');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const PORT = process.env.PORT || 3001;
>>>>>>> 196d03acc448046f09987aaa763e91062708af45

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

<<<<<<< HEAD
// // Use apiRoutes
// // app.use('/api', apiRoutes);
// app.use(routes);

// // Send every request to the React app
// // Define any API routes before this runs
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, './client/build/index.html'));
// });
=======
// Use apiRoutes
app.use(routes);

// Use Session
app.use(
  session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
  })
);

//Use Passport
app.use(passport.initialize());
app.use(passport.session());

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
>>>>>>> 196d03acc448046f09987aaa763e91062708af45

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/lemonadestand',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );

// app.listen(PORT, function () {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
