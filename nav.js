const locations = {
    Offices: ["Cashier", "Director", "Guidance", "Information", "Principal", "Registrar"],
    Grade7: ["St. Lorenzo Ruiz", "St. Dominic", "St. Martin", "St. Blaise", "St. Jude", "St. John Berchmans"],
    Grade8: ["St. Mary", "St. Elizabeth", "St. Anne", "St. Bernadette", "St. Therese", "St. Martha"],
    Grade9: ["St. Matthew", "St. Mark", "St. Luke", "St. John the Evangelist", "St. Thomas"],
    Grade10: ["St. Joseph", "St. John the Baptist", "St. Peter", "St. Paul"],
    Grade11: ["ABM - St. Theresa of Calcutta", "TVL - St. Bridgette", "HUMSS - St. Catherine of Siena", "STEM - St. Claire of Assisi", "STEM - St. Maria Goretti", "STEM - St. Rita of Cascia"],
    Grade12: ["ABM - St. John Paul II", "TVL - St. Joseph the Worker", "HUMSS - St. Joseph Marello", "STEM - St. Thomas Aquinas", "STEM - St. Augustine of Hippo", "STEM - St. Albert the Great"],
    Facilities: ["Clinic", "Faculty", "Gymnasium", "Library"], // Missing "Audio Visual Room (AVR)", "Cafeteria" 
    Laboratories: ["Computer Laboratory", "Science Laboratory", "TLE/TVL Laboratory"], 
    Elementary: ["Elementary Guardhouse"],
    Kindergarten: ["Angel Gabriel", "Angel Michael"],
    Grade1: ["Faith", "Hope"],
    Grade2: ["Wisdom", "Knowledge"],
    Grade3: ["Humility", "Piety"],
    Grade4: ["Honesty", "Courtesy"],
    Grade5: ["Generosity", "Loyalty"],
    Grade6: ["Chastity", "Obedience"],
};

const locationSelect = document.getElementById("locationSelect");
for (const category in locations) {
    const optgroup = document.createElement("optgroup");
    optgroup.label = category.charAt(0).toUpperCase() + category.slice(1);
    locations[category].forEach(location => {
        const option = document.createElement("option");
        option.value = location;
        option.textContent = location;
        optgroup.appendChild(option);
    });
    locationSelect.appendChild(optgroup);
}
// For categorization in menu

