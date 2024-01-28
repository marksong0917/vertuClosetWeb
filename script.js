// Grab elements
let next = document.getElementById("next");
let previous = document.getElementById("previous");
const slides = document.getElementsByClassName("slides");

// Initialize default images
let image1index = 0;
let image2index = 1;
slideImage();

// Hides current images
function hideCurrentImage()
{
    slides[image1index].style.display = "none";
    slides[image2index].style.display = "none";
}

// Updates index based on button pressed and checks if current index is out of the array bounds
function updateImageIndex(n)
{
    image1index += n;
    image2index += n;
    
    // Wrap around array
    if (image1index < 0)
    {
        image2index = slides.length - 1;
        image1index = image2index - 1;
    }
    else if (image2index > slides.length - 1)
    {
        image1index = 0;
        image2index = 1;
    }
}

// Display current images
function slideImage()
{
    slides[image1index].style.display = "inline-block";
    slides[image2index].style.display = "inline-block";
}

// Button on-click event listeners
next.addEventListener('click', () => { hideCurrentImage(); updateImageIndex(1); slideImage(); });
previous.addEventListener('click', () => { hideCurrentImage(); updateImageIndex(-1); slideImage(); });