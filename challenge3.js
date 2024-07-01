// Function to calculate NSSF deduction (6% of gross salary)
function calculateNssf(grossSalary) {
    const nssfDeduction = grossSalary * (6 / 100);
    return nssfDeduction;
}

// Function to calculate NHIF deduction based on gross salary ranges
function calculateNhif(grossSalary) {
    if (grossSalary >= 0 && grossSalary <= 5999) {
        return 150;
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
        return 300;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
        return 400;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
        return 500;
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
        return 600;
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
        return 750;
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
        return 850;
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
        return 900;
    } else if (grossSalary >= 35000 && grossSalary <= 39000) {
        return 950;
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary >= 45000 && grossSalary <= 49000) {
        return 1100;
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary >= 70000 && grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

// Function to calculate PAYE based on gross salary
function calculatePaye(grossSalary) {
    let paye;
    if (grossSalary >= 0 && grossSalary <= 24000) {
        paye = grossSalary * (10 / 100) - 2400;
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
        paye = grossSalary * (25 / 100) - 2400;
    } else if (grossSalary > 32333) {
        paye = grossSalary * (30 / 100) - 2400;
    }
    return paye;
}

// Function to calculate net salary after deductions
function calculateNetSalary(grossSalary) {
    let nssf = calculateNssf(grossSalary);
    let nhif = calculateNhif(grossSalary);
    let paye = calculatePaye(grossSalary);
    let netSalary = grossSalary - paye - nhif - nssf;
    return netSalary;
}

// Example usage:
let grossSalary = 24000;
let netSalary = calculateNetSalary(grossSalary);
console.log("Net Salary for gross salary of " + grossSalary + " is: " + netSalary);
