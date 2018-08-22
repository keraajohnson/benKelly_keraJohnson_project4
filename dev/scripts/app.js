const app = {}

// todays date to determine the time zone
app.todaysDate = new Date();
app.todaysTime = app.todaysDate.toUTCString();
console.log(app.todaysTime);

// ajax call to RESTcountries API
app.locations = function (def) {
    $.ajax({
        url: `https://restcountries.eu/rest/v2/name/${def}`,
        method: 'GET',
        dataType: 'json'
    }).then((res) => {
        console.log(res);
        app.display(res);
    })
}

// function to determine the name of the country entered into the input
app.countryName = function() {
    $('form').on('submit', function (e){
        e.preventDefault();
        let countrySelection = $('.vacationSearch').val();
        app.locations(countrySelection);
    });
}

// function to display the information gathered from the API on the page 
app.display = function(res) {
    const countryName = $('<h2>').text(res[0].name);
    const countryRegion = $('<p>').text(res[0].region);
    const countryCapital = $('<p>').text(res[0].capital);
    const countryCurrency = $('<p>').text(res[0].currencies[0].name);
    const callingCode = $('<p>').text(res[0].callingCodes[0]);
    $('.countryName').append(countryName);
    $('.countryRegion').append(countryRegion);
    $('.countryCapital').append(countryCapital);
    $('.countryCurrency').append(countryCurrency);
    $('.callingCode').append(callingCode);
};

// init function 
app.init = function () {
    app.countryName();
}

// document ready
$(function() {
    app.init();
});
