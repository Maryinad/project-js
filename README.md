Filmoteka is a project built using the Parcel bundler. Below is a guide to how the project was set up, including preparation, development environment, and deployment processes.

Project Setup
Ensure Node.js is Installed:
Verify that you have the LTS version of Node.js installed on your computer. Download and install it from nodejs.org if necessary.

Clone the Repository:
Start by cloning this repository to your local machine.

Rename the Folder:
After cloning, change the folder name from parcel-project-template to your own project name.

Create a New GitHub Repository:
Set up a new, empty repository on GitHub.

Link with GitHub:
Open the project in VSCode, launch the terminal, and follow the instructions to connect your local project with the new GitHub repository.

Install Dependencies:
In the terminal, run the following command to install the required project dependencies:
npm install

Start Development Mode:
To start the development server, run:
npm start

Open your browser and navigate to http://localhost:1234. The page will automatically reload as you save changes to the project files.

File and Folder Structure
Styles:
All style partials should be placed in the src/sass folder. These partial files should be imported into the corresponding page style files. For example, the styles for index.html are located in index.scss.

Images:
Place all images in the src/images folder. Images will be optimized during the production build to ensure performance. This optimization happens in the cloud to avoid overloading your local machine, particularly on systems with lower processing power.

Deployment
To deploy the project, you'll need to configure a few additional steps in your GitHub repository:

Go to the Settings tab of your repository.
Under the Actions subsection, select General.
Follow the deployment instructions to automate the process for the production build.
