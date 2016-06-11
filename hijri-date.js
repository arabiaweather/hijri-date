// hijri-date.js
// license: MIT

'use strict';

var lang = require('./languages.js');

function basecal(date, adjust){
	var today = date;
	if(adjust) {
		var adjustmili = 1000*60*60*24*adjust;
		var todaymili = today.getTime()+adjustmili;
		today = new Date(todaymili);
	}
	var wd = date.getDay() + 1;

	var day = today.getDate();
	var month = today.getMonth();
	var year = today.getFullYear();
	var m = month+1;
	var y = year;
	if(m<3) {
		y -= 1;
		m += 12;
	}

	var a = Math.floor(y/100.0);
	var b = 2-a+Math.floor(a/4.0);
	if(y<1583) b = 0;
	if(y===1582) {
		if(m>10)  b = -10;
		if(m===10) {
			b = 0;
			if(day>4) b = -10;
		}
	}

	var jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524;

	b = 0;
	if(jd>2299160){
		a = Math.floor((jd-1867216.25)/36524.25);
		b = 1+a-Math.floor(a/4.0);
	}
	var bb = jd+b+1524;
	var cc = Math.floor((bb-122.1)/365.25);
	var dd = Math.floor(365.25*cc);
	var ee = Math.floor((bb-dd)/30.6001);
	day =(bb-dd)-Math.floor(30.6001*ee);
	month = ee-1;
	if(ee>13) {
		cc += 1;
		month = ee-13;
	}
	year = cc-4716;

	var iyear = 10631.0/30.0;
	var epochastro = 1948084;
	// var epochcivil = 1948085; Not used

	var shift1 = 8.01/60.0;

	var z = jd-epochastro;
	var cyc = Math.floor(z/10631.0);
	z = z-10631*cyc;
	var j = Math.floor((z-shift1)/iyear);
	var iy = 30*cyc+j;
	z = z-Math.floor(j*iyear+shift1);
	var im = Math.floor((z+28.5001)/29.5);
	if(im===13) {
		im = 12;
	}
	var id = z-Math.floor(29.5001*im-29);

	var myRes = new Array(8);

	myRes[0] = day; //calculated day (CE)
	myRes[1] = month-1; //calculated month (CE)
	myRes[2] = year; //calculated year (CE)
	myRes[3] = jd-1; //julian day number
	myRes[4] = wd-1; //weekday number
	myRes[5] = id; //islamic date
	myRes[6] = im-1; //islamic month
	myRes[7] = iy; //islamic year
	return myRes;
}

exports.convert = function (date, adjustment, language) {
  var wdNames;
	var iMonthNames;
  if(language = 'ar') {
    wdNames = lang.arabic.wdNames;
    iMonthNames = lang.arabic.MonthNames
  }
  if(language = 'en') {
    wdNames = lang.english.wdNames;
    iMonthNames = lang.english.MonthNames
  }
	
	var iDate = basecal(date, adjustment);
	//var outputIslamicDate = wdNames[iDate[4]] + ', '
	//+ iDate[5] + ' ' + iMonthNames[iDate[6]] + ' ' + iDate[7] + ' AH';
	//Create Object for out
	var islamicDateObject = {
		dayOfWeekText:wdNames[iDate[4]],
		dayOfWeek:iDate[4]+1,
		dayOfMonth:iDate[5],
		month:iDate[6]+1,
		monthText:iMonthNames[iDate[6]],
		year:iDate[7]
	};
	return islamicDateObject;
}
