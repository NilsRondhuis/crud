const headers = {
    "Content-Type": "application/json; charset=UTF-8",
};

const optionsCreate = {
    method: 'POST',
    headers,
};
const optionsRead = {
    method: 'GET',
    headers,
}
const optionsUpdate = {
    method: 'PUT',
    headers,
}
const optionsDelete = {
    method: 'DELETE',
}

export { optionsCreate, optionsRead, optionsUpdate, optionsDelete };