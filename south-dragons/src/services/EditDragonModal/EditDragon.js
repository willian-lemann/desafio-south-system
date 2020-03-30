import api from '../api';

const EditDragon = async (id, data) => {
    await api.put(`/api/v1/dragon/${id}`, data);
};

export default EditDragon;