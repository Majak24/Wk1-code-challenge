function calculateGrade() {
    // Prompts user for input
    let marks = prompt("Enter the student's marks (between 0 and 100):");

    // Convert input to a number
    marks = parseFloat(marks);

    // Check if input is a valid number between 0 and 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return;
    }

    // Determine the grade based on the marks
    let grade;
    if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the grade
    console.log(`Marks: ${marks}, Grade: ${grade}`);
}

// Call the function to calculate grade based on user input
calculateGrade();
