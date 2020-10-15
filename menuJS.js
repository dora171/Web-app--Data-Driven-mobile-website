/* creating new request */
let xhr = new XMLHttpRequest(),
  /* url to json file where data written */
  url = "spices.json";


/**
 * parsing json items
 * checking the response status of xmlhttprequest object
 */
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var menuItems = JSON.parse(xhr.responseText);
    buildMenu(menuItems); /* building menu items */
  }
};
/* opening request */
xhr.open("GET", url, true);
/* sending a request*/
xhr.send();

function buildMenu(items) {
  var output = "";
  /* function for displaying items in menu page: item's name and picture*/
  items.forEach(function (item) {
    output += "<li class='item'" + "onclick=saveSelection(" + item.id + ");> " +
      "<img class='small' src=" + item.picSmall + " />" +
      "<p>" + item.name + "</p>" +
      "</li>";
  });

  /*  getting element by id returning the element that has the id attribute with the specified value */
  document.getElementById("menu_items").innerHTML = output;
}

function saveSelection(sel) {
  localStorage.setItem("selected", sel);
  window.open("details.html", "_self");
}