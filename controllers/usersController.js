const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const RecipeModel = require("../models").Recipe;
// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  UserModel.findByPk(req.params.id, {
    include: [
      {
        model: RecipeModel,
        attributes: ["recipeName", "typeOfMeat"],
      },
    ],
  }).then((userProfile) => {
    console.log(userProfile);
    res.render("users/profile.ejs", {
      user: userProfile,
    });
  });
});

// PUT Update Route
router.put("/profile/:id", (req, res) => {
  console.log(req.params.id);
  UserModel.update(req.body, { where: { id: req.params.id } }).then(() => {
    res.redirect(`/users/profile/${req.params.id}`);
  });
});

// DELETE User Route
router.delete("/:id", (req, res) => {
  UserModel.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
