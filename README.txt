FIRST ANNIVERSARY WEBSITE — QUICK START

1. Open index.html in Chrome or Edge to preview the website.
2. PERSONALIZE THE WEBSITE:
   - Open index.html in VS Code or Notepad.
   - Replace "my person, my peace" or any wording with your own message.
   - Open script.js and change:
       const anniversaryDate = "Add your date here";
     to your actual anniversary date.
   - In index.html, change "Your person" to your name/nickname.
   - Rewrite the letter so it sounds like you.

3. ADD YOUR PHOTOS:
   - Create a folder named "images" beside index.html.
   - Copy your photo into it, for example images/us.jpg.
   - In the hero section of index.html, replace the photo-placeholder div with:
       <img src="images/us.jpg" alt="Our favorite photo together">
   - For the gallery, replace each <div class="memory ..."> ... </div> with:
       <div class="memory"><img src="images/photo1.jpg" alt="Our memory"></div>
     Add this CSS at the bottom of style.css:
       .memory img { width:100%; height:100%; object-fit:cover; }

4. PUT IT ONLINE FOR FREE:
   - You can use GitHub Pages or Netlify. Create an account, upload the project files,
     and follow the host's instructions to publish a static website.
   - Keep private information (home address, passwords, private chats) off the page.

FILES:
- index.html: website content
- style.css: layout, colors, animations, responsive design
- script.js: anniversary date, surprise button, floating hearts
