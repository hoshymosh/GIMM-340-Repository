const connection = require('./Model/connection');
const { check } = require('express-validator');

const imageOneValidation = check('image_one', 'Please provide a valid image URL for the first image.').isURL();
const imageTwoValidation = check('image_two', 'Please provide a valid image URL for the second image.').isURL();

const nameValidation = check('name', 'Please provide a name.')
    .notEmpty()
    .withMessage('The name cannot be empty.')
    .isLength({ min: 3, max: 50 })
    .withMessage('The name must be between 3 and 50 characters long.');

const slimeOneValidation = check('slime_one', 'Please provide a valid slime name for slime_one.')
        .isIn(['Angler', 'Batty', 'Boom', 'Cotton', 'Crystal', 'Dervish', 'Fire', 'Flutter', 'Golden', 'Honey', 'Hunter', 'Lucky', 'Phosphor', 'Pink', 'Puddle', 'Ringtail', 'Rock', 'Saber', 'Shadow', 'Sloomber', 'Tabby', 'Tangle', 'Twin', 'Yolky'])
        .withMessage('The slime_one must be from the list of valid slimes.');

const slimeTwoValidation = check('slime_two', 'Please provide a valid slime name for slime_two.')
    .isIn(['Angler', 'Batty', 'Boom', 'Cotton', 'Crystal', 'Dervish', 'Fire', 'Flutter', 'Golden', 'Honey', 'Hunter', 'Lucky', 'Phosphor', 'Pink', 'Puddle', 'Ringtail', 'Rock', 'Saber', 'Shadow', 'Sloomber', 'Tabby', 'Tangle', 'Twin', 'Yolky'])
    .withMessage('The slime_two must be from the list of valid slimes.');

const dietOneValidation = 
    check('diet_one_id', 'Please provide a valid diet for the first slime.')
        .isIn(['1', '2', '3', '4', '5'])
        .withMessage('The first diet must be one of the valid types: Fruit, Vegetable, Meat, Special, or No Preference.');
 const dietTwoValidation = 
    check('diet_two_id', 'Please provide a valid diet for the second slime.')
        .isIn(['1', '2', '3', '4', '5'])
        .withMessage('The second diet must be one of the valid types: Fruit, Vegetable, Meat, Special, or No Preference.');

const toyOneValidation = check('toy_one', 'Please provide a valid toy preference for the first slime.').notEmpty();
const toyTwoValidation = check('toy_two', 'Please provide a valid toy preference for the second slime.').notEmpty();
const foodOneValidation = check('food_one', 'Please provide a valid food preference for the first slime.').notEmpty().isLength({ min: 3, max: 50 });
const foodTwoValidation = check('food_two', 'Please provide a valid food preference for the second slime.').notEmpty().isLength({ min: 3, max: 50 });





module.exports = {
    nameValidation,
    slimeOneValidation,
    slimeTwoValidation,
    imageOneValidation,
    imageTwoValidation,
    dietOneValidation,
    dietTwoValidation,
    toyOneValidation,
    toyTwoValidation,
    foodOneValidation,
    foodTwoValidation,
};
