let VoteUtils = require('./voteutils')

class Voter {
    constructor(prefs){
        this.prefs = prefs || VoteUtils.makePrefs();
    }
}

module.exports = Voter
