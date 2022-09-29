let titleId = 0;
let movieList = [];
let ratingList = [];

$(function () {
    $("#addMov").click(function (event) {
        event.preventDefault();
        $("<li>").attr("id", "mov1").text($("#title").val());
        $("#mov1").appendTo($("#titleList"));
        movieList.push($("#title").val());

        $("<li>").attr("id", "rat1").text($("#rating").val());
        $("#rat1").appendTo("#ratingList");
        ratingList.push($("#rating").val());

        $("<button>").attr("class", "remBtns").text("X");
        $("#btn1").appendTo("#btnList");
    });
});

