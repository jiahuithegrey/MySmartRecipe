var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index");
    });    

    app.get("/camera", function(req, res) {
        res.render("camera");
    }); 
    
    app.get("/ingredient", function(req, res) {
        res.render("ingredient");
    }); 

    app.get("/recipe", function(req, res) {
        res.render("recipe");
        // res.render("recipe", {recipes: ["waffle", "fish", "bbq"]});
    });  

    app.get("/createprofile", function(req, res) {
        res.render("createprofile");
    }); 

    app.get("/signin", function(req, res) {
        res.render("signin");
    }); 

//     app.get("/upload", function(req, res) {
//         res.render("upload");
//     });

}