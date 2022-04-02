$(document).ready(function() {
  $("#settings-page_type").on("change", updateCanvasCheck);
  updatePage();

  $("#confirm_reset").on("click", updatePage);
  $(".copy-ui-button").on("click", copyUICode);

  $("#remove_label").change(toggleComponentLabels);
  $("#remove_colour").change(toggleBackgroundColours);
  $("#remove_border").change(toggleBorders);

  Sortable.create(document.getElementById("sidebar-bin"), {
    group: {
      name: "shared",
      pull: false
    },
    handle: ".designer-element",
    draggable: ".designer-element",
    onAdd: function (evt) {
      this.el.removeChild(evt.item);
    }
  });
});
