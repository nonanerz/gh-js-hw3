function getPet(name, type) {
    switch (type) {
        case 'bird':
            return new AngryBird(name)
        case 'pet':
            return new Pet(name)
        default:
            console.log('wrong type.')
    }
    
}