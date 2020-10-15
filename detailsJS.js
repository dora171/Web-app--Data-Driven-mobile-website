/* creating new xmlhttpreqyest object */
let xmlhttp = new XMLHttpRequest(),
  /* url to json file */
  url = "spices.json";

/**
 * parsing json items
 * checking the response status of xmlhttprequest object
 */
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    var menuItems = JSON.parse(xmlhttp.responseText);
    buildItem(menuItems); /* building menu items */
  }
};
/* opening request */
xmlhttp.open("GET", url, true);
/* sending request */
xmlhttp.send();

function buildItem(items) {
  var output = "",
    selectedID = localStorage.getItem("selected");
  /* function for displaying items in details page: name of the item, picture, country, description and usage */
  items.forEach(function (item) {
    if (selectedID == item.id) {
      output = "<li class='item'>" +
        "<h3>" + item.name + "</h3>" +
        "<img class='picBig' src=" + item.picBig + " />" +
        "<p>Country: " + item.country + "</p>" +
        "<p>Description: " + item.description + "</p>" +
        "<p>Usage: " + item.usage + "</p>" +
        "<p>Scientific name: " + item.scienceName + "</p>" +
        "</li>";
    }
  });
  /*  getting element by id returning the element that has the id attribute with the specified value */
  document.getElementById("item").innerHTML = output;
}