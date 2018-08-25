(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = {};

app.countries = [];

app.usedCountries = [];

app.wrongAnswers = [];

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
    var randomNumber = app.getRandomNumber(4);
    app.correctAnswer = answers[randomNumber];

    $('.answerOne').text(answers[0].capital);
    $('.answerTwo').text(answers[1].capital);
    $('.answerThree').text(answers[2].capital);
    $('.answerFour').text(answers[3].capital);
    $('.country').text(app.correctAnswer.name);

    for (var _i = 0; _i < app.countries.length; _i++) {
        if (app.countries[_i].name === app.correctAnswer.name) {
            app.usedCountries.push(app.countries.splice(_i, 1)[0]);
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
        var counter = 7;
        $('.clock').append('<p class="countDown">' + counter + '</p>');
        setInterval(function () {
            counter--;
            if (counter >= 0) {
                $('.countDown').text('' + counter);
            };
            if (counter === 0) {
                $('.finalResult').removeClass('hide');
                $('main').addClass('hide');

                app.score.forEach(function (rightCountry) {
                    $('.rightAnswers').append('<h2>' + rightCountry.name + '</h2><h3>' + rightCountry.capital + '</h3>');
                });

                app.wrongAnswers.forEach(function (wrongCountry) {
                    $('.wrongAnswers').append('<h2>' + wrongCountry.name + '</h2><h3>' + wrongCountry.capital + '</h3>');
                });
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
        } else {
            app.wrongAnswers.push(correctAnswer);
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixFQUFoQjs7QUFFQSxJQUFJLGFBQUosR0FBb0IsRUFBcEI7O0FBRUEsSUFBSSxZQUFKLEdBQW1CLEVBQW5COztBQUVBLElBQUksS0FBSixHQUFZLEVBQVo7O0FBRUEsSUFBSSxTQUFKLEdBQWdCLFlBQVk7QUFDeEIsTUFBRSxJQUFGLENBQU87QUFDSCxtREFERztBQUVILGdCQUFRLEtBRkw7QUFHSCxrQkFBVTtBQUhQLEtBQVAsRUFJRyxJQUpILENBSVEsVUFBQyxPQUFELEVBQWE7QUFDakIsWUFBSSxXQUFKLENBQWdCLE9BQWhCO0FBQ0gsS0FORDtBQU9ILENBUkQ7O0FBVUEsSUFBSSxXQUFKLEdBQWtCLFVBQVMsWUFBVCxFQUF1QjtBQUNyQyxpQkFBYSxPQUFiLENBQXFCLFVBQVMsT0FBVCxFQUFpQjtBQUNsQyxZQUFJLFFBQVEsSUFBUixJQUFnQixRQUFRLE9BQTVCLEVBQXFDO0FBQ2pDLGdCQUFJLFNBQUosQ0FBYyxJQUFkLENBQW1CO0FBQ2Ysc0JBQU0sUUFBUSxJQURDO0FBRWYseUJBQVMsUUFBUTtBQUZGLGFBQW5CO0FBSUg7QUFDSixLQVBEO0FBUUgsQ0FURDs7QUFXQSxJQUFJLFVBQUosR0FBaUIsWUFBWTtBQUN6QixRQUFNLFNBQVMsS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLElBQUksU0FBSixDQUFjLE1BQXpDLENBQWY7QUFDQSxXQUFPLElBQUksU0FBSixDQUFjLE1BQWQsQ0FBUDtBQUNILENBSEQ7O0FBS0EsSUFBSSxlQUFKLEdBQXNCLFVBQVUsTUFBVixFQUFrQjtBQUNwQyxXQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFnQixNQUEzQixDQUFQO0FBQ0gsQ0FGRDs7QUFJQSxJ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QUFKOztBQUVBLFVBQUUsUUFBRixFQUFZLElBQVosQ0FBaUIsSUFBSSxLQUFKLENBQVUsTUFBM0I7QUFDSCxLQWZEO0FBZ0JMLENBN0NEOztBQStDQSxJQUFJLElBQUosR0FBVyxZQUFZO0FBQ25CLFFBQUksTUFBSjtBQUNBLFFBQUksU0FBSjtBQUNILENBSEQ7O0FBS0EsRUFBRSxZQUFXO0FBQ1QsUUFBSSxJQUFKO0FBQ0gsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGFwcCA9IHt9O1xuXG5hcHAuY291bnRyaWVzID0gW107XG5cbmFwcC51c2VkQ291bnRyaWVzID0gW107XG5cbmFwcC53cm9uZ0Fuc3dlcnMgPSBbXTtcblxuYXBwLnNjb3JlID0gW107XG5cbmFwcC5sb2NhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvYWxsYCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuICAgIH0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgYXBwLmNvdW50cnlJbmZvKHJlc3VsdHMpO1xuICAgIH0pO1xufTtcblxuYXBwLmNvdW50cnlJbmZvID0gZnVuY3Rpb24oY291bnRyeUFycmF5KSB7XG4gICAgY291bnRyeUFycmF5LmZvckVhY2goZnVuY3Rpb24oY291bnRyeSl7XG4gICAgICAgIGlmIChjb3VudHJ5Lm5hbWUgJiYgY291bnRyeS5jYXBpdGFsKSB7XG4gICAgICAgICAgICBhcHAuY291bnRyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGNvdW50cnkubmFtZSxcbiAgICAgICAgICAgICAgICBjYXBpdGFsOiBjb3VudHJ5LmNhcGl0YWwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuYXBwLnJhbmRvbWl6ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXBwLmNvdW50cmllcy5sZW5ndGgpO1xuICAgIHJldHVybiBhcHAuY291bnRyaWVzW3JhbmRvbV07XG59O1xuXG5hcHAuZ2V0UmFuZG9tTnVtYmVyID0gZnVuY3Rpb24gKG51bWJlcikgeyBcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtYmVyKTtcbn07XG5cbmFwcC5nZXRBbnN3ZXJzID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgYW5zd2VycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGFuc3dlcnMucHVzaChhcHAucmFuZG9taXplcigpKTtcbiAgICB9XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gYXBwLmdldFJhbmRvbU51bWJlcig0KTtcbiAgICBhcHAuY29ycmVjdEFuc3dlciA9IGFuc3dlcnNbcmFuZG9tTnVtYmVyXTtcblxuICAgICQoJy5hbnN3ZXJPbmUnKS50ZXh0KGFuc3dlcnNbMF0uY2FwaXRhbCk7XG4gICAgJCgnLmFuc3dlclR3bycpLnRleHQoYW5zd2Vyc1sxXS5jYXBpdGFsKTtcbiAgICAkKCcuYW5zd2VyVGhyZWUnKS50ZXh0KGFuc3dlcnNbMl0uY2FwaXRhbCk7XG4gICAgJCgnLmFuc3dlckZvdXInKS50ZXh0KGFuc3dlcnNbM10uY2FwaXRhbCk7XG4gICAgJCgnLmNvdW50cnknKS50ZXh0KGFwcC5jb3JyZWN0QW5zd2VyLm5hbWUpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFwcC5jb3VudHJpZXMubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgaWYgKGFwcC5jb3VudHJpZXNbaV0ubmFtZSA9PT0gYXBwLmNvcnJlY3RBbnN3ZXIubmFtZSkge1xuICAgICAgICAgICAgYXBwLnVzZWRDb3VudHJpZXMucHVzaChhcHAuY291bnRyaWVzLnNwbGljZShpLCAxKVswXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFwcC5jb3JyZWN0QW5zd2VyO1xufTtcblxuYXBwLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc3RhcnRCdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGdhbWUgcnVsZXMgcG9wIHVwXG4gICAgICAgICQoJy5nYW1lTG9hZCcpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAvLyBnYW1lIGNvdW50ZG93biBjbG9ja1xuICAgICAgICBsZXQgY291bnRlciA9IDc7XG4gICAgICAgICQoJy5jbG9jaycpLmFwcGVuZChgPHAgY2xhc3M9XCJjb3VudERvd25cIj4ke2NvdW50ZXJ9PC9wPmApO1xuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY291bnRlci0tO1xuICAgICAgICAgICAgaWYoY291bnRlciA+PSAwKXtcbiAgICAgICAgICAgICAgICAkKCcuY291bnREb3duJykudGV4dChgJHtjb3VudGVyfWApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmKGNvdW50ZXIgPT09IDApe1xuICAgICAgICAgICAgICAgICQoJy5maW5hbFJlc3VsdCcpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdoaWRlJyk7XG5cbiAgICAgICAgICAgICAgICBhcHAuc2NvcmUuZm9yRWFjaChmdW5jdGlvbiAocmlnaHRDb3VudHJ5KXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnJpZ2h0QW5zd2VycycpLmFwcGVuZChgPGgyPiR7cmlnaHRDb3VudHJ5Lm5hbWV9PC9oMj48aDM+JHtyaWdodENvdW50cnkuY2FwaXRhbH08L2gzPmApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGFwcC53cm9uZ0Fuc3dlcnMuZm9yRWFjaChmdW5jdGlvbiAod3JvbmdDb3VudHJ5KXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLndyb25nQW5zd2VycycpLmFwcGVuZChgPGgyPiR7d3JvbmdDb3VudHJ5Lm5hbWV9PC9oMj48aDM+JHt3cm9uZ0NvdW50cnkuY2FwaXRhbH08L2gzPmApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LDEwMDApO1xuICAgICAgICBhcHAuZ2V0QW5zd2VycygpO1xuICAgICAgfSk7XG4gICAgICAkKCcuYWN0aW9uQnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIFxuICAgICAgICAgIGxldCBjbGlja2VkQW5zd2VyID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICAgY29uc3QgY29ycmVjdEFuc3dlciA9IGFwcC5jb3JyZWN0QW5zd2VyO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmKGNsaWNrZWRBbnN3ZXIgPT09IGNvcnJlY3RBbnN3ZXIuY2FwaXRhbCl7XG4gICAgICAgICAgICAgIGFwcC5zY29yZS5wdXNoKGNvcnJlY3RBbnN3ZXIpO1xuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGFwcC53cm9uZ0Fuc3dlcnMucHVzaChjb3JyZWN0QW5zd2VyKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGFwcC5nZXRBbnN3ZXJzKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgJCgnLnNjb3JlJykudGV4dChhcHAuc2NvcmUubGVuZ3RoKTtcbiAgICAgIH0pO1xufVxuXG5hcHAuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBhcHAuZXZlbnRzKCk7XG4gICAgYXBwLmxvY2F0aW9ucygpO1xufVxuXG4kKGZ1bmN0aW9uKCkge1xuICAgIGFwcC5pbml0KCk7XG59KTtcbiJdfQ==
