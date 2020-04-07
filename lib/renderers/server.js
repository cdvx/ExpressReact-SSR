import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import config from '../config';

import StateApi from 'state-api'

import App from '../components/App';

export default async () => {
    const res = await axios.get(`http://${config.host}:${config.port}/data`)
    const store = new StateApi(res.data)
    return {
        initialMarkUp: ReactDOMServer.renderToString(
        <App 
            store={store}
        />),
        initialData: res.data
    }
}