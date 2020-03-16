# MySmartRecipe
* This application suggests recipes by user taking a picture of available on-hand ingredients. Aftering taking a picture of the ingredients, the application will use image recognition to list probable ingredients. The users can select which ingredients they want to cook. Then the application will suggest recipes that include those ingredients.

* Heroku Deployment: [MySmartRecipe](https://mysmartrecipe.herokuapp.com//)

## Built With
* Frontend: 
    * Development: HTML5, CSS3, Bootstrap4, Handlebars, JQuery
    * UI design: Adobe Photoshop, Adobe Illustrator
* Backend: 
    * Express.js, Node.js, JavaScript 
    * Database: MySQL and Sequelize
    * APIs: 
        * Image recognition: Clarifai
        * Recipe API: Spoonacular Nutrition, Recipe, and Food API

## Development
* Take a photo of on-hand ingredients
* Store photos on AWS
* Utilize Claifai API to recognize the probable ingredients in the photo
* Utilize Spoonacular API to recommend recipe based on the ingredients the user selects

## Teamwork
* Jiahui Wang: Front-end, UX/UI design (https://github.com/jiahuithegrey)
* Harry Furusho: Back-end, MySQL, Image storage (https://github.com/hfurusho)
* Scott Ogata: Clarifai API (https://github.com/amidstasinglebreath)
* Nicole Steig: Sign up and sign in functions (https://github.com/NicholeSteig)

## Credits
University of Washington Coding Bootcamp faculty
* Instructor: Jason Rosen
* TA: Kris Shore
* TA: Daniel Mont-Eton

## License
MIT License

Copyright (c) [2019] 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license. Copyright notice and permission notice shall be included in all copies or substantial portions of the Software.
