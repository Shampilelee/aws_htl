
// YEAR
const day = document.getElementById("year");
const today = new Date().getFullYear();
day.textContent = today;
day.style.zIndex


// HEADER - MENU
// chg header_bg-Color when I scroll down
window.addEventListener('scroll', function() {
        var header = document.getElementById('header');

        // Adjust this value as needed
        if (window.scrollY > 50) { 
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    }
);



/* welcome design, images */

/* const photos = document.querySelectorAll(".welcom_Images img");
const welcome_Num = document.getElementById("welcome_Num");


let img_Index = 0;
let inter_Id = null;

function initialize_wel_Slider() {

    // CHECK IF WE HAVE SLIDES
    if (photos.length > 0) {
        photos[img_Index].classList.add("on_Screen");

        // goto next slide EVERY 5 SECONDS
        inter_Id = setInterval(wel_next_Slide, 5000);
    } 
}

// wait for all images to be loaded in DOM BEFORE showing image
document.addEventListener("DOMContentLoaded", initialize_wel_Slider)

function wel_show_Slide(index) {

    // RESET THE SLIDES, WHEN WE GET TO THE END OF OUR SLIDES
    if (index >= photos.length) {
        img_Index = 0;
    } 
    else if(index < 0) {
        img_Index = photos.length - 1;
    }
    
    // remove the current slide from the screen
    photos.forEach( photo => {
        photo.classList.remove("on_Screen");
    });

    // add new slide to the screen
    photos[img_Index].classList.add("on_Screen");
}

function wel_next_Slide() {
    img_Index++;
    wel_show_Slide(img_Index);
}


 */



const getElementById_Temp = function (id) {
    return document.getElementById(id);
}

let container = [
    {r_Btn: getElementById_Temp("right_arrow_Button1"), l_Btn: getElementById_Temp("left_arrow_Button1")},
    {r_Btn: getElementById_Temp("right_arrow_Button2"), l_Btn: getElementById_Temp("left_arrow_Button2")},
    {r_Btn: getElementById_Temp("right_arrow_Button3"), l_Btn: getElementById_Temp("left_arrow_Button3")}
]

const welcome_design = document.querySelectorAll(".welcome_design");
let boxInter = 0;
let interval_Id_Box = null;
interval_Id_Box = setInterval(next_Box, 5000);


// INITIALIZE DISPLAY FOR FIRST ELEMENT
welcome_design.forEach(box => box.style.display = "none")
welcome_design[0].style.display = "flex";

// THE NEXT BUTTONS
container[0].r_Btn.onclick = function (){
    
    //console.log("BTN1 clicked");

    /* box_One.style.display = "none";
    box_Two.style.display = "flex";
    box_Three.style.display = "none"; */

    clearInterval(interval_Id_Box);
    interval_Id_Box = setInterval(next_Box, 5000);
    boxInter = 1;

    welcome_design.forEach(box => box.style.display = "none")

    welcome_design[1].style.display = "flex";

    /* if (box <= (welcome_design.length - 1)) {
        box++;
        console.log(box);

        if (box == 1) {
            console.log(box);
            
            box_One.style.display = "none";
            box_Two.style.display = "flex";
            box_Three.style.display = "none";
        } 

        console.log("reach end p1");
        
    } else {
        box = 0;
    } 

    console.log(box);
    console.log("reach end page1"); */
}


container[1].r_Btn.onclick = function (){
    
    //console.log("BTN2 clicked");

    /* box_One.style.display = "none";
    box_Two.style.display = "none";
    box_Three.style.display = "flex"; */

    clearInterval(interval_Id_Box);
    interval_Id_Box = setInterval(next_Box, 5000);
    boxInter = 2;

    welcome_design.forEach(box => box.style.display = "none")

    welcome_design[2].style.display = "flex";

    /* if (box <= (welcome_design.length - 1)) {
        box++;
        console.log(box);

        if (box == 2) {
            console.log(box);
            
            box_One.style.display = "none";
            box_Two.style.display = "none";
            box_Three.style.display = "flex";
        } 
        console.log("end of p2");
        
    } else {
        box = 0;
    } 

    console.log(box);
    console.log("reach end of page2"); */
}


container[2].r_Btn.onclick = function (){
    
    //console.log("BTN3 clicked");

    /* box_One.style.display = "flex";
    box_Two.style.display = "none";
    box_Three.style.display = "none"; */

    clearInterval(interval_Id_Box);
    interval_Id_Box = setInterval(next_Box, 5000);
    boxInter = 0;
    welcome_design.forEach(box => box.style.display = "none")

    welcome_design[0].style.display = "flex";

    /* if (box <= (welcome_design.length - 1)) {
        box++;
        console.log(box);

        if (box == 3) {
            console.log(box);
            
            box_One.style.display = "flex";
            box_Two.style.display = "none";
            box_Three.style.display = "none";

            // reset back to one
            box = 0;
        } 

        console.log("reach end of p3");
        
    } else {
        box = 0;
    } 

    console.log(box);
    console.log("reach end of page3"); */
}



// THE PREVOIUS BUTTON
container[0].l_Btn.onclick = function (){
    
    /* box_One.style.display = "none";
    box_Two.style.display = "none";
    box_Three.style.display = "flex"; */

    clearInterval(interval_Id_Box);
    interval_Id_Box = setInterval(next_Box, 5000);
    boxInter = 2;

    welcome_design.forEach(box => box.style.display = "none")

    welcome_design[2].style.display = "flex";
}


container[1].l_Btn.onclick = function (){
    
    /* box_One.style.display = "flex";
    box_Two.style.display = "none";
    box_Three.style.display = "none"; */

    clearInterval(interval_Id_Box);
    interval_Id_Box = setInterval(next_Box, 5000);
    boxInter = 0;

    welcome_design.forEach(box => box.style.display = "none")

    welcome_design[0].style.display = "flex";
}


container[2].l_Btn.onclick = function (){
    
    /* box_One.style.display = "none";
    box_Two.style.display = "flex";
    box_Three.style.display = "none"; */

    clearInterval(interval_Id_Box);
    interval_Id_Box = setInterval(next_Box, 5000);
    boxInter = 1;

    welcome_design.forEach(box => box.style.display = "none")

    welcome_design[1].style.display = "flex";
}



/* const welcome_design = document.querySelectorAll(".welcome_design")
let currentIndex = 0;
let boxInterval;

function showBox(container) {
    // Hide all boxes
    welcome_design.forEach(box => box.style.display = 'none');

    // Show the current box
    welcome_design[container].style.display = 'flex';
}

function next_Box() {
    // cycling back to the first if at the end
    currentIndex = (currentIndex + 1) % welcome_design.length;
    showBox(currentIndex);
}

function prev_Box() {
    // cycling to the last if at the start
    currentIndex = (currentIndex - 1 + welcome_design.length) % welcome_design.length;
    showBox(currentIndex);
}

function resetInterval() {
    clearInterval(boxInterval); // Clear the existing interval
    //boxInterval = setInterval(next_Box, 1000); // Restart the interval
}

// Initially show the first box and start the interval
//showBox(currentIndex); // Show the first box immediately
//boxInterval = setInterval(next_Box, 5000); 
 */


//const welcome_design = document.querySelectorAll(".welcome_design")



function next_Box() {
    console.log("start");
    boxInter++

    boxInter == 0 ? boxInter = 0 : console.log(boxInter);
    
    if (!(boxInter > 2)) {
        
        welcome_design.forEach(box => box.style.display = 'none');

        // Show the current box
        welcome_design[boxInter].style.display = 'flex';
    } else {
        console.log("RESET");
        boxInter = -1;
    }

    
    console.log("end");
}














// IMAGE SLIDER - ABOUT US \\
// THIS WILL RETURN A NodeList OF OUR IMAGES
const images = document.querySelectorAll(".images img");
const img_Numbers = document.querySelectorAll(".img_Indicators p");
const img_Number_Line = document.querySelectorAll(".img_Indicators span");

let slide_Index = 0;
//let interval_Id = null;

function initialize_Slider() {

    // CHECK IF WE HAVE SLIDES
    if (images.length > 0) {
        // Initializer IMAGES, IMG_NUMBERS, AND IMG_NUMBER_LINE
        images[slide_Index].classList.add("active_Image");
        img_Numbers[slide_Index].classList.add("num_Active");
        img_Number_Line[slide_Index].classList.add("line_Active");
        
        // goto next slide EVERY 5 SECONDS
        interval_Id = setInterval(next_Slide, 5000);
    } 
}

// wait for all images to be loaded in DOM BEFORE showing image
document.addEventListener("DOMContentLoaded", initialize_Slider)

function show_Slide(index) {

    // RESET THE SLIDES, WHEN WE GET TO THE END OF OUR SLIDES
    if (index >= images.length) {
        slide_Index = 0;
    } 
    else if(index < 0) {
        slide_Index = images.length - 1;
    }
    
    // remove the current slide from the screen
    images.forEach( slide => {
        slide.classList.remove("active_Image");
    });
    img_Numbers.forEach( img_Num => {
        img_Num.classList.remove("num_Active");
    })
    img_Number_Line.forEach ( img_Num_Line => {
        img_Num_Line.classList.remove("line_Active");
    });


    // add new slide to the screen
    images[slide_Index].classList.add("active_Image");
    img_Numbers[slide_Index].classList.add("num_Active");
    img_Number_Line[slide_Index].classList.add("line_Active");
}

function next_Slide() {
    slide_Index++;
    show_Slide(slide_Index);
}

function move_Here(num) {
    slide_Index = num;
    show_Slide(slide_Index);
}



// NUMBERS AUTO INCREASE - Our Specialization
document.addEventListener("DOMContentLoaded", function() {
    // Array of target elements and their respective target values
    let targetElements = [
        { element: document.querySelector('#num_A'), targetValue: 406, increase_By: 7, speed: 50, },
        { element: document.querySelector('#num_B'), targetValue: 132, increase_By: 2, speed: 45, },
        { element: document.querySelector('#num_C'), targetValue: 107, increase_By: 1, speed: 28 }
    ];

    // Options for the observer (which parts of the target to observe)
    let options = {
        root: null, // Use the viewport as the root
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    // Callback function to execute when each element is in view
    let callback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is at least 50% in view:', entry.target.id);
                
                // Get the corresponding target value for the current element
                let targetElementInfo = targetElements.find(item => item.element === entry.target);
                let value = parseInt(targetElementInfo.element.textContent) || 0;
                
                // Start incrementing the element's value
                let interval = setInterval(function() {
                    if (value < targetElementInfo.targetValue) {
                        value += targetElementInfo.increase_By;
                        targetElementInfo.element.textContent = value; // Update the element's text content
                    } else {
                        clearInterval(interval); // Stop the interval when the value reaches the target value
                    }
                }, targetElementInfo.speed);
                
                observer.unobserve(entry.target); // Stop observing if you want the action to happen only once
            }
        });
    };

    // Create an intersection observer
    let observer = new IntersectionObserver(callback, options);

    // Start observing each target element
    targetElements.forEach(item => observer.observe(item.element));
});





