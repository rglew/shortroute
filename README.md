#Routes

This is an implementation of the Trains problem from the various options.

##Installation instructions.

This has been tested on OS X 10.12, I cannot verify if it works on Windows or any other platform.

It is written in Javascript using NodeJS v6.8.1 and NPM 3.10.9  

##Setup:

1. Ensure correct versions of Node and NPM are installed
2. Unzip the file, routes.zip into a folder
3. Go into that folder and type `NPM install`
4. Then enter `NPM link`

At this point, the app should be ready to go on your system as a console app using the alias rr (if you want to use something else, then it can be changed in the package.json file)

##Usage:

The graph that is loaded is in ./input/graph.txt.  This can be swapped with another valid graph if desired.
The app runs using the alias `rr` by default
The list of cities (nodes) is currently limited to A B C D E

`rr route A B C`

This will give you the distance of a route constructed from the digraph given in the file

`rr shortroute A D`

This will give you the shortest distance between two points (modified Floyd Warshall algorithm)

`rr nroutes B B`

This will give you the different routes between two points

`rr thoughtworks`

This will create the output as directed by the assignment

`rr version`
`rr help`

These come out of the box with the commander package...

##Notes:

* Basic unit tests have been implemented with Mocha and Expect, run them with NPM test
* I have used one package, commander to simplify the usage of the app if you want to run it interactively.  Other than that I have stcuk with the core language features as far as possible.
* It should work out of the box - I have tested on a couple of different machines with success
* There is some input validation, there needs to be more
* There are some tests - ideally I would add more time permitting including some other kinds (eg: BDD style tests)
* * As you may have been told, it's been a long while since I coded as a dayjob and most of my coding is just snippets and trying to learn FP.  I haven't really done much Javascript work...  There are a lot of things I would love to improve with time to get up to speed on the tools...
* I ran out of time to complete Question 10. :/