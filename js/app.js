import refs from "./refs.js";
import { fetchApi, fetchApiId, fetchDeleteUser } from "./fetch.js";
import renderList from "./renderList.js";
import { optionsCreate, optionsRead, optionsUpdate, optionsDelete } from "./options.js";

const { formAdd, formUpdate, formDelete } = refs.form;


formAdd.addEventListener('submit', onSubmitPostData);
formUpdate.addEventListener('submit', onSubmitUpdateData);
formDelete.addEventListener('submit', onSubmitDeleteUser);
refs.showBtn.addEventListener('click', onClickShowUser);


function onSubmitPostData(e) {
    e.preventDefault();
    const formData = new FormData(formAdd);
    const data = Object.fromEntries(formData.entries());
    optionsCreate.body = JSON.stringify(data);

    fetchApi(optionsCreate)
    .then(user => user)
    .catch(err => console.log(err));

    e.currentTarget.reset();
}

function onSubmitUpdateData(e) {
    e.preventDefault();
    const data = {};
    const { elements } = formUpdate;
    [...elements].forEach(user => {
        const { name, value } = user;
        if (value) {
            data[name] = value;
        }
    });
    optionsUpdate.body = JSON.stringify(data);

    fetchApiId(data.id, optionsUpdate)
    .then(user => user)
    .catch(err => console.log(err));

    e.currentTarget.reset();
}

function onSubmitDeleteUser(e) {
    e.preventDefault();
    const id = e.target.elements.id.value;
    
    fetchDeleteUser(id, optionsDelete);

    e.currentTarget.reset();
}

function onClickShowUser() {
    refs.listUser.innerHTML = "";
    fetchApi(optionsRead)
    .then(data => renderList(data, refs.listUser))
    .catch(err => console.log(err));
}