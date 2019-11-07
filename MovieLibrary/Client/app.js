  var edit= $('<input id = "edi" type="button" value="Edit"/>');
var send= $('<input id = "sen" type="button" value="Send"/>');
                 var input1= $('<input id = "1" input type="text" name="Titile" placeholder="Title"/>');
                 var input2= $('<input id = "2" input type="text" name="Director" placeholder="Director"/>');
               //  var input3= $('<input id = "3" input type="text" name="Genre" placeholder="Genre"/>');
                var btn1 = document.getElementById("1");
                var btn2 = document.getElementById("2");
              //  var btn3 = document.getElementById("3");
                var sendbtn = document.getElementById("sen");
                var editbtn = document.getElementById("edi");
                 var movieId;
                 var record;
                 var movieObject = 

(function ($) {
    function processForm(e) {
        var dict = {
            Title: this["title"].value,
            Director: this["director"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            //type: 'post',
            type: 'get',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function (data, textStatus, jQxhr) {
                $('#response pre').html(data);
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        }).done(function(data)
        {
              

            //console.log(data);
            $('#response').append('<table>'+ '<tr>'+ '<td>' + "Title" + '</td>' + '<td>' + "Director"  + '</td>' + '<td>' + "Genre" + '</td>' + '</tr>' + '<table>');


            $.map(data, function(movie, i){

                $('#response').append('<table>'+ '<tr>' + '<td>' + movie.Title + '</td>' + '<td>' + movie.Director + '</td>' + '<td>' + movie.Genre + '</td>'+ '<td>' + '</td>' + '</tr>' + '</table>');


            });

            $('#response').append(edit);
            $('#response').append(btn1, btn2); //make visible
            $(edit).click(function() {
             $('#response').append(input1, input2 ); //make visible
                $('#response').append(send); //make visible
                 });



          function searchbyTitle(movie) {
        return movie.Title = input1
          }

            function searchbyDirector(movie) {
        return movie.Director = input2
          }

           $(send).click(function() {

           var newdataTitle = data.filter(searchbyTitle);
            var newdataDirection = data.filter(searchbyDirector); {

               if (input1 != null) {
            data[7].Title = input1;
                     }   
            if (input2 != null){
            data[7].Director = input2;
                    }


            }


                 });
          //possibly pu  
          


        });

        //t put in here

        e.preventDefault();
    }

    $('#my-form').submit(processForm);
})(jQuery);



(function ($) {
    function processFormPost(e) {
        var dict = {
            Title: this["title"].value,
            Director: this["director"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            //type: 'post',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function (data, textStatus, jQxhr) {
                $('#response pre').html(data);
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        }).done(function(data)
        {
            //console.log(data);
            $('#response').append('<table>'+ '<tr>'+ '<td>' + "Title" + '</td>' + '<td>' + "Director"  + '</td>' + '<td>' + "Genre" + '</td>' + '</tr>' + '<table>');

            $.map(data, function(movie, i){

                $('#response').append('<table>'+ '<tr>' + '<td>' + movie.Title + '</td>' + '<td>' + movie.Director + '</td>' + '<td>' + movie.Genre + '</td>'+'</tr>' + '</table>');


            });

        });

        
        e.preventDefault();
    }

    $('#my-formPost').submit(processFormPost);
})(jQuery);



 //$(send).click(
    (function ($) {
    function processPut(e) {
        var dict = {
            MovieId: "1",
            Title: "Movie",
            Director: "John"
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            //type: 'post',
            type: 'put',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function (data, textStatus, jQxhr) {
                $('#response pre').html(data);
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        }).done(function(data)
        {
            //console.log(data);
            $('#response').append('<table>'+ '<tr>'+ '<td>' + "Title" + '</td>' + '<td>' + "Director"  + '</td>' + '<td>' + "Genre" + '</td>' + '</tr>' + '<table>');

            $.map(data, function(movie, i){

                $('#response').append('<table>'+ '<tr>' + '<td>' + movie.Title + '</td>' + '<td>' + movie.Director + '</td>' + '<td>' + movie.Genre + '</td>'+'</tr>' + '</table>');


            });

        });

        
        e.preventDefault();
    }

    $('#my-form').submit(processPut);
})(jQuery);
