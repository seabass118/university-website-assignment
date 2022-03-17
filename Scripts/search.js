const search_form = document.querySelector(".search-form"); //Search form element
const year = document.querySelector(".res-year");  //Year element
const results = document.querySelector(".res-items"); //Results element

window.addEventListener('load', () => {
    results.style.display = "none";
})

search_form.addEventListener('submit', () => { //When the submit input is clicked, this code will run
    let param = document.forms["search-form"]["year"].value; //The value of the search input when submitted
    let yyyy = /^[12][0-9]{3}$/;

    if(yyyy.test(param)) {
        var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'); //Init https request
        xhr.open('get', `https://mudfoot.doc.stu.mmu.ac.uk/node/api/halloffame?year=${param}`, true); //Opens the http request and adds the input value as a parameter (the year selected)
        xhr.onreadystatechange = function() { //Once a connection has been made the code will run
            if (xhr.readyState == 4 && xhr.status == 200) { //Checks for errors

                let res = JSON.parse(xhr.responseText);  //Parses the incoming Json data

                year.innerHTML = `Showing results for: <div class='year-text'>${res['year']}</div>`; //Sets the search results title to the input year


                let x = ""; //Init variable to store the result items
                if(res['data'] != undefined) {
                    for(let i = 0; i < res['data'].length; i++) { //Loops through the response data and creates a result for each item
                        let image = res['data'][i]['image']['source'];
                        let name = res['data'][i]['band']['name'];
                        let url = res['data'][i]['band']['url'];

                        if(image != undefined) {
                            console.log("hello");
                        } else {
                            image = "/Images/wutang_logo.png";
                        }

                        x += `
                            <div class='res-item flex'>
                                <img class='res-image' src='${image}' alt="${name} Image">
                                <a href='${url}' target="_blank">
                                    <div class="res-name">${name}</div>
                                </a>
                            </div>
                        `; //Creates a result element for each item in the response data
                    }
                } else {
                    x = "No Results!";
                }
                
                results.style.display = "flex";
                results.innerHTML = x; //Sets the html of "results" to the result items
            } 
        }
        xhr.send(); //Sends the request to the server
    } else {
        showNotification("Invalid Year", "Use 'YYYY' Format"); //Show error notification if year input is invalid
    }

});