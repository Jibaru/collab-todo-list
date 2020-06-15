
const modal = (id, action) => {
    $(`#${id}`).modal(action);
} 

export const openModal = (id) => {
    modal(id, 'show');
} 

export const closeModal = (id) => {
    modal(id, 'hide');
}