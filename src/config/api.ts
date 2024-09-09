import Axios from 'axios';

const axiosInstance = Axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

export default axiosInstance;