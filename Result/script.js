// script.js

function searchResult() {
    const selectedStandard = document.getElementById('standardSelect').value;
    const rollInput = document.getElementById('rollInput').value.trim();
    
    const resultCard = document.getElementById('resultCard');
    const errorMessage = document.getElementById('errorMessage');
    
    resultCard.classList.add('hidden');
    errorMessage.classList.add('hidden');

    if (rollInput === "") {
        showError("Please enter a Roll Number.");
        return;
    }

    let activeDatabase = [];
    let standardLabel = "";

    if (selectedStandard === "9") {
        activeDatabase = students9th;
        standardLabel = "9th";
    } else if (selectedStandard === "10") {
        activeDatabase = students10th;
        standardLabel = "10th";
    } else if (selectedStandard === "11") {
        activeDatabase = students11th;
        standardLabel = "11th";
    } else if (selectedStandard === "12") {
        activeDatabase = students12th;
        standardLabel = "12th";
    }

    const student = activeDatabase.find(s => s.rollNo === rollInput);

    if (student) {
        displayResult(student, standardLabel);
    } else {
        showError(`Result not found for Roll Number ${rollInput} in ${standardLabel}.`);
    }
}

function displayResult(student, standardLabel) {
    // 1. Setup Student Info
    document.getElementById('studentName').innerText = student.name;
    document.getElementById('studentRoll').innerText = student.rollNo;
    document.getElementById('studentGrade').innerText = standardLabel;
    
    // 2. Setup Dynamic Table Logic
    const marksBody = document.getElementById('marksBody');
    marksBody.innerHTML = ""; // Clear out previous results
    
    let totalObtainedMarks = 0;
    let totalMaxMarks = 0;
    
    // Loop through every subject in the student's marks object
    for (const [subjectName, marksObtained] of Object.entries(student.marks)) {
        
        // Add a space before capital letters to make it readable
        const formattedSubjectName = subjectName.replace(/([A-Z])/g, ' $1').trim();
        const lowerCaseSubject = subjectName.toLowerCase();
        
        // Check if the subject is optional
        const isOptional = lowerCaseSubject === 'computer' || lowerCaseSubject === 'pt' || lowerCaseSubject === 'drawing';

        // Check if marks are less than 33 to apply red color (only if numeric)
        const isFailing = typeof marksObtained === 'number' && marksObtained < 33;
        const marksColorStyle = isFailing ? 'color: #e74c3c; font-weight: bold;' : '';

        // Create a new table row
        const tr = document.createElement('tr');
        
        // Display '-' for Max Marks if it's an optional subject
        const maxMarksDisplay = isOptional ? '-' : 100;
        
        tr.innerHTML = `
            <td>${formattedSubjectName} ${isOptional ? '<small></small>' : ''}</td>
            <td style="${marksColorStyle}">${marksObtained}</td>
            <td>${maxMarksDisplay}</td>
        `;
        
        // Add the row to the table
        marksBody.appendChild(tr);
        
        // Calculate totals ONLY if the subject is NOT optional
        if (!isOptional) {
            totalObtainedMarks += Number(marksObtained); // Ensure numeric addition
            totalMaxMarks += 100; 
        }
    }
    
    // 3. Final Calculations & UI Updates
    document.getElementById('totalMarks').innerText = totalObtainedMarks;
    document.getElementById('maxTotalMarks').innerText = totalMaxMarks;
    
    // Prevent division by zero if there are only optional subjects
    const percentage = totalMaxMarks > 0 ? ((totalObtainedMarks / totalMaxMarks) * 100).toFixed(2) : 0;
    document.getElementById('percentage').innerText = percentage;
    
    // 4. Fetch the result directly from the database object
    const statusElement = document.getElementById('passFailStatus');
    const resultText = student.result ? student.result.toUpperCase() : "N/A"; 
    
    statusElement.innerText = resultText;
    
    // Apply Red color if failed, Green if passed
    if (resultText === "PASS") {
        statusElement.style.color = "#16a085"; 
    } else if (resultText === "FAIL" || resultText === "PROMOTION") {
        statusElement.style.color = "#e74c3c"; 
    } else {
        statusElement.style.color = "#000000"; 
    }

    // Display the card
    document.getElementById('resultCard').classList.remove('hidden');
}
function showError(msg) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = msg;
    errorMessage.classList.remove('hidden');
}