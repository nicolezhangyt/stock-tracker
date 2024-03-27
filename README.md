# Stock Tracker Solution

## Getting Started

Follow these instructions to get the project up and running on your local machine.

1. Clone the repository to your local machine and navigate to the project directory:
   ```bash
   git clone https://github.com/nicolezhangyt/stock-tracker.git
   cd stock-tracker
2. Install dependencies:
   ```bash
   npm i

3. Start the development server:
   ```bash
   npm run dev
  
4. Open your browser and visit http://localhost:3000 to view the application.

## Potential Future Enhancements

### 1. General Enhancements

  ### Testing

  Consider implementing component testing for improved reliability and unit tests for utility functions to ensure expected behavior.

  ### Accessibility (A11y)

  a. Enhance accessibility by adhering to best practices such as ensuring keyboard navigability.

  b. Light/Dark Mode Toggle. Add a toggle feature to switch between light and dark modes can be added to provide users with customization options and enhance the user experience.

  ### CSS Design System

  Expand the CSS design system to include more semantic colors and breakpoints for improved design consistency and responsiveness across different devices. Note that a few semantic colors have already been included in the `tailwind.config.js` file for easier customization.


  ### Responsive Design

  Optimize layouts and styles to ensure full responsiveness and a mobile-friendly experience, enhancing usability across various screen sizes and devices.

  

### 2. Targeted Enhancements
  ### Exchange Symbols for Other Countries
  Updating the `constants.ts` file to include exchange symbols for other countries in the future, enhancing the global usability and relevance of displayed data. 

  ### Sorting and Pagination
  When sorting the list of companies by market cap in ascending or descending order, consider automatically resetting to the first page of results. This ensures that users have a consistent experience and can easily navigate through the sorted data without losing context. 
  
  Need to consult with stakeholders to confirm this behavior aligns with expectations.

  ### Search Function in Dropdown Menu

  Implement a search function in the country dropdown menu to improve user experience when selecting specific countries from a large list.