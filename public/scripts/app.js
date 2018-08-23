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
        // console.log(results);
        app.countryInfo(results);
        // console.log(results);
    });
};

// create an array of objects out of this forEach loop
app.countryInfo = function (countryArray) {
    // console.log(countryArray.length);
    countryArray.forEach(function (country) {
        if (country.name && country.capital) {
            app.countries.push({
                name: country.name,
                capital: country.capital
            });
        }
    });
    app.randomizer();
};

// random function 
app.randomizer = function () {
    console.log(app.countries.length);
    var random = Math.floor(Math.random() * app.countries.length) + 1;
    // console.log(random);
    app.events(random);
};

app.events = function (randomNumber) {
    var randomValue = randomNumber;
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
                alert('Game Over');
            };
        }, 1000);
        // question start
        var question = app.countries[randomValue];
        $('.country').text(question.name);
        console.log(question.name);
        console.log(question.capital);
    });
};

// start button starts the game (rules)
// timer of 1 minute 
// get a random country 
// display it on the screen
// get 4 random (one is correct) capital cities
// display them on the screen
// populate a new country with 4 new cities on the click of an input on the previous screen 
// tally the score as the player plays 

// create an array/object of responses to display on the screen 

// after the minute is up display the final score 

// init function 
app.init = function () {
    // new
    // app.events();
    // app.randomizer();
    app.locations();
};

// document ready
$(function () {
    app.init();
});

// function to determine the name of the country entered into the input
// app.countryName = function () {
//     $('form').on('submit', function (e) {
//         e.preventDefault();
//         let countrySelection = $('.vacationSearch').val();
//         app.locations(countrySelection);
//     });
// }

