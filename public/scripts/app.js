(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = {};

app.countries = [];

app.score = [];

app.locations = function () {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/all',
        method: 'GET',
        dataType: 'json'
    }).then(function (results) {
        app.countryInfo(results);
    });
};

// create an array of objects out of this forEach loop
app.countryInfo = function (countryArray) {
    countryArray.forEach(function (country) {
        if (country.name && country.capital) {
            app.countries.push({
                name: country.name,
                capital: country.capital
            });
        }
    });
};

// random function 
app.randomizer = function () {
    var random = Math.floor(Math.random() * app.countries.length);
    return app.countries[random];
};

app.getRandomNumber = function (number) {
    return Math.floor(Math.random() * number);
};

app.getAnswers = function () {
    var answers = [];
    for (var i = 0; i < 4; i++) {
        answers.push(app.randomizer());
    }
    app.correctAnswer = answers[app.getRandomNumber(4)];
    // console.log(app.correctAnswer);


    // loop through all of the answers
    $('.answerOne').text(answers[0].capital);
    $('.answerTwo').text(answers[1].capital);
    $('.answerThree').text(answers[2].capital);
    $('.answerFour').text(answers[3].capital);
    $('.country').text(app.correctAnswer.name);
    return app.correctAnswer;
};

app.events = function () {
    $('.startButton').on('click', function () {
        // game rules pop up
        $('.gameLoad').addClass('hide');
        // game countdown clock
        var counter = 60;
        $('.clock').append('<p class="countDown">' + counter + '</p>');
        setInterval(function () {
            counter--;
            if (counter >= 0) {
                $('.countDown').text('' + counter);
            };
            if (counter === 0) {
                // alert(`Game Over`);
            };
        }, 1000);
        app.getAnswers();
    });
    $('.actionButton').on('click', function (e) {
        e.preventDefault();
        var clickedAnswer = $(this).text();
        var correctAnswer = app.correctAnswer;
        //   console.log(clickedAnswer, correctAnswer.capital);
        if (clickedAnswer === correctAnswer.capital) {
            app.score.push(correctAnswer);
            console.log(app.score);
        }
        app.getAnswers();
        // keep score - increase on right answer
        // push correct answer to score array
    });
};

// populate a new country with 4 new cities on the click of an input on the previous screen 
// tally the score as the player plays 

// create an array/object of responses to display on the screen 

// after the minute is up display the final score 

// init function 
app.init = function () {
    app.events();
    app.locations();
};

