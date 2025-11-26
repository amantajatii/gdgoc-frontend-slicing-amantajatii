# GDGOC – Book Discovery Frontend

A modern Book Discovery interface built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and the **BukuAcak public API**.
This project focuses on clean UI, dynamic data fetching, and a seamless browsing experience.

---

## Features

### Random Book Highlight

Displays a fully randomized featured book on every visit using the `/random_book` endpoint.

### Latest Books (4 items)

Fetches the newest books from page 1 and slices the first four for the Reading List section.

### Personalized Recommendations (8 random books)

Generates eight random recommended books through eight parallel API calls.

### Dynamic Rendering

The `/shop` page uses dynamic server-side rendering with:

```ts
export const dynamic = "force-dynamic";
```

Combined with:

```ts
{ cache: "no-store" }
```

to ensure all book data is always fresh.

---

## Tech Stack

### Framework

* Next.js 16.0.3
* React 19.2.0
* React DOM 19.2.0

### Styling & UI

* Tailwind CSS 4
* @tailwindcss/postcss
* Swiper.js
* react-icons

### Development Tools

* ESLint 9
* eslint-config-next

---

## API Documentation (BukuAcak API)

### Base URL

```
https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1
```

---

### 1. Get Books with Filters

```
GET /book?sort={sort}&page={page}&year={year}&genre={genre}&keyword={keyword}
```

Used for the "4 newest books" section:

```ts
const response = await fetch("https://.../book?sort=newest&page=1", {
  cache: "no-store",
});
const data = await response.json();
const fourBooks = data.books.slice(0, 4);
```

---

### 2. Get Random Book

```
GET /random_book
```

Used for:

* the main featured book
* eight recommendation results

Fetching a single random book:

```ts
const res = await fetch(".../random_book", { cache: "no-store" });
const randomBook = await res.json();
```

Fetching eight random books:

```ts
const eightRandomArray = await Promise.all(
  Array.from({ length: 8 }).map((_, index) =>
    fetch(`.../random_book?random=${index}`, { cache: "no-store" })
  )
);

const eightRandomBooks = await Promise.all(
  eightRandomArray.map((r) => r.json())
);
```

---

### 3. Get Book by ID

```
GET /book/{id}
```

or:

```
GET /book?_id={id}
```

---

### 4. Genre Statistics

```
GET /stats/genre
```

Not used in the UI, but available for future extensions.

---

## Project Structure

```
gdgoc-frontend/
├─ public/                     # Static assets (currently empty)
├─ src/
│  ├─ app/
│  │  ├─ about/
│  │  │   └─ page.jsx
│  │  ├─ blog/
│  │  │   └─ page.jsx
│  │  ├─ cart/
│  │  │   └─ page.jsx
│  │  ├─ contact/
│  │  │   └─ page.jsx
│  │  ├─ login/
│  │  │   └─ page.jsx
│  │  ├─ pages/
│  │  │   └─ page.jsx
│  │  ├─ search/
│  │  │   └─ page.jsx
│  │  ├─ shop/
│  │  │   ├─ loading.jsx        # Loading skeleton for shop page
│  │  │   └─ page.jsx           # Main Shop page (SSR + API fetching)
│  │  ├─ wishlist/
│  │  │   └─ page.jsx
│  │  ├─ globals.css            # Global styles
│  │  └─ layout.jsx             # Root layout
│  │
│  ├─ components/
│  │  ├─ NavBar/
│  │  │   ├─ Navbar.jsx
│  │  │   ├─ NavItem.jsx
│  │  │   └─ Topbar.jsx
│  │  │
│  │  ├─ Shop/
│  │  │   ├─ BookCard.jsx
│  │  │   ├─ BookCover.jsx
│  │  │   ├─ ProductGallery.jsx   # Main random book section
│  │  │   ├─ ReadingList.jsx      # 4 newest books
│  │  │   ├─ BooksForYou.jsx      # 8 random recommendations
│  │  │   ├─ Skeleton.jsx         # Skeleton for cards
│  │  │   ├─ Skeletons.jsx        # Multiple card skeletons
│  │  │   ├─ GoToShop.jsx
│  │  │   └─ Navigation.jsx
│  │
│  ├─ context/
│  │  └─ ShopContext.jsx          # Context for shop state (if needed)
│  │
│  └─ lib/
│      └─ utils.js                # Utility functions
│
├─ .gitignore
├─ eslint.config.mjs
├─ jsconfig.json
├─ next.config.mjs
├─ package.json
├─ package-lock.json
├─ postcss.config.mjs
└─ README.md
```

---

## Running Locally

```bash
git clone https://github.com/amantajatii/gdgoc-frontend-slicing-amantajatii
cd gdgoc-frontend-slicing-amantajatii
npm install
npm run dev
```

App will be available at:

```
http://localhost:3000
```

---

## Deployment

This project is deployed using Vercel with dynamic server rendering and no caching for fetch requests, ensuring fresh data on every request.

---

## Screenshots 
<img width="1710" height="993" alt="image" src="https://github.com/user-attachments/assets/a09c0f8c-1f36-4d31-8a75-1fe5396c1563" />
