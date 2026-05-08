# Hackettstown SDA Church Website

Welcome! This is the official website for Hackettstown SDA Church. This guide will help you install, maintain, and update the website even if you don't have technical experience.

---

## 📖 What is This Website?

This is a modern, responsive church website built with the latest web technology. It includes:

- **Home Page** – Beautiful introduction to the church
- **About Us** – Church history and information
- **Live Stream** – Links to watch services online
- **Events Calendar** – Upcoming church events
- **Bulletin** – Weekly service announcements (as PDF)
- **Contact Form** – For visitors to reach out
- **Food Pantry** – Food assistance program info
- **Forms** – Visitor cards and prayer requests
- **Photo Galleries** – Church events and activities
- **Giving** – Online donation links
- **Login** – Member portal (future expansion)
- **NJC Youth** – Youth ministry information

The website automatically works on phones, tablets, and computers.

---

## 💻 System Requirements

To run or maintain this website, you need:

1. **A Computer** – Windows, Mac, or Linux
2. **Node.js** – Free software that powers the website
   - Download from: https://nodejs.org/ (choose "LTS" version)
   - Installation takes 2-3 minutes
3. **A Code Editor** (optional, for editing)
   - **VS Code** (free) – Recommended: https://code.visualstudio.com/
4. **Git** (optional, for updates)
   - Download from: https://git-scm.com/

---

## 🚀 Installation

### For the First Time Only

1. **Download the Website**
   - Go to: https://github.com/moncalaworks-cpu/SvelteTwo
   - Click the green **"Code"** button → **"Download ZIP"**
   - Unzip the file to a folder on your computer

2. **Install Dependencies**
   - Open a terminal/command prompt in the website folder
   - Type: `npm install`
   - Wait 2-3 minutes for everything to download

3. **Start the Website**
   - Type: `npm run dev`
   - Open your browser to: http://localhost:5173
   - You'll see the website running locally

4. **Stop the Website**
   - Press `Ctrl+C` in the terminal

---

## 📝 Common Tasks

### Updating Church Contact Information

All contact details are in one place: **`src/lib/data/church.js`**

Open this file and update:
- Church name
- Phone number
- Email address
- Street address
- Social media links (Facebook, YouTube, Instagram)
- Giving/donation links

**These changes appear everywhere** on the website automatically (header, footer, contact page, etc.).

### Adding a Bulletin (PDF)

1. Get your bulletin PDF file ready
2. Upload it to the church's cloud storage (Vercel Blob)
3. Edit: **`src/lib/data/bulletins.js`**
4. Add a new entry:
   ```javascript
   {
     date: "May 18, 2024",
     url: "https://[your-pdf-link]"
   }
   ```
5. The newest bulletin appears first on the Bulletin page
6. Older bulletins show in a "Past Bulletins" section

### Updating Church Hours/Service Times

Edit: **`src/lib/data/church.js`** and add a new field like:
```javascript
serviceTime: "Saturday 10:00 AM - 12:00 PM"
```

Then add it to the Home page or About page where needed.

### Adding Events to the Calendar

Edit: **`src/routes/calendar/+page.svelte`**

Add an event to the events list:
```javascript
{
  date: "May 25, 2024",
  title: "Potluck Dinner",
  time: "6:00 PM",
  location: "Fellowship Hall"
}
```

### Updating Page Content

Each page has its own file in the **`src/routes/`** folder:

- Home page → `src/routes/+page.svelte`
- About Us → `src/routes/about/+page.svelte`
- Contact → `src/routes/contact/+page.svelte`
- Events → `src/routes/calendar/+page.svelte`
- Bulletin → `src/routes/bulletin/+page.svelte`
- (And so on for each page...)

To edit a page:
1. Open the file with a code editor
2. Find the text you want to change
3. Update it
4. Save the file
5. The website will automatically reload in your browser

### Adding New Photos/Gallery Images

1. Prepare your images (JPG or PNG format)
2. Upload them to cloud storage (Vercel Blob)
3. Edit: **`src/lib/data/videos.js`** or create a new `galleries.js` file
4. Add the image links
5. Update the gallery page to display them

---

## 🧪 Testing Your Changes

Before publishing changes to the live website:

### Quick Test (Local)

1. Start the website with `npm run dev`
2. Open http://localhost:5173 in your browser
3. Click through all pages to make sure nothing is broken
4. Test on your phone by going to http://[your-computer-ip]:5173

### Automated Tests

The website has automatic tests to catch errors:

```bash
npm test                    # Run tests
npm run test:ui            # Visual test dashboard
npm run test:e2e           # Test all pages work correctly
npm run build && npm run preview  # Test production version
```

If tests fail, **do not publish changes**. Ask for help before pushing.

---

## 🌐 Deploying to the Live Website

### Using Vercel (Recommended)

