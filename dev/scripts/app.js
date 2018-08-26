const app = {};

app.countries = [];

app.usedCountries = [];

app.wrongAnswers = [];

app.score = [];

app.locations = function () {
    $.ajax({
        url: `https://restcountries.eu/rest/v2/all`,
        method: 'GET',
        dataType: 'json'
    }).then((results) => {
        app.countryInfo(results);
    });
};

app.countryInfo = function(countryArray) {
    countryArray.forEach(function(country){
        if (country.name && country.capital) {
            app.countries.push({
                name: country.name,
                capital: country.capital,
            });
        }
    });
};

app.randomizer = function () {
    const random = Math.floor(Math.random() * app.countries.length);
    return app.countries[random];
};

app.getRandomNumber = function (number) { 
    return Math.floor(Math.random() * number);
};

app.getAnswers = function(){
    let answers = [];
    for (let i = 0; i < 4; i++) {
        answers.push(app.randomizer());
    }
    const randomNumber = app.getRandomNumber(4);
    app.correctAnswer = answers[randomNumber];

    $('.answerOne').text(answers[0].capital);
    $('.answerTwo').text(answers[1].capital);
    $('.answerThree').text(answers[2].capital);
    $('.answerFour').text(answers[3].capital);
    $('.country').text(app.correctAnswer.name);

    for(let i = 0; i < app.countries.length; i++ ){
        if (app.countries[i].name === app.correctAnswer.name) {
            app.usedCountries.push(app.countries.splice(i, 1)[0]);
        }
    }
    return app.correctAnswer;
};

app.events = function () {
    $('.startButton').on('click', function () {
        // game rules pop up
        $('.gameLoad').addClass('hide');
        $('main').removeClass('hide');
        // game countdown clock
        let counter = 60;
        $('.clock').append(`<p class="countDown">${counter}</p>`);
        setInterval(function(){
            counter--;
            if(counter >= 0){
                $('.countDown').text(`${counter}`);
            };
            if(counter === 0){
                $('.finalResult').removeClass('hide');
                $('main').addClass('hide');

                app.score.forEach(function (rightCountry){
                    $('.rightAnswers').append(`<h2>${rightCountry.name}</h2><h3>${rightCountry.capital}</h3>`);
                });
                
                app.wrongAnswers.forEach(function (wrongCountry){
                    $('.wrongAnswers').append(`<h2>${wrongCountry.name}</h2><h3>${wrongCountry.capital}</h3>`);
                });

            };
        },1000);
        app.getAnswers();
      });
      $('.actionButton').on('click', function(e){
          e.preventDefault();
          
          let clickedAnswer = $(this).text();
          const correctAnswer = app.correctAnswer;
          
          if(clickedAnswer === correctAnswer.capital){
              app.score.push(correctAnswer);
          } 
          else {
              app.wrongAnswers.push(correctAnswer);
          };
          app.getAnswers();
          
          $('.score').text(app.score.length);
      });
}

app.init = function () {
    app.events();
    app.locations();
}

$(function() {
    app.init();
});
