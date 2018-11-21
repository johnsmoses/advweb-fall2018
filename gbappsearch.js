$(document).ready(function() {
    $("#buttonsub1").hide();
    $("#buttonsub2").hide();
    $("#buttonsub3").hide();
    $("#buttonsub4").hide();
    $("#buttonsub5").hide();
    $('#buttonsub').click(function() {
        $("#buttonsub1").show();
        $("#buttonsub2").show();
        $("#buttonsub3").show();
        $("#buttonsub4").show();
        $("#buttonsub5").show();
        var term = $('#search_txt').val(); //or get the value from a textbox user input; you can Google how to do it.
        var parameter = "?q=" + term + "&startIndex=1&maxResults=15";
        var service_point = "https://www.googleapis.com/books/v1/volumes/" + parameter;
        $.getJSON(service_point, function(json) {
            console.log(json);
            var total = json.totalItems;
            $("#total").text(total);

            var resultHTML = "";
            for (i in json.items) {
                var booktitle = json.items[i].volumeInfo.title;
                var bookid = json.items[i].id;
                var cover = "";
                if (json.items[i].volumeInfo.imageLinks != null)
                    cover = json.items[i].volumeInfo.imageLinks.smallThumbnail;

                resultHTML += "<div class='bookdiv'>";
                resultHTML += "<img src='" + cover + "' style='float: left' />";
                //resultHTML += "<a href='bookinfo.html?id=" + bookid + "'>" + booktitle + "</a>";
                resultHTML += "<input type=submit value=" + bookid + " onclick=getdisplay(this.value)>" + booktitle +"</input>";
                resultHTML += "</div>";;
            }
            $("#results").html(resultHTML);
            $(".bookdiv").css("width", "300px");
        });

    });

    $('#buttonsub1').click(function() {

        var term = $('#search_txt').val(); //or get the value from a textbox user input; you can Google how to do it.
        var parameter = "?q=" + term + "&startIndex=1&maxResults=15";
        var service_point = "https://www.googleapis.com/books/v1/volumes/" + parameter;
        $.getJSON(service_point, function(json) {
            console.log(json);
            var total = json.totalItems;
            $("#total").text(total);

            var resultHTML = "";
            for (i in json.items) {
                var booktitle = json.items[i].volumeInfo.title;
                var bookid = json.items[i].id;
                var cover = "";
                if (json.items[i].volumeInfo.imageLinks != null)
                    cover = json.items[i].volumeInfo.imageLinks.smallThumbnail;

                resultHTML += "<div class='bookdiv'>";
                resultHTML += "<img src='" + cover + "' style='float: left' />";
                //resultHTML += "<a href='bookinfo.html?id=" + bookid + "'>" + booktitle + "</a>";
                resultHTML += "<input type=submit value=" + bookid + " onclick=getdisplay(this.value)>" + booktitle +"</input>";
                resultHTML += "</div>";;
            }
            $("#results").html(resultHTML);
            $(".bookdiv").css("width", "300px");
        });

    });

    $('#buttonsub2').click(function() {

        var term = $('#search_txt').val(); //or get the value from a textbox user input; you can Google how to do it.
        var parameter = "?q=" + term + "&startIndex=16&maxResults=15";
        var service_point = "https://www.googleapis.com/books/v1/volumes/" + parameter;
        $.getJSON(service_point, function(json) {
            console.log(json);
            var total = json.totalItems;
            $("#total").text(total);

            var resultHTML = "";
            for (i in json.items) {
                var booktitle = json.items[i].volumeInfo.title;
                var bookid = json.items[i].id;
                var cover = "";
                if (json.items[i].volumeInfo.imageLinks != null)
                    cover = json.items[i].volumeInfo.imageLinks.smallThumbnail;

                resultHTML += "<div class='bookdiv'>";
                resultHTML += "<img src='" + cover + "' style='float: left' />";
                //resultHTML += "<a href='bookinfo.html?id=" + bookid + "'>" + booktitle + "</a>";
                resultHTML += "<input type=submit value=" + bookid + " onclick=getdisplay(this.value)>" + booktitle +"</input>";
                resultHTML += "</div>";;
            }
            $("#results").html(resultHTML);
            $(".bookdiv").css("width", "300px");
        });

    });

    $('#buttonsub3').click(function() {

        var term = $('#search_txt').val(); //or get the value from a textbox user input; you can Google how to do it.
        var parameter = "?q=" + term + "&startIndex=31&maxResults=15";
        var service_point = "https://www.googleapis.com/books/v1/volumes/" + parameter;
        $.getJSON(service_point, function(json) {
            console.log(json);
            var total = json.totalItems;
            $("#total").text(total);

            var resultHTML = "";
            for (i in json.items) {
                var booktitle = json.items[i].volumeInfo.title;
                var bookid = json.items[i].id;
                var cover = "";
                if (json.items[i].volumeInfo.imageLinks != null)
                    cover = json.items[i].volumeInfo.imageLinks.smallThumbnail;

                resultHTML += "<div class='bookdiv'>";
                resultHTML += "<img src='" + cover + "' style='float: left' />";
                //resultHTML += "<a href='bookinfo.html?id=" + bookid + "'>" + booktitle + "</a>";
                resultHTML += "<input type=submit value=" + bookid + " onclick=getdisplay(this.value)>" + booktitle +"</input>";
                resultHTML += "</div>";;
            }
            $("#results").html(resultHTML);
            $(".bookdiv").css("width", "300px");
        });

    });

    $('#buttonsub4').click(function() {

        var term = $('#search_txt').val(); //or get the value from a textbox user input; you can Google how to do it.
        var parameter = "?q=" + term + "&startIndex=46&maxResults=15";
        var service_point = "https://www.googleapis.com/books/v1/volumes/" + parameter;
        $.getJSON(service_point, function(json) {
            console.log(json);
            var total = json.totalItems;
            $("#total").text(total);

            var resultHTML = "";
            for (i in json.items) {
                var booktitle = json.items[i].volumeInfo.title;
                var bookid = json.items[i].id;
                var cover = "";
                if (json.items[i].volumeInfo.imageLinks != null)
                    cover = json.items[i].volumeInfo.imageLinks.smallThumbnail;

                resultHTML += "<div class='bookdiv'>";
                resultHTML += "<img src='" + cover + "' style='float: left' />";
                //resultHTML += "<a href='bookinfo.html?id=" + bookid + "'>" + booktitle + "</a>";
                resultHTML += "<input type=submit value=" + bookid + " onclick=getdisplay(this.value)>" + booktitle +"</input>";
                resultHTML += "</div>";;
            }
            $("#results").html(resultHTML);
            $(".bookdiv").css("width", "300px");
        });

    });
    
        $('#buttonsub5').click(function() {

        var term = $('#search_txt').val(); //or get the value from a textbox user input; you can Google how to do it.
        var parameter = "?q=" + term + "&startIndex=61&maxResults=15";
        var service_point = "https://www.googleapis.com/books/v1/volumes/" + parameter;
        $.getJSON(service_point, function(json) {
            console.log(json);
            var total = json.totalItems;
            $("#total").text(total);

            var resultHTML = "";
            for (i in json.items) {
                var booktitle = json.items[i].volumeInfo.title;
                var bookid = json.items[i].id;
                var cover = "";
                if (json.items[i].volumeInfo.imageLinks != null)
                    cover = json.items[i].volumeInfo.imageLinks.smallThumbnail;

                resultHTML += "<div class='bookdiv'>";
                resultHTML += "<img src='" + cover + "' style='float: left' />";
                //resultHTML += "<a href='bookinfo.html?id=" + bookid + "'>" + booktitle + "</a>";
                resultHTML += "<input type=submit value=" + bookid + " onclick=getdisplay(this.value)>" + booktitle +"</input>";
                resultHTML += "</div>";;
            }
            $("#results").html(resultHTML);
            $(".bookdiv").css("width", "300px");
        });

    });



});
