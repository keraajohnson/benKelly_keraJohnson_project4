(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = {};

app.countries = [];

app.usedCountries = [];

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

// app.spliceRandomizer = function () {
//     const random = Math.floor(Math.random() * app.countries.length);
//     const result = app.countries[random];
//     const pizza = app.countries.splice(random, 1).push([0]);
//     console.log(app.usedCountries.push(pizza));
//     return result;
// };

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
            app.usedCountries.push(app.countries.splice(_i, 1));
        }
    }

    console.log(app.usedCountries);
    console.log(app.countries);

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
        }
        app.getAnswers();
        $('.score').text(app.score.length);
        $('.buttons').trigger('reset');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixFQUFoQjs7QUFFQSxJQUFJLGFBQUosR0FBb0IsRUFBcEI7O0FBRUEsSUFBSSxLQUFKLEdBQVksRUFBWjs7QUFFQSxJQUFJLFNBQUosR0FBZ0IsWUFBWTtBQUN4QixNQUFFLElBQUYsQ0FBTztBQUNILG1EQURHO0FBRUgsZ0JBQVEsS0FGTDtBQUdILGtCQUFVO0FBSFAsS0FBUCxFQUlHLElBSkgsQ0FJUSxVQUFDLE9BQUQsRUFBYTtBQUNqQixZQUFJLFdBQUosQ0FBZ0IsT0FBaEI7QUFDSCxLQU5EO0FBT0gsQ0FSRDs7QUFVQSxJQUFJLFdBQUosR0FBa0IsVUFBUyxZQUFULEVBQXVCO0FBQ3JDLGlCQUFhLE9BQWIsQ0FBcUIsVUFBUyxPQUFULEVBQWlCO0FBQ2xDLFlBQUksUUFBUSxJQUFSLElBQWdCLFFBQVEsT0FBNUIsRUFBcUM7QUFDakMsZ0JBQUksU0FBSixDQUFjLElBQWQsQ0FBbUI7QUFDZixzQkFBTSxRQUFRLElBREM7QUFFZix5QkFBUyxRQUFRO0FBRkYsYUFBbkI7QUFJSDtBQUNKLEtBUEQ7QUFRSCxDQVREOztBQVdBLElBQUksVUFBSixHQUFpQixZQUFZO0FBQ3pCLFFBQU0sU0FBUyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBZ0IsSUFBSSxTQUFKLENBQWMsTUFBekMsQ0FBZjtBQUNBLFdBQU8sSUFBSSxTQUFKLENBQWMsTUFBZCxDQUFQO0FBQ0gsQ0FIRDs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGVBQUosR0FBc0IsVUFBVSxNQUFWLEVBQWtCO0FBQ3BDLFdBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLE1BQTNCLENBQVA7QUFDSCxDQUZE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cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBhcHAgPSB7fTtcblxuYXBwLmNvdW50cmllcyA9IFtdO1xuXG5hcHAudXNlZENvdW50cmllcyA9IFtdO1xuXG5hcHAuc2NvcmUgPSBbXTtcblxuYXBwLmxvY2F0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGBodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92Mi9hbGxgLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nXG4gICAgfSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICBhcHAuY291bnRyeUluZm8ocmVzdWx0cyk7XG4gICAgfSk7XG59O1xuXG5hcHAuY291bnRyeUluZm8gPSBmdW5jdGlvbihjb3VudHJ5QXJyYXkpIHtcbiAgICBjb3VudHJ5QXJyYXkuZm9yRWFjaChmdW5jdGlvbihjb3VudHJ5KXtcbiAgICAgICAgaWYgKGNvdW50cnkubmFtZSAmJiBjb3VudHJ5LmNhcGl0YWwpIHtcbiAgICAgICAgICAgIGFwcC5jb3VudHJpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogY291bnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgIGNhcGl0YWw6IGNvdW50cnkuY2FwaXRhbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5hcHAucmFuZG9taXplciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcHAuY291bnRyaWVzLmxlbmd0aCk7XG4gICAgcmV0dXJuIGFwcC5jb3VudHJpZXNbcmFuZG9tXTtcbn1cblxuLy8gYXBwLnNwbGljZVJhbmRvbWl6ZXIgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXBwLmNvdW50cmllcy5sZW5ndGgpO1xuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGFwcC5jb3VudHJpZXNbcmFuZG9tXTtcbi8vICAgICBjb25zdCBwaXp6YSA9IGFwcC5jb3VudHJpZXMuc3BsaWNlKHJhbmRvbSwgMSkucHVzaChbMF0pO1xuLy8gICAgIGNvbnNvbGUubG9nKGFwcC51c2VkQ291bnRyaWVzLnB1c2gocGl6emEpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gfTtcblxuYXBwLmdldFJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIChudW1iZXIpIHsgXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bWJlcik7XG59O1xuXG5hcHAuZ2V0QW5zd2VycyA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IGFuc3dlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBhbnN3ZXJzLnB1c2goYXBwLnJhbmRvbWl6ZXIoKSk7XG4gICAgfVxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IGFwcC5nZXRSYW5kb21OdW1iZXIoNCk7XG4gICAgYXBwLmNvcnJlY3RBbnN3ZXIgPSBhbnN3ZXJzW3JhbmRvbU51bWJlcl07XG5cbiAgICAkKCcuYW5zd2VyT25lJykudGV4dChhbnN3ZXJzWzBdLmNhcGl0YWwpO1xuICAgICQoJy5hbnN3ZXJUd28nKS50ZXh0KGFuc3dlcnNbMV0uY2FwaXRhbCk7XG4gICAgJCgnLmFuc3dlclRocmVlJykudGV4dChhbnN3ZXJzWzJdLmNhcGl0YWwpO1xuICAgICQoJy5hbnN3ZXJGb3VyJykudGV4dChhbnN3ZXJzWzNdLmNhcGl0YWwpO1xuICAgICQoJy5jb3VudHJ5JykudGV4dChhcHAuY29ycmVjdEFuc3dlci5uYW1lKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcHAuY291bnRyaWVzLmxlbmd0aDsgaSsrICl7XG4gICAgICAgIGlmIChhcHAuY291bnRyaWVzW2ldLm5hbWUgPT09IGFwcC5jb3JyZWN0QW5zd2VyLm5hbWUpIHtcbiAgICAgICAgICAgIGFwcC51c2VkQ291bnRyaWVzLnB1c2goYXBwLmNvdW50cmllcy5zcGxpY2UoaSwgMSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKGFwcC51c2VkQ291bnRyaWVzKTtcbiAgICBjb25zb2xlLmxvZyhhcHAuY291bnRyaWVzKTsgICBcblxuICAgIHJldHVybiBhcHAuY29ycmVjdEFuc3dlcjtcbn07XG5cbmFwcC5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnN0YXJ0QnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBnYW1lIHJ1bGVzIHBvcCB1cFxuICAgICAgICAkKCcuZ2FtZUxvYWQnKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgLy8gZ2FtZSBjb3VudGRvd24gY2xvY2tcbiAgICAgICAgbGV0IGNvdW50ZXIgPSA2MDtcbiAgICAgICAgJCgnLmNsb2NrJykuYXBwZW5kKGA8cCBjbGFzcz1cImNvdW50RG93blwiPiR7Y291bnRlcn08L3A+YCk7XG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb3VudGVyLS07XG4gICAgICAgICAgICBpZihjb3VudGVyID49IDApe1xuICAgICAgICAgICAgICAgICQoJy5jb3VudERvd24nKS50ZXh0KGAke2NvdW50ZXJ9YCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYoY291bnRlciA9PT0gMCl7XG4gICAgICAgICAgICAgICAgJCgnbWFpbicpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgJCgnLmZpbmFsUmVzdWx0JykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sMTAwMCk7XG4gICAgICAgIGFwcC5nZXRBbnN3ZXJzKCk7XG4gICAgICB9KTtcbiAgICAgICQoJy5hY3Rpb25CdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgbGV0IGNsaWNrZWRBbnN3ZXIgPSAkKHRoaXMpLnRleHQoKTtcbiAgICAgICAgICBjb25zdCBjb3JyZWN0QW5zd2VyID0gYXBwLmNvcnJlY3RBbnN3ZXI7XG5cbiAgICAgICAgICBpZihjbGlja2VkQW5zd2VyID09PSBjb3JyZWN0QW5zd2VyLmNhcGl0YWwpe1xuICAgICAgICAgICAgICBhcHAuc2NvcmUucHVzaChjb3JyZWN0QW5zd2VyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXBwLmdldEFuc3dlcnMoKTtcbiAgICAgICAgICAkKCcuc2NvcmUnKS50ZXh0KGFwcC5zY29yZS5sZW5ndGgpO1xuICAgICAgICAgICQoJy5idXR0b25zJykudHJpZ2dlcigncmVzZXQnKTtcbiAgICAgIH0pO1xufVxuXG5hcHAuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBhcHAuZXZlbnRzKCk7XG4gICAgYXBwLmxvY2F0aW9ucygpO1xufVxuXG4kKGZ1bmN0aW9uKCkge1xuICAgIGFwcC5pbml0KCk7XG59KTtcbiJdfQ==
