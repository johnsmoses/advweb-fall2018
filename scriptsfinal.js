(function() {
  window.datab = {
    "cred": "c9cc9642264dc6f22b577db0cd8340e0",
    "url": "https://api.themoviedb.org/3",
    "imgurl": "http://image.tmdb.org/t/p",
    "imgsize": "/w200",
    call: function(url, params, success, error) {
      var params_str = "api_key=" + datab.cred;
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          params_str += "&" + key + "=" + encodeURIComponent(params[key]);
        }
      }
      var webreq = new XMLHttpRequest();
      webreq.timeout = datab.timeout;
      webreq.open("GET", datab.url + url + "?" + params_str, true);
      webreq.setRequestHeader('Accept', 'application/json');
      webreq.responseType = "text";
      webreq.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status === 200) {
            if (typeof success == "function") {
              success(JSON.parse(this.response));
            } 
          }
        }
      };
      webreq.send();
    }
  }
})()

window.addEventListener('keydown', function(set) {
  handleKeyPress(set);
}, false);

var input = document.getElementById('search');
input.addEventListener('click', search, false);

function handleKeyPress(set) {
  var key = set.keyCode || set.which;
  if (key == 13) {
    search();
  }
}

function search() {

  var item = document.getElementById('item');
  item.innerHTML = '';

  var term = document.getElementById('term').value;

  datab.call('/search/tv', {
      'term': term,
    },
    function(set) {
      var results = Object.keys(set.results);
      console.log("Success: " + set);
      for (var i = 0; i < set.results.length; i++) {
        console.log(JSON.stringify(set.results[i]));
        var vis = document.createElement('div');
        vis.id = i;
        var json = set.results[i];
        var poster = datab.imgurl + datab.imgsize + set.results[i].poster_path;
        var name = set.results[i].original_title;
        var img = new Image();
        img.src = poster;
        item.appendChild(vis);
        vis.appendChild(img);
        vis.innerHTML += '<p>' + name + '</p>';

        function click() {
          var image = document.getElementById('image');
          image.innerHTML = '';
          var i = this.id;
          console.log(i);
          var displayPoster = datab.imgurl + datab.imgsize + set.results[i].poster_path;
          img.src = displayPoster;
          image.appendChild(img);
          image.innerHTML += '<p>Name: ' + set.results[i].original_title + '</p>';
          image.innerHTML += '<p>Ranking: ' + set.results[i].vote_average + '</p>';
          image.innerHTML += '<p>Adult Content?: ' + set.results[i].adult + '</p>';
          image.innerHTML += '<p>Release Date: ' + set.results[i].release_date + '</p>';
          image.innerHTML += '<p>Description: ' + set.results[i].overview + '</p>';
        };
        vis.addEventListener('click', click, false);

      };
    },
    function(set) {
      console.log("Error: " + set)
    }
  )
  datab.call('/search/movie', {
      'term': term,
    },
    function(set) {
      var results = Object.keys(set.results);
      console.log("Success: " + set);

      for (var i = 0; i < set.results.length; i++) {
        console.log(JSON.stringify(set.results[i]));
        var vis = document.createElement('div');
        vis.id = i;
        var json = set.results[i];
        var poster = datab.imgurl + datab.imgsize + set.results[i].poster_path;
        var name = set.results[i].title;
        var img = new Image();
        img.src = poster;
        item.appendChild(vis);
        vis.appendChild(img);
        vis.innerHTML += '<p>' + name + '</p>';

        function click() {
          var image = document.getElementById('image');
          image.innerHTML = '';
          //img.src = '';
          var i = this.id;
          console.log(i);
          var displayPoster = datab.imgurl + datab.imgsize + set.results[i].poster_path;
          img.src = displayPoster;
          image.appendChild(img);
          image.innerHTML += '<p>Name: ' + set.results[i].original_title + '</p>';
          image.innerHTML += '<p>Ranking: ' + set.results[i].vote_average + '</p>';
          image.innerHTML += '<p>Adult Content?: ' + set.results[i].adult + '</p>';
          image.innerHTML += '<p>Release Date: ' + set.results[i].release_date + '</p>';
          image.innerHTML += '<p>Description: ' + set.results[i].overview + '</p>';

        };
        vis.addEventListener('click', click, false);
      };
    },

    function(set) {
      console.log("Error: " + set)
    }
  )
}; 
function movieFilter() {
  datab.call('/movie/top_rated', {},
    function(set) {
      var item = document.getElementById('item');
      item.innerHTML = '';
      var results = Object.keys(set.results);
      console.log("Success: " + set);
      console.log(set.results);
      for (var i = 0; i < set.results.length; i++) {
        console.log(JSON.stringify(set.results[i]));
        var item = document.getElementById('item')
        var vis = document.createElement('div');
        vis.id = i;
        var json = set.results[i];
        var poster = datab.imgurl + datab.imgsize + set.results[i].poster_path;
        var name = set.results[i].title;
        var img = new Image();
        img.src = poster;
        item.appendChild(vis);
        vis.appendChild(img);
        vis.innerHTML += '<p>' + name + '</p>';

        function click() {
          var image = document.getElementById('image');
          image.innerHTML = '';
          //img.src = '';
          var i = this.id;
          console.log(i);
          var displayPoster = datab.imgurl + datab.imgsize + set.results[i].poster_path;
          img.src = displayPoster;
          image.appendChild(img);
          image.innerHTML += '<p>Name: ' + set.results[i].original_title + '</p>';
          image.innerHTML += '<p>Ranking: ' + set.results[i].vote_average + '</p>';
          image.innerHTML += '<p>Adult Content?: ' + set.results[i].adult + '</p>';
          image.innerHTML += '<p>Release Date: ' + set.results[i].release_date + '</p>';
          image.innerHTML += '<p>Description: ' + set.results[i].overview + '</p>';

        };
        vis.addEventListener('click', click, false);
      };
    },
    function(set) {
      console.log("Error: " + set)
    }
  )

}

function tvFilter() {
  datab.call('/tv/top_rated', {},
    function(set) {
      var item = document.getElementById('item');
      item.innerHTML = '';
      var results = Object.keys(set.results);
      console.log("Success: " + set);
      console.log(set.results);
      for (var i = 0; i < set.results.length; i++) {
        console.log(JSON.stringify(set.results[i]));
        var vis = document.createElement('div');
        vis.id = i;
        var json = set.results[i];
        var poster = datab.imgurl + datab.imgsize + set.results[i].poster_path;
        var name = set.results[i].original_title;
        var img = new Image();
        img.src = poster;
        item.appendChild(vis);
        vis.appendChild(img);
        vis.innerHTML += '<p>' + name + '</p>';

        function click() {
          var image = document.getElementById('image');
          image.innerHTML = '';
          //img.src = '';
          var i = this.id;
          console.log(i);
          var displayPoster = datab.imgurl + datab.imgsize + set.results[i].poster_path;
          img.src = displayPoster;
          image.appendChild(img);
          image.innerHTML += '<p>Name: ' + set.results[i].original_title + '</p>';
          image.innerHTML += '<p>Ranking: ' + set.results[i].vote_average + '</p>';
          image.innerHTML += '<p>Adult Content?: ' + set.results[i].adult + '</p>';
          image.innerHTML += '<p>Release Date: ' + set.results[i].release_date + '</p>';
          image.innerHTML += '<p>Description: ' + set.results[i].overview + '</p>';

        };
        vis.addEventListener('click', click, false);
      };
    },
    function(set) {
      console.log("Error: " + set)
    })
}