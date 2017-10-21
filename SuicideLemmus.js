function SuicideLemmus(name) {

    this.haveFun = function () {
        if (!this.isAvailable()) {
            return
        }

        if (Math.floor(Math.random() * 3) + 1 !== 1) {
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
            console.log('Fun is fun!!!')
            this.clean = false
            this.hungry++
            this.happiness++
        } else {
            console.log(name + ' have commit suicide. Jumped over the rock. Always the same :(')
            this.alive = false
        }
    }
}
SuicideLemmus.prototype = Pet.prototype;


