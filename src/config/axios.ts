import Axios from 'axios';

const axios = Axios.create({
	baseURL: 'https://api.binderbyte.com/v1'
});

export default axios;