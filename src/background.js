const getPublicationByName = (name, cb) => {
    cb(localStorage.getItem(name))
}

const savePublicationByName = (name) => {
    localStorage.setItem(name, "visto")
}

const deletePublicationByName = (name) => {
    localStorage.removeItem(res)
}

const seen = (name) => {
    getPublicationByName(name, (res) => {
        if(res) {
            deletePublicationByName(res);
        } else {
            savePublicationByName(res);
        }
    })
}

let chapter = window.location.pathname;
chapter = chapter.substring(1, chapter.length - 1)


getPublicationByName("hola", (res)=> {
    if(res) {
        $("h1.post-header__title").append("<button id="+chapter+" onclick='seen("+chapter+")'>visto</button>")
    }
    $("h1.post-header__title").append("<button id="+chapter+" onclick='seen("+chapter+")'>No visto</button>")
    console.log(res);
});

