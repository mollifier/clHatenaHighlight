(function() {
  jetpack.statusBar.append({
    html: "clearH",
    width: 60,
    onReady: function(widget) {
      $(widget).click(function() {
        $(jetpack.tabs.focused.contentDocument).
          find("span.highlight").removeClass("highlight");
      });
    }
  });
})();

// vim:set ts=2 sw=2:
