(function () {
  "use strict";

  var shell = document.getElementById("app-shell");
  var sidebar = document.getElementById("sidebar");
  var navToggle = document.querySelector("[data-nav-toggle]");
  var mobileNav = window.matchMedia("(max-width: 1024px)");
  var desktopNavExpanded = true;

  function isNavExpanded() {
    return mobileNav.matches
      ? shell.classList.contains("is-nav-open")
      : !shell.classList.contains("is-nav-collapsed");
  }

  function syncNavState() {
    var expanded = isNavExpanded();

    navToggle.setAttribute("aria-expanded", String(expanded));
    navToggle.setAttribute(
      "aria-label",
      expanded ? "Hide navigation" : "Show navigation"
    );
    sidebar.setAttribute("aria-hidden", String(!expanded));
    sidebar.inert = !expanded;
  }

  function handleViewportChange() {
    shell.classList.remove("is-nav-open");
    shell.classList.toggle(
      "is-nav-collapsed",
      !mobileNav.matches && !desktopNavExpanded
    );
    syncNavState();
  }

  navToggle.addEventListener("click", function () {
    if (mobileNav.matches) {
      shell.classList.toggle("is-nav-open");
    } else {
      desktopNavExpanded = !desktopNavExpanded;
      shell.classList.toggle("is-nav-collapsed", !desktopNavExpanded);
    }

    syncNavState();
  });

  document.querySelectorAll("[data-nav-close]").forEach(function (el) {
    el.addEventListener("click", function () {
      shell.classList.remove("is-nav-open");
      syncNavState();
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && mobileNav.matches) {
      shell.classList.remove("is-nav-open");
      syncNavState();
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
      if (mobileNav.matches) {
        shell.classList.remove("is-nav-open");
        syncNavState();
      }
    });
  });

  mobileNav.addEventListener("change", handleViewportChange);
  handleViewportChange();

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
