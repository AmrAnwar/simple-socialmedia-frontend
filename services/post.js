import axios from 'axios';

const URL = '/api/blogs';

let token = null;

const setToken = newToken => {
    token = `bearer ${newToken}`;
};

const getAll = async () => {
    const response = await axios.get(URL);
    return response.data;
};

const create = async post => {
    const response = await axios.post(
        URL, post, { Authorization: token }
    );
    return response.data;
};

const remove = async id => {
    await axios.delete(
        `${URL}/${id}`, { Authorization: token }
    );
};

export default {
    setToken,
    getAll,
    create,
    remove,
};