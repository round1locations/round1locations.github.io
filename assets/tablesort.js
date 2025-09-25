$(document).on("click", "table thead tr th", function() {
    let table = $(this).parents("table");
    let rows = $(this).parents("table").find("tbody tr").toArray().sort(comparer($(this).index()));
    let dir = ($(this).hasClass("sort-asc")) ? "desc" : "asc";

    if (dir == "desc") {
        rows = rows.reverse();
    }

    for (let i = 0; i < rows.length; i++) {
        table.append(rows[i]);
    }

    table.find("thead tr th").removeClass("sort-asc").removeClass("sort-desc");
    $(this).removeClass("sort-asc").removeClass("sort-desc") .addClass("sort-" + dir);
});

function comparer(index) {
  return function(a, b) {
    var valA = getCellValue(a, index),
      valB = getCellValue(b, index);
    return $.isNumeric(valA) && $.isNumeric(valB) ?
      valA - valB : valA.localeCompare(valB);
  };
}

function getCellValue(row, index) {
  return $(row).children('td').eq(index).text();
}
