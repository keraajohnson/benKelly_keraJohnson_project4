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
    console.log(random);
};

app.events = function () {
    $('.startButton').on('click', function () {
        console.log('clicked');
        $('.gameLoad').addClass('hide');
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
    app.locations();
    // new
    app.events();
    // app.randomizer();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixFQUFoQjs7QUFFQSxJQUFJLFNBQUosR0FBZ0IsWUFBWTtBQUN4QixNQUFFLElBQUYsQ0FBTztBQUNILG1EQURHO0FBRUgsZ0JBQVEsS0FGTDtBQUdILGtCQUFVO0FBSFAsS0FBUCxFQUlHLElBSkgsQ0FJUSxVQUFDLE9BQUQsRUFBYTtBQUNqQjtBQUNBLFlBQUksV0FBSixDQUFnQixPQUFoQjtBQUNBO0FBQ0gsS0FSRDtBQVNILENBVkQ7O0FBWUE7QUFDQSxJQUFJLFdBQUosR0FBa0IsVUFBUyxZQUFULEVBQXVCO0FBQ3JDO0FBQ0EsaUJBQWEsT0FBYixDQUFxQixVQUFTLE9BQVQsRUFBaUI7QUFDbEMsWUFBSSxRQUFRLElBQVIsSUFBZ0IsUUFBUSxPQUE1QixFQUFxQztBQUNqQyxnQkFBSSxTQUFKLENBQWMsSUFBZCxDQUFtQjtBQUNmLHNCQUFNLFFBQVEsSUFEQztBQUVmLHlCQUFTLFFBQVE7QUFGRixhQUFuQjtBQUlIO0FBQ0osS0FQRDtBQVFBLFFBQUksVUFBSjtBQUNILENBWEQ7O0FBYUE7QUFDQSxJQUFJLFVBQUosR0FBaUIsWUFBWTtBQUN6QixZQUFRLEdBQVIsQ0FBWSxJQUFJLFNBQUosQ0FBYyxNQUExQjtBQUNBLFFBQU0sU0FBUyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBZ0IsSUFBSSxTQUFKLENBQWMsTUFBekMsSUFBbUQsQ0FBbEU7QUFDQSxZQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0gsQ0FKRDs7QUFPQSxJQUFJLE1BQUosR0FBYSxZQUFZO0FBQ3JCLE1BQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFZO0FBQ3RDLGdCQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsVUFBRSxXQUFGLEVBQWUsUUFBZixDQUF3QixNQUF4QjtBQUNILEtBSEQ7QUFJSCxDQUxEOztBQU9BO0FBQ0k7QUFDSjtBQUNJO0FBQ0o7QUFDSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQUosR0FBVyxZQUFZO0FBQ25CLFFBQUksU0FBSjtBQUNBO0FBQ0EsUUFBSSxNQUFKO0FBQ0E7QUFDSCxDQUxEOztBQU9BO0FBQ0EsRUFBRSxZQUFXO0FBQ1QsUUFBSSxJQUFKO0FBQ0gsQ0FGRDs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYXBwID0ge31cblxuYXBwLmNvdW50cmllcyA9IFtdXG5cbmFwcC5sb2NhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvYWxsYCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuICAgIH0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgICAgIGFwcC5jb3VudHJ5SW5mbyhyZXN1bHRzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgfSlcbn1cblxuLy8gY3JlYXRlIGFuIGFycmF5IG9mIG9iamVjdHMgb3V0IG9mIHRoaXMgZm9yRWFjaCBsb29wXG5hcHAuY291bnRyeUluZm8gPSBmdW5jdGlvbihjb3VudHJ5QXJyYXkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhjb3VudHJ5QXJyYXkubGVuZ3RoKTtcbiAgICBjb3VudHJ5QXJyYXkuZm9yRWFjaChmdW5jdGlvbihjb3VudHJ5KXtcbiAgICAgICAgaWYgKGNvdW50cnkubmFtZSAmJiBjb3VudHJ5LmNhcGl0YWwpIHtcbiAgICAgICAgICAgIGFwcC5jb3VudHJpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogY291bnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgIGNhcGl0YWw6IGNvdW50cnkuY2FwaXRhbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgYXBwLnJhbmRvbWl6ZXIoKTtcbn1cblxuLy8gcmFuZG9tIGZ1bmN0aW9uIFxuYXBwLnJhbmRvbWl6ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coYXBwLmNvdW50cmllcy5sZW5ndGgpXG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXBwLmNvdW50cmllcy5sZW5ndGgpICsgMTtcbiAgICBjb25zb2xlLmxvZyhyYW5kb20pO1xufVxuXG5cbmFwcC5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnN0YXJ0QnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXG4gICAgICAgICQoJy5nYW1lTG9hZCcpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgfSk7XG59XG5cbi8vIHN0YXJ0IGJ1dHRvbiBzdGFydHMgdGhlIGdhbWUgKHJ1bGVzKVxuICAgIC8vIHRpbWVyIG9mIDEgbWludXRlIFxuLy8gZ2V0IGEgcmFuZG9tIGNvdW50cnkgXG4gICAgLy8gZGlzcGxheSBpdCBvbiB0aGUgc2NyZWVuXG4vLyBnZXQgNCByYW5kb20gKG9uZSBpcyBjb3JyZWN0KSBjYXBpdGFsIGNpdGllc1xuICAgIC8vIGRpc3BsYXkgdGhlbSBvbiB0aGUgc2NyZWVuXG4vLyBwb3B1bGF0ZSBhIG5ldyBjb3VudHJ5IHdpdGggNCBuZXcgY2l0aWVzIG9uIHRoZSBjbGljayBvZiBhbiBpbnB1dCBvbiB0aGUgcHJldmlvdXMgc2NyZWVuIFxuLy8gdGFsbHkgdGhlIHNjb3JlIGFzIHRoZSBwbGF5ZXIgcGxheXMgXG5cbi8vIGNyZWF0ZSBhbiBhcnJheS9vYmplY3Qgb2YgcmVzcG9uc2VzIHRvIGRpc3BsYXkgb24gdGhlIHNjcmVlbiBcblxuLy8gYWZ0ZXIgdGhlIG1pbnV0ZSBpcyB1cCBkaXNwbGF5IHRoZSBmaW5hbCBzY29yZSBcblxuLy8gaW5pdCBmdW5jdGlvbiBcbmFwcC5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGFwcC5sb2NhdGlvbnMoKTtcbiAgICAvLyBuZXdcbiAgICBhcHAuZXZlbnRzKCk7XG4gICAgLy8gYXBwLnJhbmRvbWl6ZXIoKTtcbn1cblxuLy8gZG9jdW1lbnQgcmVhZHlcbiQoZnVuY3Rpb24oKSB7XG4gICAgYXBwLmluaXQoKTtcbn0pO1xuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5hbWUgb2YgdGhlIGNvdW50cnkgZW50ZXJlZCBpbnRvIHRoZSBpbnB1dFxuLy8gYXBwLmNvdW50cnlOYW1lID0gZnVuY3Rpb24gKCkge1xuLy8gICAgICQoJ2Zvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICBsZXQgY291bnRyeVNlbGVjdGlvbiA9ICQoJy52YWNhdGlvblNlYXJjaCcpLnZhbCgpO1xuLy8gICAgICAgICBhcHAubG9jYXRpb25zKGNvdW50cnlTZWxlY3Rpb24pO1xuLy8gICAgIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiB0byBkaXNwbGF5IHRoZSBpbmZvcm1hdGlvbiBnYXRoZXJlZCBmcm9tIHRoZSBBUEkgb24gdGhlIHBhZ2UgXG4vLyBhcHAuZGlzcGxheSA9IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgIGNvbnN0IGNvdW50cnlOYW1lID0gJCgnPGgyPicpLnRleHQocmVzWzBdLm5hbWUpO1xuLy8gICAgIGNvbnN0IGNvdW50cnlSZWdpb24gPSAkKCc8cD4nKS50ZXh0KHJlc1swXS5yZWdpb24pO1xuLy8gICAgIGNvbnN0IGNvdW50cnlDYXBpdGFsID0gJCgnPHA+JykudGV4dChyZXNbMF0uY2FwaXRhbCk7XG4vLyAgICAgY29uc3QgY291bnRyeUN1cnJlbmN5ID0gJCgnPHA+JykudGV4dChyZXNbMF0uY3VycmVuY2llc1swXS5uYW1lKTtcbi8vICAgICBjb25zdCBjYWxsaW5nQ29kZSA9ICQoJzxwPicpLnRleHQocmVzWzBdLmNhbGxpbmdDb2Rlc1swXSk7XG4vLyAgICAgJCgnLmNvdW50cnlOYW1lJykuYXBwZW5kKGNvdW50cnlOYW1lKTtcbi8vICAgICAkKCcuY291bnRyeVJlZ2lvbicpLmFwcGVuZChjb3VudHJ5UmVnaW9uKTtcbi8vICAgICAkKCcuY291bnRyeUNhcGl0YWwnKS5hcHBlbmQoY291bnRyeUNhcGl0YWwpO1xuLy8gICAgICQoJy5jb3VudHJ5Q3VycmVuY3knKS5hcHBlbmQoY291bnRyeUN1cnJlbmN5KTtcbi8vICAgICAkKCcuY2FsbGluZ0NvZGUnKS5hcHBlbmQoY2FsbGluZ0NvZGUpO1xuLy8gfTtcbiJdfQ==
