import { getPublicationByName, watched } from "./utils/store";

(function() {
  let image;
  let href;
  let chapter = window.location.pathname;
  chapter = chapter.substring(1, chapter.length - 1);
  if (!chapter.startsWith("lista")) {
    getPublicationByName(chapter).then(res => {
      if (!jQuery.isEmptyObject(res)) {
        image = browser.extension.getURL("images/eye-solid.svg");
        $("h1.post-header__title").after(
          "<div class='center-text watched-details' id='" +
            chapter +
            "'><img src=" +
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
          "<div class='center-text watched-details' id='" +
            chapter +
            "'><img src=" +
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
    href = $(this).attr("href");
    chapter = href.substring(22, href.length - 1);
    getPublicationByName(chapter).then(res => {
      if (!jQuery.isEmptyObject(res)) {
        image = browser.extension.getURL("images/eye-solid.svg");
        $(this).before(
          "<div class='watched-list' id='" +
            chapter +
            "'><img src=" +
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
          "<div class='watched-list' id='" +
            chapter +
            "'><img src='" +
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
