# Hobby Page
The website is a hobby page built for my application to the Founders and Coders foundations course. It explores some of the basics tools and techniques of carving and greenwood
working. It's a hobby that I both love and find very therapeutic, please see the resources section of the site to learn more.

## Displaying the date with JavaScript
One requirement for this project was display an accurate date somewhere on the site. To give this some context I decided to display the date as part of a countdown to a spoon carving event in the UK. To achieve this I used some built in methods JavaScript has for working with dates: <br><br> 
```Date()``` By calling a ```new Date()``` js lets you access a live and updatable date to use in your code. <br>
```.toLocalString('en-GB')``` Format the date to UK standard (i.e. day/month/year). <br>
```.getMonth()``` Extract just the current month of the ```Date()``` method. I used this in writing conditional for my countdown.

## CSS Grid
Since for this site I wanted to have different sections with different styling, some two columns, some asymmetrical, I decided to practice using ```grid```.

### Setting up responsive grids
```repeat()``` & ```fr```<br>
Since I did not want to set my columns and rows to hard units so they stayed responsive I used ```fr``` to set up my layout. This can concisely be down using the ```repeat()```
function. For example the syntax of 4 equal columns for a grid container could be as follows: <br> ```grid-template-columns: repeat(4, 1fr);```. 

### Asymmetrical styling
For the final section of the site I wanted to the layout to have an asymmetrical styling for larger screens, and to easily be able place photo and text boxes. <br>
```span```: is a great way to set how many rows or columns you want an element to fill. I find it more intuitive then trying to count grid lines. <br>
It's syntax could be done as follows: <br>
```grid-row: 1 / span 2;``` This would place the element at the start of the first column and make it span two columns.

## Fonts and colour palette

Headers [Work Sans](https://fonts.google.com/specimen/Work+Sans?query=work+sans)
Paragraphs, links, etc... [Open Sans](https://fonts.google.com/specimen/Open+Sans?query=open+sans)
<br> 
See the colour palette I used [here](https://coolors.co/user/palettes/641ed616c30acf000b4f6c73)

