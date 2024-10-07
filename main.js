
// CONFIG FOR JS CODE ONLY
const getElementById_Temp = function (id) {
    return document.getElementById(id);
}


//alert(myWidth = window.innerWidth)



// YEAR
const day = document.getElementById("year");
const today = new Date().getFullYear();
day.textContent = today;


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

// TABLET-MOBILE HEADER
const nav_Bar = document.getElementById('nav_Bar');
const nav_Btn = document.getElementById('nav_Btn');

const three_Lines_Bars = {
    top_Bar: getElementById_Temp("top"),
    center_Bar: getElementById_Temp("center"),
    bottom_Bar: getElementById_Temp("down")
}

let nav_Bar_Screen = false;

nav_Btn.addEventListener('click', () => {

    if (nav_Bar_Screen) {
        nav_Bar.style.left = '-33vw';
        nav_Bar_Screen = false;

        three_Lines_Bars.top_Bar.style.transform = "none";
        three_Lines_Bars.top_Bar.style.marginBottom = "0.7vw";

        three_Lines_Bars.center_Bar.style.opacity = 1;
        three_Lines_Bars.center_Bar.style.display = "flex";
        three_Lines_Bars.center_Bar.style.marginBottom = "0.7vw";
        three_Lines_Bars.center_Bar.style.transform = "none";

        three_Lines_Bars.bottom_Bar.style.marginBottom = "0.7vw";
        three_Lines_Bars.bottom_Bar.style.transform = "none";


    } else {
        nav_Bar.style.left = 0;
        nav_Bar_Screen = true;

        three_Lines_Bars.top_Bar.style.marginBottom = "-0.6vw";
        three_Lines_Bars.top_Bar.style.animationDuration = "1s";
        three_Lines_Bars.top_Bar.style.transform = "rotateZ(-47deg)";

        three_Lines_Bars.center_Bar.style.opacity = 0;
        three_Lines_Bars.center_Bar.style.margin = 0;
        three_Lines_Bars.center_Bar.style.animationDuration = "1s";
        three_Lines_Bars.center_Bar.style.transform = "translateX(-100px)";

        three_Lines_Bars.bottom_Bar.style.transform = "rotateZ(47deg)";
        three_Lines_Bars.bottom_Bar.style.margin = 0;

    }
})





const container = [
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
    
    clearInterval(interval_Id_Box);
    interval_Id_Box = setInterval(next_Box, 5000);
    boxInter = 1;

    welcome_design.forEach(box => box.style.display = "none")

    welcome_design[1].style.display = "flex";

}


container[1].r_Btn.onclick = function (){
    

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

    clearInterval(interval_Id_Box);
    interval_Id_Box = setInterval(next_Box, 5000);
    boxInter = 0;
    welcome_design.forEach(box => box.style.display = "none")

    welcome_design[0].style.display = "flex";
}



// THE PREVOIUS BUTTON
container[0].l_Btn.onclick = function (){
    
    clearInterval(interval_Id_Box);
    interval_Id_Box = setInterval(next_Box, 5000);
    boxInter = 2;

    welcome_design.forEach(box => box.style.display = "none")

    welcome_design[2].style.display = "flex";
}


container[1].l_Btn.onclick = function (){
    
    clearInterval(interval_Id_Box);
    interval_Id_Box = setInterval(next_Box, 5000);
    boxInter = 0;

    welcome_design.forEach(box => box.style.display = "none")

    welcome_design[0].style.display = "flex";
}


container[2].l_Btn.onclick = function (){

    clearInterval(interval_Id_Box);
    interval_Id_Box = setInterval(next_Box, 5000);
    boxInter = 1;

    welcome_design.forEach(box => box.style.display = "none")

    welcome_design[1].style.display = "flex";
}





