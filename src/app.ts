import express from 'express';
import morgan from 'morgan'
import video from './videos/network';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true }));


//morgan permite ver las respuestas de las peticiones realizadas
app.use(morgan('dev'));
// routes
app.use('/video', video);

export default app;