# end-to-end-movies-project
Tech stack: Backend (PHP + MySQL + API) + Frontend (Bootstrap + jQuery + JS + CSS + HTML)

# Welcome to a large scale project called `Movies end to end project`. in this project you will use all the technologies mentioned above and code skills like Design Patterns.

## First step: Database
You will create 2 tables using `MySql` database, you are free to choose between `PhpMyAdmin` and `MySql Workbench`.

### `Directors` table
contains the fields: `id` PK Auto Increment, `name` string 50 length

### `Movies` table
contains the fields: `id` PK Auto Increment, `name` string 50 length, `d_id` FK of `Directors`.`id`

## Second step: PHP OOP
### each table should have a `Model`
e.g. `MovieModel` that contains the movies table fields and constructor.
### each  Model should have a `Controller`
the controller with maintain the logic of the model, the CRUD opeartions for example.

## Third step: PHP API
**You can skip this step and do it at the end**
Each model should have he's own api, e.g. `MovieApi` with `CRUD` operations.
you should make an abstract class that all apis extends.

## Fourth step: HTML
Each model should have an html for the CRUD operations

## Fifth step: CSS
Write a global css file for all the html files, and for each model write he's own css file.

## Sixth step: JavaScript
write a global js file that contain the common functions, for each model write he's own js file.
js file should contains: Module for all the model operations, Function constructor to make the model in the client side.



Project file hirarchy for example:
* front
    * html
        * movie
            * create.html (C)
            * index.html  (R)
            * update.html (U)
            * delete.html (D)
            * movie.less
            * movie.js
* back
    * models
        * model.php (all models extends this)
        * MovieModel.php
    * controllers
        * controller.php (all controllers extends this)
        * MovieController.php
    * api
        * API.php (the abstract class)
        * MovieApi.php
    * common
        * bl.php
        * dal.php
