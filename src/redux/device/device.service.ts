import { authHeader, handleResponse } from '../../_helpers';

async function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };
    let response = await fetch(`/api/device/`, requestOptions);
    return handleResponse(response);
}

const deviceService = {
    getAll,
}

export default deviceService