# Pages & Routes Overview

The website has 12 pages organized as SvelteKit routes. Each route is a folder with a `+page.svelte` file.

## Route Structure

```
src/routes/
├── +page.svelte                # / - Home
├── +layout.svelte              # Root layout (wraps all pages)
├── about/+page.svelte          # /about - About Us
├── bulletin/+page.svelte       # /bulletin - Bulletins
├── calendar/+page.svelte       # /calendar - Event Calendar
├── contact/+page.svelte        # /contact - Contact
├── events/+page.svelte         # /events - Events
├── food-pantry/+page.svelte    # /food-pantry - Food Pantry
├── forms/+page.svelte          # /forms - Forms
├── galleries/+page.svelte      # /galleries - Galleries
├── giving/+page.svelte         # /giving - Giving
├── live-stream/+page.svelte    # /live-stream - Live Stream
├── login/+page.svelte          # /login - Admin Login
└── njc-youth/+page.svelte      # /njc-youth - NJC Youth
```

## Page Descriptions

### 1. Home `/`
**File:** `src/routes/+page.svelte`

**Sections:**
- **Hero:** VideoCarousel with video backgrounds + text overlay
  - Church name & tagline
  - Three CTA buttons: Watch Live, Events, Bulletin
- **Explore Section:** 6 cards linking to main ministries
  - Live Stream, Giving, Events, Food Pantry, Contact, Bulletin
- **Welcome Section:** Church mission statement

**Key Features:**
- Responsive design (mobile hamburger menu)
- Video carousel rotates every 5 seconds
- Image fallback for mobile after 3s (autoplay unreliable)
- Language & theme toggles in nav

**Translation Keys:**
```
home.heroSubtitle
home.watchLive, home.events, home.bulletin
home.exploreTitle
home.cardLiveStream, home.cardGiving, etc.
home.welcomeTitle, home.welcomeP1, home.welcomeP2
```

---

### 2. About Us `/about`
**File:** `src/routes/about/+page.svelte`

**Sections:**
- **Hero Section:** Background image + title
- **Mission Statement:** Church's core purpose (EN & ES)
- **Pastoral Leadership:** 
  - Pastor profile (name, photo, bio)
  - Elder profile (name, photo, bio)
- **Church Story:** History & community description

**Design:**
- Hero image background (stays same in light/dark modes)
- Content cards with hover effects
- Responsive grid for profiles

**Translation Keys:**
```
about.title
about.missionTitle, about.missionText
about.leadershipTitle
about.storyTitle, about.storyP1, about.storyP2
```

---

### 3. Events `/events`
**File:** `src/routes/events/+page.svelte`

**Sections:**
- **Upcoming Events:** 
  - Text: "Coming soon" (Google Calendar embed placeholder)
  - Ready for calendar integration
- **Regular Services:**
  - Sabbath Worship Service
  - Every Saturday at 10:30 AM
  - Church address

**Design:**
- Simple hero with gradient background
- Placeholder for Google Calendar embed
- Clear call-to-action for service times

**Translation Keys:**
```
events.title
events.upcomingTitle, events.comingSoon
events.regularTitle
events.sabbathTitle, events.sabbathTime
```

---

### 4. Bulletin `/bulletin`
**File:** `src/routes/bulletin/+page.svelte`

**Sections:**
- **Latest Bulletin:** 
  - Current week's PDF (embedded viewer)
  - Download button
- **Past Bulletins:** 
  - Archive of previous weeks
  - Links to older PDFs

**Features:**
- PDF.js integration for in-browser viewing
- Responsive design (mobile-friendly)
- Download links for all bulletins
- Sorted by date (newest first)

**Translation Keys:**
```
bulletin.title
bulletin.subtitle
bulletin.latest
bulletin.download
bulletin.past
bulletin.empty
bulletin.checkBack
```

---

### 5. Giving `/giving`
**File:** `src/routes/giving/+page.svelte`

**Sections:**
- **Online Giving:** Link to Adventist Giving portal
- **Scripture Quote:** 2 Corinthians 9:7 (cheerful giving)
- **Other Giving Methods:**
  - **In Person:** Offerings during Sabbath services
  - **By Mail:** Checks to church address
  - **Online:** Adventist Giving link
- **Questions:** Contact church office

