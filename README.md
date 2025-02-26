<<<<<<< HEAD
# M<sup>4</sup> R Calculator

## Overview

The M<sup>4</sup> R Calculator is a web application that allows users to perform mathematical operations on three integer inputs. It provides calculations for:

- Maximum
- Minimum
- Mean
- Median
- Range

## Features

- **User-friendly Interface**: The application has an interactive and intuitive UI built with HTML, CSS, and JavaScript.
- **Input Validation**: Ensures that only integer values are entered to prevent errors.
- **Multiple Operations**: Users can select from different statistical operations to compute results.
- **Responsive Design**: Styled with Bootstrap and custom CSS for an enhanced user experience.

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='/calc.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ...  
[Kap](https://getkap.co/) for macOS

## Files Structure

### `index.html`

This is the main webpage that contains the structure and layout of the calculator, including:

- Input fields for three numbers
- Radio buttons for selecting the mathematical operation
- A result field to display the computed value
- A button to execute the calculation

### `myjs.js`

Contains JavaScript functions that handle the application logic:

- `validateInput(input)`: Ensures inputs contain only digits.
- `calculateResult()`: Reads user inputs, validates them, performs the selected operation, and displays the result.
- Event listener for the "Run Calculation" button to trigger calculations without form submission.

### `style.css`

Defines the general styling for the application, including button styles, typography, and form control appearances.

### `mystyle.css`

Contains custom styles for radio buttons and the footer copyright alignment.

## Usage Instructions

1. Open `index.html` in a web browser.
2. Enter three integers in the input fields.
3. Select an operation (Maximum, Minimum, Mean, Median, or Range).
4. Click the Run Calculation button.
5. The result will be displayed in the designated field.

## Dependencies

- Bootstrap 5.3.3 (CDN included in `index.html`)
- FontAwesome for icons
- Google Fonts - Montserrat

## License

This project is licensed under the MIT License.

## Author

Lee Ovalle - 2024

Credits: UI theme inspired by Creative Tim.
=======

>>>>>>> 42dc9344f7d692989801012767a3f3db180f2bdd
