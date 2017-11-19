let mocha = require('mocha'),
    chai = require('chai'),
    VoteUtils = require('./voteutils'),
    Pref = require('./pref'),
    Prefs = require('./prefs'),
    assert = chai.assert,
    should = chai.should,
    expect = chai.expect

describe('Pref construction', function(){
    it('should construct with a valid number', function(){
        let pref = new Pref('test', 'number', 7)
        assert.equal(pref.value, 7)
    })
    it('should construct with a valid number', function(){
        let pref = new Pref('test', 'boolean', true)
        assert.equal(pref.value, true)
    })
    it('should construct with a valid number', function(){
        let pref = new Pref('test', 'string', 'test')
        assert.equal(pref.value, 'test')
    })
    it('should error on wrong type', function(){
        expect(function(){
            let pref = new Pref('test', 'number', 'error')
        }).to.throw(Error)
    })
})

describe('Pref values should be covered', function(){
    it('should auto-generate all prefs', function(){
        let prefs = VoteUtils.makePrefs();
        let prefNames = Object.getOwnPropertyNames(prefs)
        assert.equal(prefNames.length, prefNames.map((prefName) => Prefs.prefs[prefName]).length)
    })
})

describe('Pref random generation should be accurate', function(){
    it('should generate a number within a given range', function(){
        assert.equal(VoteUtils.getNumber({min:0, max: 10}, 1), 10)
        assert.equal(VoteUtils.getNumber({min:-10, max: 10}, 0), -10)
    })
    it('should generate a boolean with a random number', function(){
        assert(VoteUtils.getBoolean(0.2) == false)
        assert(VoteUtils.getBoolean(0.7) == true)
    })
    it('should pick a string from a list', function(){
        assert.equal(VoteUtils.getString(['test1', 'test2'], 0.2), 'test1')
        assert.equal(VoteUtils.getString(['1', '2', '3', '4', '5', '6', '7'], 0.9), '7')
    })
})
