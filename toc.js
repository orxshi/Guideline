$('h2').each(function () {
    this.id = $(this).text();
});

$('h3').each(function () {
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



//var toc = document.getElementById('toc');
//var h1h2 = document.querySelectorAll("h1, h2");
//for (var i = 0; i < h1h2.length; i++) {
//    if (h1h2[i].nodeName === "H2") {        
//        var li = document.createElement("li");
//        var createA = document.createElement('a');
//        var createAText = document.createTextNode(h1h2[i].textContent);        
//        createA.setAttribute('href', '#' + h1h2[i].id);
//        createA.appendChild(createAText);
//        li.appendChild(createA);
//        //  li.appendChild(document.createTextNode(h1h2[i].textContent));
//        toc.appendChild(li);
//    }
//    else {
//        var textNode = document.createTextNode(h1h2[i].textContent);
//        toc.appendChild(textNode);
//    }
//
//}

var toc = document.getElementById('toc');
var h1h2 = document.querySelectorAll("h2, h3");
for (var i = 0; i < h1h2.length; i++) {
    if (h1h2[i].nodeName === "H3") {        
        if (h1h2[i].id == "Contents") {continue;}
        if (h1h2[i].id == "Important websites") {continue;}
            //console.log(h1h2[i].id);
            var li = document.createElement("li");
            var createA = document.createElement('a');
            var createAText = document.createTextNode(h1h2[i].textContent);        
            createA.setAttribute('href', '#' + h1h2[i].id);
            createA.appendChild(createAText);
            li.appendChild(createA);
            //  li.appendChild(document.createTextNode(h1h2[i].textContent));
            toc.appendChild(li);
    }
    else {
        if (h1h2[i].id == "Contents") {continue;}
        if (h1h2[i].id == "Important websites") {continue;}
            console.log(h1h2[i].id);
        var textNode = document.createTextNode(h1h2[i].textContent);
        toc.appendChild(textNode);
    }

}
