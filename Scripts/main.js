const mail_form = document.querySelector(".mail-form"); //Form element

const validateForm = () => { //This function runs when the submit button is clicked
    let email = document.forms["mail-form"]["email"].value; 
    let name = document.forms["mail-form"]["name"].value;
    const name_regex = /^[a-z ,.'-]+$/i; //Standard name regular expression match
    const email_regex = /\S+@\S+\.\S+/; //Standard email regular expression match

    if(validateEmail(email, email_regex) && validateName(name, name_regex) == true) {
        //In a real web application I would pass the input data to a server to handle
        success_obj = {
            "Message": "Thank you for signing up!",
            "data": {
                "name": name,
                "email": email
            }
        }
        console.log(success_obj);
        showNotification("Signed Up!", `${email} added`); //Shows if form data is valid
    } else {
        showNotification("Invalid Details", "Please Try again"); //Shows if form data is invalid
    }
}

const inputs = document.querySelectorAll('#name-input, #email-input'); //Input elements from form

mail_form.addEventListener('submit', () => { //Executues when the submit button is clicked
    validateForm(); //Calls the above funciton
    inputs.forEach(i => {
        i.value = ''; //Resets the input values on submit
    });
});

const validateEmail = (a, b) => {
    if(isValid("email", a, b) == true) { //Sets the type to "email" and allows the form data to pass
        return true;
    } else {
        return false;
    }
}

const validateName = (a, b) => {
    if(isValid("name", a, b) == true) { //Sets the type to "name" and allows the form data to pass
        return true; //If the function returns true then this function will also return true
    } else {
        return false;
    }
}

let data = []; //Init array
let valid; 

const isValid = (type, input, regex) => { //Takes in the input value type, the input value and the corresponding regex for that type
    data = [input, regex]; //We insert these values into an array to be distributed 
    switch (type) { //We are running a switch statement on the expression of the passed in type
        case "name": //If the type is "name" this block will run
            if(data[1].test(data[0])) { //We run a regex test using the regex for the current type on the current input
                valid = true; //If true then the valid variable will become true
            } else {
                valid = false;
            }
            break;
        case "email": //If the type is "email" this block will run
            if(data[1].test(data[0])) {
                valid = true;
            } else {
                valid = false;
            }
            break;
        default:
            console.log("/");
    }
    return valid; //Returns the state of valid
}

const nofification_element = document.querySelector('.notification-container'); //Notification elements
const notification_title = document.querySelector(".notification-title");
const notification_text = document.querySelector(".notification-text");

const showNotification = (title, text) => { //Takes a title param and text param (see above functions)
    nofification_element.style.display = "block"; //Show the notificaiton
    notification_title.innerHTML = title; //Change the title html 
    notification_text.innerHTML = text; //Change the text html
}

const hideNotification = () => { //When the 'x' icon is clicked, this function will run
    nofification_element.style.display = "none";
}