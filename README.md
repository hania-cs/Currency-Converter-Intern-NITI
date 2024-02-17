

# Currency Converter Project

## Overview

This currency converter project is developed as part of my internship at Intern NITI. The goal of this project is to create a simple yet effective currency converter web application that allows users to convert amounts from USD to various other currencies.

## Project Details

### Technologies Used

- HTML
- CSS
- JavaScript

### Features

- User can enter an amount in USD.
- User can select the target currency from a dropdown menu.
- Upon clicking the "Convert" button, the application calculates and displays the converted amount using real-time exchange rates from the ExchangeRate-API.

### Supported Currencies

- Euro (EUR)
- British Pound (GBP)
- Lebanese Pound (LBP)
- Indian Rupee (INR)
- Canadian Dollar (CAD)
- Australian Dollar (AUD)

### ExchangeRate-API Integration

This project integrates the [ExchangeRate-API](https://www.exchangerate-api.com/) to fetch real-time exchange rates. To use this feature:

1. **Sign up for an API key:**
   - Visit [ExchangeRate-API](https://www.exchangerate-api.com/) and sign up for a free account.
   - Obtain your API key.

2. **Insert API key into the code:**
   - Open the HTML file.
   - Locate the script tag containing the API key (`const apiKey = 'YOUR_API_KEY';`).
   - Replace `'YOUR_API_KEY'` with your actual ExchangeRate-API key.

## Usage

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/currency-converter.git
   ```

2. Open the `index.html` file in your web browser.

3. Enter the amount in USD, select the target currency, and click the "Convert" button.

## Internship Learnings

By working on this currency converter project, I have gained the following skills and knowledge:

1. **HTML, CSS, and JavaScript Proficiency**: Strengthened my understanding and application of fundamental web development technologies.

2. **User Interface Design**: Improved skills in designing a user-friendly interface for web applications.

3. **JavaScript Functionality**: Enhanced my ability to write JavaScript functions for calculations and user interactions.

4. **Integration of APIs**: Developed awareness of how to integrate external APIs for real-time exchange rates, an essential skill for enhancing the project's accuracy.

5. **Asynchronous Programming**: Gained experience in handling asynchronous tasks, such as fetching data from an API.

6. **Error Handling**: Acquired skills in error handling and providing meaningful alerts to users.

7. **Version Control (Git)**: Gained experience in using Git for version control, allowing for collaborative development and tracking changes.
