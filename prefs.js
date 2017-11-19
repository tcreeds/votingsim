let Pref = require('./pref')

let Prefs = {

    prefs: {
        gunControl: new Pref('gunControl', 'boolean', true),
        abortion: new Pref('abortion', 'number', 7),

    },

    prefValues: {
        abortion: {
            min: -10,
            max: 10
        }
    }
}

module.exports = Prefs
