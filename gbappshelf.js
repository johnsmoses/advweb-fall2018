$(function () {

    var service_point1 = "https://www.googleapis.com/books/v1/users/101904467794041931690/bookshelves/1001/";
    var service_point2 = "https://www.googleapis.com/books/v1/users/101904467794041931690/bookshelves/1001/volumes";

    $.getJSON(service_point2, function (json2) {


        resultHTML = "";
        for (i in json2.items) {
            var booktitle = json2.items[i].volumeInfo.title;
            var bookid = json2.items[i].id;
            var cover = json2.items[i].volumeInfo.imageLinks.smallThumbnail;

            resultHTML += "<div class='bookdiv'>";
            resultHTML += "<img src='" + cover + "' style='float: left' />";
            //resultHTML += "<a href='gbbooks.html?id=" + bookid + "'>" + booktitle + "</a>";
            resultHTML += "<input type=submit value=" + bookid + " onclick=getdisplay(this.value)>" + booktitle +"</input>";
            resultHTML += "</div>";;
        }
        $("#resultsshelf").html(resultHTML);
        $(".bookdiv").css("width", "300px");
    });
});