const locationData = {
    // Offices
    "Cashier": {
        image: "images/map-admin.png",
        popupImage: "images/popups/cashier.jpg"
    },
    "Director": {
        image: "images/map-director.png",
        popupImage: "images/popups/director.jpg"
    },
    "Guidance": {
        image: "images/map-admin.png",
        popupImage: "images/popups/guidance.jpg"
    },
    "Information": {
        image: "images/map-admin.png",
        popupImage: "images/popups/information.jpg"
    },
    "Principal": {
        image: "images/map-admin.png",
        popupImage: "images/popups/principal.jpg"
    },
    "Registrar": {
        image: "images/map-registrar.png",
        popupImage: "images/popups/registrar.jpg"
    },
    // Facilities
    "Audio Visual Room (AVR)": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    "Cafeteria": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    "Clinic": {
        image: "images/map-clinic.png",
        popupImage: "images/popups/clinic.jpg"
    },
    "Faculty": {
        image: "images/map-faculty.png",
        popupImage: "images/popups/faculty.jpg"
    },
    "Gymnasium": {
        image: "images/map-gym.png",
        popupImage: "images/popups/"
    },
    "Library": {
        image: "images/map-library.png",
        popupImage: "images/popups/lib.jpg"
    },
    // Laboratories
    "Computer Laboratory": {
        image: "images/map-comlab.png",
        popupImage: "images/popups/comlab.jpg"
    },
    "Science Laboratory": {
        image: "images/map-scilab.png",
        popupImage: "images/popups/scilab.jpg"
    },
    "TLE/TVL Laboratory": {
        image: "images/map-tlelab.png",
        popupImage: "images/popups/tvl.jpg"
    },
    
    //Junior Highschool Department
    // Grade 7
    "St. Lorenzo Ruiz": {
        image: "images/map-7lorenzo.png",
        popupImage: "images/popups/"
    },
    "St. Dominic": {
        image: "images/map-7dominic.png",
        popupImage: "images/popups/"
    },
    "St. Martin": {
        image: "images/map-7martin.png",
        popupImage: "images/popups/"
    },
    "St. Blaise": {
        image: "images/map-7blaise.png",
        popupImage: "images/popups/"
    },
    "St. Jude": {
        image: "images/map-7jude.png",
        popupImage: "images/popups/"
    },
    "St. John Berchmans": {
        image: "images/map-7berchmans.png",
        popupImage: "images/popups/"
    },
    // Grade 8
    "St. Mary": {
        image: "images/map-8mary.png",
        popupImage: "images/popups/"
    },
    "St. Elizabeth": {
        image: "images/map-8elizabeth.png",
        popupImage: "images/popups/"
    },
    "St. Anne": {
        image: "images/map-8anne.png",
        popupImage: "images/popups/"
    },
    "St. Bernadette": {
        image: "images/map-8bernadeth.png",
        popupImage: "images/popups/"
    },
    "St. Therese": {
        image: "images/map-8therese.png",
        popupImage: "images/popups/"
    },
    "St. Martha": {
        image: "images/map-8martha.png",
        popupImage: "images/popups/"
    },
    // Grade 9
    "St. Matthew": {
        image: "images/map-9matthew.png",
        popupImage: "images/popups/"
    },
    "St. Mark": {
        image: "images/map-9mark.png",
        popupImage: "images/popups/"
    },
    "St. Luke": {
        image: "images/map-9luke.png",
        popupImage: "images/popups/"
    },
    "St. John the Evangelist": {
        image: "images/map-9john.e.png",
        popupImage: "images/popups/"
    },
    "St. Thomas": {
        image: "images/map-9thomas.png",
        popupImage: "images/popups/"
    },
    // Grade 10
    "St. Joseph": {
        image: "images/map-10joseph.png",
        popupImage: "images/popups/"
    },
    "St. John the Baptist": {
        image: "images/map-10john.b.png",
        popupImage: "images/popups/"
    },
    "St. Peter": {
        image: "images/map-10peter.png",
        popupImage: "images/popups/"
    },
    "St. Paul": {
        image: "images/map-10paul.png",
        popupImage: "images/popups/"
    },
    
    // Senior Highschool Department
    // Grade 11
    "ABM - St. Theresa of Calcutta": {
        image: "images/map-11abm.png",
        popupImage: "images/popups/"
    },
    "TVL - St. Bridgette": {
        image: "images/map-11tvl.png",
        popupImage: "images/popups/"
    },
    "HUMSS - St. Catherine of Siena": {
        image: "images/map-11humss.png",
        popupImage: "images/popups/"
    },
    "STEM - St. Claire of Assisi": {
        image: "images/map-11stem.clare.png",
        popupImage: "images/popups/"
    },
    "STEM - St. Maria Goretti": {
        image: "images/map-11stem.goretti.png",
        popupImage: "images/popups/"
    },
    "STEM - St. Rita of Cascia": {
        image: "images/map-11stem.rita.png",
        popupImage: "images/popups/"
    },
    // Grade 12
    "ABM - St. John Paul II": {
        image: "images/map-12abm.tvl.png",
        popupImage: "images/popups/abmtvl12.jpg"
    },
    "TVL - St. Joseph the Worker": {
        image: "images/map-12abm.tvl.png",
        popupImage: "images/popups/abmtvl12.jpg"
    },
    "HUMSS - St. Joseph Marello": {
        image: "images/map-12humss.png",
        popupImage: "images/popups/humss12.jpg"
    },
    "STEM - St. Thomas Aquinas": {
        image: "images/map-12stem.aquinas.png",
        popupImage: "images/popups/stema12.jpg"
    },
    "STEM - St. Augustine of Hippo": {
        image: "images/map-12stem.augustine.png",
        popupImage: "images/popups/stemb12.jpg"
    },
    "STEM - St. Albert the Great": {
        image: "images/map-12stem.albert.png",
        popupImage: "images/popups/stemc12.jpg"
    },

    // Elementary Department
    "Elementary Guardhouse": {
        image: "images/map-elem.png",
        popupImage: "images/popups/"
    },
    //Kindergarten
    "Angel Gabriel": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    "Angel Michael": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    //Grade 1
    "Faith": {
        image: "images/map-1faith.png",
        popupImage: "images/popups/faith.jpg"
    },
    "Hope": {
        image: "images/map-1hope.png",
        popupImage: "images/popups/hope.jpg"
    },
    //Grade 2
    "Wisdom": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    "Knowledge": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    //Grade 3
    "Humility": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    "Piety": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    //Grade 4
    "Honesty": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    "Courtesy": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    //Grade 5
    "Generosity": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    "Loyalty": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    //Grade 6
    "Chastity": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    "Obedience": {
        image: "images/loc.png",
        popupImage: "images/popups/"
    },
    // Add data for other locations with actual image paths and legends
};
// Datas for selected locations

