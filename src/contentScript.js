import { getPublicationByName, watched } from "./utils/store";

(function() {
  let chapter = window.location.pathname;
  chapter = chapter.substring(1, chapter.length - 1);
  let image;
  if (!chapter.startsWith("lista")) {
    getPublicationByName(chapter).then(res => {
      if (!jQuery.isEmptyObject(res)) {
        image = browser.extension.getURL("images/eye-solid.svg");
        $("h1.post-header__title").after(
          "<div class='center-text' style='with: 100%; padding: 20px;margin: 0.5rem; cursor: pointer;' id='" +
            chapter +
            "'><img with='20px' height='20px' src=" +
            image +
            " alt='" +
            chapter +
            "'></div>"
        );
        $("div#" + chapter).click(function() {
          watched(chapter);
        });
      } else {
        image = browser.extension.getURL("images/eye-slash-solid.svg");
        $("h1.post-header__title").after(
          "<div class='center-text' style='with: 100%; padding: 20px;margin: 0.5rem; cursor: pointer;' id='" +
            chapter +
            "'><img with='20px' height='20px' src=" +
            image +
            " alt='" +
            chapter +
            "'></div>"
        );
        $("div#" + chapter).click(function() {
          watched(chapter);
        });
      }
    });
  }

  $("a.newlist-epi__title").each(function() {
    const href = $(this).attr("href");
    const chapter = href.substring(22, href.length - 1);
    let image;
    getPublicationByName(chapter).then(res => {
      if (!jQuery.isEmptyObject(res)) {
        image = browser.extension.getURL("images/eye-solid.svg");
        $(this).before(
          "<div style='margin: 0.5rem; cursor: pointer;' id='" +
            chapter +
            "'><img with='20px' height='20px' src=" +
            image +
            " alt='" +
            chapter +
            "'></div>"
        );
        $("div#" + chapter).click(function() {
          watched(chapter);
        });
      } else {
        image = browser.extension.getURL("images/eye-slash-solid.svg");
        $(this).before(
          "<div style='margin: 0.5rem; margin-left: 0; cursor: pointer;' id='" +
            chapter +
            "'><img with='20px' height='20px' src='" +
            image +
            "' alt='" +
            chapter +
            "'></div>"
        );
        $("div#" + chapter).click(function() {
          watched(chapter);
        });
      }
    });
  });
})();
