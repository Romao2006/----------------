// Get the modals
var createLocationModal = document.getElementById("createLocationModal");
var editLocationModal = document.getElementById("editLocationModal");

// Get the button that opens the create location modal
var createLocationBtn = document.getElementById("createLocationBtn");

// Open the create location modal
createLocationBtn.onclick = function() {
    createLocationModal.style.display = "block";
}

// Function to close the modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Function to open the edit location modal
function openEditLocationModal(locationName) {
    // Assuming you need to set some data based on locationName
    document.getElementById("editLocationTitle").innerText = "Изменить локацию " + locationName;
    editLocationModal.style.display = "block";
}

// Function to open the delete location modal
function openDeleteLocationModal(locationName) {
    // Your code to open delete modal
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == createLocationModal) {
        createLocationModal.style.display = "none";
    }
    if (event.target == editLocationModal) {
        editLocationModal.style.display = "none";
    }
}

// Function to toggle subitems
function toggleSubitems(element) {
    let nextElement = element.nextElementSibling;
    while (nextElement && nextElement.classList.contains('location-subitem')) {
        nextElement.style.display = nextElement.style.display === 'block' ? 'none' : 'block';
        nextElement = nextElement.nextElementSibling;
    }
}

function toggleSubitems(element) {
    let nextElement = element.nextElementSibling;
    let img = element.querySelector('img'); // Get the image element

    // Toggle the subitems
    while (nextElement && nextElement.classList.contains('location-subitem')) {
        nextElement.style.display = nextElement.style.display === 'block' ? 'none' : 'block';
        nextElement = nextElement.nextElementSibling;
    }

    // Change the image based on the display status of the first subitem
    let firstSubitem = element.nextElementSibling;
    if (firstSubitem && firstSubitem.style.display === 'block') {
        img.src = 'image/minus.svg'; // Replace with the path to your "minus" icon
    } else {
        img.src = 'image/plus.svg'; // Replace with the path to your "plus" icon
    }
}