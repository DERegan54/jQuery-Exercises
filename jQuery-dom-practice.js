$(function() {
    $('#addBtn').on("click", function(evt){
        evt.preventDefault();
        
        const title = $('#title').val();
        let newMovie = $('<li>').text(title);
        $('#titleList').append(newMovie);

        const rating = $('#rating').val();
        let newRating = $('<li>').html(rating);
        $('#ratingList').append(newRating);

        const removeLi = $('<li>')
        $('#btnList').append(removeLi);
        let removeButton = $('<button>').text('X');
        removeLi.append(removeButton);
        
        removeButton.on('click', function() {
            $('#titleList').last().remove();
            $('#ratingList').last().remove();
            $('#btnList').last().remove();
        });
    });
});

// PART 1:
// Line 49: Preventing default behavior so content remains displayed
// Line 51: Selecting the title input's value from the DOM and saving it to the variable, title
// Line 52: Selecting the titleList ul from the DOM and saving it to the variable, titleList
// Lines 53 - 54: Creating a new li, setting text as value from the title input 
// Line 55: Appending the new li to the titleList
// PART 2:
// Line 56: Selecting the rating's input's value from the DOM and saving it to the variable, rating
// Line 57: Selecting the ratingList ul from the DOM and saving it to the variable, ratingList
// Lines 58 - 60: Creating a new li, setting HTML as the value from the rating input, appending it to the ratingList
// PART 3:
// Line 62: Selecting the btnList ul from the DOM and saving it to the variable, buttonList
// Line 63: Creating a new li as a container for the remove button, and saving it to the variable removeLi
// Line 64: Appending removeLi to the buttonList
// Line 65: Creating a new button, saving it to the variable, removeButton,
// Lines 66 and 67: Setting the inner text of removeButton to "X", and appending it to the removeLi

// Part 4:
// Lines 69-72: Upon clicking on the removeButton, this eventlistener listener removes the last title and last rating
//              added to their corresponding lists, as well as removing the button itself


// document.querySelector("#addBtn").addEventListener("click", function (evt) {
//     evt.preventDefault();

//     const title = document.querySelector("#title").value;
//     const titleList = document.querySelector("#titleList");
//     let newMovie = document.createElement("li");
//     newMovie.innerHTML = title;
//     titleList.append(newMovie);
    
//     const rating = document.querySelector("#rating").value;
//     const ratingList = document.querySelector("#ratingList"); 
//     let newRating = document.createElement("li");
//     newRating.innerHTML = rating;
//     ratingList.append(newRating);

//     const buttonList = document.querySelector("#btnList");
//     let removeLi = document.createElement("li");
//     buttonList.append(removeLi);
//     let removeButton = document.createElement("button");
//     removeButton.innerText = 'X';
//     removeLi.append(removeButton);

//     removeButton.addEventListener("click", function() {
//         titleList.lastChild.remove()
//         ratingList.lastChild.remove()
//         buttonList.lastChild.remove(); 
       
//     })
// });