**Design:**
- Hero with accent color
- Clear CTA button to giving portal
- Multiple giving options presented
- Contact info for questions

**Translation Keys:**
```
giving.title
giving.supportTitle
giving.scripture
giving.supportText
giving.giveNow
giving.otherWaysTitle
giving.inPersonTitle, giving.inPersonText
giving.byMailTitle, giving.byMailText
giving.questionsTitle, giving.questionsText
```

---

### 6. Live Stream & Videos `/live-stream`
**File:** `src/routes/live-stream/+page.svelte`

**Sections:**
- **Watch Live:** 
  - YouTube live stream for Sabbath services
  - Service times: Saturdays 10:30 AM
- **Past Sermons:**
  - Link to church's YouTube channel
  - Browse complete sermon library
  - Watch past services anytime

**Design:**
- Video icons/thumbnails
- Links to YouTube
- Clear service schedule
- Mobile-responsive layout

**Translation Keys:**
```
liveStream.title
liveStream.watchTitle, liveStream.watchText
liveStream.pastTitle, liveStream.pastText
liveStream.visitChannel
```

---

### 7. Contact `/contact`
**File:** `src/routes/contact/+page.svelte`

**Sections:**
- **Contact Info:**
  - Address (with location icon)
  - Phone number (clickable tel: link)
  - Email (clickable mailto: link)
- **Contact Form:**
  - Name, email, message fields
  - Intent selector (message vs. prayer request)
  - Submit button
- **Prayer Request Section:**
  - Separate form for prayer requests
  - Name (optional), prayer content, private checkbox

**Features:**
- Two-in-one form (message + prayer request tabs)
- Form validation (required fields)
- Success message on submit (3 second display)
- Responsive design for mobile

**Translation Keys:**
```
contact.title, contact.subtitle
contact.addressLabel, contact.phoneLabel, contact.emailLabel
contact.formTitle
contact.nameLabel, contact.emailFieldLabel, contact.messageLabel
contact.submit, contact.success
contact.intentLabel, contact.intentMessage, contact.intentPrayer
```

---

### 8. Food Pantry `/food-pantry`
**File:** `src/routes/food-pantry/+page.svelte`

**Sections:**
- **Banner:** Mission statement (serving community with dignity)
- **Eligibility:**
  - No documentation required
  - For individuals & families in need
  - Contact for more info
- **Hours & Location:** 
  - Service hours
  - Church address
- **What We Provide:**
  - Groceries (fresh & canned produce, proteins, grains)
  - Community support (referrals, resources)
- **Volunteer Opportunity:**
  - Invitation to help
  - Contact church office to volunteer

**Design:**
- Hero with accent colors
- Icons for each service area
- Cards for services offered
- Clear volunteer CTA

**Translation Keys:**
```
foodPantry.title
foodPantry.banner
foodPantry.eligibilityTitle, foodPantry.eligibilityP1, P2
foodPantry.hoursTitle
foodPantry.locationLabel, foodPantry.contactLabel
foodPantry.providesTitle
foodPantry.groceriesTitle, foodPantry.groceriesDesc
foodPantry.supportTitle, foodPantry.supportDesc
foodPantry.volunteerTitle, foodPantry.volunteerText
foodPantry.getInTouch
```

---

### 9. Forms `/forms`
**File:** `src/routes/forms/+page.svelte`

**Tabbed Forms:**

**Tab 1: Visitor Card**
- Full name (required)
- Email (required)
- Phone (optional)
- Address (optional)
- Visit date (optional)
- How heard about us (optional)
- Success message: "Thank you for visiting!"

**Tab 2: Prayer Request**
- Name (optional)
- Prayer request (required)
- Keep private checkbox
- Success message: "We will pray for you"

**Features:**
- Tabbed interface (visitor vs. prayer)
- Form validation
- Dark input styling with purple focus
- Success message display (3 seconds)
- Form reset on success

**Translation Keys:**
```
forms.title
forms.visitorTab, forms.prayerTab
forms.visitorTitle, forms.visitorIntro, forms.visitorSuccess
forms.nameLabel, forms.emailLabel, forms.phoneLabel
forms.addressLabel, forms.visitDateLabel
forms.hearAboutLabel
forms.submit
forms.prayerTitle, forms.prayerIntro, forms.prayerSuccess
forms.optionalName
forms.prayerRequestLabel
forms.privateLabel
forms.submitPrayer
```

