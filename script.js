
var createLocationModal = document.getElementById("createLocationModal");
var editLocationModal = document.getElementById("editLocationModal");


var createLocationBtn = document.getElementById("createLocationBtn");


createLocationBtn.onclick = function() {
    createLocationModal.style.display = "block";
}


function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}


function openEditLocationModal(locationName) {
  
    document.getElementById("editLocationTitle").innerText = "Изменить локацию " + locationName;
    editLocationModal.style.display = "block";
}


function openDeleteLocationModal(locationName) {

}

window.onclick = function(event) {
    if (event.target == createLocationModal) {
        createLocationModal.style.display = "none";
    }
    if (event.target == editLocationModal) {
        editLocationModal.style.display = "none";
    }
}


function toggleSubitems(element) {
    let nextElement = element.nextElementSibling;
    while (nextElement && nextElement.classList.contains('location-subitem')) {
        nextElement.style.display = nextElement.style.display === 'block' ? 'none' : 'block';
        nextElement = nextElement.nextElementSibling;
    }
}

function toggleSubitems(element) {
    let nextElement = element.nextElementSibling;
    let img = element.querySelector('img'); 


    while (nextElement && nextElement.classList.contains('location-subitem')) {
        nextElement.style.display = nextElement.style.display === 'block' ? 'none' : 'block';
        nextElement = nextElement.nextElementSibling;
    }

    let firstSubitem = element.nextElementSibling;
    if (firstSubitem && firstSubitem.style.display === 'block') {
        img.src = 'image/minus.svg'; 
    } else {
        img.src = 'image/plus.svg'; 
    }
}