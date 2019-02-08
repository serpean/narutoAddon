import { getPublicationByName, watched } from "./utils/store";

(function() {
  let chapter = window.location.pathname;
  chapter = chapter.substring(1, chapter.length - 1);
  if (!chapter.startsWith("lista")) {
    getPublicationByName(chapter, res => {
    //console.log(!jQuery.isEmptyObject(res))
      if (!jQuery.isEmptyObject(res)) {
        $("h1.post-header__title").after(
          "<div style='with: 100%; padding: 20px' class='center-text'><button id='" +
            chapter +
            "'>Visto</button></div>"
        );
        $("button#" + chapter).click(function() {
          watched(chapter);
        });
      } else {
        $("h1.post-header__title").after(
          "<div style='with: 100%; padding: 20px' class='center-text'><button id='" +
            chapter +
            "'>No visto</button></div>"
        );
        $("button#" + chapter).click(function() {
          watched(chapter);
        });
      }
    });
  }

  $("a.newlist-epi__title").each(function() {
    const href = $(this).attr("href");
    const chap = href.substring(22, href.length - 1);
    let image;
    getPublicationByName(chap, res => {
      if (!jQuery.isEmptyObject(res)) {
        image = browser.extension.getURL("images/eye-solid.svg");
        $(this).before(
          "<div style='margin: 0.5rem; cursor: pointer;' id='" +
            chap +
            "'><img with='20px' height='20px' src=" +
            image +
            " alt='" +
            chap +
            "'></div>"
        );
        $("div#" + chap).click(function() {
          watched(chap);
        });
      } else {
        image = browser.extension.getURL("images/eye-slash-solid.svg");
        $(this).before(
          "<div style='margin: 0.5rem; margin-left: 0; cursor: pointer;' id='" +
            chap +
            "'><img with='20px' height='20px' src='" +
            image +
            "' alt='" +
            chap +
            "'></div>"
        );
        $("div#" + chap).click(function() {
          watched(chap);
        });
      }
    });
  });
})();