// function to display the information gathered from the API on the page 
// app.display = function(res) {
//     const countryName = $('<h2>').text(res[0].name);
//     const countryRegion = $('<p>').text(res[0].region);
//     const countryCapital = $('<p>').text(res[0].capital);
//     const countryCurrency = $('<p>').text(res[0].currencies[0].name);
//     const callingCode = $('<p>').text(res[0].callingCodes[0]);
//     $('.countryName').append(countryName);
//     $('.countryRegion').append(countryRegion);
//     $('.countryCapital').append(countryCapital);
//     $('.countryCurrency').append(countryCurrency);
//     $('.callingCode').append(callingCode);
// };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixFQUFoQjs7QUFFQSxJQUFJLFNBQUosR0FBZ0IsWUFBWTtBQUN4QixNQUFFLElBQUYsQ0FBTztBQUNILG1EQURHO0FBRUgsZ0JBQVEsS0FGTDtBQUdILGtCQUFVO0FBSFAsS0FBUCxFQUlHLElBSkgsQ0FJUSxVQUFDLE9BQUQsRUFBYTtBQUNqQjtBQUNBLFlBQUksV0FBSixDQUFnQixPQUFoQjtBQUNBO0FBQ0gsS0FSRDtBQVNILENBVkQ7O0FBWUE7QUFDQSxJQUFJLFdBQUosR0FBa0IsVUFBUyxZQUFULEVBQXVCO0FBQ3JDO0FBQ0EsaUJBQWEsT0FBYixDQUFxQixVQUFTLE9BQVQsRUFBaUI7QUFDbEMsWUFBSSxRQUFRLElBQVIsSUFBZ0IsUUFBUSxPQUE1QixFQUFxQztBQUNqQyxnQkFBSSxTQUFKLENBQWMsSUFBZCxDQUFtQjtBQUNmLHNCQUFNLFFBQVEsSUFEQztBQUVmLHlCQUFTLFFBQVE7QUFGRixhQUFuQjtBQUlIO0FBQ0osS0FQRDtBQVFBLFFBQUksVUFBSjtBQUNILENBWEQ7O0FBYUE7QUFDQSxJQUFJLFVBQUosR0FBaUIsWUFBWTtBQUN6QixZQUFRLEdBQVIsQ0FBWSxJQUFJLFNBQUosQ0FBYyxNQUExQjtBQUNBLFFBQU0sU0FBUyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBZ0IsSUFBSSxTQUFKLENBQWMsTUFBekMsSUFBbUQsQ0FBbEU7QUFDQTtBQUNBLFFBQUksTUFBSixDQUFXLE1BQVg7QUFDSCxDQUxEOztBQVFBLElBQUksTUFBSixHQUFhLFVBQVUsWUFBVixFQUF3QjtBQUNqQyxRQUFJLGNBQWMsWUFBbEI7QUFDQSxNQUFFLGNBQUYsRUFBa0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtBQUN0QztBQUNBLFVBQUUsV0FBRixFQUFlLFFBQWYsQ0FBd0IsTUFBeEI7QUFDQTtBQUNBLFlBQUksVUFBVSxFQUFkO0FBQ0EsVUFBRSxRQUFGLEVBQVksTUFBWiwyQkFBMkMsT0FBM0M7QUFDQSxvQkFBWSxZQUFVO0FBQ2xCO0FBQ0EsZ0JBQUcsV0FBVyxDQUFkLEVBQWdCO0FBQ1osa0JBQUUsWUFBRixFQUFnQixJQUFoQixNQUF3QixPQUF4QjtBQUNIO0FBQ0QsZ0JBQUcsWUFBWSxDQUFmLEVBQWlCO0FBQ2I7QUFDSDtBQUNKLFNBUkQsRUFRRSxJQVJGO0FBU0E7QUFDQSxZQUFJLFdBQVcsSUFBSSxTQUFKLENBQWMsV0FBZCxDQUFmO0FBQ0EsVUFBRSxVQUFGLEVBQWMsSUFBZCxDQUFtQixTQUFTLElBQTVCO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLFNBQVMsSUFBckI7QUFDQSxnQkFBUSxHQUFSLENBQVksU0FBUyxPQUFyQjtBQUNILEtBcEJEO0FBcUJILENBdkJEOztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFKLEdBQVcsWUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxRQUFJLFNBQUo7QUFDSCxDQUxEOztBQU9BO0FBQ0EsRUFBRSxZQUFXO0FBQ1QsUUFBSSxJQUFKO0FBQ0gsQ0FGRDs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYXBwID0ge31cblxuYXBwLmNvdW50cmllcyA9IFtdXG5cbmFwcC5sb2NhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvYWxsYCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuICAgIH0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgICAgIGFwcC5jb3VudHJ5SW5mbyhyZXN1bHRzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgfSlcbn1cblxuLy8gY3JlYXRlIGFuIGFycmF5IG9mIG9iamVjdHMgb3V0IG9mIHRoaXMgZm9yRWFjaCBsb29wXG5hcHAuY291bnRyeUluZm8gPSBmdW5jdGlvbihjb3VudHJ5QXJyYXkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhjb3VudHJ5QXJyYXkubGVuZ3RoKTtcbiAgICBjb3VudHJ5QXJyYXkuZm9yRWFjaChmdW5jdGlvbihjb3VudHJ5KXtcbiAgICAgICAgaWYgKGNvdW50cnkubmFtZSAmJiBjb3VudHJ5LmNhcGl0YWwpIHtcbiAgICAgICAgICAgIGFwcC5jb3VudHJpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogY291bnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgIGNhcGl0YWw6IGNvdW50cnkuY2FwaXRhbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgYXBwLnJhbmRvbWl6ZXIoKTtcbn1cblxuLy8gcmFuZG9tIGZ1bmN0aW9uIFxuYXBwLnJhbmRvbWl6ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coYXBwLmNvdW50cmllcy5sZW5ndGgpXG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXBwLmNvdW50cmllcy5sZW5ndGgpICsgMTtcbiAgICAvLyBjb25zb2xlLmxvZyhyYW5kb20pO1xuICAgIGFwcC5ldmVudHMocmFuZG9tKTtcbn1cblxuXG5hcHAuZXZlbnRzID0gZnVuY3Rpb24gKHJhbmRvbU51bWJlcikge1xuICAgIGxldCByYW5kb21WYWx1ZSA9IHJhbmRvbU51bWJlcjtcbiAgICAkKCcuc3RhcnRCdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGdhbWUgcnVsZXMgcG9wIHVwXG4gICAgICAgICQoJy5nYW1lTG9hZCcpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgIC8vIGdhbWUgY291bnRkb3duIGNsb2NrXG4gICAgICAgIGxldCBjb3VudGVyID0gNjA7XG4gICAgICAgICQoJy5jbG9jaycpLmFwcGVuZChgPHAgY2xhc3M9XCJjb3VudERvd25cIj4ke2NvdW50ZXJ9PC9wPmApO1xuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY291bnRlci0tO1xuICAgICAgICAgICAgaWYoY291bnRlciA+PSAwKXtcbiAgICAgICAgICAgICAgICAkKCcuY291bnREb3duJykudGV4dChgJHtjb3VudGVyfWApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmKGNvdW50ZXIgPT09IDApe1xuICAgICAgICAgICAgICAgIGFsZXJ0KGBHYW1lIE92ZXJgKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sMTAwMCk7XG4gICAgICAgIC8vIHF1ZXN0aW9uIHN0YXJ0XG4gICAgICAgIGxldCBxdWVzdGlvbiA9IGFwcC5jb3VudHJpZXNbcmFuZG9tVmFsdWVdO1xuICAgICAgICAkKCcuY291bnRyeScpLnRleHQocXVlc3Rpb24ubmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uLm5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbi5jYXBpdGFsKTtcbiAgICB9KTtcbn1cblxuLy8gc3RhcnQgYnV0dG9uIHN0YXJ0cyB0aGUgZ2FtZSAocnVsZXMpXG4vLyB0aW1lciBvZiAxIG1pbnV0ZSBcbi8vIGdldCBhIHJhbmRvbSBjb3VudHJ5IFxuLy8gZGlzcGxheSBpdCBvbiB0aGUgc2NyZWVuXG4vLyBnZXQgNCByYW5kb20gKG9uZSBpcyBjb3JyZWN0KSBjYXBpdGFsIGNpdGllc1xuLy8gZGlzcGxheSB0aGVtIG9uIHRoZSBzY3JlZW5cbi8vIHBvcHVsYXRlIGEgbmV3IGNvdW50cnkgd2l0aCA0IG5ldyBjaXRpZXMgb24gdGhlIGNsaWNrIG9mIGFuIGlucHV0IG9uIHRoZSBwcmV2aW91cyBzY3JlZW4gXG4vLyB0YWxseSB0aGUgc2NvcmUgYXMgdGhlIHBsYXllciBwbGF5cyBcblxuLy8gY3JlYXRlIGFuIGFycmF5L29iamVjdCBvZiByZXNwb25zZXMgdG8gZGlzcGxheSBvbiB0aGUgc2NyZWVuIFxuXG4vLyBhZnRlciB0aGUgbWludXRlIGlzIHVwIGRpc3BsYXkgdGhlIGZpbmFsIHNjb3JlIFxuXG4vLyBpbml0IGZ1bmN0aW9uIFxuYXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gbmV3XG4gICAgLy8gYXBwLmV2ZW50cygpO1xuICAgIC8vIGFwcC5yYW5kb21pemVyKCk7XG4gICAgYXBwLmxvY2F0aW9ucygpO1xufVxuXG4vLyBkb2N1bWVudCByZWFkeVxuJChmdW5jdGlvbigpIHtcbiAgICBhcHAuaW5pdCgpO1xufSk7XG5cblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGRldGVybWluZSB0aGUgbmFtZSBvZiB0aGUgY291bnRyeSBlbnRlcmVkIGludG8gdGhlIGlucHV0XG4vLyBhcHAuY291bnRyeU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgJCgnZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgIGxldCBjb3VudHJ5U2VsZWN0aW9uID0gJCgnLnZhY2F0aW9uU2VhcmNoJykudmFsKCk7XG4vLyAgICAgICAgIGFwcC5sb2NhdGlvbnMoY291bnRyeVNlbGVjdGlvbik7XG4vLyAgICAgfSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgdGhlIGluZm9ybWF0aW9uIGdhdGhlcmVkIGZyb20gdGhlIEFQSSBvbiB0aGUgcGFnZSBcbi8vIGFwcC5kaXNwbGF5ID0gZnVuY3Rpb24ocmVzKSB7XG4vLyAgICAgY29uc3QgY291bnRyeU5hbWUgPSAkKCc8aDI+JykudGV4dChyZXNbMF0ubmFtZSk7XG4vLyAgICAgY29uc3QgY291bnRyeVJlZ2lvbiA9ICQoJzxwPicpLnRleHQocmVzWzBdLnJlZ2lvbik7XG4vLyAgICAgY29uc3QgY291bnRyeUNhcGl0YWwgPSAkKCc8cD4nKS50ZXh0KHJlc1swXS5jYXBpdGFsKTtcbi8vICAgICBjb25zdCBjb3VudHJ5Q3VycmVuY3kgPSAkKCc8cD4nKS50ZXh0KHJlc1swXS5jdXJyZW5jaWVzWzBdLm5hbWUpO1xuLy8gICAgIGNvbnN0IGNhbGxpbmdDb2RlID0gJCgnPHA+JykudGV4dChyZXNbMF0uY2FsbGluZ0NvZGVzWzBdKTtcbi8vICAgICAkKCcuY291bnRyeU5hbWUnKS5hcHBlbmQoY291bnRyeU5hbWUpO1xuLy8gICAgICQoJy5jb3VudHJ5UmVnaW9uJykuYXBwZW5kKGNvdW50cnlSZWdpb24pO1xuLy8gICAgICQoJy5jb3VudHJ5Q2FwaXRhbCcpLmFwcGVuZChjb3VudHJ5Q2FwaXRhbCk7XG4vLyAgICAgJCgnLmNvdW50cnlDdXJyZW5jeScpLmFwcGVuZChjb3VudHJ5Q3VycmVuY3kpO1xuLy8gICAgICQoJy5jYWxsaW5nQ29kZScpLmFwcGVuZChjYWxsaW5nQ29kZSk7XG4vLyB9O1xuIl19