locationSelect.addEventListener("change", function() {
    const selectedLocation = this.value;
    const locationInfo = locationData[selectedLocation];
    if (locationInfo) {
        // Remove previously displayed frame and legends section
        const existingContainer = document.getElementById("locationContainer");
        if (existingContainer) {
            existingContainer.remove();
        }

        // Create a container for the frame and legends section
        const container = document.createElement("div");
        container.id = "locationContainer";
        container.style.display = "flex"; // Use flexbox for layout
        container.style.alignItems = "center"; // Center items vertically

        // Display new frame (image)
        const frame = document.createElement("img"); // Use img tag for the image
        frame.id = "displayedFrame";
        frame.src = locationInfo.image; // Set image source
        frame.style.maxWidth = "80%"; // Image takes maximum 50% of container width
        frame.style.height = "auto"; // Maintain aspect ratio

        // Add event listener for popup image on click
        frame.addEventListener("click", function() {
            // Check if popup image is already displayed
            const popupImage = document.getElementById("popupImage");
            if (popupImage) {
                popupImage.remove(); // Remove popup image if already displayed
            } else {
                // Create a popup image element
                const newPopupImage = document.createElement("img");
                newPopupImage.id = "popupImage";
                newPopupImage.src = locationInfo.popupImage; // Set popup image source
                newPopupImage.style.position = "absolute"; // Position the popup image
                newPopupImage.style.top = "10px"; // Position from top of container (adjust as needed)
                newPopupImage.style.right = "10px"; // Position from right of container (adjust as needed)
                newPopupImage.style.width = "350px"; // Set the width of the popup image (adjust as needed)
                newPopupImage.style.height = "auto"; // Maintain aspect ratio
                newPopupImage.style.zIndex = "9999"; // Ensure it's on top of other elements
                container.appendChild(newPopupImage); // Append to the container
            }
        });

        container.appendChild(frame);

        // Display new legends section beside the frame (image) inside the container
        const legendsSection = document.createElement("div");
        legendsSection.id = "legendsSection";
        legendsSection.innerHTML = `<h2>Legends for ${selectedLocation}</h2>
        <div class="legend-item"><img src="images/markers/location-pin.png" alt="Image 1"><p>Destination</p></div>
        <div class="legend-item"><img src="images/markers/user.png" alt="Image 2"><p>User Location</p></div>
        <div class="legend-item"><img src="images/legends/legen-canteen.jpg" alt="legen-canteen"><p>Cafeteria</p></div>
        <div class="legend-item"><img src="images/legends/legen-elem.jpg" alt="legen-elem"><p>Elementary Department</p></div>
        <div class="legend-item"><img src="images/legends/legen-gr7.jpg" alt="legen-gr7"><p>Grade 7 Building</p></div>
        <div class="legend-item"><img src="images/legends/legen-gr8.jpg" alt="legen-gr8"><p>Grade 8 Building</p></div>
        <div class="legend-item"><img src="images/legends/legen-gr9.jpg" alt="legen-gr9"><p>Grade 9 Building</p></div>
        <div class="legend-item"><img src="images/legends/legen-gr10.jpg" alt="legen-gr10"><p>Grade 10 Building</p></div>
        <div class="legend-item"><img src="images/legends/legen-gym.jpg" alt="legen-gym"><p>Gymnasium</p></div>
        <div class="legend-item"><img src="images/legends/legen-quad.jpg" alt="legen-quad"><p>Quadrangle</p></div>
        <div class="legend-item"><img src="images/legends/legen-garden.jpg" alt="legen-garden"><p>St. Joseph Garden</p></div>
        <div class="legend-item"><img src="images/legends/legen-study.jpg" alt="legen-gr10"><p>Study Area</p></div>`;

        // Check if the selected location needs additional legends
        if (selectedLocation === "STEM - St. Augustine of Hippo" || selectedLocation === "STEM - St. Thomas Aquinas" || selectedLocation === "STEM - St. Albert the Great") {
            legendsSection.innerHTML += `<div class="legend-item"><img src="images/legends/extra-legend.jpg" alt="extra-legend"><p>Additional Legend</p></div>`;
        }
        if (selectedLocation === "STEM - St. Maria Goretti" || selectedLocation === "St. Thomas Aquinas") {
            legendsSection.innerHTML += `<p>Note: Use the yellow path during poor weather conditions.</p>`;
        }

        legendsSection.style.width = "20%"; // Legends section takes 50% of container width
        legendsSection.style.padding = "20px"; // Add padding for readability
        legendsSection.style.backgroundColor = "rgba(0, 123, 255, 0.7)"; // Blueish color with transparency
        legendsSection.style.color = "#fff"; // White text color for readability
        legendsSection.style.overflowY = "auto"; // Enable scrolling if content exceeds container height
        container.appendChild(legendsSection);

        // Append the container to the document body
        document.body.appendChild(container);
    }
});

// Get the logo image element
const logoImage = document.getElementById("logoImage");

// Add click event listener to the logo image
logoImage.addEventListener("click", function() {
    // Remove the container holding the displayed image and legends section
    const existingContainer = document.getElementById("locationContainer");
    if (existingContainer) {
        existingContainer.remove();
    }

    // Reset the selected option in the selection menu
    locationSelect.selectedIndex = 0;
});

// Get the home icon element
const homeIcon = document.getElementById("homeButton");

// Add click event listener to the home icon
homeIcon.addEventListener("click", function() {
    // Redirect to the home page (assuming 'home.html' is your home page)
    window.location.href = "home.html";
});

// Get the info icon element
const infoIcon = document.getElementById("aboutButton");

// Add click event listener to the info icon
infoIcon.addEventListener("click", function() {
    // Redirect to the about page (assuming 'about.html' is your about page)
    window.location.href = "about.html";
});
