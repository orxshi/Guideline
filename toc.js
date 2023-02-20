$('h1').each(function () {
    this.id = $(this).text();
});

$('h2').each(function () {
    this.id = $(this).text();
});

// var ToC =
// "<nav role='navigation' class='table-of-contents'>" +
//     "<h2>Contents</h2>" +
//     "<ul>";

//         var newLine, el, title, link;

//         $("h1").each(function () {
//         });

//         $("h2").each(function () {

//         el = $(this);
//         title = el.text();
//         link = "#" + el.attr("id");

//         newLine =
//         "<li>" +
//             "<a href='" + link + "'>" +
//                 title +
//                 "</a>" +
//             "</li>";

//         ToC += newLine;

//         });

//         ToC +=
//         "</ul>" +
//     "</nav>";

// $(".contents").prepend(ToC);



var toc = document.getElementById('toc');
var h1h2 = document.querySelectorAll("h1, h2");
for (var i = 0; i < h1h2.length; i++) {
    if (h1h2[i].nodeName === "H2") {        
        var li = document.createElement("li");
        // li.style.listStyleType = "none";
        var createA = document.createElement('a');
        var createAText = document.createTextNode(h1h2[i].textContent);        
        createA.setAttribute('href', '#' + h1h2[i].id);
        createA.appendChild(createAText);
        li.appendChild(createA);
        toc.appendChild(li);
    }
    else {
        var textNode = document.createTextNode(h1h2[i].textContent);
        toc.appendChild(textNode);
    }

}