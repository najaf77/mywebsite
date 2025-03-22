function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Validate inputs
    if (weight === '' || height === '') {
        alert('Please enter both weight and height');
        return;
    }

    // Convert height to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display the result
    document.getElementById('bmi-value').textContent = bmi.toFixed(2);

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('bmi-category').textContent = category;
}
