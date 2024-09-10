// TypeScript function to handle content editing
function handleEditableContent() {
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (element) {
        element.addEventListener('blur', function () {
            var newValue = element.innerText;
            console.log("Updated content: ".concat(newValue));
            // You can handle saving the updated content here (e.g., localStorage, API call)
        });
    });
}
//  function to toggle visibility of skills section
function toggleVisibility(buttonId, sectionId) {
    var button = document.getElementById(buttonId);
    var section = document.getElementById(sectionId);
    if (button && section) {
        button.addEventListener('click', function () {
            if (section.style.display === 'none') {
                section.style.display = 'block';
            }
            else {
                section.style.display = 'none';
            }
        });
    }
}
// Initialize functions on page load
document.addEventListener('DOMContentLoaded', function () {
    handleEditableContent();
    toggleVisibility('toggleSkillsBtn', 'skillsSection');
    toggleVisibility('toggleExperienceBtn', 'experienceSection');
});
// Get the profile image container and file input elements
var profileImageContainer = document.querySelector('.profile-container');
var uploadImageInput = document.getElementById('uploadImage');
var profileImage = document.getElementById('profileImage');
// Ensure the elements exist before adding event listeners
if (profileImageContainer && uploadImageInput && profileImage) {
    // Handle the image container click to trigger the file input
    profileImageContainer.addEventListener('click', function () {
        uploadImageInput.click();
    });
    // Handle the file input change to update the profile image
    uploadImageInput.addEventListener('change', function (event) {
        var target = event.target;
        var file = target.files ? target.files[0] : null;
        // Check if a file is selected
        if (file) {
            var reader = new FileReader();
            // Once the file is read, update the profile image source
            reader.onload = function (e) {
                if (e.target && e.target.result) {
                    profileImage.src = e.target.result;
                }
            };
            // Read the file as a Data URL to display it as an image
            reader.readAsDataURL(file);
        }
    });
}
// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Grab the form and relevant sections
    var resumeForm = document.getElementById("resumeForm");
    var nameField = document.getElementById("form-name");
    var titleField = document.getElementById("form-title");
    var emailField = document.getElementById("form-email");
    var phoneField = document.getElementById("form-phone");
    var addressField = document.getElementById("form-address");
    var aboutField = document.getElementById("form-about");
    var experienceTitleField = document.getElementById("form-experience1-title");
    var experienceCompanyField = document.getElementById("form-experience1-company");
    var education1Field = document.getElementById("form-education1");
    var education2Field = document.getElementById("form-education2");
    var education3Field = document.getElementById("form-education3");
    var skillSummary1Field = document.getElementById("form-skill-summary1");
    var skillSummary1LevelField = document.getElementById("form-skill-summary1-level");
    var skillSummary2Field = document.getElementById("form-skill-summary2");
    var skillSummary2LevelField = document.getElementById("form-skill-summary2-level");
    // The sections where the form data will be displayed
    var profileDetails = document.querySelector(".profile-details h1");
    var profileTitle = document.querySelector(".profile-details h2");
    var contactInfo = document.querySelector(".contact-info");
    var aboutMeSection = document.querySelector(".about-me p");
    var experienceSection = document.querySelector("#experienceSection");
    var educationSection = document.querySelector(".education");
    // Function to update resume dynamically
    function generateResume() {
        // Update name and title
        profileDetails.textContent = nameField.value || "John Doe";
        profileTitle.textContent = titleField.value || "Front End Developer";
        // Update contact info
        contactInfo.innerHTML = "\n            <p><i class=\"fas fa-envelope\"></i> <strong>Mail:</strong> ".concat(emailField.value || "john.doe@example.com", "</p><br>\n            <p><i class=\"fas fa-phone\"></i> <strong>Contact:</strong> ").concat(phoneField.value || "+123-456-7890", "</p><br>\n            <p><i class=\"fas fa-map-marker-alt\"></i> <strong>Address:</strong> ").concat(addressField.value || "123 Anywhere St., Any City", "</p>\n        ");
        // Update "About Me" section
        aboutMeSection.textContent = aboutField.value || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
        // Update experience section
        experienceSection.innerHTML = "\n            <div class=\"job\">\n                <h4>".concat(experienceTitleField.value || "Front-end Developer", ":</h4>\n                <p>").concat(experienceCompanyField.value || "Tech Company (2022-Present)", "</p>\n            </div>\n        ");
        // Update education section
        educationSection.innerHTML = "\n            <h3>Education</h3><br>\n            <div class=\"degree\">\n                <h4>High School:</h4>\n                <p>".concat(education1Field.value || "XYZ School (2016-2018)", "</p>\n            </div>\n            <div class=\"degree\">\n                <h4>Intermediate:</h4>\n                <p>").concat(education2Field.value || "ABC Degree College (2018-2022)", "</p>\n            </div>\n            <div class=\"degree\">\n                <h4>Bachelor:</h4>\n                <p>").concat(education3Field.value || "ABC University (2018-2022)", "</p>\n            </div>\n        ");
    }
    // Add event listener to the submit button to generate the resume
    var generateButton = document.querySelector("button[type='button']");
    generateButton.addEventListener("click", generateResume);
});