---

### 10. Galleries `/galleries`
**File:** `src/routes/galleries/+page.svelte`

**Current Status:** Placeholder (coming soon)

**Planned Features:**
- Photo galleries from church events & services
- Image lightbox viewer
- User photo submissions
- Organized by event/date

**Placeholder Content:**
- "Coming Soon" message
- Explanation of future features
- Invitation to submit photos
- Contact link

**Translation Keys:**
```
galleries.title
galleries.comingSoon, galleries.comingSoonDesc
galleries.shareTitle, galleries.shareText
galleries.contactUs
```

---

### 11. Login `/login`
**File:** `src/routes/login/+page.svelte`

**Current Status:** Placeholder (coming soon)

**Planned Features:**
- Admin authentication
- Content management access
- Dashboard for updating bulletins, videos, etc.

**Current Display:**
- "Coming Soon" message
- "🔒 Admin login is coming soon"
- Placeholder form fields
- Contact for access info

**Translation Keys:**
```
login.title
login.signIn
login.comingSoon
login.emailLabel, login.emailPlaceholder
login.passwordLabel
login.signInButton
login.questionsText, login.contactUs
```

---

### 12. NJC Youth `/njc-youth`
**File:** `src/routes/njc-youth/+page.svelte`

**Sections:**
- **About NJC Youth:**
  - New Jersey Conference Youth Ministry
  - Youth program for Adventist churches in NJ
  - Events, camps, retreats, community service
- **Get Involved:**
  - Call to action for young people
  - Link to NJC Youth official website
  - Info about events & activities
- **Questions:**
  - Contact church office
  - Speak with youth leaders

**Features:**
- Hero section with accent background
- Clear organization & grouping
- Multiple ways to engage (website, contact)
- Responsive design

**Translation Keys:**
```
njcYouth.title
njcYouth.ministryTitle, njcYouth.ministryDesc
njcYouth.aboutTitle, njcYouth.aboutText
njcYouth.getInvolvedTitle, njcYouth.getInvolvedText
njcYouth.visitButton
njcYouth.eventsTitle, njcYouth.eventsText
njcYouth.officialSite
njcYouth.questionsTitle, njcYouth.questionsText
```

---

## Layout System

### Root Layout `+layout.svelte`
Wraps all pages with:
```svelte
<Nav />           <!-- Sticky navigation -->
<main>
  <slot />        <!-- Page content -->
</main>
<Footer />        <!-- Footer with social links -->
```

**Features:**
- Dark/light mode support
- Language toggle persistence
- Navigation available on all pages
- Footer links to all pages

---

## Navigation Structure

### Main Nav Links (from `src/lib/components/Nav.svelte`)
```
Home
├── About Us
├── Events
├── Bulletin
├── Contact
├── Giving
├── Live Stream
└── [Mobile menu with theme + language toggles]
```

### Footer Links (Quick Links section)
```
Quick Links
├── Home
├── About
├── Events
├── Contact
├── Food Pantry
├── Giving
└── Forms
```

---

## URL Routing Summary

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Entry point |
| `/about` | About Us | Mission & leadership |
| `/bulletin` | Bulletin | Weekly announcements |
| `/calendar` | Calendar | Events & services |
| `/contact` | Contact | Get in touch |
| `/events` | Events | Upcoming events |
| `/food-pantry` | Food Pantry | Community assistance |
| `/forms` | Forms | Visitor & prayer forms |
| `/galleries` | Galleries | Event photos |
| `/giving` | Giving | Online donations |
| `/live-stream` | Live Stream | YouTube videos |
| `/login` | Login | Admin access (coming soon) |
| `/njc-youth` | NJC Youth | Youth ministry |

---

## Adding a New Page

1. Create folder: `src/routes/page-name/`
2. Create file: `+page.svelte` in that folder
3. Page auto-accessible at `/page-name`
4. Page inherits Nav + Footer from root layout
5. Add translation keys to `translations.js`
6. Add nav link if public page

Example:
```svelte
<script>
  import { t } from '$lib/i18n.svelte.js'
</script>

<svelte:head>
  <title>{t('page.title')} - Church Name</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-16">
  <h1 class="text-4xl font-bold mb-6">{t('page.title')}</h1>
  <!-- Your content -->
</div>
```

---

*Last updated: May 11, 2026*
