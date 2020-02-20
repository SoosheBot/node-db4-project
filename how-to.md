1. create a `package.json` file by typing `npm init` and following the prompts of the walkthrough.

2. add `index.js` and `server.js` files to the root folder manually.

3. In your `package.json` file, make sure the scripts section looks like this (instead of it being scripts:test or something useless):

    "scripts": {
        "server": "nodemon index.js"
    },

4. install `npm` with `npm i`, then download your dependencies -- `npm i knex sqlite3 nodemon express helmet cors` and whatever other dependencies you need/want. 

5. create your `knexfile.js` with `knex init` or `npx knex init`

6. fix your knexfile. you can delete a bunch of stuff in knexfile, but make sure to add `useNullAsDefault:true` after connections, and set your migrations and seeds files properly. It should look something like this:

    module.exports = {
        development: {
            client: 'sqlite3',
            useNullAsDefault: true, // needed for sqlite
            connection: {
            filename: './data/DATABASENAME.db3', <--YOU WILL NEED TO GIVE THIS FILE A DIFFERENT NAME DEPENDING ON WHAT YOU WANT TO CALL YOUR DATABASE
            },
            migrations: {
            directory: './data/migrations'
            },
            seeds: {
            directory: './data/seeds'
            },
            // add the following
            pool: {
            afterCreate: (conn, done) => {
                // runs after a connection is made to the sqlite engine
                conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
                },
            },
            }, 
            };

7. Create a `data` folder in the root and then make `migrations` and `seeds` folders inside it. ALSO add a `dbConfig.js` file--you will need this in step10.

8. Create migrations files!
Here is where you make your tables! Plan your table -- what does it actually need as columns, etc. Maybe write it out on paper or use that dbDesigner website to make a bunch of tables and figure out where stuff belongs.

Once you have a design planned, and you're ready to make migrations tables, you will have to run `npx knex migrate:make < name of your file here...it cannot have a space between words-- e.g. "knex migrate:make awesome-fileName" >` in the terminal. Migrations table/s need an exports.up and an exports.down that look something like this:

       exports.up = function(knex, Promise) {
            return knex.schema.createTable("recipe_book", tbl => {
            tbl.increments();
            tbl.text("name", 255).notNullable();
            });
        };

        exports.down = function(knex, Promise) {
            return knex.schema.dropTableIfExists("recipe_book");
        };

Once you have added in the relevant info and made however many tables you want (remember to make separate files for separate tables, please), type `npx knex migrate:latest` in your terminal to add them to the `data > migrations` folder.

8a. To update a migrations table do 
`npx knex migrate:make <your table name>-schema-update` and then update it with the info you need. Then do a `npx knex migrate:latest`
    
8b. If you fucked things up in your migration file and want to fix them, you can rollback your migration with `npx knex migrate:rollback`

9. Making seeds! (Super similar to making migrations) -- Seeds pre-populate your tables so they don't look sad and empty. To make seeds, type `npx knex seed:make 001-<your seedName> (or 002-seedName, 003-seedName, etc)` in your terminal and when you hit save, the `seed` file will show up in `data > seeds`, ideally in the `data` folder. (You can make sure of this in your knexfile.js though, so make sure of it!). To run your seeds, do `npx knex seed:run` in the terminal.

10. In the `dbConfig.js` file, add content to export all your knex-es. It should look like this:
    const knex = require('knex');
    const config = require('../knexfile.js');
    const db = knex(config.development);
    module.exports = db;

Then you can run your migrations and seeds with `npx knex migrate:latest` and `npx knex seed:run`. Note--Any time you run a `npx knex migrate:latest`, you need to rerun your seeds. (You can also run it to reset your Insomnia file, if you like.)


