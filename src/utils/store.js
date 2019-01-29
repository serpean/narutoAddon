const getPublicationByName = (name, cb) => {
    cb(localStorage.getItem(name))
}