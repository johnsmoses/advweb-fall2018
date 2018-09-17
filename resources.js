$(document).ready(function () {

    $('#retrieve-resources').click(function () {
    var displayResources = $('#display-resources');
   
    displayResources.text('Loading data from JSON source...');
   
    $.ajax({
    type: "GET",
    url: "https://johnsmoses.github.io/advweb-fall2018/it-ebooks-search.json",
    success: function(result)
    {
    console.log(result);
    var output="<table><thead><tr><th>Name</th><th>Provider</th><th>URL</th></thead><tbody>";
    for (var i in result.Books)
    {
    output += "<tr><td>" + result.Books[i].Title + "</td><td>" + result.Books[i].SubTitle + "</td><td>" + result.Books[i].isbn + "</td></tr>";
    }
    output+="</tbody></table>";
   
    displayResources.html(output);
    $("table").addClass("table");
    }
    });
   
    });
   });
