

// Array to hold each post and credential 
let userPostInfo = [];



const userName= document.querySelector("#user-login");

const titelOfPost = document.querySelector("#title-post");

const usersPost = document.querySelector("#msg");

const submitButton = document.querySelector("#post");

// This function stores newly added post to the local storage
function storePost(){

localStorage.setItem("userPostInfo", JSON.stringify(userPostInfo));

}

function redirect(){

    document.location.href = "file:///Users/ezekielcampos/Desktop/bootcamp-hw/challenge-4/blog.html";

}

function init() {

    const storedPost = JSON.parse(localStorage.getItem('userPostInfo'));
    // TODO: Describe the functionality of the following `if` statement.
    if (storedPost !== null) {
      userPostInfo = storedPost;
    }
 
    console.log('a');
  }

// This submit all the data
submitButton.addEventListener("click", function(event){

event.preventDefault();

const userInput = userName.value;

const userTitle = titelOfPost.value;

const content = usersPost.value.trim();


userPostInfo.push({user:userInput, title:userTitle, post:content});

userName.value = '';
titelOfPost.value= '';
usersPost.value = '';


storePost();


// Clears the input fields




// redirect();


});

init();