(function () {
  "use strict";

  var shell = document.getElementById("app-shell");

  document.querySelectorAll("[data-nav-open]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      shell.classList.add("is-nav-open");
    });
  });

  document.querySelectorAll("[data-nav-close]").forEach(function (el) {
    el.addEventListener("click", function () {
      shell.classList.remove("is-nav-open");
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      shell.classList.remove("is-nav-open");
    }
  });

  document.querySelectorAll(".nav-item").forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelectorAll(".nav-item").forEach(function (el) {
        el.classList.remove("is-active");
        el.removeAttribute("aria-current");
      });
      item.classList.add("is-active");
      item.setAttribute("aria-current", "page");
      shell.classList.remove("is-nav-open");
    });
  });

  document.querySelectorAll('[role="tablist"]').forEach(function (group) {
    var tabs = group.querySelectorAll('[role="tab"]');
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
      });
    });
  });
})();
