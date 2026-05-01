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
cd [14.01---Final-Project]
```

## Database Setup

To set up the database, run the install_db.sh script in the setup_scripts directory. This script will install MariaDB and start the server running. You only need to run this script once per Codespace

```bash
./setup_scripts/install_db.sh
```

## Create the initial tables by running the following command

     ```bash
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

## Design Decisions

- Color Palette & Branding: I utilized a palette of Saffron (`#F7C64A`), Dark Green (`#10291D`), and Seasalt (`#F7F7F7`). This was chosen to evoke a "cozy, modern" bakery atmosphere while maintaining a clean aesthetic for accessibility.
- Keyboard Navigation: I ensured that all interactive elements, such as the comment form, are logically tab-indexed. This ensures that users who rely on keyboards instead of mice can navigate the entire site without barriers.
- Minimalist Navigation: I went for a simplified navigation bar (Home, Menu, About, Comments) rather than a complex dropdown menu. I prioritized simplicity as its a local small business whose consumers know the place.

## Edge Cases

- Empty Inputs: The server validates that names and comments are not empty or just whitespace. If data is invalid, the server returns a 400 error, which triggers an alert for the user.
- Length Constraints: Inputs are capped at 500 characters using both HTML attributes and backend logic to protect the database and keep the UI layout consistent.
- Pagination: Comments are loaded in groups to improve performance. If a user requests a page that doesn't exist, the frontend detects this and gracefully displays a "No more comments" message.

## Challenges & Learnings

- CSS Specificity: A significant challenge was managing CSS styling specificity mobile use I ran into a lot of challenges that I didn’t know was possible. One of the biggest struggles I had was the menu look good on both phones and computers. I learned how to use CSS Grid and Flexbox properly instead of forcing elements into place with fixed sizes. 
- Dynamic Comment Updates: A key challenge was ensuring that new comments appeared instantly on the page after a user submitted them. I initially struggled to keep the user interface in sync with the database without requiring extra steps from the user. To solve this, I implemented a function that automatically fetches the updated list of comments from the API immediately after a successful form submission. This ensures the new content renders on the screen right away, providing a seamless and responsive experience. 

## Citations

- Pexels: Provided non-copyrighted photos https://www.pexels.com/search/family%20owned/
- W3Schools: Provided variety of help in different areas of html and css 3https://www.w3schools.com/
- Gemini: Assisted in finding bugs
- Express.js: Provided help with API and routing https://expressjs.com/
