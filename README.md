# Our Website (Angular 2 Branch)

Contributors: Vaughn Kottler

## Technologies

1. **Angular JS 2**

   Eventually we will discuss the way we use Angular here.

2. **Node.js 6.2.2**
  * Express, body-parser

   If Node is not already running the frontend won't be able to render anything.  
   This is because opening up a .html will not allow your browser to fetch any  
   scripts you include, because it needs to request that information over http  
   so you need something listening to http at 127.0.0.1 (localhost).

3. **Ubuntu Server 16.04 LTS (Prod. Env.)**

   Currently we have nothing in production.

4. **PostgreSQL or Firebase**

   Future scope.

5. **NGINX or Apache**

   Eventually we will have to figure out how our application gets hosted.

## Development

###**Install Node.js (6.2.2):** https://nodejs.org/en/

###**Pull the repository:**

Install git, create a new folder, open terminal at that folder,  
run `git init` and then `git remote add origin https://github.com/Madison-SDC/site-sdc.git`  
then run `git pull origin master`. First you will need collaborator access to this repository,  
contact Ellery Kreloff for that.

###**Install dependencies:**

Since we are not including dependency sources files in the repository, you will need to retrive them using  
`npm install`. Once each, go in to the client and server directory and run `npm install`. **If you don't do  
that first this won't work!**

###**Run the server:**

Still inside the repository directory in your terminal, type  
`node server`. Now go to your browser and visit http://localhost:8080 and you will see the site!
