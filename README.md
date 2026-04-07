# 🗺️ Marooner's Map
### A Community-Powered Disaster Response & Incident Reporting Web Application

Live Deployment: matty-05.github.io/Marooner-s-Map/

## Table of Contents

1. [What Is Marooner's Map?](#what-is-maroooners-map)
2. [The Problem We're Solving](#the-problem-were-solving)
3. [Who Uses It?](#who-uses-it)
4. [Key Features at a Glance](#key-features-at-a-glance)
5. [How It Works — Step by Step](#how-it-works--step-by-step)
6. [Application Pages Explained](#application-pages-explained)
7. [Technology Behind the App](#technology-behind-the-app)
8. [Security & Access Control](#security--access-control)
9. [File Structure](#file-structure)
10. [How to Run the App](#how-to-run-the-app)
11. [Setting Up the Admin Account](#setting-up-the-admin-account)
12. [Future Improvements](#future-improvements)
13. [Team & Acknowledgments](#team--acknowledgments)

---

## What Is Marooner's Map?

**Marooner's Map** is a web-based platform designed to help Filipino communities and Local Government Units (LGUs) respond faster to disasters, emergencies, and public safety hazards. Marooner's Map is a proposed comprehensive LGU dashboard fed by a low-bandwidth SMS gateway and interactive web interface. We turn community reports into actionable data points, prioritizing repairs and life-saving interventions through a centralized "Command Center" map.

Citizens can use the app to **pin incidents directly on a live map** — whether it's a flooded road, a collapsed structure, or an urgent SOS call for help. Those reports instantly appear on a **real-time command dashboard** that LGU administrators can monitor, triage, and act on — all without making a single phone call.

Think of it as a **digital barangay bulletin board, emergency hotline, and command center — all in one.**

> **Currently piloting in:** Miagao District, Iloilo

---

## The Problem We're Solving

During emergencies and natural disasters in the Philippines, information is often:

- **Scattered** — people report incidents through separate group chats, phone calls, and social media posts.
- **Delayed** — by the time authorities learn of a situation, critical response time has already been lost.
- **Unmapped** — responders don't know the exact location of incidents without lengthy back-and-forth communication.
- **Untracked** — there is no single system to record what's been reported, what's been dispatched, and what's been resolved.

Marooner's Map addresses all of these by giving both citizens and LGU officials a **shared, live, map-based view** of what is happening in their community, right now.

---

## Who Uses It?

The application has two distinct types of users:

### 👤 Citizens (Community Members)
Residents who want to report emergencies, hazards, or incidents in their area. They can use the app with or without creating an account.

### 🛡️ LGU Administrators
Authorized government officials or barangay staff who monitor incoming reports, update their status (e.g., "Dispatched," "Resolved"), and manage the command center dashboard.

---

## Key Features at a Glance

| Feature | Citizens | LGU Admins |
|---|---|---|
| View live incident map | ✅ | ✅ |
| Submit SOS or Hazard report | ✅ | — |
| Pin report location on map | ✅ | — |
| Attach photos/videos to report | ✅ | — |
| View community reports | ✅ | — |
| Real-time incident queue | — | ✅ |
| Update report status | — | ✅ |
| Delete reports from database | — | ✅ |
| View location of each report | ✅ | ✅ (reverse geocoded) |
| Analytics & data overview | ✅ | — |
| Filter reports by status | — | ✅ |
| Broadcast emergency alerts | — | ✅ |
| SMS gateway incident list | — | ✅ |

---

## How It Works — Step by Step

### For a Citizen

```
1. Open the app → index.html (Login Page)
2. Sign in with phone number + password, OR continue without logging in
3. See the live map (dashboard.html) with active incident pins
4. Click "Add Report" to submit a new incident
5. Choose incident type: 🆘 SOS Request or ⚠️ Hazard
6. Fill in a title, optional description, and attach any photos/videos/documents
7. Click "Pin to Map" — the report is placed at the selected location
8. The report immediately appears on the admin's live dashboard
```

### For an LGU Administrator

```
1. Open the app → index.html (Login Page)
2. Click "LGU Admin" toggle and sign in with admin credentials
3. Land on the Admin Command Center (admin-dashboard.html)
4. See all live reports on the map with color-coded pins:
   🔴 Red  = SOS/Emergency
   🟡 Yellow = Hazard
   🔵 Blue  = General Info
5. Review the Incident Queue panel on the right
6. Update each report's status: Reported → Dispatched → Resolved
7. View the incident's exact location name (street/barangay/city)
8. Delete resolved or invalid reports when done
```

---

## Application Pages Explained

### `index.html` — Login Page
The entry point of the application. Contains two login modes toggled by a button:

- **Citizen Login** — uses phone number and password, verified against the Firestore `users` database collection.
- **LGU Admin Login** — uses a separate admin username and password, verified against the Firestore `admins` collection. Unlocks access to the admin-only dashboard.

Citizens can also bypass login entirely by clicking "Continue Without Logging In."

---

### `signup.html` — Registration Page
New citizens can create an account by providing:
- Full name
- Phone number and email
- Password
- Date of birth
- Home address (Region → Province → City → Barangay), selected from a comprehensive Philippine location database built into the app

All account data is saved securely to Firebase Firestore.

---

### `dashboard.html` — Citizen Map Dashboard
The main screen for community members. It features:

- **A live interactive map** (powered by Leaflet.js and MapTiler) showing all active incident pins across the Philippines
- **Location filter bar** — narrow the map view by Region, Province, and City
- **Add Report button** — opens a modal form to submit a new SOS or Hazard incident
- **Report modal** — lets users pick an incident type, write a title and description, and attach supporting files (photos, videos, PDFs)
- **Quick access cards** — shortcuts to SOS Hotline Requests and Hazard Reports
- **Resolved Issues counter** — shows how many incidents have been cleared

---

### `analytics.html` — Analytics & Overview
A data overview screen for citizens that shows trends and statistics about incidents in their selected area. Includes:
- Incident count summaries
- Status breakdowns
- Filterable by region, province, and time period

---

### `reportslist.html` — Reports Directory
A searchable list of all incident reports, split into two tabs:

- **My Reports** — shows reports submitted by the currently logged-in user
- **Community Reports** — shows all publicly visible reports in the community

Each report card shows the incident type, status badge, timestamp, reporter name, and resolved location name. Clicking a card opens a **detailed side drawer** with the full report, attached media, and a link to the map pin.

---

### `profile.html` — User Profile Page
Allows logged-in citizens to view and edit their personal information:
- Full name, phone, email
- Date of birth
- Home location (Region, Province, City, Barangay)

Data is loaded from localStorage on page load and displays what was saved during login.

---

### `admin-dashboard.html` — LGU Command Center
The primary screen for authorized LGU administrators. It is protected — only users who have logged in through the Admin Login can access it; others are redirected to the login page automatically.

Key features:
- **Stat cards** at the top: Pending SOS, Pending Hazard, Units Dispatched, Resolved Today — all updated live
- **Live map** with color-coded pins for every active report
- **Incident Queue** panel with filter tabs (All / Reported / Dispatched / Resolved)
- **Location display** — each report card shows the real-world place name (e.g., "Poblacion, Miagao, Iloilo") resolved automatically from GPS coordinates using reverse geocoding
- **Status dropdown** — change a report's status directly from the queue card; changes reflect immediately in the database
- **Remove button** — permanently delete invalid or resolved reports
- **Broadcast Alert button** — (interface ready) for sending mass notifications

---

### `admin-sms-list.html` — SMS Gateway Reports List
A dedicated table view for incident reports received through the SMS gateway channel. Lists:
- Sender phone number
- Report code/type
- Location
- Description
- Raw SMS message text

Also admin-protected with the same auth guard and logout functionality as the main dashboard.

---

## Technology Behind the App

This application is built entirely with **web-native technologies** — no installation required beyond a web browser.

| Technology | What It Does |
|---|---|
| **HTML5 / CSS3** | Structure and layout of all pages |
| **Tailwind CSS** | Modern, responsive styling via utility classes |
| **JavaScript (ES6+)** | All interactive behavior and logic |
| **Firebase Firestore** | Cloud database — stores users, admins, and reports in real time |
| **Firebase Storage** | Stores file attachments (photos, videos, documents) uploaded with reports |
| **Leaflet.js** | Open-source interactive map library |
| **MapTiler** | Map tile provider (street-level map visuals) |
| **Nominatim (OpenStreetMap)** | Reverse geocoding — converts GPS coordinates into readable place names |
| **localStorage** | Stores the logged-in user's session data in the browser |

### How Real-Time Works
When a citizen submits a report, it is saved to **Firebase Firestore** — a cloud database that pushes updates to all connected devices instantly. The admin dashboard uses Firestore's `onSnapshot` listener, which means **the map and incident queue update automatically the moment a new report is submitted**, with no need to refresh the page.

### How Location Names Are Resolved
When a report is pinned on the map, it saves the GPS coordinates (latitude and longitude). The admin dashboard then calls the **Nominatim reverse geocoding API** to convert those coordinates into a human-readable address like *"Barangay Poblacion, Miagao, Iloilo."* Results are cached in the browser so repeated lookups are instant.

---

## Security & Access Control

### Two Separate Login Systems

Marooner's Map has a clear separation between citizen and administrator access:

**Citizens** log in with their registered phone number and password. Their credentials are stored in the `users` collection in Firebase Firestore.

**LGU Admins** log in using a separate admin username and password. Their credentials are stored in a completely separate `admins` collection in Firestore. This means citizen accounts can never accidentally gain admin privileges, and admin credentials are never mixed with regular user data.

### Admin Page Protection
Both admin pages (`admin-dashboard.html` and `admin-sms-list.html`) contain an **authentication guard** — a script that runs the moment the page loads and checks whether a valid admin session exists. If no admin is logged in, the user is immediately redirected back to the login page. This prevents anyone from accessing the command center just by typing the URL.

### Logout
Both account types have a working logout function. Clicking the logout button clears all session data from the browser and redirects to the login page. Landing on the login page also automatically clears any leftover session, ensuring no data leaks between sessions.

---

## File Structure

```
maroooners-map/
│
├── index.html              ← Login page (Citizen + Admin toggle)
├── signup.html             ← New citizen account registration
│
├── dashboard.html          ← Citizen map + report submission
├── analytics.html          ← Incident analytics & data overview
├── reportslist.html        ← Full reports directory (My Reports + Community)
├── profile.html            ← Citizen profile management
│
├── admin-dashboard.html    ← LGU Command Center (admin only)
├── admin-sms-list.html     ← SMS Gateway reports table (admin only)
│
└── README.md               ← This document
```

---

## How to Run the App

Because Marooner's Map is a **pure web application**, there is nothing to install.

### Option A — Open Directly in a Browser
1. Download or clone the project files to your computer.
2. Open `index.html` in any modern web browser (Google Chrome recommended).
3. The app will load and connect to the live Firebase database automatically.

> ⚠️ Note: Some browsers block certain features (like geolocation) when files are opened directly from a folder. If you encounter issues, use Option B.

### Option B — Run with a Local Development Server
If you have [VS Code](https://code.visualstudio.com/) installed:
1. Install the **Live Server** extension (by Ritwick Dey).
2. Right-click on `index.html` → **"Open with Live Server"**.
3. The app will open in your browser at `http://127.0.0.1:5500`.

### Option C — Deploy Online (Recommended for Demo)
Upload all HTML files to any static web hosting service:
- [Firebase Hosting](https://firebase.google.com/docs/hosting) (free, integrates natively)
- [Netlify](https://netlify.com) (free tier, drag-and-drop deploy)
- [GitHub Pages](https://pages.github.com) (free with a GitHub account)

---

## Setting Up the Admin Account

The admin login system reads from a **Firestore collection called `admins`**.

To create an admin account, add a document to this collection in your [Firebase Console](https://console.firebase.google.com):

**Collection:** `admins`

**Document fields:**
```
username  →  (text)   e.g.  "lgumia_admin"
password  →  (text)   e.g.  "Miagao@LGU2025"
fullname  →  (text)   e.g.  "Engr. Maria Santos"
```

Once added, the admin can log in at `index.html` by clicking the **"LGU Admin"** toggle and entering those credentials.

> 💡 Tip: You can create multiple admin accounts for different LGU staff members. Each gets their own document in the `admins` collection.

---

## Future Improvements

The following features are planned for future development:

- **SMS Gateway Integration** — Automatically parse incoming SMS reports from residents without smartphones and populate them into the admin list and map
- **Push Notifications** — Alert admins immediately when a new SOS report is received
- **Heatmap View** — Visualize incident density across barangays to identify high-risk zones
- **Report Photo Verification** — AI-assisted flagging of potentially false or duplicate reports
- **Offline Support** — Allow citizens to draft reports without internet, submitted automatically when connectivity is restored
- **Multi-LGU Support** — Expand beyond Miagao District to support multiple municipal command centers simultaneously
- **Export Reports** — Download incident data as CSV or PDF for official LGU records and DRRM reporting
- **Response Time Analytics** — Track how quickly each incident moves from "Reported" to "Resolved" for performance monitoring

---

## Team & Acknowledgments

**Marooner's Map** was built as a civic technology project aimed at strengthening community resilience and improving local government disaster response in the Philippines.

We acknowledge the use of the following open-source and free-tier services that made this project possible:

- [Firebase](https://firebase.google.com/) by Google — database and file storage
- [Leaflet.js](https://leafletjs.com/) — open-source interactive maps
- [MapTiler](https://www.maptiler.com/) — street-level map tiles
- [OpenStreetMap / Nominatim](https://nominatim.org/) — geographic reverse geocoding
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework
- [SVGRepo](https://www.svgrepo.com/) — icon assets

---

> *"Faster information saves lives. Marooner's Map puts that information where it's needed most — in the hands of both citizens and responders, at the same time."*