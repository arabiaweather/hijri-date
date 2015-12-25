'use strict';

var chai = require('chai')
  , hijri = require('./hijri-date')

chai.should()

describe('hijri', function() {
	describe('#weekDayNotDependentOnAdjustment', function() {
		it('should not change weekday due to adjustment', function() {
			// the weekday shouldn't change when there is an adjustment
			var dt1 = hijri.convert(new Date('2015-01-12'), 0);
			var dt2 = hijri.convert(new Date('2015-01-12'), -1);
			var dt3 = hijri.convert(new Date('2015-01-12'), 2);
			dt1.dayOfWeek.should.be.equal(dt2.dayOfWeek)
			dt2.dayOfWeek.should.be.equal(dt3.dayOfWeek)
			dt3.dayOfWeek.should.be.equal(dt1.dayOfWeek)
		})
	})
})
