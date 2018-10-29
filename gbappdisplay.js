function getdisplay(bookid){

    
 /*   var getUrlParameter = function getUrlParameter(sParam) {
var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
    }
}
};
*/
    //var id=getUrlParameter('id'); //use the id for the string to pull id using geturl function
    var id = bookid;
    var service_point="https://www.googleapis.com/books/v1/volumes/"+id;
    $.getJSON(service_point, function (json)
    {
        var booksHTML="";
        var description=json.volumeInfo.description;
        var title=json.volumeInfo.title;
        var url=json.volumeInfo.infoLink;
        var cover=json.volumeInfo.imageLinks.small;
        var auth=json.volumeInfo.authors;
        var matrat=json.volumeInfo.maturityRating;
        
        $("#cover").attr("src",cover);
        $("#title").text(title);
        $("#webpage").text(url).attr("href",url);
        
        var resultHTML="";
        for (i in json.volumeInfo.categories)
        {
            resultHTML+=json.volumeInfo.categories[i]+"; ";
        }
        $("#category").html(resultHTML);
        $("#author").text(auth);
        $("#maturity").text(matrat);
    }); 
}