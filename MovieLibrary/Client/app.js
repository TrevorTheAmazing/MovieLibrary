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

                $('#response').append('<table>'+ '<tr>' + '<td>' + movie.Title + '</td>' + '<td>' + movie.Director + '</td>' + '<td>' + movie.Genre + '</td>'+'</tr>' + '</table>');


            });

        });

        
        e.preventDefault();
    }

    $('#my-form').submit(processForm);
})(jQuery);


