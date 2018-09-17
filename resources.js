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
    var output="<table><thead><tr><th>Name</th><th>Provider</th><th>URL</th></thead><tbody>";
    for (var i in result)
    {
    output += "<tr><td>" + result[i].volumeInfo.title + "</td><td>" + result[i].volumeInfo.title + "</td><td>" + result[i].volumeInfo.title + "</td></tr>";    
    }
    output+="</tbody></table>";
   
    displayResources.html(output);
    $("table").addClass("table");
    }
    });
   
    });
   });
