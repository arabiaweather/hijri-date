Gregorian To Hijri date convertor
==========

This is a node module that allows you to convert Gregorian Dates to Hijri date with ease, also support day adjustments. 

### Usage 

#### Installation 
Install module using NPM 
```javascript
npm install hijri
```

#### Code Usage 

```javascript
var hijri = require('hijri');
//hijri.convert accepts 2 Arguments Date , Date Adjustment by days 
console.dir(hijri.convert(new Date(), 0));
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
