# Getting Ready

## About this project 

This project is an implementation of an API that edits an image by taking attributes of its name, new width and height; and then it resizes the intended image with handling all user input options. Also, it includes a testing file using Jasmine for different cases of failure and success.

## Installation process 

- run `yard add` to install the needed dependencies found in package.json
- run `yarn start` to run server on port 5000
- run `yarn test` to apply jasmine tests

## Dev Dependencies

1. eslint
2. jasmine
3. jasmine-ts
4. prettier
5. typescript

## Dependencies

1. express
2. jasmine-spec-reporter
3. lodash
4. node-cache
5. sharp
6. supertest


## EndPoint API

- Endpoint: `/api/images?filename=string&width=number&height=number`
- Filename: Must be a string of type (jpg) and exist in the "assets" folder.
- Width: Must be a positive number.
- Height: Must be a positive number.  
*It returns a copy of the image with a new size that just got processed, also, a copy of the iamge will be stored in the "edited" folder.*


