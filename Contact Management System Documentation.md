Contact Management System Documentation
Overview
The Contact Management System is a web application designed to manage and display contact information. It provides features for creating, editing, and deleting contacts, along with displaying charts and maps showing COVID-19 data. The application aims to provide users with a convenient platform for managing their contacts and staying informed about global health statistics.

Features
Contact Management:

Create Contacts: Users can create new contacts by providing their first name, last name, and status (active or inactive).
Edit Contacts: Existing contacts can be edited to update their information.
Delete Contacts: Users can remove contacts from the system.
COVID-19 Charts and Maps:

Line Graphs: Display historical COVID-19 data in the form of line graphs, allowing users to visualize trends over time.
Map Visualization: Show a map with markers representing COVID-19 statistics for different countries, providing a geographical perspective of the pandemic.
Technology Stack
Frontend Framework: React.js
State Management: Redux Toolkit
Data Fetching: React Query
Styling: CSS, Ant Design
Charts: Chart.js
Maps: Leaflet
Folder Structure
lua
Copy code
|-- public/
|-- src/
    |-- components/
        |-- ChartAndMaps.tsx
        |-- CovidMap.tsx
        |-- LineGraph.tsx
        |-- Contact.tsx
    |-- queries.ts
    |-- routing.tsx
    |-- store/
        |-- contactSlice.ts
        |-- store.ts
    |-- index.tsx
    |-- App.tsx
    |-- index.css
    |-- ChartsandMaps.css
    |-- contact.css
    |-- sidebar.css
    |-- maps.css
|-- package.json
|-- tsconfig.json
|-- README.md
|-- .gitignore
|-- ...
Installation
Clone the Repository:

bash
Copy code
git clone <repository_url>
Install Dependencies:

bash
Copy code
npm install
Start the Development Server:

bash
Copy code
npm start
Open the Application:
Open your browser and navigate to http://localhost:3000.

API Endpoint
The application fetches COVID-19 data from the disease.sh API. The following endpoints are used:

Worldwide data: https://disease.sh/v3/covid-19/all
Countries data: https://disease.sh/v3/covid-19/countries
Historical data: https://disease.sh/v3/covid-19/historical/all?lastdays=all
Usage
Contact Management:

Click on "Create Contact" to add a new contact.
Click on the edit icon to modify an existing contact.
Click on the delete icon to remove a contact.
COVID-19 Charts and Maps:

View historical COVID-19 data in line graphs.
Explore COVID-19 statistics by country on the map.
Additional Notes
The application uses local storage to persist contact data, ensuring that contacts are saved even after the user refreshes the page or closes the browser.
Redux is used for state management, providing a centralized store for managing application data.
React Query is employed for data fetching, allowing efficient and automatic management of data retrieval and caching.
Ant Design is used for UI components, ensuring a consistent and user-friendly interface.