function next_Box() {
    boxInter++

    boxInter == 0 ? boxInter = 0 : null;
    
    if (!(boxInter > 2)) {
        
        welcome_design.forEach(box => box.style.display = 'none');

        // Show the current box
        welcome_design[boxInter].style.display = 'flex';
    } else {
        boxInter = -1;
    }
    
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

// Specialization background images
const spec_Imgs = document.querySelectorAll('.spec_Imgs img');
let spec_Index = 0;
spec_Imgs.forEach(element => element.style.display = 'none')
spec_Imgs[0].style.display = 'block';
setInterval(() => {
spec_Imgs.forEach(element => element.style.display = 'none')

    if (spec_Index === 0) {
        spec_Imgs[0].style.display = 'block';
        spec_Index++
    } else if (spec_Index === 1) {
        spec_Imgs[1].style.display = 'block';
        spec_Index++
    } else if (spec_Index === 2) {
        spec_Imgs[2].style.display = 'block';
        spec_Index = 0;
    }
        
}, 8000);





// SUITES
// SMALL SCREEN
const rooms = document.querySelectorAll('.rooms_Suites_Sm_Scn .room');

function rm_Remove_Display() {
    return (
        rooms.forEach(element => {
            element.style.display = "none";
        })
    )
}

const nav = document.querySelectorAll('.nav_Suites_Sm_Scn a');

/*
    ALL BUTTONS '.rm_Btns'
    EACH BUTTON '.rm_Btn'
*/
const rm_Btn = document.querySelectorAll('.rm_Btns .rm_Btn');

// NAV BAR onClick
nav.forEach((element, index) => {
    element.onclick = () => {
        
        if (index === 0) {
            rm_Remove_Display()
            rm_Id = 0;

            display_Room(rm_Id)

        } else if (index === 1) {
            rm_Remove_Display()
            nav[0].classList.remove('active')
            nav[1].classList.add('active')
            rm_Id = 0
            display_Room(rm_Id)

        } else {
            rm_Remove_Display()
            rm_Id = index - 1;
            display_Room(rm_Id)
        }
        
    }
})


// INITIALIZE
let rm_Id = 0;
rm_Remove_Display();
rooms[rm_Id].style.display = "flex";


function display_Room(rm_Id) {

    nav.forEach( array => {
        array.classList.remove('active')
    })
    
    if (rm_Id === 0) {
        rm_Remove_Display();
        rooms[rm_Id].style.display = "flex";
        nav[1].classList.add('active')
        
        rm_Id++
    } else if(rm_Id === 1) {
        rm_Remove_Display()
        rooms[rm_Id].style.display = "flex";
        nav[2].classList.add('active')

        rm_Id++
    } else if (rm_Id === 2) {
        rm_Remove_Display()
        rooms[rm_Id].style.display = "flex";
        nav[3].classList.add('active')

        rm_Id++;
    } else if (rm_Id === 3) {
        rm_Remove_Display()
        rooms[rm_Id].style.display = "flex";
        nav[4].classList.add('active')

        rm_Id = 0;
    } 
    else if(rm_Id > 3 || rm_Id < 0) {
        rm_Id = 0;
    } 

}


rm_Btn[0].onclick = () => {

    rm_Id--;
    
    if(rm_Id < 0) {
        rm_Id = 4;
        rm_Id--
        
        display_Room(rm_Id);
        
    } else {
        display_Room(rm_Id);
    }
    
}

rm_Btn[1].onclick = () => {

    if (rm_Id > 3) {
        rm_Id = 0;
        display_Room(rm_Id)
    } else {
        display_Room(rm_Id++)
    }
    
}

// SCREEN WIDTH CHANGES FOR SUITE HTML CLASS NAME
/* 
    const suites_Container = getElementById_Temp("suites_Container");
    window.onresize = screen;
    window.onload = screen;

    function screen () {
        myWidth = window.innerWidth;

        if (myWidth < 1025) {

            suites_Container.classList.replace('suites', 'suites_Small_Screen');
            console.log("in class");
            
        } else {
            suites_Container.classList.replace('suites_Small_Screen', 'suites');
            
            console.log('out here');
        }
        
        // DISPLAY CURRENT WIGTH OF BROWSER IN SCREEN
        // document.getElementById('size').innerHTML = "Width : " + myWidth + "px";
    } 
*/



// BIG SCREEN
const nav_BigScreen = document.querySelectorAll('.nav a');
const rooms_BigScreen = document.querySelectorAll('.rooms .room');

// INITIALIZE
// ROOMS
const rooms_BigSrn = getElementById_Temp('rooms_BigSrn');
const rm1 = getElementById_Temp('rm1')
const rm2 = getElementById_Temp('rm2')
const rm3 = getElementById_Temp('rm3')
const rm4 = getElementById_Temp('rm4')
rm2.style.display = 'none'



nav_BigScreen.forEach((element, index) => {
    element.onclick = () => {
        element.classList.remove('active')

        if (index > 4 && index < 10) {
            if (index === 5) {
                rooms_BigScreen.forEach(element => element.style.display = "none")
                rm1.style.display = 'block'
                rm2.style.display = 'block'
                rm4.style.display = 'block'

            } else if(index === 6) {
                rooms_BigSrn.style.width = "80%"
                rooms_BigScreen.forEach(element => element.style.display = 'none')
                rm1.style.display = 'block'
                rm2.style.display = 'block'

            } else if(index === 7) {
                rooms_BigSrn.style.width = "80%"
                rooms_BigScreen.forEach(element => element.style.display = 'none')
                rm1.style.display = 'block'
                rm2.style.display = 'block'
            } else if(index === 8) {
                rooms_BigSrn.style.width = "80%"
                rooms_BigScreen.forEach(element => element.style.display = 'none')
                rm1.style.display = 'block'
                rm3.style.display = 'block'
            } else if(index === 9) {
                rooms_BigScreen.forEach(element => element.style.display = 'none')
                rm4.style.display = 'block'
            }

        } else {
            alert('out')
        }
    }
})
 



