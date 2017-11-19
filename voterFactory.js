const Voter = require('./voter'),
    Prefs = require('./prefs'),
    VoteUtils = require('./voteutils')

class VoterFactory {

    static createVoterSet(numVoters){
        const voters = [];
        for (let i = 0; i < numVoters; i++){
            let prefs = VoteUtils.makePrefs('random');
            voters.push(new Voter(prefs));
        }
        return voters
    }

}

module.exports = VoterFactory
