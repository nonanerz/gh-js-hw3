function Pet(name) {
    this.prototype.name = name || 'Petty the pet';
}

Pet.prototype = {
    name: name,
    sleppy: 1,
    hungry: 5,
    alive: true,
    happiness: 1,
    clean: true,
    timeToWakeUp: null,

    haveFun: function() {
        if (this.isAvailable()) {
            if (this.happiness >= 10) {
                console.log('I have played all day long')
            }
            if (this.hungry === 9) {
                console.log('I\'m extremely hungry!! Please feed me.')
            }
            if (this.hungry >= 10) {
                console.log('R.I.P')
                this.alive = false
            }
            this.clean = false
            this.hungry++
            this.happiness++
        }
    },


    feed: function() {
        if (this.clean === false) {
            console.log('I have played not so a long ago. So you should clean me up :(')
        } else if (this.hungry <= 1) {
            console.log('No! >:(')
        } else {
            console.log('hmmm.. delicious!')
            this.hungry--
        }
    },

    goToSleep: function() {
        if (this.sleppy >= 5) {
            console.log('No! >:(')
        } else {
            console.log('ZzZzzZZzz')
            this.timeToWakeUp = new Date().getSeconds() + 10;
            this.sleppy--
            this.hungry++
        }
    },

    cleanUp: function() {
        console.log('So much better, now u can feed me!')
        this.clean = true
    },

    isAvailable: function() {
        if (this.alive === false) {
            console.log('your pet now in better place');
            return false
        } else if (this.timeToWakeUp > new Date().getSeconds()) {
            console.log('Tss... he is sleeping.');
            return false
        }

        return true
    }

};