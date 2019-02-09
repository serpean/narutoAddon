function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const getPublicationByName = name => {
  return browser.storage.sync.get(name);
};

const savePublicationByName = chapter => {
  const jsonfile = {};
  jsonfile[chapter] = "watched";
  browser.storage.sync.set(jsonfile).then((_, err) => {
    if (err) console.log(err);
  });
};

const deletePublicationByName = name => {
  browser.storage.sync.remove(name);
};

const watched = name => {
  getPublicationByName(name).then(res => {
    if (!jQuery.isEmptyObject(res)) {
      deletePublicationByName(name);
    } else {
      savePublicationByName(name);
    }
    location.reload();
  });
};

module.exports = {
  getPublicationByName,
  watched
};
