const navButton = document.getElementById('nav-button');
const navList = document.querySelector('nav');
const bodyHeader = document.querySelector('header');
const logo = document.getElementById('logo');
const bodyChildren = Array.from(document.body.children);    // Select all children of the body
const imgElement = document.getElementById('best-img');
const backButton = document.getElementById('back');
const forwardButton = document.getElementById('forward');

function toggleNav() {
    // Check if #logo hidden
    if (logo.style.display !== 'none') {
        // Hide all elements
        bodyChildren.forEach(element => {
            if (element.tagName.toLowerCase() !== 'header') {
                element.style.display = 'none';
            }
        });
        // Ensure #logo hidden
        logo.style.display = 'none';

        // Show #nav-button and <nav>
        navButton.style.display = 'block';
        navList.style.display = 'flex';
    }
    else {
        // Slow all elements
        bodyChildren.forEach(element => {
            element.style.display = 'flex';
        });

        // Ensure <nav> hidden
        navList.style.display = 'none';

        //Show #logo
        logo.style.display = 'block';
    }
}
navButton.addEventListener('click', toggleNav);

forwardButton.addEventListener('click', function () {
    let imgSrc = imgElement.getAttribute('src');
    let regex = /\d+/;  // This regular expression looks for one or more digits
    let result = imgSrc.match(regex);
    switch (parseInt(result[0])) {
        case 1:
            // Increment the number in the src by 1
            let newSrc1 = imgSrc.replace(/\d+/, (match) => {
                return parseInt(match) + 1;
            });
            imgElement.setAttribute('src', newSrc1); // Update the image src

            backButton.style.visibility = 'visible';  // Make the back button visible
            break;

        case 2:
            // Increment the number in the src by 1
            let newSrc2 = imgSrc.replace(/\d+/, (match) => {
                return parseInt(match) + 1;
            });
            imgElement.setAttribute('src', newSrc2); // Update the image src

            forwardButton.style.visibility = 'hidden'; // Hide the forward button
            backButton.style.visibility = 'visible';   // Also make the back button visible
            break;
    }
});

backButton.addEventListener('click', function () {
    let imgSrc = imgElement.getAttribute('src');
    let regex = /\d+/;  // This regular expression looks for one or more digits
    let result = imgSrc.match(regex);
    switch (parseInt(result[0])) {
        case 2:
            // Increment the number in the src by 1
            let newSrc1 = imgSrc.replace(/\d+/, (match) => {
                return parseInt(match) - 1;
            });
            imgElement.setAttribute('src', newSrc1); // Update the image src

            backButton.style.visibility = 'hidden';  // Make the back button visible
            break;

        case 3:
            // Increment the number in the src by 1
            let newSrc2 = imgSrc.replace(/\d+/, (match) => {
                return parseInt(match) - 1;
            });
            imgElement.setAttribute('src', newSrc2); // Update the image src

            forwardButton.style.visibility = 'visible'; // Hide the forward button
            break;
    }
});