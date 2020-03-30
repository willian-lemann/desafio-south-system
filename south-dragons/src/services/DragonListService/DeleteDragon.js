import api from '../api';

const DeleteDragon = async (id) => {
    const response = await api.delete(`/api/v1/dragon/${id}`);
    return response;
};

export default DeleteDragon;