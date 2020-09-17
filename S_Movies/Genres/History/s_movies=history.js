var historyMoviesArr = [];
var historyMoviesStr = '';
function gethistoryMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=history',
    method: 'get',
    success: function(act){
      historyMoviesArr =  act.data.movies,
      
      historyMoviesArr.forEach(function(v, i){
        historyMoviesStr+=
       `
       <a href="../../Movie_details/s_movies=details.html?id=`+v.id+`">
       <div class="item ">
            <img class="FCimg" src=`+v.medium_cover_image+`>
            <div class="movie_Title_Act">
              <h6 class="text-info title" >`+v.title+`</h6>
            </div>
       </div>
       </a>
       `
     });
     $('.history_Movies').html(historyMoviesStr)
       
    }
  });
}

gethistoryMovies();