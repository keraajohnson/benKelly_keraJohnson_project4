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
        $('main').removeClass('hide');
        // game countdown clock
        var counter = 60;
        $('.clock').append('<p class="countDown">' + counter + '</p>');
        setInterval(function () {
            counter--;
            if (counter >= 0) {
                $('.countDown').text('' + counter);
            };
            if (counter === 0) {
                $('main').addClass('hide');
                $('.finalResult').removeClass('hide');
            };
        }, 1000);
        app.getAnswers();
    });
    $('.actionButton').on('click', function (e) {
        e.preventDefault();
        var clickedAnswer = $(this).text();
        var correctAnswer = app.correctAnswer;

        if (clickedAnswer === correctAnswer.capital) {
            app.score.push(correctAnswer);
            console.log(app.score);
        }
        app.getAnswers();
        $('.score').text(app.score.length);
    });
};

app.init = function () {
    app.events();
    app.locations();
};

$(function () {
    app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixFQUFoQjs7QUFFQSxJQUFJLEtBQUosR0FBWSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixZQUFZO0FBQ3hCLE1BQUUsSUFBRixDQUFPO0FBQ0gsbURBREc7QUFFSCxnQkFBUSxLQUZMO0FBR0gsa0JBQVU7QUFIUCxLQUFQLEVBSUcsSUFKSCxDQUlRLFVBQUMsT0FBRCxFQUFhO0FBQ2pCLFlBQUksV0FBSixDQUFnQixPQUFoQjtBQUNILEtBTkQ7QUFPSCxDQVJEOztBQVVBLElBQUksV0FBSixHQUFrQixVQUFTLFlBQVQsRUFBdUI7QUFDckMsaUJBQWEsT0FBYixDQUFxQixVQUFTLE9BQVQsRUFBaUI7QUFDbEMsWUFBSSxRQUFRLElBQVIsSUFBZ0IsUUFBUSxPQUE1QixFQUFxQztBQUNqQyxnQkFBSSxTQUFKLENBQWMsSUFBZCxDQUFtQjtBQUNmLHNCQUFNLFFBQVEsSUFEQztBQUVmLHlCQUFTLFFBQVE7QUFGRixhQUFuQjtBQUlIO0FBQ0osS0FQRDtBQVFILENBVEQ7O0FBV0EsSUFBSSxVQUFKLEdBQWlCLFlBQVk7QUFDekIsUUFBTSxTQUFTLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFnQixJQUFJLFNBQUosQ0FBYyxNQUF6QyxDQUFmO0FBQ0EsV0FBTyxJQUFJLFNBQUosQ0FBYyxNQUFkLENBQVA7QUFDSCxDQUhEOztBQUtBLElBQUksZUFBSixHQUFzQixVQUFDLE1BQUQ7QUFBQSxXQUFZLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFnQixNQUEzQixDQUFaO0FBQUEsQ0FBdEI7O0FBRUEsSUFBSSxVQUFKLEdBQWlCLFlBQVU7QUFDdkIsUUFBSSxVQUFVLEVBQWQ7QUFDQSxTQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksQ0FBcEIsRUFBdUIsR0FBdkIsRUFBNEI7QUFDeEIsZ0JBQVEsSUFBUixDQUFhLElBQUksVUFBSixFQUFiO0FBQ0g7QUFDRCxRQUFJLGFBQUosR0FBb0IsUUFBUSxJQUFJLGVBQUosQ0FBb0IsQ0FBcEIsQ0FBUixDQUFwQjs7QUFFQSxNQUFFLFlBQUYsRUFBZ0IsSUFBaEIsQ0FBcUIsUUFBUSxDQUFSLEVBQVcsT0FBaEM7QUFDQSxNQUFFLFlBQUYsRUFBZ0IsSUFBaEIsQ0FBcUIsUUFBUSxDQUFSLEVBQVcsT0FBaEM7QUFDQSxNQUFFLGNBQUYsRUFBa0IsSUFBbEIsQ0FBdUIsUUFBUSxDQUFSLEVBQVcsT0FBbEM7QUFDQSxNQUFFLGFBQUYsRUFBaUIsSUFBakIsQ0FBc0IsUUFBUSxDQUFSLEVBQVcsT0FBakM7QUFDQSxNQUFFLFVBQUYsRUFBYyxJQUFkLENBQW1CLElBQUksYUFBSixDQUFrQixJQUFyQztBQUNBLFdBQU8sSUFBSSxhQUFYO0FBQ0gsQ0FiRDs7QUFlQSxJQUFJLE1BQUosR0FBYSxZQUFZO0FBQ3JCLE1BQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFZO0FBQ3RDO0FBQ0EsVUFBRSxXQUFGLEVBQWUsUUFBZixDQUF3QixNQUF4QjtBQUNBLFVBQUUsTUFBRixFQUFVLFdBQVYsQ0FBc0IsTUFBdEI7QUFDQTtBQUNBLFlBQUksVUFBVSxFQUFkO0FBQ0EsVUFBRSxRQUFGLEVBQVksTUFBWiwyQkFBMkMsT0FBM0M7QUFDQSxvQkFBWSxZQUFVO0FBQ2xCO0FBQ0EsZ0JBQUcsV0FBVyxDQUFkLEVBQWdCO0FBQ1osa0JBQUUsWUFBRixFQUFnQixJQUFoQixNQUF3QixPQUF4QjtBQUNIO0FBQ0QsZ0JBQUcsWUFBWSxDQUFmLEVBQWlCO0FBQ2Isa0JBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsTUFBbkI7QUFDQSxrQkFBRSxjQUFGLEVBQWtCLFdBQWxCLENBQThCLE1BQTlCO0FBQ0g7QUFDSixTQVRELEVBU0UsSUFURjtBQVVBLFlBQUksVUFBSjtBQUVELEtBbkJIO0FBb0JFLE1BQUUsZUFBRixFQUFtQixFQUFuQixDQUFzQixPQUF0QixFQUErQixVQUFTLENBQVQsRUFBVztBQUN0QyxVQUFFLGNBQUY7QUFDQSxZQUFJLGdCQUFnQixFQUFFLElBQUYsRUFBUSxJQUFSLEVBQXBCO0FBQ0EsWUFBTSxnQkFBZ0IsSUFBSSxhQUExQjs7QUFFQSxZQUFHLGtCQUFrQixjQUFjLE9BQW5DLEVBQTJDO0FBQ3ZDLGdCQUFJLEtBQUosQ0FBVSxJQUFWLENBQWUsYUFBZjtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxJQUFJLEtBQWhCO0FBQ0g7QUFDRCxZQUFJLFVBQUo7QUFDQSxVQUFFLFFBQUYsRUFBWSxJQUFaLENBQWlCLElBQUksS0FBSixDQUFVLE1BQTNCO0FBQ0gsS0FYRDtBQVlMLENBakNEOztBQW1DQSxJQUFJLElBQUosR0FBVyxZQUFZO0FBQ25CLFFBQUksTUFBSjtBQUNBLFFBQUksU0FBSjtBQUNILENBSEQ7O0FBS0EsRUFBRSxZQUFXO0FBQ1QsUUFBSSxJQUFKO0FBQ0gsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGFwcCA9IHt9O1xuXG5hcHAuY291bnRyaWVzID0gW107XG5cbmFwcC5zY29yZSA9IFtdO1xuXG5hcHAubG9jYXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYGh0dHBzOi8vcmVzdGNvdW50cmllcy5ldS9yZXN0L3YyL2FsbGAsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbidcbiAgICB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIGFwcC5jb3VudHJ5SW5mbyhyZXN1bHRzKTtcbiAgICB9KTtcbn07XG5cbmFwcC5jb3VudHJ5SW5mbyA9IGZ1bmN0aW9uKGNvdW50cnlBcnJheSkge1xuICAgIGNvdW50cnlBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGNvdW50cnkpe1xuICAgICAgICBpZiAoY291bnRyeS5uYW1lICYmIGNvdW50cnkuY2FwaXRhbCkge1xuICAgICAgICAgICAgYXBwLmNvdW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBjb3VudHJ5Lm5hbWUsXG4gICAgICAgICAgICAgICAgY2FwaXRhbDogY291bnRyeS5jYXBpdGFsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmFwcC5yYW5kb21pemVyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFwcC5jb3VudHJpZXMubGVuZ3RoKTtcbiAgICByZXR1cm4gYXBwLmNvdW50cmllc1tyYW5kb21dO1xufVxuXG5hcHAuZ2V0UmFuZG9tTnVtYmVyID0gKG51bWJlcikgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtYmVyKTtcblxuYXBwLmdldEFuc3dlcnMgPSBmdW5jdGlvbigpe1xuICAgIGxldCBhbnN3ZXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgYW5zd2Vycy5wdXNoKGFwcC5yYW5kb21pemVyKCkpO1xuICAgIH1cbiAgICBhcHAuY29ycmVjdEFuc3dlciA9IGFuc3dlcnNbYXBwLmdldFJhbmRvbU51bWJlcig0KV07ICBcblxuICAgICQoJy5hbnN3ZXJPbmUnKS50ZXh0KGFuc3dlcnNbMF0uY2FwaXRhbCk7XG4gICAgJCgnLmFuc3dlclR3bycpLnRleHQoYW5zd2Vyc1sxXS5jYXBpdGFsKTtcbiAgICAkKCcuYW5zd2VyVGhyZWUnKS50ZXh0KGFuc3dlcnNbMl0uY2FwaXRhbCk7XG4gICAgJCgnLmFuc3dlckZvdXInKS50ZXh0KGFuc3dlcnNbM10uY2FwaXRhbCk7XG4gICAgJCgnLmNvdW50cnknKS50ZXh0KGFwcC5jb3JyZWN0QW5zd2VyLm5hbWUpO1xuICAgIHJldHVybiBhcHAuY29ycmVjdEFuc3dlcjtcbn07XG5cbmFwcC5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnN0YXJ0QnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBnYW1lIHJ1bGVzIHBvcCB1cFxuICAgICAgICAkKCcuZ2FtZUxvYWQnKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgLy8gZ2FtZSBjb3VudGRvd24gY2xvY2tcbiAgICAgICAgbGV0IGNvdW50ZXIgPSA2MDtcbiAgICAgICAgJCgnLmNsb2NrJykuYXBwZW5kKGA8cCBjbGFzcz1cImNvdW50RG93blwiPiR7Y291bnRlcn08L3A+YCk7XG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb3VudGVyLS07XG4gICAgICAgICAgICBpZihjb3VudGVyID49IDApe1xuICAgICAgICAgICAgICAgICQoJy5jb3VudERvd24nKS50ZXh0KGAke2NvdW50ZXJ9YCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYoY291bnRlciA9PT0gMCl7XG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgJCgnLmZpbmFsUmVzdWx0JykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sMTAwMCk7XG4gICAgICAgIGFwcC5nZXRBbnN3ZXJzKCk7XG5cbiAgICAgIH0pO1xuICAgICAgJCgnLmFjdGlvbkJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBsZXQgY2xpY2tlZEFuc3dlciA9ICQodGhpcykudGV4dCgpO1xuICAgICAgICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBhcHAuY29ycmVjdEFuc3dlcjtcblxuICAgICAgICAgIGlmKGNsaWNrZWRBbnN3ZXIgPT09IGNvcnJlY3RBbnN3ZXIuY2FwaXRhbCl7XG4gICAgICAgICAgICAgIGFwcC5zY29yZS5wdXNoKGNvcnJlY3RBbnN3ZXIpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcHAuc2NvcmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhcHAuZ2V0QW5zd2VycygpO1xuICAgICAgICAgICQoJy5zY29yZScpLnRleHQoYXBwLnNjb3JlLmxlbmd0aCk7XG4gICAgICB9KTtcbn1cblxuYXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgYXBwLmV2ZW50cygpO1xuICAgIGFwcC5sb2NhdGlvbnMoKTtcbn1cblxuJChmdW5jdGlvbigpIHtcbiAgICBhcHAuaW5pdCgpO1xufSk7XG4iXX0=
