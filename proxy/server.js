const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const cors = require('cors')

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(cors())
app.use(morgan('dev'));

app.use(express.static('./proxy'));
app.use('/app/:listings', express.static('./proxy'));
app.listen(port, () => console.log(`App listening on port ${port}!`));
