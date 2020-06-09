const db = require('../index.js');
const Journal = require('../models/journals.js');
const faker = require('faker');


const randomImages = () => {
    let num = faker.random.number(5);
    let images = [];
    for (let i = 0; i < num; i++) {
        images.push(faker.image.image());
    }
    console.log(images);
    return images;
}


const example = (id) => {
    Journal.create({
        id: id,
        title: faker.commerce.productMaterial(),
        images: randomImages(),
        descriptions: faker.lorem.paragraph(4),
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
}

for (let i = 1; i <= 5; i++) {
    example(i);
}

module.exports = example;