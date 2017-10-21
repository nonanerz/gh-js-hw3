function AngryBird(name) {

    this.whistleSong = function() {
        console.log('i\'m so angry!!! But ok.. ♩♪ ♩♪♫ ♩♪♫♩♪ ♫ ♫♩♪ ♫ ♬');
    };

    this.fly = function () {
        if (this.isAvailable()) {
            console.log('The pilot flew to Cuba. The pilot is ' + name);
            this.happiness++
        }
    }
}

AngryBird.prototype = Pet.prototype;

