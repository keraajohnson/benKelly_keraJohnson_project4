(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = {};

app.locations = function (def) {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/' + def,
        method: 'GET',
        dataType: 'json'
    }).then(function (res) {
        console.log(res);
        app.display(res);
    });
};

app.countryName = function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        var countrySelection = $('.vacationSearch').val();
        app.locations(countrySelection);
        console.log(countrySelection);
    });
};

app.display = function (res) {
    var countryName = $('<h2>').text(res[0].name);
    var countryRegion = $('<h2>').text(res[0].region);
    var countryCapital = $('<h2>').text(res[0].capital);
    var countryCurrency = $('<h2>').text(res[0].currencies[0].name);
    var callingCode = $('<h2>').text(res[0].callingCodes[0]);
    $('.results').append(countryName);
    $('.results').append(countryRegion);
};

app.init = function () {
    app.countryName();
};

$(function () {
    console.log("ready!");
    app.init();
});

// We want to get the users vacation location 
// We want to save it to countryName

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixVQUFVLEdBQVYsRUFBZTtBQUMzQixNQUFFLElBQUYsQ0FBTztBQUNILHdEQUE4QyxHQUQzQztBQUVILGdCQUFRLEtBRkw7QUFHSCxrQkFBVTtBQUhQLEtBQVAsRUFJRyxJQUpILENBSVEsVUFBQyxHQUFELEVBQVM7QUFDYixnQkFBUSxHQUFSLENBQVksR0FBWjtBQUNBLFlBQUksT0FBSixDQUFZLEdBQVo7QUFDSCxLQVBEO0FBUUgsQ0FURDs7QUFXQSxJQUFJLFdBQUosR0FBa0IsWUFBVztBQUN6QixNQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsUUFBYixFQUF1QixVQUFVLENBQVYsRUFBWTtBQUMvQixVQUFFLGNBQUY7QUFDQSxZQUFJLG1CQUFtQixFQUFFLGlCQUFGLEVBQXFCLEdBQXJCLEVBQXZCO0FBQ0EsWUFBSSxTQUFKLENBQWMsZ0JBQWQ7QUFDQSxnQkFBUSxHQUFSLENBQVksZ0JBQVo7QUFDSCxLQUxEO0FBTUgsQ0FQRDs7QUFTQSxJQUFJLE9BQUosR0FBYyxVQUFTLEdBQVQsRUFBYztBQUN4QixRQUFNLGNBQWMsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLElBQUksQ0FBSixFQUFPLElBQXRCLENBQXBCO0FBQ0EsUUFBTSxnQkFBZ0IsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLElBQUksQ0FBSixFQUFPLE1BQXRCLENBQXRCO0FBQ0EsUUFBTSxpQkFBaUIsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLElBQUksQ0FBSixFQUFPLE9BQXRCLENBQXZCO0FBQ0EsUUFBTSxrQkFBa0IsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLElBQUksQ0FBSixFQUFPLFVBQVAsQ0FBa0IsQ0FBbEIsRUFBcUIsSUFBcEMsQ0FBeEI7QUFDQSxRQUFNLGNBQWMsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLElBQUksQ0FBSixFQUFPLFlBQVAsQ0FBb0IsQ0FBcEIsQ0FBZixDQUFwQjtBQUNBLE1BQUUsVUFBRixFQUFjLE1BQWQsQ0FBcUIsV0FBckI7QUFDQSxNQUFFLFVBQUYsRUFBYyxNQUFkLENBQXFCLGFBQXJCO0FBQ0gsQ0FSRDs7QUFVQSxJQUFJLElBQUosR0FBVyxZQUFZO0FBQ25CLFFBQUksV0FBSjtBQUNILENBRkQ7O0FBSUEsRUFBRSxZQUFXO0FBQ1QsWUFBUSxHQUFSLENBQWEsUUFBYjtBQUNBLFFBQUksSUFBSjtBQUNILENBSEQ7O0FBS0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGFwcCA9IHt9XG5cbmFwcC5sb2NhdGlvbnMgPSBmdW5jdGlvbiAoZGVmKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvbmFtZS8ke2RlZn1gLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGFwcC5kaXNwbGF5KHJlcyk7XG4gICAgfSlcbn1cblxuYXBwLmNvdW50cnlOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgJCgnZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGNvdW50cnlTZWxlY3Rpb24gPSAkKCcudmFjYXRpb25TZWFyY2gnKS52YWwoKTtcbiAgICAgICAgYXBwLmxvY2F0aW9ucyhjb3VudHJ5U2VsZWN0aW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coY291bnRyeVNlbGVjdGlvbik7XG4gICAgfSk7XG59XG5cbmFwcC5kaXNwbGF5ID0gZnVuY3Rpb24ocmVzKSB7XG4gICAgY29uc3QgY291bnRyeU5hbWUgPSAkKCc8aDI+JykudGV4dChyZXNbMF0ubmFtZSk7XG4gICAgY29uc3QgY291bnRyeVJlZ2lvbiA9ICQoJzxoMj4nKS50ZXh0KHJlc1swXS5yZWdpb24pO1xuICAgIGNvbnN0IGNvdW50cnlDYXBpdGFsID0gJCgnPGgyPicpLnRleHQocmVzWzBdLmNhcGl0YWwpO1xuICAgIGNvbnN0IGNvdW50cnlDdXJyZW5jeSA9ICQoJzxoMj4nKS50ZXh0KHJlc1swXS5jdXJyZW5jaWVzWzBdLm5hbWUpO1xuICAgIGNvbnN0IGNhbGxpbmdDb2RlID0gJCgnPGgyPicpLnRleHQocmVzWzBdLmNhbGxpbmdDb2Rlc1swXSk7XG4gICAgJCgnLnJlc3VsdHMnKS5hcHBlbmQoY291bnRyeU5hbWUpO1xuICAgICQoJy5yZXN1bHRzJykuYXBwZW5kKGNvdW50cnlSZWdpb24pO1xufTtcblxuYXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgYXBwLmNvdW50cnlOYW1lKCk7XG59XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coIFwicmVhZHkhXCIgKTtcbiAgICBhcHAuaW5pdCgpO1xufSk7XG5cbi8vIFdlIHdhbnQgdG8gZ2V0IHRoZSB1c2VycyB2YWNhdGlvbiBsb2NhdGlvbiBcbi8vIFdlIHdhbnQgdG8gc2F2ZSBpdCB0byBjb3VudHJ5TmFtZSBcbiJdfQ==
