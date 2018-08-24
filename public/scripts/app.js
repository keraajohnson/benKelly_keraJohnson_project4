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

    // console.log(app.usedCountries);
    // console.log(app.countries);   

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
                // console.log(app.usedCountries);
                app.score.forEach(function (rightCountry) {
                    $('.finalResult').append('<h2>' + rightCountry.name + '</h2><h3>' + rightCountry.capital + '</h3>');
                });
                app.wrongAnswers.forEach(function (wrongCountry) {
                    // console.log(country);
                    $('.finalResult').append('<h2>' + wrongCountry.name + '</h2><h3>' + wrongCountry.capital + '</h3>');
                });
            };
        }, 1000);
        app.getAnswers();
    });
    $('.actionButton').on('click', function (e) {
        e.preventDefault();
        var clickedAnswer = $(this).text();
        //   const answer = $(this)
        console.log(this);
        var correctAnswer = app.correctAnswer;
        //   console.log(correctAnswer);
        if (clickedAnswer === correctAnswer.capital) {
            app.score.push(correctAnswer);
        } else {
            app.wrongAnswers.push(correctAnswer);
        };
        app.getAnswers();
        $('.score').text(app.score.length);
        $('.buttons').trigger('reset');
    });
};

// app.compare = function(usedCountries, score){
//     usedCountries.forEach((usedCity)=>)
// }

app.init = function () {
    app.events();
    app.locations();
};

