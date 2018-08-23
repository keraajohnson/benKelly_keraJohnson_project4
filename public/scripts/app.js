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
        // game countdown clock
        var counter = 60;
        $('.clock').append('<p class="countDown">' + counter + '</p>');
        setInterval(function () {
            counter--;
            if (counter >= 0) {
                $('.countDown').text('' + counter);
            };
            if (counter === 0) {};
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
        $('.scoreCard').text(app.score.length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixFQUFoQjs7QUFFQSxJQUFJLEtBQUosR0FBWSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixZQUFZO0FBQ3hCLE1BQUUsSUFBRixDQUFPO0FBQ0gsbURBREc7QUFFSCxnQkFBUSxLQUZMO0FBR0gsa0JBQVU7QUFIUCxLQUFQLEVBSUcsSUFKSCxDQUlRLFVBQUMsT0FBRCxFQUFhO0FBQ2pCLFlBQUksV0FBSixDQUFnQixPQUFoQjtBQUNILEtBTkQ7QUFPSCxDQVJEOztBQVVBLElBQUksV0FBSixHQUFrQixVQUFTLFlBQVQsRUFBdUI7QUFDckMsaUJBQWEsT0FBYixDQUFxQixVQUFTLE9BQVQsRUFBaUI7QUFDbEMsWUFBSSxRQUFRLElBQVIsSUFBZ0IsUUFBUSxPQUE1QixFQUFxQztBQUNqQyxnQkFBSSxTQUFKLENBQWMsSUFBZCxDQUFtQjtBQUNmLHNCQUFNLFFBQVEsSUFEQztBQUVmLHlCQUFTLFFBQVE7QUFGRixhQUFuQjtBQUlIO0FBQ0osS0FQRDtBQVFILENBVEQ7O0FBV0EsSUFBSSxVQUFKLEdBQWlCLFlBQVk7QUFDekIsUUFBTSxTQUFTLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFnQixJQUFJLFNBQUosQ0FBYyxNQUF6QyxDQUFmO0FBQ0EsV0FBTyxJQUFJLFNBQUosQ0FBYyxNQUFkLENBQVA7QUFDSCxDQUhEOztBQUtBLElBQUksZUFBSixHQUFzQixVQUFDLE1BQUQ7QUFBQSxXQUFZLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFnQixNQUEzQixDQUFaO0FBQUEsQ0FBdEI7O0FBRUEsSUFBSSxVQUFKLEdBQWlCLFlBQVU7QUFDdkIsUUFBSSxVQUFVLEVBQWQ7QUFDQSxTQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksQ0FBcEIsRUFBdUIsR0FBdkIsRUFBNEI7QUFDeEIsZ0JBQVEsSUFBUixDQUFhLElBQUksVUFBSixFQUFiO0FBQ0g7QUFDRCxRQUFJLGFBQUosR0FBb0IsUUFBUSxJQUFJLGVBQUosQ0FBb0IsQ0FBcEIsQ0FBUixDQUFwQjs7QUFFQSxNQUFFLFlBQUYsRUFBZ0IsSUFBaEIsQ0FBcUIsUUFBUSxDQUFSLEVBQVcsT0FBaEM7QUFDQSxNQUFFLFlBQUYsRUFBZ0IsSUFBaEIsQ0FBcUIsUUFBUSxDQUFSLEVBQVcsT0FBaEM7QUFDQSxNQUFFLGNBQUYsRUFBa0IsSUFBbEIsQ0FBdUIsUUFBUSxDQUFSLEVBQVcsT0FBbEM7QUFDQSxNQUFFLGFBQUYsRUFBaUIsSUFBakIsQ0FBc0IsUUFBUSxDQUFSLEVBQVcsT0FBakM7QUFDQSxNQUFFLFVBQUYsRUFBYyxJQUFkLENBQW1CLElBQUksYUFBSixDQUFrQixJQUFyQztBQUNBLFdBQU8sSUFBSSxhQUFYO0FBQ0gsQ0FiRDs7QUFlQSxJQUFJLE1BQUosR0FBYSxZQUFZO0FBQ3JCLE1BQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFZO0FBQ3RDO0FBQ0EsVUFBRSxXQUFGLEVBQWUsUUFBZixDQUF3QixNQUF4QjtBQUNBO0FBQ0EsWUFBSSxVQUFVLEVBQWQ7QUFDQSxVQUFFLFFBQUYsRUFBWSxNQUFaLDJCQUEyQyxPQUEzQztBQUNBLG9CQUFZLFlBQVU7QUFDbEI7QUFDQSxnQkFBRyxXQUFXLENBQWQsRUFBZ0I7QUFDWixrQkFBRSxZQUFGLEVBQWdCLElBQWhCLE1BQXdCLE9BQXhCO0FBQ0g7QUFDRCxnQkFBRyxZQUFZLENBQWYsRUFBaUIsQ0FFaEI7QUFDSixTQVJELEVBUUUsSUFSRjtBQVNBLFlBQUksVUFBSjtBQUVELEtBakJIO0FBa0JFLE1BQUUsZUFBRixFQUFtQixFQUFuQixDQUFzQixPQUF0QixFQUErQixVQUFTLENBQVQsRUFBVztBQUN0QyxVQUFFLGNBQUY7QUFDQSxZQUFJLGdCQUFnQixFQUFFLElBQUYsRUFBUSxJQUFSLEVBQXBCO0FBQ0EsWUFBTSxnQkFBZ0IsSUFBSSxhQUExQjs7QUFFQSxZQUFHLGtCQUFrQixjQUFjLE9BQW5DLEVBQTJDO0FBQ3ZDLGdCQUFJLEtBQUosQ0FBVSxJQUFWLENBQWUsYUFBZjtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxJQUFJLEtBQWhCO0FBQ0g7QUFDRCxZQUFJLFVBQUo7QUFDQSxVQUFFLFlBQUYsRUFBZ0IsSUFBaEIsQ0FBcUIsSUFBSSxLQUFKLENBQVUsTUFBL0I7QUFDSCxLQVhEO0FBWUwsQ0EvQkQ7O0FBaUNBLElBQUksSUFBSixHQUFXLFlBQVk7QUFDbkIsUUFBSSxNQUFKO0FBQ0EsUUFBSSxTQUFKO0FBQ0gsQ0FIRDs7QUFLQSxFQUFFLFlBQVc7QUFDVCxRQUFJLElBQUo7QUFDSCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYXBwID0ge307XG5cbmFwcC5jb3VudHJpZXMgPSBbXTtcblxuYXBwLnNjb3JlID0gW107XG5cbmFwcC5sb2NhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvYWxsYCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuICAgIH0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgYXBwLmNvdW50cnlJbmZvKHJlc3VsdHMpO1xuICAgIH0pO1xufTtcblxuYXBwLmNvdW50cnlJbmZvID0gZnVuY3Rpb24oY291bnRyeUFycmF5KSB7XG4gICAgY291bnRyeUFycmF5LmZvckVhY2goZnVuY3Rpb24oY291bnRyeSl7XG4gICAgICAgIGlmIChjb3VudHJ5Lm5hbWUgJiYgY291bnRyeS5jYXBpdGFsKSB7XG4gICAgICAgICAgICBhcHAuY291bnRyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGNvdW50cnkubmFtZSxcbiAgICAgICAgICAgICAgICBjYXBpdGFsOiBjb3VudHJ5LmNhcGl0YWwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuYXBwLnJhbmRvbWl6ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXBwLmNvdW50cmllcy5sZW5ndGgpO1xuICAgIHJldHVybiBhcHAuY291bnRyaWVzW3JhbmRvbV07XG59XG5cbmFwcC5nZXRSYW5kb21OdW1iZXIgPSAobnVtYmVyKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW1iZXIpO1xuXG5hcHAuZ2V0QW5zd2VycyA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IGFuc3dlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBhbnN3ZXJzLnB1c2goYXBwLnJhbmRvbWl6ZXIoKSk7XG4gICAgfVxuICAgIGFwcC5jb3JyZWN0QW5zd2VyID0gYW5zd2Vyc1thcHAuZ2V0UmFuZG9tTnVtYmVyKDQpXTsgIFxuXG4gICAgJCgnLmFuc3dlck9uZScpLnRleHQoYW5zd2Vyc1swXS5jYXBpdGFsKTtcbiAgICAkKCcuYW5zd2VyVHdvJykudGV4dChhbnN3ZXJzWzFdLmNhcGl0YWwpO1xuICAgICQoJy5hbnN3ZXJUaHJlZScpLnRleHQoYW5zd2Vyc1syXS5jYXBpdGFsKTtcbiAgICAkKCcuYW5zd2VyRm91cicpLnRleHQoYW5zd2Vyc1szXS5jYXBpdGFsKTtcbiAgICAkKCcuY291bnRyeScpLnRleHQoYXBwLmNvcnJlY3RBbnN3ZXIubmFtZSk7XG4gICAgcmV0dXJuIGFwcC5jb3JyZWN0QW5zd2VyO1xufTtcblxuYXBwLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc3RhcnRCdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGdhbWUgcnVsZXMgcG9wIHVwXG4gICAgICAgICQoJy5nYW1lTG9hZCcpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgIC8vIGdhbWUgY291bnRkb3duIGNsb2NrXG4gICAgICAgIGxldCBjb3VudGVyID0gNjA7XG4gICAgICAgICQoJy5jbG9jaycpLmFwcGVuZChgPHAgY2xhc3M9XCJjb3VudERvd25cIj4ke2NvdW50ZXJ9PC9wPmApO1xuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY291bnRlci0tO1xuICAgICAgICAgICAgaWYoY291bnRlciA+PSAwKXtcbiAgICAgICAgICAgICAgICAkKCcuY291bnREb3duJykudGV4dChgJHtjb3VudGVyfWApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmKGNvdW50ZXIgPT09IDApe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwxMDAwKTtcbiAgICAgICAgYXBwLmdldEFuc3dlcnMoKTtcblxuICAgICAgfSk7XG4gICAgICAkKCcuYWN0aW9uQnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGxldCBjbGlja2VkQW5zd2VyID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICAgY29uc3QgY29ycmVjdEFuc3dlciA9IGFwcC5jb3JyZWN0QW5zd2VyO1xuXG4gICAgICAgICAgaWYoY2xpY2tlZEFuc3dlciA9PT0gY29ycmVjdEFuc3dlci5jYXBpdGFsKXtcbiAgICAgICAgICAgICAgYXBwLnNjb3JlLnB1c2goY29ycmVjdEFuc3dlcik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFwcC5zY29yZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFwcC5nZXRBbnN3ZXJzKCk7XG4gICAgICAgICAgJCgnLnNjb3JlQ2FyZCcpLnRleHQoYXBwLnNjb3JlLmxlbmd0aCk7XG4gICAgICB9KTtcbn1cblxuYXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgYXBwLmV2ZW50cygpO1xuICAgIGFwcC5sb2NhdGlvbnMoKTtcbn1cblxuJChmdW5jdGlvbigpIHtcbiAgICBhcHAuaW5pdCgpO1xufSk7XG4iXX0=