// document ready
$(function () {
    app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixFQUFoQjs7QUFFQSxJQUFJLEtBQUosR0FBWSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixZQUFZO0FBQ3hCLE1BQUUsSUFBRixDQUFPO0FBQ0gsbURBREc7QUFFSCxnQkFBUSxLQUZMO0FBR0gsa0JBQVU7QUFIUCxLQUFQLEVBSUcsSUFKSCxDQUlRLFVBQUMsT0FBRCxFQUFhO0FBQ2pCLFlBQUksV0FBSixDQUFnQixPQUFoQjtBQUNILEtBTkQ7QUFPSCxDQVJEOztBQVVBO0FBQ0EsSUFBSSxXQUFKLEdBQWtCLFVBQVMsWUFBVCxFQUF1QjtBQUNyQyxpQkFBYSxPQUFiLENBQXFCLFVBQVMsT0FBVCxFQUFpQjtBQUNsQyxZQUFJLFFBQVEsSUFBUixJQUFnQixRQUFRLE9BQTVCLEVBQXFDO0FBQ2pDLGdCQUFJLFNBQUosQ0FBYyxJQUFkLENBQW1CO0FBQ2Ysc0JBQU0sUUFBUSxJQURDO0FBRWYseUJBQVMsUUFBUTtBQUZGLGFBQW5CO0FBSUg7QUFDSixLQVBEO0FBUUgsQ0FURDs7QUFXQTtBQUNBLElBQUksVUFBSixHQUFpQixZQUFZO0FBQ3pCLFFBQU0sU0FBUyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBZ0IsSUFBSSxTQUFKLENBQWMsTUFBekMsQ0FBZjtBQUNBLFdBQU8sSUFBSSxTQUFKLENBQWMsTUFBZCxDQUFQO0FBQ0gsQ0FIRDs7QUFLQSxJQUFJLGVBQUosR0FBc0IsVUFBQyxNQUFEO0FBQUEsV0FBWSxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBZ0IsTUFBM0IsQ0FBWjtBQUFBLENBQXRCOztBQUVBLElBQUksVUFBSixHQUFpQixZQUFVO0FBQ3ZCLFFBQUksVUFBVSxFQUFkO0FBQ0EsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLENBQXBCLEVBQXVCLEdBQXZCLEVBQTRCO0FBQ3hCLGdCQUFRLElBQVIsQ0FBYSxJQUFJLFVBQUosRUFBYjtBQUNIO0FBQ0QsUUFBSSxhQUFKLEdBQW9CLFFBQVEsSUFBSSxlQUFKLENBQW9CLENBQXBCLENBQVIsQ0FBcEI7QUFDQTs7O0FBR0E7QUFDQSxNQUFFLFlBQUYsRUFBZ0IsSUFBaEIsQ0FBcUIsUUFBUSxDQUFSLEVBQVcsT0FBaEM7QUFDQSxNQUFFLFlBQUYsRUFBZ0IsSUFBaEIsQ0FBcUIsUUFBUSxDQUFSLEVBQVcsT0FBaEM7QUFDQSxNQUFFLGNBQUYsRUFBa0IsSUFBbEIsQ0FBdUIsUUFBUSxDQUFSLEVBQVcsT0FBbEM7QUFDQSxNQUFFLGFBQUYsRUFBaUIsSUFBakIsQ0FBc0IsUUFBUSxDQUFSLEVBQVcsT0FBakM7QUFDQSxNQUFFLFVBQUYsRUFBYyxJQUFkLENBQW1CLElBQUksYUFBSixDQUFrQixJQUFyQztBQUNBLFdBQU8sSUFBSSxhQUFYO0FBQ0gsQ0FoQkQ7O0FBa0JBLElBQUksTUFBSixHQUFhLFlBQVk7QUFDckIsTUFBRSxjQUFGLEVBQWtCLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7QUFDdEM7QUFDQSxVQUFFLFdBQUYsRUFBZSxRQUFmLENBQXdCLE1BQXhCO0FBQ0E7QUFDQSxZQUFJLFVBQVUsRUFBZDtBQUNBLFVBQUUsUUFBRixFQUFZLE1BQVosMkJBQTJDLE9BQTNDO0FBQ0Esb0JBQVksWUFBVTtBQUNsQjtBQUNBLGdCQUFHLFdBQVcsQ0FBZCxFQUFnQjtBQUNaLGtCQUFFLFlBQUYsRUFBZ0IsSUFBaEIsTUFBd0IsT0FBeEI7QUFDSDtBQUNELGdCQUFHLFlBQVksQ0FBZixFQUFpQjtBQUNiO0FBQ0g7QUFDSixTQVJELEVBUUUsSUFSRjtBQVNBLFlBQUksVUFBSjtBQUNELEtBaEJIO0FBaUJFLE1BQUUsZUFBRixFQUFtQixFQUFuQixDQUFzQixPQUF0QixFQUErQixVQUFTLENBQVQsRUFBVztBQUN0QyxVQUFFLGNBQUY7QUFDQSxZQUFJLGdCQUFnQixFQUFFLElBQUYsRUFBUSxJQUFSLEVBQXBCO0FBQ0EsWUFBTSxnQkFBZ0IsSUFBSSxhQUExQjtBQUNGO0FBQ0UsWUFBRyxrQkFBa0IsY0FBYyxPQUFuQyxFQUEyQztBQUN2QyxnQkFBSSxLQUFKLENBQVUsSUFBVixDQUFlLGFBQWY7QUFDQSxvQkFBUSxHQUFSLENBQVksSUFBSSxLQUFoQjtBQUNIO0FBQ0QsWUFBSSxVQUFKO0FBQ0Y7QUFDQTtBQUNELEtBWkQ7QUFhTCxDQS9CRDs7QUFpQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBSixHQUFXLFlBQVk7QUFDbkIsUUFBSSxNQUFKO0FBQ0EsUUFBSSxTQUFKO0FBQ0gsQ0FIRDs7QUFLQTtBQUNBLEVBQUUsWUFBVztBQUNULFFBQUksSUFBSjtBQUNILENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBhcHAgPSB7fTtcblxuYXBwLmNvdW50cmllcyA9IFtdO1xuXG5hcHAuc2NvcmUgPSBbXTtcblxuYXBwLmxvY2F0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGBodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92Mi9hbGxgLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nXG4gICAgfSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICBhcHAuY291bnRyeUluZm8ocmVzdWx0cyk7XG4gICAgfSk7XG59O1xuXG4vLyBjcmVhdGUgYW4gYXJyYXkgb2Ygb2JqZWN0cyBvdXQgb2YgdGhpcyBmb3JFYWNoIGxvb3BcbmFwcC5jb3VudHJ5SW5mbyA9IGZ1bmN0aW9uKGNvdW50cnlBcnJheSkge1xuICAgIGNvdW50cnlBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGNvdW50cnkpe1xuICAgICAgICBpZiAoY291bnRyeS5uYW1lICYmIGNvdW50cnkuY2FwaXRhbCkge1xuICAgICAgICAgICAgYXBwLmNvdW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBjb3VudHJ5Lm5hbWUsXG4gICAgICAgICAgICAgICAgY2FwaXRhbDogY291bnRyeS5jYXBpdGFsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8vIHJhbmRvbSBmdW5jdGlvbiBcbmFwcC5yYW5kb21pemVyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFwcC5jb3VudHJpZXMubGVuZ3RoKTtcbiAgICByZXR1cm4gYXBwLmNvdW50cmllc1tyYW5kb21dO1xufVxuXG5hcHAuZ2V0UmFuZG9tTnVtYmVyID0gKG51bWJlcikgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtYmVyKTtcblxuYXBwLmdldEFuc3dlcnMgPSBmdW5jdGlvbigpe1xuICAgIGxldCBhbnN3ZXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgYW5zd2Vycy5wdXNoKGFwcC5yYW5kb21pemVyKCkpO1xuICAgIH1cbiAgICBhcHAuY29ycmVjdEFuc3dlciA9IGFuc3dlcnNbYXBwLmdldFJhbmRvbU51bWJlcig0KV07XG4gICAgLy8gY29uc29sZS5sb2coYXBwLmNvcnJlY3RBbnN3ZXIpO1xuICAgIFxuXG4gICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBvZiB0aGUgYW5zd2Vyc1xuICAgICQoJy5hbnN3ZXJPbmUnKS50ZXh0KGFuc3dlcnNbMF0uY2FwaXRhbCk7XG4gICAgJCgnLmFuc3dlclR3bycpLnRleHQoYW5zd2Vyc1sxXS5jYXBpdGFsKTtcbiAgICAkKCcuYW5zd2VyVGhyZWUnKS50ZXh0KGFuc3dlcnNbMl0uY2FwaXRhbCk7XG4gICAgJCgnLmFuc3dlckZvdXInKS50ZXh0KGFuc3dlcnNbM10uY2FwaXRhbCk7XG4gICAgJCgnLmNvdW50cnknKS50ZXh0KGFwcC5jb3JyZWN0QW5zd2VyLm5hbWUpO1xuICAgIHJldHVybiBhcHAuY29ycmVjdEFuc3dlcjtcbn07XG5cbmFwcC5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnN0YXJ0QnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBnYW1lIHJ1bGVzIHBvcCB1cFxuICAgICAgICAkKCcuZ2FtZUxvYWQnKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAvLyBnYW1lIGNvdW50ZG93biBjbG9ja1xuICAgICAgICBsZXQgY291bnRlciA9IDYwO1xuICAgICAgICAkKCcuY2xvY2snKS5hcHBlbmQoYDxwIGNsYXNzPVwiY291bnREb3duXCI+JHtjb3VudGVyfTwvcD5gKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgICAgIGlmKGNvdW50ZXIgPj0gMCl7XG4gICAgICAgICAgICAgICAgJCgnLmNvdW50RG93bicpLnRleHQoYCR7Y291bnRlcn1gKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZihjb3VudGVyID09PSAwKXtcbiAgICAgICAgICAgICAgICAvLyBhbGVydChgR2FtZSBPdmVyYCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LDEwMDApO1xuICAgICAgICBhcHAuZ2V0QW5zd2VycygpO1xuICAgICAgfSk7XG4gICAgICAkKCcuYWN0aW9uQnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGxldCBjbGlja2VkQW5zd2VyID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICAgY29uc3QgY29ycmVjdEFuc3dlciA9IGFwcC5jb3JyZWN0QW5zd2VyO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGNsaWNrZWRBbnN3ZXIsIGNvcnJlY3RBbnN3ZXIuY2FwaXRhbCk7XG4gICAgICAgICAgaWYoY2xpY2tlZEFuc3dlciA9PT0gY29ycmVjdEFuc3dlci5jYXBpdGFsKXtcbiAgICAgICAgICAgICAgYXBwLnNjb3JlLnB1c2goY29ycmVjdEFuc3dlcik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFwcC5zY29yZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFwcC5nZXRBbnN3ZXJzKCk7XG4gICAgICAgIC8vIGtlZXAgc2NvcmUgLSBpbmNyZWFzZSBvbiByaWdodCBhbnN3ZXJcbiAgICAgICAgLy8gcHVzaCBjb3JyZWN0IGFuc3dlciB0byBzY29yZSBhcnJheVxuICAgICAgfSk7XG59XG5cbi8vIHBvcHVsYXRlIGEgbmV3IGNvdW50cnkgd2l0aCA0IG5ldyBjaXRpZXMgb24gdGhlIGNsaWNrIG9mIGFuIGlucHV0IG9uIHRoZSBwcmV2aW91cyBzY3JlZW4gXG4vLyB0YWxseSB0aGUgc2NvcmUgYXMgdGhlIHBsYXllciBwbGF5cyBcblxuLy8gY3JlYXRlIGFuIGFycmF5L29iamVjdCBvZiByZXNwb25zZXMgdG8gZGlzcGxheSBvbiB0aGUgc2NyZWVuIFxuXG4vLyBhZnRlciB0aGUgbWludXRlIGlzIHVwIGRpc3BsYXkgdGhlIGZpbmFsIHNjb3JlIFxuXG4vLyBpbml0IGZ1bmN0aW9uIFxuYXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgYXBwLmV2ZW50cygpO1xuICAgIGFwcC5sb2NhdGlvbnMoKTtcbn1cblxuLy8gZG9jdW1lbnQgcmVhZHlcbiQoZnVuY3Rpb24oKSB7XG4gICAgYXBwLmluaXQoKTtcbn0pO1xuIl19
