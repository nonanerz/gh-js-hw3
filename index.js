function getPet(name, type) {
    switch (type) {
        case 'bird':
            console.log('Hello, my name is ' + name)
            return new AngryBird(name)
        case 'lemmus':
            console.log('Hello, my name is ' + name)
            return new SuicideLemmus(name)
        default:
            console.log('wrong type.')
    }
}

function help() {
    return {
        getPet: 'Creates a pet for you. Arguments: name - ???, type - "bird" or "lemmus"',
        haveFun: 'Your pet having fun',
        feed: 'actually feed',
        goToSleep: 'pet goes to sleep fo 10 seconds',
        cleanUp: 'hand wash',
        whistleSong: 'Available for bird only',
        fly: 'Available for bird only',
        getStatistics: 'getStatistics',
    }
}