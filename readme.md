# Front End Web Development | CTEC3905
##P15206364

##GitHub Pages Link 
https://bhaumikeduaccount.github.io/

# Introduction
This is a tourism targeted website based on Dubai. The aim of the website is to guide dubai toursits on what to look around for when they visit. 

Visiting the website, the users will get an opportunity to guide themselves with the top attractions of the city and an interactive map to guide them when they reach there. 

The core technology/languages used for the creation of this website are JS/CSS/HTML. The website does not include backend,
however the contact form used is applied as an outline for an idea of how it would look with backend. 

The site is simple and responsive. The website can be accesed from diffrent devices. Also, the wesite consists of a straight forward layout and is easy to navigate. 

# Design
My concept of the website was it to be a parralax design.The tutor suggested on making a project which followed a modern concept. The site was then designed as a single page with a parralax flow. After pitching the idea to the tutor, the idea got approved and ready to be designed.

Even though the parralax idea got approved, I didn't have any past experience with parralax webite nor did I know how to lay it out. However,  I took this task as a challenge and looked at a variety of parralax videos on youtube to gain more knowledge. One thing I found as a fundamental value to a good parralax design is the interaction with the user. Most websites I looked at interacted with the user one way or another.

The first stage was to develop a sketch of the website, which then has to be uploaded into Github 
-----The actual mock-up is in a PDF file thus, i am unable to show it using a markdown file however can be viewed on any browser or system.----


## Video
The user is greeted with a video of Dubai when visiting the website. The video shows all the attractions od Dubai. I did this to give a good impression for the user, so they will carry on navigating the website. Just as the video loads the hamburger style nav bar will appear on the left hand side of the page.  

## Nav Bar
My first idea was to have a fixed horizontal nav bar at the top, however, after reseraching other parralax websites, I changed my style to a hamburger style menu as that was more modern. My next plan was to make the nav bar stay in a fixed position as that will be be more user friendly.

## Section 1 Top attractions
My first idea was to have a slideshow just showing pictures of the top places in Dubai. However, after asking opinion to other students and tutors I was told to do something that interacts with the user more. Working on the feedback I recieved and with help from W3Schools, I developed a slideshow where users can select the thumbnail image (location images) they want to view and know more information about thier chosen location. 

## Section 2 Interactive Map
For the second section in the website, my plan was to have Google maps implemented. From the previous experience during labs I not only leared how to add google maps to a website, but also how to set markers on your desired locations and give them labels. With the help of a latlong finder, I set markers to my desired attractions in Dubai as this will help a user on the directions they have to follow to reach that destination.

## Section 3 History
Section 3 consists of the histoy of Dubai. This gives the user to know more about the past about the iconic city they were scrolling through before. Again I planned to do this to interact with the audience more.  

## Section 4 Footer 
After researching a lot of footers on diffrent websites. I came to a decision to have a footer that has a contact form and social media links for the user to contact the company.

Using Fontawsome icons I created a facebook and twitter icon linking them to relevent pages. I also created a contact form on the footer as the main aim of the website is to interact with audience as much as possible.

## Section 5 Contact Form
The contact form was created with the help of W3Schools. A simple form allowing the user to contact the company using thier email. This function would work with a backend.

## Testing
To test the website a manual inspection was done by myself. To look from a normal user's point of view, the website was also tested by a family member. In the testing the following points were looked at:
Responsiveness,how well the functions and technologies work &
how the website interacted with the audience.

--------For example: The back to top feature of the site had to be tested for small device view for its compatibility and effectiveness.
The code bellow if from the JS for back to top and checks if the site was scrolled more than 30 px than show the but if not than do not show the button.
This had to be tested for mobile and screen allowing a full compatibility was essential,
as it is vital that users viewing in small display do not struggle for browsing the site and this would save their time and add in experience.

The code can be seen in assets/js folder.

<br>
<br>
 back to top() {

    if ($(this).scrollTop() >= 30) {        // If page is scrolled more than 30px show button if not hide
        $('#back-top').fadeIn(100);
    } else {
        $('#back-top').fadeOut(200);
    }

The second thing that was essential to test was to test the navigation, boxing properties and break points are some of which had to be tested for functionality for HTML and CSS.
The use of list and its layout needed to be amended for a better view a peek of this is code bellow which sets new and removes its listing style. 

The site had to be boxed for its layout and the break points/view ports had to be tested so they did trigger at relevant sizes of the responsive site.
More for full HTML and CSS view index.html and style.css.

CSS
------------------------------------------------------------------------------------------------------------------------
```css   
 ul,nav{
 	list-style: none;
 }
 
 *{
 	margin: 0;
 	padding: 0;
 	box-sizing: border-box;
 }
 
 
@media screen and (max-width: 1000px){

	section{
		padding: 100px 50px;
	}

}

@media screen and (max-width: 600px){

	section{
		padding: 80px 30px;
	}

}
```

HTML5 
-----------------------------------------------------------------------------------------------------------------------
```HTML
{

<meta name="viewport" content="width=device-width, initial-scale=1">

 <nav>
            <ul>
			<li><a href="#home">Home</a></li>
			<li><a href="#project">Projects</a></li>
			<li><a href="#skill">Skill</a></li>
			<li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
		</nav>
		}}
```
## Reference

Background/Images:
All images used within the website are downloaded from Adobe Stock and Pexels.


## Compatibility
The site is compatible with Chrome/FireFox and Edge.

There are some issues regarding navigation and svg file when viewed on Edge. However, due to the lack of knowledge and shortage of time I could not find a way to fix thi problem.


 
## Improvements/Criticism
Improvements
----------------------------------------------------
There is always a room for improvement. Firsty, I would improve the parralex design to make it adapt to more javascript functions. By doing this it will only make the website stand out more. 

Secondly, I would add more functions to the navbar itself such as giving it an animated functionality. 

Finally, I will make it compatible with different browsers with custom rules for the layout of the website.

Criticism
------------------------------------------------------------------------------------------------------------------------

#Tools used
 PHPstorm was used for this project along with chrome and firefox browsers for inspection and testing.



![Getting Started](images/image1.jpg) 

