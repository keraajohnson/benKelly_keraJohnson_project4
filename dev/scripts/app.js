const app = {}

app.locations = function () {
    $.ajax({
        url: `https://restcountries.eu/rest/v2/all`,
        method: 'GET',
        dataType: 'json'
    }).then((results) => {
        // console.log(results);
        app.countryInfo(results)
    })
}

// random function 
app.randomizer = function(item) {
    Math.floor(Math.random() * item.length);
    console.log(item);
}

app.countryInfo = function(countryArray) {
    for(let i = 0; i <= countryArray.length; i++) {
        const countryName = countryArray[i].name;
        console.log(countryName);
        const countryCapital = countryArray[i].capital;
        console.log(countryCapital);
        app.randomizer(countryArray);
    }
};

// new
app.events = function () {
    $('.startButton').on('click', function () {
        console.log('clicked');
        $('.gameLoad').addClass('hide');
    });
}

// start button starts the game (rules)
    // timer of 1 minute 
// get a random country 
    // display it on the screen
// get 4 random (one is correct) capital cities
    // display them on the screen
// populate a new country with 4 new cities on the click of an input on the previous screen 
// tally the score as the player plays 

// create an array/object of responses to display on the screen 

// after the minute is up display the final score 

// init function 
app.init = function () {
    app.locations();
    // new
    app.events();
}

// document ready
$(function() {
    app.init();
});







// function to determine the name of the country entered into the input
// app.countryName = function () {
//     $('form').on('submit', function (e) {
//         e.preventDefault();
//         let countrySelection = $('.vacationSearch').val();
//         app.locations(countrySelection);
//     });
// }

// function to display the information gathered from the API on the page 
// app.display = function(res) {
//     const countryName = $('<h2>').text(res[0].name);
//     const countryRegion = $('<p>').text(res[0].region);
//     const countryCapital = $('<p>').text(res[0].capital);
//     const countryCurrency = $('<p>').text(res[0].currencies[0].name);
//     const callingCode = $('<p>').text(res[0].callingCodes[0]);
//     $('.countryName').append(countryName);
//     $('.countryRegion').append(countryRegion);
//     $('.countryCapital').append(countryCapital);
//     $('.countryCurrency').append(countryCurrency);
//     $('.callingCode').append(callingCode);
// };
