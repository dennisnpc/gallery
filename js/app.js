const navButton = document.getElementById('nav-button');
const navList = document.querySelector('nav');
const bodyHeader = document.querySelector('header');
const logo = document.getElementById('logo');
const bodyChildren = Array.from(document.body.children);    // Select all children of the body
const imgElement = document.getElementById('best-img');
const bestBackButton = document.getElementById('bestBack');
const bestForwardButton = document.getElementById('bestForward');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const galleryBackButton = document.getElementById('galleryBack');
const galleryForwardButton = document.getElementById('galleryForward');

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

bestForwardButton.addEventListener('click', function () {
    let imgSrc = imgElement.getAttribute('src');
    let regex = /\d+/;  // This regular expression looks for one or more digits
    let result = imgSrc.match(regex);
    switch (parseInt(result[0])) {
        case 3:
            // Wrap to 1
            let newSrc1 = imgSrc.replace(/\d+/, '1');
            imgElement.setAttribute('src', newSrc1); // Update the image src
            break;

        default:
            // Increment the number in the src by 1
            let newSrc2 = imgSrc.replace(/\d+/, (match) => {
                return parseInt(match) + 1;
            });
            imgElement.setAttribute('src', newSrc2); // Update the image src
            break;
    }
});

bestBackButton.addEventListener('click', function () {
    let imgSrc = imgElement.getAttribute('src');
    let regex = /\d+/;  // This regular expression looks for one or more digits
    let result = imgSrc.match(regex);
    switch (parseInt(result[0])) {
        case 1:
            // Wrap to 3
            let newSrc1 = imgSrc.replace(/\d+/, '3');
            imgElement.setAttribute('src', newSrc1); // Update the image src
            break;

        default:
            // Decrement the number in the src by 1
            let newSrc2 = imgSrc.replace(/\d+/, (match) => {
                return parseInt(match) - 1;
            });
            imgElement.setAttribute('src', newSrc2); // Update the image src
            break;
    }
});

// Open modal
document.addEventListener('click', function (event) {
    const button = event.target.closest('[data-action="open-modal"]');

    if (button) { // Ensure the target is a button with the data-action attribute
        const newImgNumber = button.getAttribute('data-image-number'); // Get the image number from data attribute

        // Update the modal image
        // Get the current image source
        let currentSrc = modalImg.src;

        // Use regex to replace only the number in the image source
        modalImg.src = currentSrc.replace(/(\d+)(?=\.\w+($|\?))/g, newImgNumber);

        // Open the modal
        modal.showModal();
    }
});

galleryForwardButton.addEventListener('click', function () {
    let imgSrc = modalImg.getAttribute('src');
    let regex = /\d+/;  // This regular expression looks for one or more digits
    let result = imgSrc.match(regex);
    switch (parseInt(result[0])) {
        case 12:
            // Wrap to 4
            let newSrc1 = imgSrc.replace(/\d+/, '4');
            modalImg.setAttribute('src', newSrc1); // Update the image src
            break;

        default:
            // Increment the number in the src by 1
            let newSrc2 = imgSrc.replace(/\d+/, (match) => {
                return parseInt(match) + 1;
            });
            modalImg.setAttribute('src', newSrc2); // Update the image src
            break;
    }
});

galleryBackButton.addEventListener('click', function () {
    let imgSrc = modalImg.getAttribute('src');
    let regex = /\d+/;  // This regular expression looks for one or more digits
    let result = imgSrc.match(regex);
    switch (parseInt(result[0])) {
        case 4:
            // Wrap to 12
            let newSrc1 = imgSrc.replace(/\d+/, '12');
            modalImg.setAttribute('src', newSrc1); // Update the image src
            break;

        default:
            // Decrement the number in the src by 1
            let newSrc2 = imgSrc.replace(/\d+/, (match) => {
                return parseInt(match) - 1;
            });
            modalImg.setAttribute('src', newSrc2); // Update the image src
            break;
    }
});

// Close modal
modal.addEventListener('click', e => {
    const modalDimensions = modal.getBoundingClientRect()
    if (
        e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom
    ) {
        modal.close()
    }
})
closeModalButton.addEventListener('click', function() {
    modal.close();
})