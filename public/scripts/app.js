(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = {};

// todays date to determine the time zone
app.todaysDate = new Date();
app.todaysTime = app.todaysDate.toUTCString();
console.log(app.todaysTime);

// ajax call to RESTcountries API
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

// function to determine the name of the country entered into the input
app.countryName = function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        var countrySelection = $('.vacationSearch').val();
        app.locations(countrySelection);
    });
};

// function to display the information gathered from the API on the page 
app.display = function (res) {
    var countryName = $('<h2>').text(res[0].name);
    var countryRegion = $('<p>').text(res[0].region);
    var countryCapital = $('<p>').text(res[0].capital);
    var countryCurrency = $('<p>').text(res[0].currencies[0].name);
    var callingCode = $('<p>').text(res[0].callingCodes[0]);
    $('.countryName').append(countryName);
    $('.countryRegion').append(countryRegion);
    $('.countryCapital').append(countryCapital);
    $('.countryCurrency').append(countryCurrency);
    $('.callingCode').append(callingCode);
};

// init function 
app.init = function () {
    app.countryName();
};

// document ready
$(function () {
    app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBO0FBQ0EsSUFBSSxVQUFKLEdBQWlCLElBQUksSUFBSixFQUFqQjtBQUNBLElBQUksVUFBSixHQUFpQixJQUFJLFVBQUosQ0FBZSxXQUFmLEVBQWpCO0FBQ0EsUUFBUSxHQUFSLENBQVksSUFBSSxVQUFoQjs7QUFFQTtBQUNBLElBQUksU0FBSixHQUFnQixVQUFVLEdBQVYsRUFBZTtBQUMzQixNQUFFLElBQUYsQ0FBTztBQUNILHdEQUE4QyxHQUQzQztBQUVILGdCQUFRLEtBRkw7QUFHSCxrQkFBVTtBQUhQLEtBQVAsRUFJRyxJQUpILENBSVEsVUFBQyxHQUFELEVBQVM7QUFDYixnQkFBUSxHQUFSLENBQVksR0FBWjtBQUNBLFlBQUksT0FBSixDQUFZLEdBQVo7QUFDSCxLQVBEO0FBUUgsQ0FURDs7QUFXQTtBQUNBLElBQUksV0FBSixHQUFrQixZQUFXO0FBQ3pCLE1BQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFVBQVUsQ0FBVixFQUFZO0FBQy9CLFVBQUUsY0FBRjtBQUNBLFlBQUksbUJBQW1CLEVBQUUsaUJBQUYsRUFBcUIsR0FBckIsRUFBdkI7QUFDQSxZQUFJLFNBQUosQ0FBYyxnQkFBZDtBQUNILEtBSkQ7QUFLSCxDQU5EOztBQVFBO0FBQ0EsSUFBSSxPQUFKLEdBQWMsVUFBUyxHQUFULEVBQWM7QUFDeEIsUUFBTSxjQUFjLEVBQUUsTUFBRixFQUFVLElBQVYsQ0FBZSxJQUFJLENBQUosRUFBTyxJQUF0QixDQUFwQjtBQUNBLFFBQU0sZ0JBQWdCLEVBQUUsS0FBRixFQUFTLElBQVQsQ0FBYyxJQUFJLENBQUosRUFBTyxNQUFyQixDQUF0QjtBQUNBLFFBQU0saUJBQWlCLEVBQUUsS0FBRixFQUFTLElBQVQsQ0FBYyxJQUFJLENBQUosRUFBTyxPQUFyQixDQUF2QjtBQUNBLFFBQU0sa0JBQWtCLEVBQUUsS0FBRixFQUFTLElBQVQsQ0FBYyxJQUFJLENBQUosRUFBTyxVQUFQLENBQWtCLENBQWxCLEVBQXFCLElBQW5DLENBQXhCO0FBQ0EsUUFBTSxjQUFjLEVBQUUsS0FBRixFQUFTLElBQVQsQ0FBYyxJQUFJLENBQUosRUFBTyxZQUFQLENBQW9CLENBQXBCLENBQWQsQ0FBcEI7QUFDQSxNQUFFLGNBQUYsRUFBa0IsTUFBbEIsQ0FBeUIsV0FBekI7QUFDQSxNQUFFLGdCQUFGLEVBQW9CLE1BQXBCLENBQTJCLGFBQTNCO0FBQ0EsTUFBRSxpQkFBRixFQUFxQixNQUFyQixDQUE0QixjQUE1QjtBQUNBLE1BQUUsa0JBQUYsRUFBc0IsTUFBdEIsQ0FBNkIsZUFBN0I7QUFDQSxNQUFFLGNBQUYsRUFBa0IsTUFBbEIsQ0FBeUIsV0FBekI7QUFDSCxDQVhEOztBQWFBO0FBQ0EsSUFBSSxJQUFKLEdBQVcsWUFBWTtBQUNuQixRQUFJLFdBQUo7QUFDSCxDQUZEOztBQUlBO0FBQ0EsRUFBRSxZQUFXO0FBQ1QsUUFBSSxJQUFKO0FBQ0gsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGFwcCA9IHt9XG5cbi8vIHRvZGF5cyBkYXRlIHRvIGRldGVybWluZSB0aGUgdGltZSB6b25lXG5hcHAudG9kYXlzRGF0ZSA9IG5ldyBEYXRlKCk7XG5hcHAudG9kYXlzVGltZSA9IGFwcC50b2RheXNEYXRlLnRvVVRDU3RyaW5nKCk7XG5jb25zb2xlLmxvZyhhcHAudG9kYXlzVGltZSk7XG5cbi8vIGFqYXggY2FsbCB0byBSRVNUY291bnRyaWVzIEFQSVxuYXBwLmxvY2F0aW9ucyA9IGZ1bmN0aW9uIChkZWYpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGBodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92Mi9uYW1lLyR7ZGVmfWAsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbidcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgYXBwLmRpc3BsYXkocmVzKTtcbiAgICB9KVxufVxuXG4vLyBmdW5jdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5hbWUgb2YgdGhlIGNvdW50cnkgZW50ZXJlZCBpbnRvIHRoZSBpbnB1dFxuYXBwLmNvdW50cnlOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgJCgnZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGNvdW50cnlTZWxlY3Rpb24gPSAkKCcudmFjYXRpb25TZWFyY2gnKS52YWwoKTtcbiAgICAgICAgYXBwLmxvY2F0aW9ucyhjb3VudHJ5U2VsZWN0aW9uKTtcbiAgICB9KTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gZGlzcGxheSB0aGUgaW5mb3JtYXRpb24gZ2F0aGVyZWQgZnJvbSB0aGUgQVBJIG9uIHRoZSBwYWdlIFxuYXBwLmRpc3BsYXkgPSBmdW5jdGlvbihyZXMpIHtcbiAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoJzxoMj4nKS50ZXh0KHJlc1swXS5uYW1lKTtcbiAgICBjb25zdCBjb3VudHJ5UmVnaW9uID0gJCgnPHA+JykudGV4dChyZXNbMF0ucmVnaW9uKTtcbiAgICBjb25zdCBjb3VudHJ5Q2FwaXRhbCA9ICQoJzxwPicpLnRleHQocmVzWzBdLmNhcGl0YWwpO1xuICAgIGNvbnN0IGNvdW50cnlDdXJyZW5jeSA9ICQoJzxwPicpLnRleHQocmVzWzBdLmN1cnJlbmNpZXNbMF0ubmFtZSk7XG4gICAgY29uc3QgY2FsbGluZ0NvZGUgPSAkKCc8cD4nKS50ZXh0KHJlc1swXS5jYWxsaW5nQ29kZXNbMF0pO1xuICAgICQoJy5jb3VudHJ5TmFtZScpLmFwcGVuZChjb3VudHJ5TmFtZSk7XG4gICAgJCgnLmNvdW50cnlSZWdpb24nKS5hcHBlbmQoY291bnRyeVJlZ2lvbik7XG4gICAgJCgnLmNvdW50cnlDYXBpdGFsJykuYXBwZW5kKGNvdW50cnlDYXBpdGFsKTtcbiAgICAkKCcuY291bnRyeUN1cnJlbmN5JykuYXBwZW5kKGNvdW50cnlDdXJyZW5jeSk7XG4gICAgJCgnLmNhbGxpbmdDb2RlJykuYXBwZW5kKGNhbGxpbmdDb2RlKTtcbn07XG5cbi8vIGluaXQgZnVuY3Rpb24gXG5hcHAuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBhcHAuY291bnRyeU5hbWUoKTtcbn1cblxuLy8gZG9jdW1lbnQgcmVhZHlcbiQoZnVuY3Rpb24oKSB7XG4gICAgYXBwLmluaXQoKTtcbn0pO1xuIl19
