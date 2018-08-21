const app = {}

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

app.countryName = function() {
    $('form').on('submit', function (e){
        e.preventDefault();
        let countrySelection = $('.vacationSearch').val();
        app.locations(countrySelection);
        console.log(countrySelection);
    });
}

app.display = function(res) {
    const countryName = $('<h2>').text(res[0].name);
    const countryRegion = $('<h2>').text(res[0].region);
    const countryCapital = $('<h2>').text(res[0].capital);
    const countryCurrency = $('<h2>').text(res[0].currencies[0].name);
    const callingCode = $('<h2>').text(res[0].callingCodes[0]);
    $('.results').append(countryName);
    $('.results').append(countryRegion);
};

app.init = function () {
    app.countryName();
}

$(function() {
    console.log( "ready!" );
    app.init();
});

// We want to get the users vacation location 
// We want to save it to countryName 
