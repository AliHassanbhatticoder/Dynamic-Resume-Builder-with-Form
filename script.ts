 // TypeScript function to handle content editing
 function handleEditableContent(): void {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach((element) => {
        element.addEventListener('blur', function () {
            const newValue = (element as HTMLElement).innerText;
            console.log(`Updated content: ${newValue}`);
            // You can handle saving the updated content here (e.g., localStorage, API call)
        });
    });
}

//  function to toggle visibility of skills section
function toggleVisibility(buttonId: string, sectionId: string): void {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);
    if (button && section) {
        button.addEventListener('click', () => {
            if (section.style.display === 'none') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }
}

// Initialize functions on page load
document.addEventListener('DOMContentLoaded', () => {
    handleEditableContent();
    toggleVisibility('toggleSkillsBtn', 'skillsSection');
    toggleVisibility('toggleExperienceBtn', 'experienceSection');
});





// Get the profile image container and file input elements
const profileImageContainer: HTMLElement | null = document.querySelector('.profile-container');
const uploadImageInput: HTMLInputElement | null = document.getElementById('uploadImage') as HTMLInputElement;
const profileImage: HTMLImageElement | null = document.getElementById('profileImage') as HTMLImageElement;

// Ensure the elements exist before adding event listeners
if (profileImageContainer && uploadImageInput && profileImage) {

    // Handle the image container click to trigger the file input
    profileImageContainer.addEventListener('click', () => {
        uploadImageInput.click();
    });

    // Handle the file input change to update the profile image
    uploadImageInput.addEventListener('change', (event: Event) => {
        const target = event.target as HTMLInputElement;
        const file: File | null = target.files ? target.files[0] : null;

        // Check if a file is selected
        if (file) {
            const reader: FileReader = new FileReader();

            // Once the file is read, update the profile image source
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target && e.target.result) {
                    profileImage.src = e.target.result as string;
                }
            };

            // Read the file as a Data URL to display it as an image
            reader.readAsDataURL(file);
        }
    });
}




// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Grab the form and relevant sections
    const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
  
    const nameField = document.getElementById("form-name") as HTMLInputElement;
    const titleField = document.getElementById("form-title") as HTMLInputElement;
    const emailField = document.getElementById("form-email") as HTMLInputElement;
    const phoneField = document.getElementById("form-phone") as HTMLInputElement;
    const addressField = document.getElementById("form-address") as HTMLInputElement;
    const aboutField = document.getElementById("form-about") as HTMLTextAreaElement;
  
    const experienceTitleField = document.getElementById("form-experience1-title") as HTMLInputElement;
    const experienceCompanyField = document.getElementById("form-experience1-company") as HTMLInputElement;
  
    const education1Field = document.getElementById("form-education1") as HTMLInputElement;
    const education2Field = document.getElementById("form-education2") as HTMLInputElement;
    const education3Field = document.getElementById("form-education3") as HTMLInputElement;
  
    const skillSummary1Field = document.getElementById("form-skill-summary1") as HTMLInputElement;
    const skillSummary1LevelField = document.getElementById("form-skill-summary1-level") as HTMLInputElement;
  
    const skillSummary2Field = document.getElementById("form-skill-summary2") as HTMLInputElement;
    const skillSummary2LevelField = document.getElementById("form-skill-summary2-level") as HTMLInputElement;
  
    // The sections where the form data will be displayed
    const profileDetails = document.querySelector(".profile-details h1") as HTMLElement;
    const profileTitle = document.querySelector(".profile-details h2") as HTMLElement;
    const contactInfo = document.querySelector(".contact-info") as HTMLElement;
    const aboutMeSection = document.querySelector(".about-me p") as HTMLElement;
  
    const experienceSection = document.querySelector("#experienceSection") as HTMLElement;
    const educationSection = document.querySelector(".education") as HTMLElement;
  
    // Function to update resume dynamically
    function generateResume() {
        // Update name and title
        profileDetails.textContent = nameField.value || "John Doe";
        profileTitle.textContent = titleField.value || "Front End Developer";
  
        // Update contact info
        contactInfo.innerHTML = `
            <p><i class="fas fa-envelope"></i> <strong>Mail:</strong> ${emailField.value || "john.doe@example.com"}</p><br>
            <p><i class="fas fa-phone"></i> <strong>Contact:</strong> ${phoneField.value || "+123-456-7890"}</p><br>
            <p><i class="fas fa-map-marker-alt"></i> <strong>Address:</strong> ${addressField.value || "123 Anywhere St., Any City"}</p>
        `;
  
        // Update "About Me" section
        aboutMeSection.textContent = aboutField.value || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  
        // Update experience section
        experienceSection.innerHTML = `
            <div class="job">
                <h4>${experienceTitleField.value || "Front-end Developer"}:</h4>
                <p>${experienceCompanyField.value || "Tech Company (2022-Present)"}</p>
            </div>
        `;
  
        // Update education section
        educationSection.innerHTML = `
            <h3>Education</h3><br>
            <div class="degree">
                <h4>High School:</h4>
                <p>${education1Field.value || "XYZ School (2016-2018)"}</p>
            </div>
            <div class="degree">
                <h4>Intermediate:</h4>
                <p>${education2Field.value || "ABC Degree College (2018-2022)"}</p>
            </div>
            <div class="degree">
                <h4>Bachelor:</h4>
                <p>${education3Field.value || "ABC University (2018-2022)"}</p>
            </div>
        `;
  
       
    }
  
    // Add event listener to the submit button to generate the resume
    const generateButton = document.querySelector("button[type='button']") as HTMLButtonElement;
    generateButton.addEventListener("click", generateResume);
  });