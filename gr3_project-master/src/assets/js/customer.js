jQuery(document).ready(function ($) {
  const slides = $(".inner");
  let windowSize = $(window).width();

  $(window).resize(function () {
    windowSize = $(window).width();
  });

  $(".sl-next").click(function () {
    if (windowSize < 767) {
      if ($(slides).attr("slidePage") < $(".inner .card").length - 1) {
        $(slides).attr("slidePage", parseInt($(slides).attr("slidePage")) + 1);
        $(slides).css(
          "transform",
          `translateX(${-80 * $(slides).attr("slidePage")}vw)`
        );
      }
    } else if (windowSize < 1024) {
      if ($(slides).attr("slidePage") < $(".inner .card").length / 2 - 1) {
        $(slides).attr("slidePage", parseInt($(slides).attr("slidePage")) + 1);
        $(slides).css(
          "transform",
          `translateX(${-22.333333333 * $(slides).attr("slidePage")}%)`
        );
      }
    } else {
      if ($(slides).attr("slidePage") < $(".inner .card").length / 3 - 1) {
        $(slides).attr("slidePage", parseInt($(slides).attr("slidePage")) + 1);
        $(slides).css(
          "transform",
          `translateX(calc(${-80 * $(slides).attr("slidePage")}vw - (3em * ${$(
            slides
          ).attr("slidePage")})))`
        );
      }
    }
  });

  $(".sl-prev").click(function () {
    if (windowSize < 767) {
      if ($(slides).attr("slidePage") > 0) {
        $(slides).attr("slidePage", parseInt($(slides).attr("slidePage")) - 1);
        $(slides).css(
          "transform",
          `translateX(${-80 * $(slides).attr("slidePage")}vw)`
        );
      }
    } else if (windowSize < 1024) {
      if ($(slides).attr("slidePage") > 0) {
        $(slides).attr("slidePage", parseInt($(slides).attr("slidePage")) - 1);
        $(slides).css(
          "transform",
          `translateX(${-22.333333333 * $(slides).attr("slidePage")}%)`
        );
      }
    } else {
      if ($(slides).attr("slidePage") > 0) {
        $(slides).attr("slidePage", parseInt($(slides).attr("slidePage")) - 1);
        $(slides).css(
          "transform",
          `translateX(calc(${-80 * $(slides).attr("slidePage")}vw - (3em * ${$(
            slides
          ).attr("slidePage")})))`
        );
      }
    }
  });
});
