const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/lemonadestand'
);

const userSeed = [
  {
    userName: 'aBOBination',
    firstName: 'Bobby',
    lastName: 'Marks',
    email: 'robert.marks54@gmail.com',
    password: 'pass1',
    imageUrl: ''
  },
  {
    userName: 'Mel',
    firstName: 'Melanie',
    lastName: 'Bott',
    email: 'Melanie.Bott@gmail.com',
    password: 'pass1',
    imageUrl: ''
  },
  {
    userName: 'KellDawg',
    firstName: 'Mckell',
    lastName: 'Banks',
    email: 'Mckell.Banks@gmail.com',
    password: 'pass1',
    imageUrl: ''
  }
];

const storeSeed = [
  {
    userId: '',
    name: 'BobbysBots',
    description: 'This store sells fighting robots that fight to the death!',
    imageUrl: ''
  },
  {
    userId: '',
    name: 'MelsMachines',
    description:
      'This store designs and sells autonomous machines for daily tasks!',
    imageUrl: ''
  },
  {
    userId: '',
    name: 'MckellsMonsters',
    description: 'This store sells plushy monsters for kids of all ages!',
    imageUrl: ''
  }
];

const itemSeed = [
  {
    storeId: '',
    name: 'Stuffed Animal 1',
    description: 'Stuffed animal that your kids will love!',
    price: 12.99,
    quantity: 34,
    imgUrl: ''
  },
  {
    storeId: '',
    name: 'Stuffed Animal 2',
    description: 'Stuffed animal that your kids will love!',
    price: 12.99,
    quantity: 34,
    imgUrl: ''
  },
  {
    storeId: '',
    name: 'Stuffed Animal 3',
    description: 'Stuffed animal that your kids will love!',
    price: 12.99,
    quantity: 34,
    imgUrl: ''
  },
  {
    storeId: '',
    name: 'Stuffed Animal 4',
    description: 'Stuffed animal that your kids will love!',
    price: 12.99,
    quantity: 34,
    imgUrl: ''
  },
  {
    storeId: '',
    name: 'Stuffed Animal 5',
    description: 'Stuffed animal that your kids will love!',
    price: 12.99,
    quantity: 34,
    imgUrl: ''
  },
  {
    storeId: '',
    name: 'Stuffed Animal 6',
    description: 'Stuffed animal that your kids will love!',
    price: 12.99,
    quantity: 34,
    imgUrl: ''
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + ' user records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Store.remove({})
  .then(() => db.Store.collection.insertMany(storeSeed))
  .then((data) => {
    console.log(data.result.n + ' store records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Item.remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then((data) => {
    console.log(data.result.n + ' item records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
