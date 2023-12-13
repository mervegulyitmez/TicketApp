# Getting Started with Create React App

This project is a basic help desk/support system ticket management system. It allows end users to submit support ticket requests and provides a backend admin panel for support staff to manage tickets.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- **Submit Tickets:** End users can submit support tickets with necessary details including name, email, photo/attachment, and a description of the problem.

- **Admin Panel:** Support staff can view a list summary of each ticket, including its status. They can also drill down into a ticket to respond to a request and update the ticket's status.

- **Ticket Status:** Tickets can have statuses such as "new," "in progress," and "resolved."

- **Web Deployment:** The application is deployed on the web and can be accessed on both Android and iOS platforms.

## Technologies Used

- **Frontend:** React Native
- **Backend:** Mockapi.io -> https://65756352b2fbb8f6509d07ea.mockapi.io/v1/ticket
- **Deployment:** Vercel 

## Demo

Access the live demo [here](https://ticket-app-8rh9-2hqd4fa99-mervegulyitmezs-projects.vercel.app).

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mervegulyitmez/TicketApp.git

2. Install dependencies:
    ```bash
   npm install

3. Run the application:
   ```bash
   npm start

This will start the development server, and you can view the app on your emulator or physical device.

## Usage

- Access the app and explore its features.
- Submit support tickets from the main page.
- Use the admin panel to view and manage tickets.

## Note

Due to time constraints, the app does not send emails. Instead, it outputs email content to the console.

## Folder Structure

- **/screens:** Contains individual screens (components) of the application.
- **/context:** Manages global state and data using React Context API.
- **/components:** Contains shared components used across screens.

## Future Enhancements

- Implement authentication for admin access.
- Add sorting and filtering options for tickets.
- Enhance UI/UX for a more polished look.

Feel free to provide feedback or contribute to the project. Thank you for using the Ticket Management System!
   