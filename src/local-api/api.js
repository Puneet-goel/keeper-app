const getRandomColor = () => {
    let color = "hsl(" + Math.random()*360 + ", 100%, 90%)";
    return color;
}

export const add = (note) => {

    let notes = JSON.parse(localStorage.getItem('data')) || [];
    let newNote = {
        ...note,
        _id: notes.length + 1,
        createdAt: new Date(),
        color: getRandomColor()
    };

    notes.push(newNote);
    localStorage.setItem('data', JSON.stringify(notes));

    return newNote;
};

export const get = () => {
    let notes = JSON.parse(localStorage.getItem('data')) || [];
    return notes;
}

export const update = (id, note) => {
    
    let notes = JSON.parse(localStorage.getItem('data')) || [];

    notes = notes.map((a) => {
        if(a._id === id) {
            return {
                ...a,
                title: note.title,
                content: note.content,
                createdAt: new Date()
            };
        }else{
            return a;
        }
    });

    localStorage.setItem('data', JSON.stringify(notes));
    return notes;
}

export const deleteOne = (id) => {
    let notes = JSON.parse(localStorage.getItem('data')) || [];

    notes = notes.filter((note) => note._id!==id);
    
    //maintain the order of index
    let curIndex = 0;
    for(let i=0;i<notes.length;i++){
        notes[i]._id = ++curIndex;
    }

    localStorage.setItem('data', JSON.stringify(notes));
    return notes;
};

export const deleteAll = () => {
    localStorage.setItem('data', JSON.stringify([]));
    return [];
};