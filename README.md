# BBQ Recipe App

## Project Overview


## Project Description
This is a full stack BBQ Recipe App built using Node.js, Postgres, Express, EJS, and Sequelize.  It has a one to many relationship in the db, and it uses JWT for user authorization.   

## Project Links

- GitHub Repo URL https://github.com/jwheeler75/BBQ-RECIPE-APP
- Heroku Production URL https://bbq-recipe-app.herokuapp.com/

## Wireframes

This is the wireframe for the Recipe Index Page.

- https://github.com/jwheeler75/BBQ-RECIPE-APP/blob/master/images/IMG_2675.JPG

## User Stories
- As a user, I should have a Signup Page to create a new account.
- As a user, I should have a Login Page to login to my a account.
- As a user, I should have a Login Page to logout to my a account. 
- As a user, I should have a user profile page that allows me to edit my user information.
- As a user, I should able to search through a list of all recipe names and choose a recipe to view.
- As a user, I should be able to create a new recipe. 
- As a user, I should be able to edit a recipe. 
- As a user, I should be able to delete a recipe. 
- As a user, I should be able easily navigate between pages.
- As a user, I should be able to see a list of recipes added by me.


### MVP/PostMVP

 #### MVP
- Create one model with all 7 RESTful routes and full CRUD.
- 2 models that are associated in one-to-many relationship. 
- Render data on User Profile, Recipe Index, and Recipe Show pages.
- Allow user to interact with all pages.

#### PostMVP

- Create a page where each user can store their favorite recipes.
- Show a picture of each recipe.


## Code Snippet

This code allows you create multiline form input.  In this application, I'm also prepopulating the input boxes with a value from the db.

<form action="/recipes/<%=recipe.id%>?_method=PUT" method="POST">
    Type of Meat:<br />
    <textarea rows="1" cols="8"><%=recipe.typeOfMeat%></textarea>
    <br />
    Recipe:<br />
    <textarea name="recipeName" rows="1" cols="40"><%=recipe.recipeName%></textarea>
    <br />
    Ingredients:<br />
    <textarea name="ingredients" rows="10" cols="50"><%=recipe.ingredients%></textarea>
    <br />
    Instructions:<br />
    <textarea name="instructions" rows="40" cols="50"><%=recipe.instructions%></textarea>
    <br />
    <input type="submit" name="" value="Submit Changes" />
  </form>

## Issues and Resolutions

**ERROR**: Unwanted spacing in the textarea boxes causing issues with hardcoded drop box options.                               
**RESOLUTION**: Using the prettier extention in VS Code moved the input value to the next line, and I indented it to make it flow with the rest of the code.  This added the unwanted spaces when it was rendered.
