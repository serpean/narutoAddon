function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const getPublicationByName = (name, cb) => {
  console.log(name);
  browser.storage.sync.get(name).then((res, err) => {
    console.log("get" + res)
    console.log(res)
    return cb(res);
  });
};

const savePublicationByName = chap => {
  //   console.log(chap);
  browser.storage.sync.set({ chap: "visto" }).then((_, err) => {
    if(err) console.log(err);
  });
};

const deletePublicationByName = name => {
  browser.storage.sync.remove(name);
};

const watched = name => {
  getPublicationByName(name, res => {
    console.log(res.name);
    if (!jQuery.isEmptyObject(res)) {
      deletePublicationByName(name);
    } else {
      console.log("WATCHED");
      savePublicationByName(name);
    }
    //location.reload();
  });
};

module.exports = {
  getPublicationByName,
  watched
};
