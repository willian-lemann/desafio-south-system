import api from '../api';

const LoadSpecificDragon = async (id) => {
    const response = await api.get(`/api/v1/dragon/${id}`);
    return response.data;
};

export default LoadSpecificDragon; 