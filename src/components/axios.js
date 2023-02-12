import axios from 'axios';

const { REACT_APP_SERVER } = process.env;

axios.defaults = {
    baseURL: REACT_APP_SERVER,
    headers: {
        Accept: 'Application/json',
    }
};

export default axios;