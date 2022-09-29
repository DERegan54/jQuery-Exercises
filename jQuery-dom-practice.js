


// $(function () {
//     let title = $("#title").val();
//     let rating = $("#rating").val();

//     $("#addBtn").click(function () {
//         $("<li>").attr("id", title).text('title');
//         $("title").appendTo($("#titleList"));
//         movieArrt.push(title);

//         $("<li>").attr("id", "rat1").text(rating);
//         $("#rat1").appendTo("#ratingList");
//         ratingArr.push(rating);

//         $("<button>").attr("class", "remBtns").attr("id", "newBtn").text("X");
//         $("#newBtn").appendTo("#btnList");
//     });
// });



document.querySelector("#addBtn").addEventListener("click", function (evt) {
    // Preventing default behavior so content remains displayed
    evt.preventDefault();

    // Selecting the title input's value from the DOM and saving it to the variable, title
    // Selecting the titleList ul from the DOM and saving it to the variable, titleList
    // Creating a new li, setting text as value from the title input, appending it to the titleList
    const title = document.querySelector("#title").value;
    const titleList = document.querySelector("#titleList");
    let newMovie = document.createElement("li");
    newMovie.innerHTML = title;
    titleList.append(newMovie);
    
    // Selecting the rating's input's value from the DOM and saving it to the variable, rating
    // Selecting the ratingList ul from the DOM and saving it to the variable, ratingList
    // Creating a new li, setting HTML as the value from the rating input, appending it to the ratingList
    const rating = document.querySelector("#rating").value;
    const ratingList = document.querySelector("#ratingList"); 
    let newRating = document.createElement("li");
    newRating.innerHTML = rating;
    ratingList.append(newRating);

    // Selecting the btnList ul from the DOM and saving it to the variable, buttonList
    // Creating a new li as a container for the remove button, and saving it to the variable removeLi
    // Appending removeLi to the buttonList
    // Creating a new button, saving it to the variable, removeButton,
    // Setting the inner text of removeButton to "X", and appending it to the removeLi
    const buttonList = document.querySelector("#btnList");
    let removeLi = document.createElement("li");
    buttonList.append(removeLi);
    let removeButton = document.createElement("button");
    removeButton.innerText = 'X';
    removeLi.append(removeButton);

    // Upon clicking on the removeButton, this eventlistener listener removes the last title and last rating
    // added to their corresponding lists, as well as removing the button itself
    removeButton.addEventListener("click", function() {
        titleList.lastChild.remove()
        ratingList.lastChild.remove()
        buttonList.lastChild.remove(); 
       
    })
});
