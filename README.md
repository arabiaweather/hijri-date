Gregorian To Hijri date convertor
==========

This is a node module that allows you to convert Gregorian Dates to Hijri date with ease, also support day adjustments and language support.


### Usage 

#### Installation 
Install module using NPM 
```javascript
npm install hijri
```

#### Code Usage 

```javascript
var hijri = require('hijri');
//hijri.convert accepts 3 Arguments Date , Date Adjustment by days and language either 'ar': Arabic or 'en': English
console.dir(hijri.convert(new Date(), 0, 'ar'));
```
##### Output 
```console
{ dayOfWeekText: 'الثلاثاء',
  dayOfWeek: 3,
  dayOfMonth: 18,
  month: 4,
  monthText: 'ربيع الآخر',
  year: 1435 }
```
#### Languages
Currently only English and Arabic is supported
