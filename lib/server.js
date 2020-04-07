import express from 'express';
import config from './config';
import serverRender from './renderers/server';
import { data } from './data';

const app= express();

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', async (req, res)=> {
    const initialContent = await serverRender();
    await res.render('index', { ...initialContent })
})

app.get('/data',(req, res)=> {
    return res.send(data)
})

app.listen(config.port, ()=> {
    console.info(`Running on port ${config.port}`)
})