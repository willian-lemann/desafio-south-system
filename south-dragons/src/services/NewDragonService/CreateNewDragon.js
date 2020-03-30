import api from '../api';

const CreateNewDragon = async (data) => {
    return await api.post(`/api/v1/dragon`, data);
};

export default CreateNewDragon;