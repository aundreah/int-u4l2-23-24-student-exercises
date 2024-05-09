let buttonOne = document.querySelector(".button-one");
let captionOne = document.querySelector(".caption-one");

buttonOne.addEventListener("click", function() {
    // 1. Declare a variable named spidyCaption.
    let spidyCaption;
    //  - Store the value of the input with a class of "comment-one".
    buttonOne.addEventListener("click", function() {
        let spidyCaption = document.querySelector(".comment-one").value; 
        captionOne.textContent = spidyCaption;
    });

    // 2. Display the variable spidyCaption to captionOne.
        captionOne.textContent = spidyCaption;

});

// 3. Repeat the previous steps for the second meme.
//  - Be sure to store variables for the button and caption.