# Downtown Donuts | Full-Stack Web Application

- Name: Brendy Pedraza-Vega
- GitHub: [https://github.com/BVega26113/14.01---Final-Project]
- Term: Spring 2026

## Project Overview
Downtown Donuts is a responsive, full-stack web application designed for a local family-owned bakery. The site features a landing page, a “Menu” page, an "About Us" page, and a dynamic comment system that utilizes an Express backend to handle user reviews.

# Setup Instructions

## Clone the Repository

```bash
git clone [https://github.com/BVega26113/14.01---Final-Project]
cd [Downtown-Donuts]
```

## Database Setup

To set up the database, run the install_db.sh script in the setup_scripts directory. This script will install MariaDB and start the server running. You only need to run this script once per Codespace

```bash
./setup_scripts/install_db.sh
sudo mysql -u root -p < ./setup_scripts/create_demo_table.sql
```

## Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

## Launch the Application

Start the application using the following command

```bash
npm start
```
## Access the Application

On Codespaces, you can access the application by forwarding port 3000. Open the forwarded port in your browser to view the application
