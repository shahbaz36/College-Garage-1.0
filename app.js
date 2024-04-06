const express = require('express');
const path = require('path');
const app = express();


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');


app.use(express.static(path.join(__dirname, 'public')));

// Route to render the main page
app.get('/', (req, res) => {
    
    res.render('index');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