The website is hosted on **Vercel**, which automatically deploys whenever you make changes:

1. **Make your changes** locally
2. **Test them** with `npm run dev`
3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Update [what you changed]"
   git push origin main
   ```
4. **Wait 1-2 minutes** – Vercel automatically deploys
5. **Check** https://sveltetwo.vercel.app to see your changes live

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
npm run preview
# This creates a production version and previews it locally
```

---

## 🔧 Maintenance & Upkeep

### Regular Tasks

**Every Week:**
- Upload the latest bulletin PDF
- Update any upcoming events
- Check for broken links

**Every Month:**
- Review the website for typos
- Update event calendars
- Check that all social media links work

**Every Quarter:**
- Take new photos for the gallery
- Update testimonies or announcements
- Review navigation to ensure it's clear

### Backing Up Your Work

Keep the website folder backed up:

```bash
# Compress the folder for backup
zip -r church-website-backup.zip SvelteTwo/
```

Store the backup in cloud storage (Google Drive, OneDrive, etc.).

### Updating Dependencies

Every 3-6 months, update the software packages:

```bash
npm update
npm test  # Make sure nothing broke
```

---

## 🐛 Troubleshooting

### Website won't start
- Make sure Node.js is installed: `node --version`
- Make sure you ran `npm install`
- Try: `npm install` again

### Changes don't appear on localhost
- Press `Ctrl+R` in your browser to refresh
- Stop and restart with `npm run dev`

### Tests are failing
- Don't panic! Read the error message
- Try: `npm install` again
- If you changed code, undo the last change and test

### Website looks broken after my changes
- Open the file you edited
- Look for red squiggly lines in your editor
- These indicate errors – fix them and save
- Refresh your browser

### Live website not updating
- Wait 2-3 minutes for Vercel to deploy
- Force refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
- Check GitHub to see if the commit was successful

---

## 📞 Getting Help

### If Something Goes Wrong

1. **Check the error message** – It usually tells you what's wrong
2. **Google the error** – Someone else has probably had the same problem
3. **Ask in forums** – Helpful communities exist online
4. **Contact the developer** – Reach out to whoever set this up

### Useful Resources

- **Tailwind CSS** (styling): https://tailwindcss.com/
- **Svelte Docs** (code): https://svelte.dev/docs
- **Node.js Help**: https://nodejs.org/en/docs/
- **GitHub Help**: https://github.com/git-tips/tips

---

## 📊 Project Structure

```
SvelteTwo/
├── src/
│   ├── lib/
│   │   ├── components/        ← Navigation, Footer, etc.
│   │   └── data/              ← Church info, events, bulletins
│   ├── routes/                ← All website pages
│   ├── app.html               ← Main HTML template
│   └── app.css                ← Website styles
├── e2e/                       ← Automated tests
├── public/                    ← Images, fonts, static files
├── package.json               ← Project settings
├── README.md                  ← This file!
└── CLAUDE.md                  ← Developer documentation
```

---

## 🎨 Design & Brand

The website uses:
- **Colors**: Dark background with light purple accents
- **Fonts**: Modern, clean fonts
- **Layout**: Mobile-first (works great on phones first)
- **Accessibility**: Large, readable text; good color contrast

To change the design:
- Edit **`src/app.css`** for colors and fonts
- Edit **`tailwind.config.js`** for brand colors
- Edit **`svelte.config.js`** for framework settings

---

## 📋 Checklist: Launch & Ongoing

### Before Going Live ✓
- [ ] All pages display correctly on phone and desktop
- [ ] All links work
- [ ] Contact form works
- [ ] Bulletin PDFs display properly
- [ ] All tests pass: `npm test`
- [ ] No console errors (open browser DevTools)

### Monthly Maintenance ✓
- [ ] Check for broken links
- [ ] Update bulletin
- [ ] Review upcoming events
- [ ] Take new photos/update gallery
- [ ] Test on different devices

### Quarterly Updates ✓
- [ ] Review and update page content
- [ ] Check social media links
- [ ] Update about page/testimonies
- [ ] Run security updates: `npm update`
- [ ] Backup the website folder

---

## 🚀 Future Enhancements

Potential features to add:

- Prayer request submission
- Event registration forms
- Photo/video uploads
- Blog/news section
- Prayer wall
- Member directory
- Giving analytics dashboard
- Multiple language support

---

## 📜 License & Credits

This website was built using:
- **SvelteKit** – Web framework
- **Tailwind CSS** – Styling
- **Vercel** – Hosting

The website is maintained by the church and volunteers.

---

**Last Updated:** May 2026  
**Website Version:** 1.0  
**Contact:** Your IT/Web Team

---

## Questions?

If you have questions, feel free to ask. The website is designed to be easy to maintain, and we're here to help!

Happy maintaining! 🎉
