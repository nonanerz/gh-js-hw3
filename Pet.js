function Pet(name) {
}

Pet.prototype = {
    sleppy: 1,
    hungry: 5,
    alive: true,
    happiness: 1,
    clean: true,
    timeToWakeUp: null,

    getStatistics: function () {
      return {
          'hungry': this.hungry,
          'sleppy': this.sleppy,
          'happiness': this.happiness,
          'clean': this.clean,
      }
    },

    haveFun: function() {
        if (!this.isAvailable()) {
            return
        }
        if (this.happiness >= 10) {
            console.log('I have played all day long')
        }
        if (this.hungry === 9) {
            console.log('I\'m extremely hungry!! Please feed me.')
        }
        if (this.hungry >= 10) {
            console.log('R.I.P.')
            this.alive = false
        }
        console.log('Fun is fun!!!')
        this.clean = false
        this.hungry++
        this.happiness++
    },


    feed: function() {
        if (!this.isAvailable()) {
            return
        }
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
        if (!this.isAvailable()) {
            return
        }
        if (this.sleppy >= 5) {
            console.log('No! >:(')
        } else {
            console.log('ZzZzzZZzz')
            this.timeToWakeUp = new Date(Date.now() + 10000);
            this.sleppy--
            this.hungry++
        }
    },

    cleanUp: function() {
        if (!this.isAvailable()) {
            return
        }
        console.log('So much better, now u can feed me!')
        this.clean = true
    },

    isAvailable: function() {
        if (this.alive === false) {
            console.log('your pet now in better place');
            return false
        } else if (this.timeToWakeUp > new Date()) {
            console.log('Tss... he is sleeping. Time to wake up is: ' + (this.timeToWakeUp.getTime() - new Date()) / 1000);
            return false
        }

        return true
    }

};