const app = {}

app.countries = []

app.locations = function () {
    $.ajax({
        url: `https://restcountries.eu/rest/v2/all`,
        method: 'GET',
        dataType: 'json'
    }).then((results) => {
        // console.log(results);
        app.countryInfo(results);
        // console.log(results);
    })
}

// create an array of objects out of this forEach loop
app.countryInfo = function(countryArray) {
    // console.log(countryArray.length);
    countryArray.forEach(function(country){
        if (country.name && country.capital) {
            app.countries.push({
                name: country.name,
                capital: country.capital,
            });
        }
    });
    app.randomizer();
}

// random function 
app.randomizer = function () {
    console.log(app.countries.length)
    const random = Math.floor(Math.random() * app.countries.length) + 1;
    // console.log(random);
    app.events(random);
}


app.events = function (randomNumber) {
    let randomValue = randomNumber;
    $('.startButton').on('click', function () {
        // game rules pop up
        $('.gameLoad').addClass('hide');
        // game countdown clock
        let counter = 60;
        $('.clock').append(`<p class="countDown">${counter}</p>`);
        setInterval(function(){
            counter--;
            if(counter >= 0){
                $('.countDown').text(`${counter}`);
            };
            if(counter === 0){
                alert(`Game Over`);
            };
        },1000);
        // question start
        let question = app.countries[randomValue];
        $('.country').text(question.name);
        console.log(question.name);
        console.log(question.capital);
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
    // new
    // app.events();
    // app.randomizer();
    app.locations();
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
