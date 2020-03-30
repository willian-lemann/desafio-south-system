import api from '../api';

const LoadDragons = async () => {
    const response = await api.get('/api/v1/dragon');
    return response.data;
};


export default LoadDragons; 