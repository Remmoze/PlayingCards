function loadImage(path) {
    return new Promise(resolve => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.src = path;
    });
}

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const cards = new Map();
const names = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const values = i => {
    switch(i % 13) {
        case 0: return "Ace";
        case 10: return "Jack";
        case 11: return "Queen";
        case 12: return "King";
        default: return (i+1).toString();
    }
}

loadImage('cards.png').then(sprite => {
    for(let i=0; i<52; i++) {
        let name = names[i / 13 >> 0];
        let value = values(i);
        let image = document.createElement('canvas');
        image.width = 110;
        image.height = 150;
        image.getContext('2d').drawImage(sprite, i*110, 0, 110, 150, 0, 0, 110, 150);
        cards.set(`${name}-${value}`, {name, value, image});
    }
})

