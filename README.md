# Burger-King
An application using Node.js/Express/MySQL/Handlebars

## Description

This application demonstrates a simple, full-stack application. Front-end is implemented with HTML/CSS and Handlebars. Back-end is implemented with Node.js and Express.js. 

The user may enter an order to the menu. This also adds a new entry into the MySQL database. The user may then deliver the order by clicking on it, which moves it into the adjacent column and updates its status accordingly in the database.

## Demo

The demo of the burger eating application can be found [here](https://limitless-badlands-52412.herokuapp.com/).

## Installation

To run the application locally, first clone this repository with the following command:

	git clone git@github.com:akelley/Burger-King.git
	
Then, install the application dependencies:

	cd Burger-King
	npm install
	
Then, run the node server locally:

	node server.js
	
Finally, open the local application on port 3000 at the URL: `http://localhost:3000/`.
