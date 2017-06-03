function search() {
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data[2]);
            for (var i = 0; i < data[1].length; i++) {
                var results = `<div class="card col-sm-12 card-custom">
                                    <h3 class="card-header headline"><a href="${data[3][i]}">${data[1][i]}</a></h3>
                                    <div class="card-block">
                                        <p class="card-text">${data[2][i]}</p>
                                    </div>
                                </div>`;
                console.log("results", results)
                $("#searchResults").prepend(results);
            }

        }
    })
}
$('document').ready(function () {
    $("#search").on("click", function () {
        search();
    });

    $("#searchTerm").keypress(function (enter) {
        if (enter.which == 13) {
            search();
        }


    });

});
