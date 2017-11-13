create an interface 
	-have a input for user to create a button which triggers gifs
	-have a field to hold the search buttons created
		-create search button and input field
	-have container to hold the gifs


declare some variables

link the input to the button to generate searches
	-have buttons store values in an array which we will pull from to add that to the api key for that particular search

get an API key for giphy.com
	-store this key somewhere for reference

we need a function to link to the button to give it value in the array we're creating

create functions to link our new and old buttons stored in array to API
	-put an event listener on that button
		-create callback function inside to check the ratings

create event listener to pause the gifs