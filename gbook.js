$(document).ready(function () {

    $('#retrieve-resources').click(function () {

    var displayResources = $('#display-resources');

    displayResources.text('Loading data from JSON source...');
   

    $.ajax({
    type: "GET",
    url: "https://johnsmoses.github.io/advweb-fall2018/google-books-book.json",

    success: function(result)
    {

    console.log(result);
    var output="<table><thead><tr><th>Name</th><th>Author</th><th>Picture</th></thead><tbody>";
    
        image = result.volumeInfo.imageLinks.smallThumbnail;
        output += "<tr><td>" + result.volumeInfo.title + "</td><td>" + result.volumeInfo.authors + "</td><td>" + '<img src='+ image + '" />' + "</td></tr>";
    
    output+="</tbody></table>";
    displayResources.html(output);

    $("table").addClass("table");

    }

    });
    });

   });
