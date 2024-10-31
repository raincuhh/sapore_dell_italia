# Installation Instructions

Follow these steps to set up the development environment for the project.

## Prerequisites

Make sure you have the following installed on your system:

-  **Node.js**: [Download Node.js](https://nodejs.org/)
-  **WampServer**: [Download WampServer](https://wampserver.aviatechno.net)

## Setup Process

1. **Clone the Repository**
   Clone the project repository into the Wamp64 `www` directory. Open your terminal and run:

   ```bash
   git clone <repository-url> wamp/www/sapore_dell_italia
   ```

   Replace `<repository-url>` with the actual URL of your repository.

2. **Navigate to the Project Directory**
   Change your working directory to the project folder:

   ```bash
   cd wamp/www/sapore_dell_italia
   ```

3. **Install Dependencies**
   Run the following command to install the necessary Node.js dependencies:

   ```bash
   npm install
   ```

4. **Create the Environment File**
   You need to obtain the `.env.dev.local` file from me and place it in the project root directory. This file contains environment-specific settings for development.

5. **Start the Webpack Development Server**
   Run the following to start the development server on port 3000:

   ```bash
   npm run start:webpack
   ```

6. **Start WAMP**
   Launch the WampServer. Ensure that the server is running, as it is required to handle the PHP endpoints for the application.

7. **Access the Application**
   Open your web browser and navigate to:

   ```
   http://localhost:3000
   ```

   This should load the application, and you can begin development.

## Notes

-  Ensure that WAMP is running whenever you are working on the project, as the proxy server will not function correctly otherwise.
