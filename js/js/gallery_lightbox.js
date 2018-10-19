;(function () {
    var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
    url += '?' + $.param({
        'api-key': "edf0d9d5f5034c3d89f36943040f34e5"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        var linksContainer = document.getElementById('links');
        $.each(result.results, function(index, photo){
        $('<a/>')
            .append($('<img>').prop('src', photo.multimedia[1].url))
            .prop('href', photo.multimedia[1].url)
            .prop('title', photo.title)
            .attr('data-gallery', '')
            .appendTo(linksContainer)
        })
        console.log(result);
    }).fail(function(err) {
        throw err;
    });
})()
