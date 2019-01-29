
// Solo se obtienen los vistos
// Por tanto si queres desmarcar un episodio
// Debemos eliminarlo

function getChapterById(id) {
    var item = localStorage.getItem(id);
    if(item) {
        return item;
    } else{
        return null;
    }
}

function setChapter(chapter) {
    if(getChapterById(chapter)) {
        localStorage.removeItem(chapter);
    } else {
        localStorage.setItem(chapter, "visto");
    }
}

export {
    getChapterById,
    setChapter
}