//Libraries
const combos = require('./Model/combos');
const base = require('./Model/base');
const path = require('path');
const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const { validationResult } = require('express-validator');
const {    nameValidation,
    slimeOneValidation,
    slimeTwoValidation,
    imageOneValidation,
    imageTwoValidation,
    dietOneValidation,
    dietTwoValidation,
    toyOneValidation,
    toyTwoValidation,
    foodOneValidation,
    foodTwoValidation } = require('./validation');

//Setup defaults for script
const app = express();
app.use(express.static('public'))
const storage = multer.diskStorage({
    //Logic where to upload file
    destination: function (request, file, callback) {
        callback(null, 'uploads/')
    },
    //Logic to name the file when uploaded
    filename: function (request, file, callback) {
        /**
         * @source https://stackoverflow.com/questions/19811541/get-file-name-from-absolute-path-in-nodejs
         */
        callback(null, path.parse(file.originalname).name + '-' + Date.now() + path.parse(file.originalname).ext)
    }
})
const upload = multer({
    storage: storage,
    //Validation for file upload
    fileFilter: (request, file, callback) => {
        const allowedFileMimeTypes = ["text/plain"];
        callback(null, allowedFileMimeTypes.includes(file.mimetype));
    }
});
const port = 3000 //Default port to http server
const successfulSubs = []

//App.* is from the Express package that helps handle our async functions from noun.js. This app.get references the getAll async from combos.js.

app.get(
    '/combos/',
    upload.none(),
    [
    ],
    async (request, response) => {
        const errors = validationResult(request)
        if (!errors.isEmpty()) {
            return response
                .status(400) //Error code
                .json({
                    message: 'Request fields are invalid.',
                    errors: errors.array(),
                });
        }
        let result = {};
        try {
            result = await combos.getAll(request.query);
        } catch (error) {
            console.log(error);
            return response
                .status(500) //Error code
                .json({ message: 'Something went wrong with the server.' });

        }
        //Default response object
        response.json({ 'data': result });
    });

app.get(
    '/base/',
    upload.none(),
    async (request, response) => {
        let result = {};
        try {
            result = await base.getAll(request.query);
        } catch (error) {
            console.log(error);
            return response
                .status(500) //Error code
                .json({ message: 'Something went wrong with the server.' });

        }
        //Default response object
        response.json({ 'data': result });
    });

app.get(
    '/combos/:id/',
    upload.none(),
    async (request, response) => {
        let result = {};
        try {
            result = await combos.getById(request.params.id);
        } catch (error) {
            return response
                .status(500) //Error code
                .json({ message: 'Something went wrong with the server.' });

        }
        //Default response object
        response.json({ 'data': result });
    });


app.post(
    '/combos/',
    upload.none(),
    [
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
        foodTwoValidation
    ],
    async (request, response) => {
        console.log(request.query); // Debugging: Log the incoming data
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            console.log(errors.array());
            return response
                .status(400)
                .json({
                    message: 'Request fields are invalid.',
                    errors: errors.array(),
                });
        }

        let result = {};
        try {
            result = await combos.insert(request.query); // Use request.body
        } catch (error) {
            console.log(error);
            return response
                .status(500)
                .json({ message: 'Something went wrong with the server.' });
        }

        response.json({
            data: result,
            message: 'Request fields are valid.',
        });
    }
);
app.put(
    '/combos/:id/',
    upload.none(),
    [
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
        foodTwoValidation
    ],
    async (request, response) => {
        const errors = validationResult(request)
        if (!errors.isEmpty()) {
            return response
                .status(400) //Error code
                .json({
                    message: 'Request fields are invalid.',
                    errors: errors.array(),
                });
        }
        let result = {};
        try {
            result = await combos.edit(request.params.id, request.query);
        } catch (error) {
            console.log(error);
            return response
                .status(500) //Error code
                .json({ message: 'Something went wrong with the server.' });

        }
        //Default response object
        response
            .json({
                'data': result,
                message: 'Request fields are valid.'
            });


    });

app.delete(
    '/combos/:id/',
    upload.none(),
    async (request, response) => {
        let result = {};
        try {
            result = await combos.remove(request.params.id);
        } catch (error) {
            return response
                .status(500) //Error code
                .json({ message: 'Something went wrong with the server.' });

        }
        //Default response object
        response.json({ 'data': result });
    });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

})
