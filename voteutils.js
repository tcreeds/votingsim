let Prefs = require('./prefs'),
    Pref = require('./pref')

const VoteUtils = {

    prefTypes: {
        number: 'number',
        boolean: 'boolean',
        string: 'string'
    },

    makePrefs(distribution){
        let prefs = {}
        for (prefName in Prefs.prefs){
            prefs[prefName] = Pref.clone(Prefs.prefs[prefName]);
            switch (prefs[prefName].valueType){
                case 'boolean':
                    prefs[prefName].value = VoteUtils.getBoolean(Math.random())
                    break;
                case 'number':
                    prefs[prefName].value = VoteUtils.getNumber(Prefs.prefValues[prefName], Math.random())
                    break;
                case 'string':
                    prefs[prefName].value = VoteUtils.getString(Prefs.prefValues[prefName], Math.random())
            }
        }
        return prefs;
    },

    getBoolean(value){
        return value >= 0.5 ? true : false
    },

    getNumber(range, randomValue){
        return Math.floor(randomValue * (range.max-range.min) + range.min)
    },

    getString(values, randomValue){
        const index = Math.floor(randomValue * values.length)
        return values[index]
    }

}

module.exports = VoteUtils
