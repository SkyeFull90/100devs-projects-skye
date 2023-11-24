// test.js
const { expect } = require('chai');
const { assignFavoriteFood } = require('./main');

describe('assignFavoriteFood', function() {
    it('should exist', function() {
        expect(assignFavoriteFood).to.exist;
    });

    it('should correctly assign and alert favorite food', function() {
        global.alert = function() {};
        const spy = chai.spy.on(global, 'alert');
        assignFavoriteFood("Pizza");
        expect(spy).to.have.been.called.with("Pizza");
    });
});