$(function () {
    app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixFQUFoQjs7QUFFQSxJQUFJLGFBQUosR0FBb0IsRUFBcEI7O0FBRUEsSUFBSSxZQUFKLEdBQW1CLEVBQW5COztBQUVBLElBQUksS0FBSixHQUFZLEVBQVo7O0FBRUEsSUFBSSxTQUFKLEdBQWdCLFlBQVk7QUFDeEIsTUFBRSxJQUFGLENBQU87QUFDSCxtREFERztBQUVILGdCQUFRLEtBRkw7QUFHSCxrQkFBVTtBQUhQLEtBQVAsRUFJRyxJQUpILENBSVEsVUFBQyxPQUFELEVBQWE7QUFDakIsWUFBSSxXQUFKLENBQWdCLE9BQWhCO0FBQ0gsS0FORDtBQU9ILENBUkQ7O0FBVUEsSUFBSSxXQUFKLEdBQWtCLFVBQVMsWUFBVCxFQUF1QjtBQUNyQyxpQkFBYSxPQUFiLENBQXFCLFVBQVMsT0FBVCxFQUFpQjtBQUNsQyxZQUFJLFFBQVEsSUFBUixJQUFnQixRQUFRLE9BQTVCLEVBQXFDO0FBQ2pDLGdCQUFJLFNBQUosQ0FBYyxJQUFkLENBQW1CO0FBQ2Ysc0JBQU0sUUFBUSxJQURDO0FBRWYseUJBQVMsUUFBUTtBQUZGLGFBQW5CO0FBSUg7QUFDSixLQVBEO0FBUUgsQ0FURDs7QUFXQSxJQUFJLFVBQUosR0FBaUIsWUFBWTtBQUN6QixRQUFNLFNBQVMsS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLElBQUksU0FBSixDQUFjLE1BQXpDLENBQWY7QUFDQSxXQUFPLElBQUksU0FBSixDQUFjLE1BQWQsQ0FBUDtBQUNILENBSEQ7O0FBS0EsSUFBSSxlQUFKLEdBQXNCLFVBQVUsTUFBVixFQUFrQjtBQUNwQyxXQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFnQixNQUEzQixDQUFQO0FBQ0gsQ0FGRDs7QUFJQSxJ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Q0QsZ0JBQUksWUFBSixDQUFpQixJQUFqQixDQUFzQixhQUF0QjtBQUNIO0FBQ0QsWUFBSSxVQUFKO0FBQ0EsVUFBRSxRQUFGLEVBQVksSUFBWixDQUFpQixJQUFJLEtBQUosQ0FBVSxNQUEzQjtBQUNBLFVBQUUsVUFBRixFQUFjLE9BQWQsQ0FBc0IsT0FBdEI7QUFDSCxLQWhCRDtBQWlCTCxDQTlDRDs7QUFnREE7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBSixHQUFXLFlBQVk7QUFDbkIsUUFBSSxNQUFKO0FBQ0EsUUFBSSxTQUFKO0FBQ0gsQ0FIRDs7QUFLQSxFQUFFLFlBQVc7QUFDVCxRQUFJLElBQUo7QUFDSCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYXBwID0ge307XG5cbmFwcC5jb3VudHJpZXMgPSBbXTtcblxuYXBwLnVzZWRDb3VudHJpZXMgPSBbXTtcblxuYXBwLndyb25nQW5zd2VycyA9IFtdO1xuXG5hcHAuc2NvcmUgPSBbXTtcblxuYXBwLmxvY2F0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGBodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92Mi9hbGxgLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nXG4gICAgfSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICBhcHAuY291bnRyeUluZm8ocmVzdWx0cyk7XG4gICAgfSk7XG59O1xuXG5hcHAuY291bnRyeUluZm8gPSBmdW5jdGlvbihjb3VudHJ5QXJyYXkpIHtcbiAgICBjb3VudHJ5QXJyYXkuZm9yRWFjaChmdW5jdGlvbihjb3VudHJ5KXtcbiAgICAgICAgaWYgKGNvdW50cnkubmFtZSAmJiBjb3VudHJ5LmNhcGl0YWwpIHtcbiAgICAgICAgICAgIGFwcC5jb3VudHJpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogY291bnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgIGNhcGl0YWw6IGNvdW50cnkuY2FwaXRhbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5hcHAucmFuZG9taXplciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcHAuY291bnRyaWVzLmxlbmd0aCk7XG4gICAgcmV0dXJuIGFwcC5jb3VudHJpZXNbcmFuZG9tXTtcbn07XG5cbmFwcC5nZXRSYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAobnVtYmVyKSB7IFxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW1iZXIpO1xufTtcblxuYXBwLmdldEFuc3dlcnMgPSBmdW5jdGlvbigpe1xuICAgIGxldCBhbnN3ZXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgYW5zd2Vycy5wdXNoKGFwcC5yYW5kb21pemVyKCkpO1xuICAgIH1cbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSBhcHAuZ2V0UmFuZG9tTnVtYmVyKDQpO1xuICAgIGFwcC5jb3JyZWN0QW5zd2VyID0gYW5zd2Vyc1tyYW5kb21OdW1iZXJdO1xuXG4gICAgJCgnLmFuc3dlck9uZScpLnRleHQoYW5zd2Vyc1swXS5jYXBpdGFsKTtcbiAgICAkKCcuYW5zd2VyVHdvJykudGV4dChhbnN3ZXJzWzFdLmNhcGl0YWwpO1xuICAgICQoJy5hbnN3ZXJUaHJlZScpLnRleHQoYW5zd2Vyc1syXS5jYXBpdGFsKTtcbiAgICAkKCcuYW5zd2VyRm91cicpLnRleHQoYW5zd2Vyc1szXS5jYXBpdGFsKTtcbiAgICAkKCcuY291bnRyeScpLnRleHQoYXBwLmNvcnJlY3RBbnN3ZXIubmFtZSk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXBwLmNvdW50cmllcy5sZW5ndGg7IGkrKyApe1xuICAgICAgICBpZiAoYXBwLmNvdW50cmllc1tpXS5uYW1lID09PSBhcHAuY29ycmVjdEFuc3dlci5uYW1lKSB7XG4gICAgICAgICAgICBhcHAudXNlZENvdW50cmllcy5wdXNoKGFwcC5jb3VudHJpZXMuc3BsaWNlKGksIDEpWzBdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhhcHAudXNlZENvdW50cmllcyk7XG4gICAgLy8gY29uc29sZS5sb2coYXBwLmNvdW50cmllcyk7ICAgXG5cbiAgICByZXR1cm4gYXBwLmNvcnJlY3RBbnN3ZXI7XG59O1xuXG5hcHAuZXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICQoJy5zdGFydEJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZ2FtZSBydWxlcyBwb3AgdXBcbiAgICAgICAgJCgnLmdhbWVMb2FkJykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgIC8vIGdhbWUgY291bnRkb3duIGNsb2NrXG4gICAgICAgIGxldCBjb3VudGVyID0gNjA7XG4gICAgICAgICQoJy5jbG9jaycpLmFwcGVuZChgPHAgY2xhc3M9XCJjb3VudERvd25cIj4ke2NvdW50ZXJ9PC9wPmApO1xuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY291bnRlci0tO1xuICAgICAgICAgICAgaWYoY291bnRlciA+PSAwKXtcbiAgICAgICAgICAgICAgICAkKCcuY291bnREb3duJykudGV4dChgJHtjb3VudGVyfWApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmKGNvdW50ZXIgPT09IDApe1xuICAgICAgICAgICAgICAgICQoJ21haW4nKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgICQoJy5maW5hbFJlc3VsdCcpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXBwLnVzZWRDb3VudHJpZXMpO1xuICAgICAgICAgICAgICAgIGFwcC5zY29yZS5mb3JFYWNoKGZ1bmN0aW9uIChyaWdodENvdW50cnkpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuZmluYWxSZXN1bHQnKS5hcHBlbmQoYDxoMj4ke3JpZ2h0Q291bnRyeS5uYW1lfTwvaDI+PGgzPiR7cmlnaHRDb3VudHJ5LmNhcGl0YWx9PC9oMz5gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhcHAud3JvbmdBbnN3ZXJzLmZvckVhY2goZnVuY3Rpb24gKHdyb25nQ291bnRyeSl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAkKCcuZmluYWxSZXN1bHQnKS5hcHBlbmQoYDxoMj4ke3dyb25nQ291bnRyeS5uYW1lfTwvaDI+PGgzPiR7d3JvbmdDb3VudHJ5LmNhcGl0YWx9PC9oMz5gKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwxMDAwKTtcbiAgICAgICAgYXBwLmdldEFuc3dlcnMoKTtcbiAgICAgIH0pO1xuICAgICAgJCgnLmFjdGlvbkJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBsZXQgY2xpY2tlZEFuc3dlciA9ICQodGhpcykudGV4dCgpO1xuICAgICAgICAvLyAgIGNvbnN0IGFuc3dlciA9ICQodGhpcylcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgICAgY29uc3QgY29ycmVjdEFuc3dlciA9IGFwcC5jb3JyZWN0QW5zd2VyO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGNvcnJlY3RBbnN3ZXIpO1xuICAgICAgICAgIGlmKGNsaWNrZWRBbnN3ZXIgPT09IGNvcnJlY3RBbnN3ZXIuY2FwaXRhbCl7XG4gICAgICAgICAgICAgIGFwcC5zY29yZS5wdXNoKGNvcnJlY3RBbnN3ZXIpO1xuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGFwcC53cm9uZ0Fuc3dlcnMucHVzaChjb3JyZWN0QW5zd2VyKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGFwcC5nZXRBbnN3ZXJzKCk7XG4gICAgICAgICAgJCgnLnNjb3JlJykudGV4dChhcHAuc2NvcmUubGVuZ3RoKTtcbiAgICAgICAgICAkKCcuYnV0dG9ucycpLnRyaWdnZXIoJ3Jlc2V0Jyk7XG4gICAgICB9KTtcbn1cblxuLy8gYXBwLmNvbXBhcmUgPSBmdW5jdGlvbih1c2VkQ291bnRyaWVzLCBzY29yZSl7XG4vLyAgICAgdXNlZENvdW50cmllcy5mb3JFYWNoKCh1c2VkQ2l0eSk9Pilcbi8vIH1cblxuYXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgYXBwLmV2ZW50cygpO1xuICAgIGFwcC5sb2NhdGlvbnMoKTtcbn1cblxuJChmdW5jdGlvbigpIHtcbiAgICBhcHAuaW5pdCgpO1xufSk7XG4iXX0=
