import Axios from 'axios';

const axiosInstance = Axios.create({
	baseURL: 'https://api.binderbyte.com/v1'
});

export default axiosInstance;