(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = {};

app.locations = function () {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/all',
        method: 'GET',
        dataType: 'json'
    }).then(function (results) {
        // console.log(results);
        app.countryInfo(results);
    });
};

// random function 
app.randomizer = function (item) {
    Math.floor(Math.random() * item.length);
    console.log(item);
};

app.countryInfo = function (countryArray) {
    for (var i = 0; i <= countryArray.length; i++) {
        var countryName = countryArray[i].name;
        console.log(countryName);
        var countryCapital = countryArray[i].capital;
        console.log(countryCapital);
        app.randomizer(countryArray);
    }
};

// new
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixZQUFZO0FBQ3hCLE1BQUUsSUFBRixDQUFPO0FBQ0gsbURBREc7QUFFSCxnQkFBUSxLQUZMO0FBR0gsa0JBQVU7QUFIUCxLQUFQLEVBSUcsSUFKSCxDQUlRLFVBQUMsT0FBRCxFQUFhO0FBQ2pCO0FBQ0EsWUFBSSxXQUFKLENBQWdCLE9BQWhCO0FBQ0gsS0FQRDtBQVFILENBVEQ7O0FBV0E7QUFDQSxJQUFJLFVBQUosR0FBaUIsVUFBUyxJQUFULEVBQWU7QUFDNUIsU0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLEtBQUssTUFBaEM7QUFDQSxZQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0gsQ0FIRDs7QUFLQSxJQUFJLFdBQUosR0FBa0IsVUFBUyxZQUFULEVBQXVCO0FBQ3JDLFNBQUksSUFBSSxJQUFJLENBQVosRUFBZSxLQUFLLGFBQWEsTUFBakMsRUFBeUMsR0FBekMsRUFBOEM7QUFDMUMsWUFBTSxjQUFjLGFBQWEsQ0FBYixFQUFnQixJQUFwQztBQUNBLGdCQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsWUFBTSxpQkFBaUIsYUFBYSxDQUFiLEVBQWdCLE9BQXZDO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLGNBQVo7QUFDQSxZQUFJLFVBQUosQ0FBZSxZQUFmO0FBQ0g7QUFDSixDQVJEOztBQVVBO0FBQ0EsSUFBSSxNQUFKLEdBQWEsWUFBWTtBQUNyQixNQUFFLGNBQUYsRUFBa0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtBQUN0QyxnQkFBUSxHQUFSLENBQVksU0FBWjtBQUNBLFVBQUUsV0FBRixFQUFlLFFBQWYsQ0FBd0IsTUFBeEI7QUFDSCxLQUhEO0FBSUgsQ0FMRDs7QUFPQTtBQUNJO0FBQ0o7QUFDSTtBQUNKO0FBQ0k7QUFDSjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFKLEdBQVcsWUFBWTtBQUNuQixRQUFJLFNBQUo7QUFDQTtBQUNBLFFBQUksTUFBSjtBQUNILENBSkQ7O0FBTUE7QUFDQSxFQUFFLFlBQVc7QUFDVCxRQUFJLElBQUo7QUFDSCxDQUZEOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBhcHAgPSB7fVxuXG5hcHAubG9jYXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYGh0dHBzOi8vcmVzdGNvdW50cmllcy5ldS9yZXN0L3YyL2FsbGAsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbidcbiAgICB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgICBhcHAuY291bnRyeUluZm8ocmVzdWx0cylcbiAgICB9KVxufVxuXG4vLyByYW5kb20gZnVuY3Rpb24gXG5hcHAucmFuZG9taXplciA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpdGVtLmxlbmd0aCk7XG4gICAgY29uc29sZS5sb2coaXRlbSk7XG59XG5cbmFwcC5jb3VudHJ5SW5mbyA9IGZ1bmN0aW9uKGNvdW50cnlBcnJheSkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gY291bnRyeUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvdW50cnlOYW1lID0gY291bnRyeUFycmF5W2ldLm5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50cnlOYW1lKTtcbiAgICAgICAgY29uc3QgY291bnRyeUNhcGl0YWwgPSBjb3VudHJ5QXJyYXlbaV0uY2FwaXRhbDtcbiAgICAgICAgY29uc29sZS5sb2coY291bnRyeUNhcGl0YWwpO1xuICAgICAgICBhcHAucmFuZG9taXplcihjb3VudHJ5QXJyYXkpO1xuICAgIH1cbn07XG5cbi8vIG5ld1xuYXBwLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc3RhcnRCdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG4gICAgICAgICQoJy5nYW1lTG9hZCcpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgfSk7XG59XG5cbi8vIHN0YXJ0IGJ1dHRvbiBzdGFydHMgdGhlIGdhbWUgKHJ1bGVzKVxuICAgIC8vIHRpbWVyIG9mIDEgbWludXRlIFxuLy8gZ2V0IGEgcmFuZG9tIGNvdW50cnkgXG4gICAgLy8gZGlzcGxheSBpdCBvbiB0aGUgc2NyZWVuXG4vLyBnZXQgNCByYW5kb20gKG9uZSBpcyBjb3JyZWN0KSBjYXBpdGFsIGNpdGllc1xuICAgIC8vIGRpc3BsYXkgdGhlbSBvbiB0aGUgc2NyZWVuXG4vLyBwb3B1bGF0ZSBhIG5ldyBjb3VudHJ5IHdpdGggNCBuZXcgY2l0aWVzIG9uIHRoZSBjbGljayBvZiBhbiBpbnB1dCBvbiB0aGUgcHJldmlvdXMgc2NyZWVuIFxuLy8gdGFsbHkgdGhlIHNjb3JlIGFzIHRoZSBwbGF5ZXIgcGxheXMgXG5cbi8vIGNyZWF0ZSBhbiBhcnJheS9vYmplY3Qgb2YgcmVzcG9uc2VzIHRvIGRpc3BsYXkgb24gdGhlIHNjcmVlbiBcblxuLy8gYWZ0ZXIgdGhlIG1pbnV0ZSBpcyB1cCBkaXNwbGF5IHRoZSBmaW5hbCBzY29yZSBcblxuLy8gaW5pdCBmdW5jdGlvbiBcbmFwcC5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGFwcC5sb2NhdGlvbnMoKTtcbiAgICAvLyBuZXdcbiAgICBhcHAuZXZlbnRzKCk7XG59XG5cbi8vIGRvY3VtZW50IHJlYWR5XG4kKGZ1bmN0aW9uKCkge1xuICAgIGFwcC5pbml0KCk7XG59KTtcblxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHRoZSBuYW1lIG9mIHRoZSBjb3VudHJ5IGVudGVyZWQgaW50byB0aGUgaW5wdXRcbi8vIGFwcC5jb3VudHJ5TmFtZSA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICAkKCdmb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgbGV0IGNvdW50cnlTZWxlY3Rpb24gPSAkKCcudmFjYXRpb25TZWFyY2gnKS52YWwoKTtcbi8vICAgICAgICAgYXBwLmxvY2F0aW9ucyhjb3VudHJ5U2VsZWN0aW9uKTtcbi8vICAgICB9KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gdG8gZGlzcGxheSB0aGUgaW5mb3JtYXRpb24gZ2F0aGVyZWQgZnJvbSB0aGUgQVBJIG9uIHRoZSBwYWdlIFxuLy8gYXBwLmRpc3BsYXkgPSBmdW5jdGlvbihyZXMpIHtcbi8vICAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoJzxoMj4nKS50ZXh0KHJlc1swXS5uYW1lKTtcbi8vICAgICBjb25zdCBjb3VudHJ5UmVnaW9uID0gJCgnPHA+JykudGV4dChyZXNbMF0ucmVnaW9uKTtcbi8vICAgICBjb25zdCBjb3VudHJ5Q2FwaXRhbCA9ICQoJzxwPicpLnRleHQocmVzWzBdLmNhcGl0YWwpO1xuLy8gICAgIGNvbnN0IGNvdW50cnlDdXJyZW5jeSA9ICQoJzxwPicpLnRleHQocmVzWzBdLmN1cnJlbmNpZXNbMF0ubmFtZSk7XG4vLyAgICAgY29uc3QgY2FsbGluZ0NvZGUgPSAkKCc8cD4nKS50ZXh0KHJlc1swXS5jYWxsaW5nQ29kZXNbMF0pO1xuLy8gICAgICQoJy5jb3VudHJ5TmFtZScpLmFwcGVuZChjb3VudHJ5TmFtZSk7XG4vLyAgICAgJCgnLmNvdW50cnlSZWdpb24nKS5hcHBlbmQoY291bnRyeVJlZ2lvbik7XG4vLyAgICAgJCgnLmNvdW50cnlDYXBpdGFsJykuYXBwZW5kKGNvdW50cnlDYXBpdGFsKTtcbi8vICAgICAkKCcuY291bnRyeUN1cnJlbmN5JykuYXBwZW5kKGNvdW50cnlDdXJyZW5jeSk7XG4vLyAgICAgJCgnLmNhbGxpbmdDb2RlJykuYXBwZW5kKGNhbGxpbmdDb2RlKTtcbi8vIH07XG4iXX0=
