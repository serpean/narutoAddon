const getPublicationByName = (name, cb) => {
    var value = localStorage.getItem(name)
    cb(value)
}

const savePublicationByName = (name) => {
    localStorage.setItem(name, "visto")
}

const deletePublicationByName = (name) => {
    localStorage.removeItem(name)
}

const watched = (name) => {
    getPublicationByName(name, (res) => {
        if (res) {
            deletePublicationByName(name);
        } else {
            savePublicationByName(name);
        }
        location.reload();
    })
}

let chapter = window.location.pathname;
chapter = chapter.substring(1, chapter.length - 1)
if (!chapter.startsWith("lista")) {
    getPublicationByName(chapter, (res) => {
        if (res) {
            $("h1.post-header__title").after("<div style='with: 100%; padding: 20px' class='center-text'><button id=" + chapter + ">Visto</button></div>")
            $("button#" + chapter).click(function () { watched(chapter) })
        } else {
            $("h1.post-header__title").after("<div style='with: 100%; padding: 20px' class='center-text'><button id=" + chapter + ">No visto</button></div>")
            $("button#" + chapter).click(function () { watched(chapter) })
        }
    });
}


$("a.newlist-epi__title").each(function() {
    const href = $(this).attr('href');
    const chap = href.substring(22, href.length-1);
    getPublicationByName(chap, (res) => {
        if (res) {
            $(this).before("<div style='padding: 0.5rem'><button id=" + chap + " style='background-color: green;'>S</button></div>");
            $("button#" + chap).click(function () { watched(chap) })
        } else {
            $(this).before("<div style='padding: 0.5rem'><button id=" + chap + " style='background-color: red;'>N</button></div>");
            $("button#" + chap).click(function () { watched(chap) })
        }
    });
    
});
