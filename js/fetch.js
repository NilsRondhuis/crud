const BASE_URL = 'https://623e1178e8fbc4f1626ba3ce.mockapi.io/users';

function fetchApi(options) {
    return fetch(`${BASE_URL}`, options)
    .then(res => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(new Error(`Error status ${res.status}`));
    });
}

function fetchApiId(id, options) {
    return fetch(`${BASE_URL}/${id}`, options)
    .then(res => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(new Error(`Error status ${res.status}`));
    });
}

function fetchDeleteUser(id, options) {
    return fetch(`${BASE_URL}/${id}`, options)
    .then(() => console.log('User Delete'))
    .catch(err => console.log(err));
}

export { fetchApi, fetchApiId, fetchDeleteUser };
