export const del = (id) => {
    let notes = JSON.parse(localStorage.getItem('data')) || [];

    notes = notes.filter((note) => note._id!==id)

    localStorage.setItem('data', JSON.stringify(notes));
};

export const add = (note) => {

    let id = (Number(localStorage.getItem('id')) || 0) + 1;
    localStorage.setItem('id', JSON.stringify(id));

    let newNote = {
        ...note,
        _id: id
    };

    let notes = JSON.parse(localStorage.getItem('data')) || [];
    notes.push(newNote);
    localStorage.setItem('data', JSON.stringify(notes));

    return newNote;
};

export const get = () => {
    let notes = JSON.parse(localStorage.getItem('data')) || [];
    return notes;
}