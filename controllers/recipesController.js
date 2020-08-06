const express = require("express");
const db = require("../models");
const router = express.Router();

// Add recipe model
const RecipeModel = require("../models").Recipe;
const UserModel = require("../models").User;

// NEW ROUTE - SEND EMPTY FORM
router.get("/new", (req, res) => {
  res.render("new.ejs", {
    userId: req.user.id,
  });
});


// INDEX ROUTE - Enabled so Nothing is returned So user can choose Meat from Drop Down
// or select the All Meats option link.
router.get("/", (req, res) => {
  res.render("index.ejs", {
    recipe: [],
  });
});
// Index Route - To Get All Recipes for the All Recipe Link
router.get("/allrecipes", (req, res) => {
  RecipeModel.findAll().then((allrecipes) => {
    res.render("index.ejs", {
      recipe: allrecipes,
    });
  });
});

// SHOW ROUTE - GET ONE RECIPE
router.get("/:id", (req, res) => {
  RecipeModel.findByPk(req.params.id, {
    include: [
      {
        model: UserModel,
        attributes: ["name"],
      },
    ],
  }).then((recipe) => {
    res.render("show.ejs", {
      recipe: recipe,
    });
  });
});

// POST ROUTE - TAKES THE FORM DATA AND CREATES A NEW RECIPE
router.post("/", (req, res) => {
  RecipeModel.create(req.body).then((newRecipe) => {
    res.redirect("/recipes");
  });
});

// Custom Post Route to display Selected meat from the drop down box
router.post("/bytypeofmeat", (req, res) => {
  RecipeModel.findAll({ where: { typeOfMeat: req.body.typeOfMeat } }).then(
    (foundMeat) => {
      res.render("index.ejs", {
        recipe: foundMeat,
      });
    }
  );
});

router.get("/:id/edit", function (req, res) {
  RecipeModel.findByPk(req.params.id).then((foundRecipe) => {
    res.render("edit.ejs", {
      recipe: foundRecipe,
    });
  });
});

router.put("/:id", (req, res) => {
  RecipeModel.update(req.body, { where: { id: req.params.id } }).then(
    (updatedRecipe) => {
      res.redirect("/recipes"); //redirect to the index page
    }
  );
});

// DELETE A RECIPE
router.delete("/:id", (req, res) => {
  RecipeModel.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/recipes"); //redirect back to index route
  });
});

module.exports = router;
