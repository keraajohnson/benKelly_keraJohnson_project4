(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = {};

app.countries = [];

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
        // array of answers
        var answers = [];
        for (var i = 0; i < 4; i++) {
            answers.push(app.randomizer());
        }
        var correctAnswer = answers[app.getRandomNumber(4)];

        // loop through all of the answers
        $('.answerOne').text(answers[0].capital);
        $('.answerTwo').text(answers[1].capital);
        $('.answerThree').text(answers[2].capital);
        $('.answerFour').text(answers[3].capital);
        $('.country').text(correctAnswer.name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixFQUFoQjs7QUFFQSxJQUFJLFNBQUosR0FBZ0IsWUFBWTtBQUN4QixNQUFFLElBQUYsQ0FBTztBQUNILG1EQURHO0FBRUgsZ0JBQVEsS0FGTDtBQUdILGtCQUFVO0FBSFAsS0FBUCxFQUlHLElBSkgsQ0FJUSxVQUFDLE9BQUQsRUFBYTtBQUNqQixZQUFJLFdBQUosQ0FBZ0IsT0FBaEI7QUFDSCxLQU5EO0FBT0gsQ0FSRDs7QUFVQTtBQUNBLElBQUksV0FBSixHQUFrQixVQUFTLFlBQVQsRUFBdUI7QUFDckMsaUJBQWEsT0FBYixDQUFxQixVQUFTLE9BQVQsRUFBaUI7QUFDbEMsWUFBSSxRQUFRLElBQVIsSUFBZ0IsUUFBUSxPQUE1QixFQUFxQztBQUNqQyxnQkFBSSxTQUFKLENBQWMsSUFBZCxDQUFtQjtBQUNmLHNCQUFNLFFBQVEsSUFEQztBQUVmLHlCQUFTLFFBQVE7QUFGRixhQUFuQjtBQUlIO0FBQ0osS0FQRDtBQVFILENBVEQ7O0FBV0E7QUFDQSxJQUFJLFVBQUosR0FBaUIsWUFBWTtBQUN6QixRQUFNLFNBQVMsS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLElBQUksU0FBSixDQUFjLE1BQXpDLENBQWY7QUFDQSxXQUFPLElBQUksU0FBSixDQUFjLE1BQWQsQ0FBUDtBQUNILENBSEQ7O0FBS0EsSUFBSSxlQUFKLEdBQXNCLFVBQUMsTUFBRDtBQUFBLFdBQVksS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLE1BQTNCLENBQVo7QUFBQSxDQUF0Qjs7QUFFQSxJQUFJLE1BQUosR0FBYSxZQUFZO0FBQ3JCLE1BQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFZO0FBQ3RDO0FBQ0EsVUFBRSxXQUFGLEVBQWUsUUFBZixDQUF3QixNQUF4QjtBQUNBO0FBQ0EsWUFBSSxVQUFVLEVBQWQ7QUFDQSxVQUFFLFFBQUYsRUFBWSxNQUFaLDJCQUEyQyxPQUEzQztBQUNBLG9CQUFZLFlBQVU7QUFDbEI7QUFDQSxnQkFBRyxXQUFXLENBQWQsRUFBZ0I7QUFDWixrQkFBRSxZQUFGLEVBQWdCLElBQWhCLE1BQXdCLE9BQXhCO0FBQ0g7QUFDRCxnQkFBRyxZQUFZLENBQWYsRUFBaUI7QUFDYjtBQUNIO0FBQ0osU0FSRCxFQVFFLElBUkY7QUFTQTtBQUNBLFlBQUksVUFBVSxFQUFkO0FBQ0EsYUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLENBQXBCLEVBQXVCLEdBQXZCLEVBQTJCO0FBQ3ZCLG9CQUFRLElBQVIsQ0FBYSxJQUFJLFVBQUosRUFBYjtBQUNIO0FBQ0QsWUFBSSxnQkFBZ0IsUUFBUSxJQUFJLGVBQUosQ0FBb0IsQ0FBcEIsQ0FBUixDQUFwQjs7QUFFQTtBQUNBLFVBQUUsWUFBRixFQUFnQixJQUFoQixDQUFxQixRQUFRLENBQVIsRUFBVyxPQUFoQztBQUNBLFVBQUUsWUFBRixFQUFnQixJQUFoQixDQUFxQixRQUFRLENBQVIsRUFBVyxPQUFoQztBQUNBLFVBQUUsY0FBRixFQUFrQixJQUFsQixDQUF1QixRQUFRLENBQVIsRUFBVyxPQUFsQztBQUNBLFVBQUUsYUFBRixFQUFpQixJQUFqQixDQUFzQixRQUFRLENBQVIsRUFBVyxPQUFqQztBQUNBLFVBQUUsVUFBRixFQUFjLElBQWQsQ0FBbUIsY0FBYyxJQUFqQztBQUNELEtBNUJIO0FBOEJILENBL0JEOztBQWlDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFKLEdBQVcsWUFBWTtBQUNuQixRQUFJLE1BQUo7QUFDQSxRQUFJLFNBQUo7QUFDSCxDQUhEOztBQUtBO0FBQ0EsRUFBRSxZQUFXO0FBQ1QsUUFBSSxJQUFKO0FBQ0gsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGFwcCA9IHt9XG5cbmFwcC5jb3VudHJpZXMgPSBbXVxuXG5hcHAubG9jYXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYGh0dHBzOi8vcmVzdGNvdW50cmllcy5ldS9yZXN0L3YyL2FsbGAsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbidcbiAgICB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIGFwcC5jb3VudHJ5SW5mbyhyZXN1bHRzKTtcbiAgICB9KVxufVxuXG4vLyBjcmVhdGUgYW4gYXJyYXkgb2Ygb2JqZWN0cyBvdXQgb2YgdGhpcyBmb3JFYWNoIGxvb3BcbmFwcC5jb3VudHJ5SW5mbyA9IGZ1bmN0aW9uKGNvdW50cnlBcnJheSkge1xuICAgIGNvdW50cnlBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGNvdW50cnkpe1xuICAgICAgICBpZiAoY291bnRyeS5uYW1lICYmIGNvdW50cnkuY2FwaXRhbCkge1xuICAgICAgICAgICAgYXBwLmNvdW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBjb3VudHJ5Lm5hbWUsXG4gICAgICAgICAgICAgICAgY2FwaXRhbDogY291bnRyeS5jYXBpdGFsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gcmFuZG9tIGZ1bmN0aW9uIFxuYXBwLnJhbmRvbWl6ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXBwLmNvdW50cmllcy5sZW5ndGgpO1xuICAgIHJldHVybiBhcHAuY291bnRyaWVzW3JhbmRvbV07XG59XG5cbmFwcC5nZXRSYW5kb21OdW1iZXIgPSAobnVtYmVyKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW1iZXIpO1xuXG5hcHAuZXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICQoJy5zdGFydEJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZ2FtZSBydWxlcyBwb3AgdXBcbiAgICAgICAgJCgnLmdhbWVMb2FkJykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgLy8gZ2FtZSBjb3VudGRvd24gY2xvY2tcbiAgICAgICAgbGV0IGNvdW50ZXIgPSA2MDtcbiAgICAgICAgJCgnLmNsb2NrJykuYXBwZW5kKGA8cCBjbGFzcz1cImNvdW50RG93blwiPiR7Y291bnRlcn08L3A+YCk7XG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb3VudGVyLS07XG4gICAgICAgICAgICBpZihjb3VudGVyID49IDApe1xuICAgICAgICAgICAgICAgICQoJy5jb3VudERvd24nKS50ZXh0KGAke2NvdW50ZXJ9YCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYoY291bnRlciA9PT0gMCl7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoYEdhbWUgT3ZlcmApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwxMDAwKTtcbiAgICAgICAgLy8gYXJyYXkgb2YgYW5zd2Vyc1xuICAgICAgICBsZXQgYW5zd2VycyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKyl7XG4gICAgICAgICAgICBhbnN3ZXJzLnB1c2goYXBwLnJhbmRvbWl6ZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvcnJlY3RBbnN3ZXIgPSBhbnN3ZXJzW2FwcC5nZXRSYW5kb21OdW1iZXIoNCldO1xuXG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgb2YgdGhlIGFuc3dlcnNcbiAgICAgICAgJCgnLmFuc3dlck9uZScpLnRleHQoYW5zd2Vyc1swXS5jYXBpdGFsKTtcbiAgICAgICAgJCgnLmFuc3dlclR3bycpLnRleHQoYW5zd2Vyc1sxXS5jYXBpdGFsKTtcbiAgICAgICAgJCgnLmFuc3dlclRocmVlJykudGV4dChhbnN3ZXJzWzJdLmNhcGl0YWwpO1xuICAgICAgICAkKCcuYW5zd2VyRm91cicpLnRleHQoYW5zd2Vyc1szXS5jYXBpdGFsKTtcbiAgICAgICAgJCgnLmNvdW50cnknKS50ZXh0KGNvcnJlY3RBbnN3ZXIubmFtZSk7IFxuICAgICAgfSk7XG4gXG59XG5cbi8vIHBvcHVsYXRlIGEgbmV3IGNvdW50cnkgd2l0aCA0IG5ldyBjaXRpZXMgb24gdGhlIGNsaWNrIG9mIGFuIGlucHV0IG9uIHRoZSBwcmV2aW91cyBzY3JlZW4gXG4vLyB0YWxseSB0aGUgc2NvcmUgYXMgdGhlIHBsYXllciBwbGF5cyBcblxuLy8gY3JlYXRlIGFuIGFycmF5L29iamVjdCBvZiByZXNwb25zZXMgdG8gZGlzcGxheSBvbiB0aGUgc2NyZWVuIFxuXG4vLyBhZnRlciB0aGUgbWludXRlIGlzIHVwIGRpc3BsYXkgdGhlIGZpbmFsIHNjb3JlIFxuXG4vLyBpbml0IGZ1bmN0aW9uIFxuYXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgYXBwLmV2ZW50cygpO1xuICAgIGFwcC5sb2NhdGlvbnMoKTtcbn1cblxuLy8gZG9jdW1lbnQgcmVhZHlcbiQoZnVuY3Rpb24oKSB7XG4gICAgYXBwLmluaXQoKTtcbn0pO1xuIl19
