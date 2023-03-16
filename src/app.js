const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/user.route');
const conversationRoutes = require('./routes/conversation.routes');
const messageRoutes = require('./routes/message.route');
const errorHandlerRouter= require('./routes/errorHandlers.route');


initModels();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 8000;

db.authenticate()
    .then(() => {
        console.log('DB conected');
    })
    .catch((error) => console.log(error));

db.sync({ })
    .then(() => console.log('db sync'))
    .catch((error) => console.log(error));
    
app.use(userRoutes);
app.use(conversationRoutes);
app.use(messageRoutes);

app.get('/', (req, res) => {
    res.send('welcome')
});

errorHandlerRouter(app);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`)
});