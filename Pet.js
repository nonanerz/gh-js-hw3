function Pet(name) {
    this.prototype.name = name || 'Petty the pet';
}

Pet.prototype = {
    name: name,
    sleppy: 1,
    hungry: 1,
    alive: true,
    happiness: 1,
    clean: true,

    haveFun: function() {
        if (this.happiness >= 10) {
            console.log('I have played all day long')
        }
        if (this.hungry === 1) {
            console.log('I\'m extremely hungry!! Please feed me.')
        }
        if (this.hungry === 0) {
            console.log('R.I.P')
            this.alive = false
        }
        this.clean = false
        this.hungry--
        this.happiness++
    },


    feed: function() {
        if (this.clean === false) {
            console.log('I have played not so a long ago. So you should clean me up :(')
        } else if (this.hungry >= 5) {
            console.log('No! >:(')
        } else {
            console.log('hmmm.. delicious!')
            this.hungry++
        }
    },

    goToSleep: function() {
        if (this.sleppy >= 5) {
            console.log('No! >:(')
        } else {
            console.log('ZzZzzZZzz')
            this.sleppy++;
        }
    },

    cleanUp: function() {
        console.log('So much better, now u can feed me!')
        this.clean = true
    },


    getSleepy: function() {
        return this.sleppy;
    },

    getHungry: function() {
        return this.hungry;
    },
    getAlive: function() {
        return this.alive;
    },
    getHappiness: function() {
        return this.happiness;
    }

};