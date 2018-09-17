$(document).ready(function () {

    $('#retrieve-resources').click(function () {
    var displayResources = $('#display-resources');
   
    displayResources.text('Loading data from JSON source...');
   
    $.ajax({
    type: "GET",
    url: "https://johnsmoses.github.io/advweb-fall2018/google-books-search.json",
    success: function(result)
    {
    console.log(result);
    var output="<table><thead><tr><th>Title</th><th>Publisher</th><th>language</th></thead><tbody>";
    for (var i in result.items)
    {
    output += "<tr><td>" + result.items[i].volumeInfo.title + "</td><td>" + result.items[i].volumeInfo.publisher + "</td><td>" + result.items[i].volumeInfo.language + "</td></tr>";
    }
    output+="</tbody></table>";
   
    displayResources.html(output);
    $("table").addClass("table");
    }
    });
   
    });
   });
