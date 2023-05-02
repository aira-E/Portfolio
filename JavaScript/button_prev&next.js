var slider_img_skills = document.querySelector('.slider-img-skills');
var slider_img_copywriting = document.querySelector('.slider-img-copywriting');
var slider_img_graphics = document.querySelector('.slider-img-graphics');
var slider_img_leadership = document.querySelector('.slider-img-leadership');

var coding = ['coding1.jpg','coding2.jpg','coding3.jpg','coding4.jpg'];
var copywriting = ['copywriting1.jpg','copywriting3.jpg'];
var graphics = ['graphic1.png','graphic2.png','graphic3.jpg'];
var leadership= ['leadership1.jpg','leadership2.jpg'];

i = 0;

// Coding Buttons
function prev_coding()
{
    if(i <=0) i= coding.length;
    i--;
    return setImg_coding();
}

function next_coding()
{
    if(i >= coding.length-1) i= -1;
    i++;
    return setImg_coding();
}

function setImg_coding()
{
    return slider_img_skills.setAttribute("src","../media/images/skills/coding/" + coding[i]);
}

// Copywriting Buttons
function prev_copywriting()
{
    if(i <=0) i= copywriting.length;
    i--;
    return setImg_copywriting();
}

function next_copywriting()
{
    if(i >= copywriting.length-1) i= -1;
    i++;
    return setImg_copywriting();
}

function setImg_copywriting()
{
    return slider_img_copywriting.setAttribute("src","../media/images/skills/copywriting/" + copywriting[i]);
}

// Graphics Designing and Video Editing Buttons
function prev_graphics()
{
    if(i <=0) i= graphics.length;
    i--;
    return setImg_graphics();
}

function next_graphics()
{
    if(i >= graphics.length-1) i= -1;
    i++;
    return setImg_graphics();
}

function setImg_graphics()
{
    return slider_img_graphics.setAttribute("src","../media/images/skills/graphics/" + graphics[i]);
}

// Leadership Buttons
function prev_leadership()
{
    if(i <=0) i= leadership.length;
    i--;
    return setImg_leadership();
}

function next_leadership()
{
    if(i >= leadership.length-1) i= -1;
    i++;
    return setImg_leadership();
}

function setImg_leadership()
{
    return slider_img_leadership.setAttribute("src","../media/images/skills/leadership/" + leadership[i]);
}

