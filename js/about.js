function toggleSkills(skillId) {
    const frontendSkills = document.getElementById('frontend-skills');
    const backendSkills = document.getElementById('backend-skills');

    if (skillId === 'frontend-skills') {
        // If frontend is clicked and currently hidden, show it and hide backend
        if (frontendSkills.style.display === "none" || frontendSkills.style.display === "") {
            frontendSkills.style.display = "block";
            backendSkills.style.display = "none";
        }
    } else if (skillId === 'backend-skills') {
        // If backend is clicked and currently hidden, show it and hide frontend
        if (backendSkills.style.display === "none" || backendSkills.style.display === "") {
            backendSkills.style.display = "block";
            frontendSkills.style.display = "none";
        }
    }
}
function toggleExperience(experienceId) {
    const experienceDetails = document.getElementById(experienceId);

    // Toggle visibility
    if (experienceDetails.style.display === "none" || experienceDetails.style.display === "") {
        experienceDetails.style.display = "block"; // Show experience details
    } else {
        experienceDetails.style.display = "none"; // Hide experience details
    }
}