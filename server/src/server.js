import http from 'http';
import {
    app
} from './app.js';
import mongoose from 'mongoose';

const port = 8000;
const MONGO_URL = 'mongodb+srv://admin-dashboard-api:ZBNuaypeCPRBDZoS@admin-dashboard-cluster.kzz8ca6.mongodb.net/admin-dashboard?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB Connection ready');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

await mongoose.connect(MONGO_URL);

server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})