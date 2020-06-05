// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + './dist/to-do-list'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'dist/to-do-list/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8090);

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./src/index.html'));

app.get('/*', function(req, res){
    res.sendFile('index.html', {root: 'src/'});
});

app.listen(process.env.PORT || 8090);