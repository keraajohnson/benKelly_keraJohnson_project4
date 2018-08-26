// OBJECT FOR HOLDING EVERYTHING - NAMESPACING
const app = {};

// ARRAY TO HOLD JUST COUNTRY NAMES & CAPITALS
app.countries = [];

// ARRAY TO HOLD COUNTRIES ALREADY ASKED AFTER REMOVING THEM FROM ORIGINAL ARRAY
app.usedCountries = [];

// ARRAY TO HOLD COUNTRIES THAT THE USER GOT WRONG
app.wrongAnswers = [];

// ARRAY TO HOLD COUNTRIES THAT THE USER GOT RIGHT
app.score = [];

// FUNCTION TO RETRIEVE INFORMATION FROM API
app.locations = function(){
    $.ajax({
        url: `https://restcountries.eu/rest/v2/all`,
        method: 'GET',
        dataType: 'json'
    }).then((results) => {
        app.countryInfo(results);
    });
};

// FUNCTION TO FILTER OUT ANY COUNTRIES THAT DON'T HAVE REQUIRED INFO AND PUSH RESULTS TO NEW ARRAY TO WORK FROM
app.countryInfo = function(countryArray){
    countryArray.forEach(function(country){
        if (country.name && country.capital){
            app.countries.push({
                name: country.name,
                capital: country.capital,
            });
        };
    });
};

// FUNCTION TO GET RANDOM COUNTRY TO USE FOR EACH QUESTION
app.randomizer = function(){
    const random = Math.floor(Math.random() * app.countries.length);
    return app.countries[random];
};

// FUNCTION TO GET RANDOM NUMBER FOR POPULATING POTENTIAL ANSWERS
app.getRandomNumber = function(number){ 
    return Math.floor(Math.random() * number);
};

// FUNCTION TO GET POTENTIAL ANSWERS INCLUDING THE CORRECT ONE AND POPULATE THE RANDOM COUNTRY AND ANSWERS ON THE PAGE
// SPLICE AND PUSH USED COUNTRIES TO SEPARATE ARRAY
app.getAnswers = function(){
    let answers = [];
    for (let i = 0; i < 4; i++){
        answers.push(app.randomizer());
    };
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
        };
    };
    return app.correctAnswer;
};

// FUNCTION FOR LISTENERS -
// HIDE THE INTRO PAGE ON CLICK OF THE START BUTTON
// START COUNTDOWN
// WHEN COUNTDOWN REACHES ZERO, HIDE MAIN SECTION TO SHOW RESULTS PAGE WITH DYNAMICALLY POPULATED RESULTS
app.events = function(){
    $('.startButton').on('click', function(){
        $('.gameLoad').addClass('hide');
        $('main').removeClass('hide');
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
    // LISTENER FOR CLICKED ANSWER TO FIGURE OUT IF RIGHT ANSWER WAS CLICKED
    // IF RIGHT ANSWER IS CLICKED, PUSH TO SCORE ARRAY
    // DYNAMICALLY POPULATE SCORE ON THE PAGE
    // IF WRONG ANSWER IS CLICKED, PUSH TO WRONG ANSWER ARRAY
    $('.actionButton').on('click', function(e){
        e.preventDefault();
        let clickedAnswer = $(this).text();
        const correctAnswer = app.correctAnswer;
        if(clickedAnswer === correctAnswer.capital){
            app.score.push(correctAnswer);
        }else{
            app.wrongAnswers.push(correctAnswer);
        };
        app.getAnswers();
        $('.score').text(app.score.length);
    });
};

// FUNCTION FOR INITIALIZING THE GAME
app.init = function(){
    app.events();
    app.locations();
};

// DOCUMENT READY FOR CALLING THE INIT FUNCTION
$(function(){
    app.init();
});