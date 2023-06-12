/*
A = 100
B = 80
C = 70
**/
function RunCalculate(event) {
    event.preventDefault(); // Prevent form submission

    const inputField = document.getElementById('commaInput');
    const gradeArray = inputField.value.split(',');
    const numericGPA = calculateNumericGPA(gradeArray);
    const alphabeticGPA = convertToAlphabeticGPA(numericGPA);
    
    displayGPA(alphabeticGPA);
}

function calculateNumericGPA(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        switch (grades[i]) {
            case 'A':
                sum += 100;
                break;
            case 'B':
                sum += 80;
                break;
            case 'C':
                sum += 70;
                break;
            default:
                // Handle invalid grades if needed
                break;
        }
    }
    return sum / grades.length;
}

function convertToAlphabeticGPA(numericGPA) {
    let alphabeticGPA;
    switch (true) {
        case numericGPA > 80:
            alphabeticGPA = 'A';
            break;
        case numericGPA > 70:
            alphabeticGPA = 'B';
            break;
        case numericGPA >= 60:
            alphabeticGPA = 'C';
            break;
        default:
            alphabeticGPA = 'F';
            break;
    }
    return alphabeticGPA;
}

function displayGPA(gpa) {
    const resultField = document.getElementById('result');
    resultField.textContent = "Your GPA is " + gpa;
}
