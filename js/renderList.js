export default function(data, list) {
    const result = data.map(user => {
        return `
        <li class="item">
            <p class="user-info"><span class="user-desc">Number: </span>${user.id}</p>
            <p class="user-info"><span class="user-desc">Name: </span>${user.name}</p>
            <p class="user-info"><span class="user-desc">Lastname: </span>${user.lastname}</p>
            <p class="user-info"><span class="user-desc">Email: </span>${user.email}</p>
        </li>
        `;
    }).join('');

    return list.insertAdjacentHTML('beforeend', result);
}