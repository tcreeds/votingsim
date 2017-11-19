let Voter = require('./voter'),
    VoteUtils = require('./voteutils'),
    VoterFactory = require('./voterFactory')
    Config = require('./config')

let voters = [];

voters = VoterFactory.createVoterSet(Config.numVoters);

for (let i = 0; i < voters.length; i++){
    console.log(voters[i])
}
