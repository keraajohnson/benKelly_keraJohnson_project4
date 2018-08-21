const app = {}

app.locations = function (def) {
    $.ajax({
        url: `https://restcountries.eu/rest/v2/name/${def}`,
        method: 'GET',
        dataType: 'json'
    }).then((res) => {
        console.log(res);
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

app.init = function () {
    app.countryName();
}

$(function() {
    console.log( "ready!" );
    app.init();
});

// We want to get the users vacation location 
// We want to save it to countryName 
