export const deleteNote = (id) => {
    let notes = JSON.parse(localStorage.getItem('data')) || [];

    notes = notes.filter((note) => note._id!==id)

    localStorage.setItem('data', JSON.stringify(notes));
};

export const addNote = (note) => {

    let id = Number(localStorage.getItem('id')) || 0;
    id++;
    localStorage.setItem('id', JSON.stringify(id));

    let newNote = {
        ...note,
        _id: id
    };

    let notes = JSON.parse(localStorage.getItem('data')) || [];
    notes.push(newNote);
    localStorage.setItem('data', JSON.stringify(notes));
};

export const getData = () => {
    let notes = JSON.parse(localStorage.getItem('data')) || [];
    return notes;
}