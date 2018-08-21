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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksU0FBSixHQUFnQixVQUFVLEdBQVYsRUFBZTtBQUMzQixNQUFFLElBQUYsQ0FBTztBQUNILHdEQUE4QyxHQUQzQztBQUVILGdCQUFRLEtBRkw7QUFHSCxrQkFBVTtBQUhQLEtBQVAsRUFJRyxJQUpILENBSVEsVUFBQyxHQUFELEVBQVM7QUFDYixnQkFBUSxHQUFSLENBQVksR0FBWjtBQUNILEtBTkQ7QUFPSCxDQVJEOztBQVVBLElBQUksV0FBSixHQUFrQixZQUFXO0FBQ3pCLE1BQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFVBQVUsQ0FBVixFQUFZO0FBQy9CLFVBQUUsY0FBRjtBQUNBLFlBQUksbUJBQW1CLEVBQUUsaUJBQUYsRUFBcUIsR0FBckIsRUFBdkI7QUFDQSxZQUFJLFNBQUosQ0FBYyxnQkFBZDtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxnQkFBWjtBQUNILEtBTEQ7QUFPSCxDQVJEOztBQVVBLElBQUksSUFBSixHQUFXLFlBQVk7QUFDbkIsUUFBSSxXQUFKO0FBQ0gsQ0FGRDs7QUFJQSxFQUFFLFlBQVc7QUFDVCxZQUFRLEdBQVIsQ0FBYSxRQUFiO0FBQ0EsUUFBSSxJQUFKO0FBQ0gsQ0FIRDs7QUFLQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYXBwID0ge31cblxuYXBwLmxvY2F0aW9ucyA9IGZ1bmN0aW9uIChkZWYpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGBodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92Mi9uYW1lLyR7ZGVmfWAsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbidcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICB9KVxufVxuXG5hcHAuY291bnRyeU5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAkKCdmb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgY291bnRyeVNlbGVjdGlvbiA9ICQoJy52YWNhdGlvblNlYXJjaCcpLnZhbCgpO1xuICAgICAgICBhcHAubG9jYXRpb25zKGNvdW50cnlTZWxlY3Rpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhjb3VudHJ5U2VsZWN0aW9uKTtcbiAgICB9KTtcbiAgICBcbn1cblxuYXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgYXBwLmNvdW50cnlOYW1lKCk7XG59XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coIFwicmVhZHkhXCIgKTtcbiAgICBhcHAuaW5pdCgpO1xufSk7XG5cbi8vIFdlIHdhbnQgdG8gZ2V0IHRoZSB1c2VycyB2YWNhdGlvbiBsb2NhdGlvbiBcbi8vIFdlIHdhbnQgdG8gc2F2ZSBpdCB0byBjb3VudHJ5TmFtZSBcbiJdfQ==
