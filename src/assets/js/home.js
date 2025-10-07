* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", Arial, sans-serif;
  background-color: #ffffff;
  color: #111111;
}

/* General Colors */
:root {
  --gold: #c6a450;
  --dark: #111111;
}

/* Navbar */
.navbar {
  background-color: white;
  color: var(--dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 60px;
  border-bottom: 1px solid #ddd;
  flex-wrap: wrap;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.navbar ul li a {
  text-decoration: none;
  color: var(--dark);
  font-weight: 500;
  transition: 0.3s;
}

.navbar ul li a i {
  color: var(--gold);
  margin-right: 6px;
}

.navbar ul li a:hover {
  color: var(--gold);
}

.donate-btn {
  background-color: var(--gold);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.donate-btn:hover {
  background-color: #b4913b;
}

/* Hero */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 80px 60px;
}

.hero-text {
  flex: 1;
  padding: 20px;
}

.hero-text h2 {
  font-size: 2.8rem;
  color: var(--dark);
  margin-bottom: 20px;
}

.hero-text p {
  font-size: 1.15rem;
  margin-bottom: 25px;
  color: #444;
}

.primary-btn {
  background-color: var(--gold);
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

.primary-btn:hover {
  background-color: #b4913b;
}

.hero-img img {
  width: 460px;
  border-radius: 10px;
}

/* Section Titles */
section h2 {
  text-align: center;
  color: var(--dark);
  font-size: 2rem;
  margin-bottom: 20px;
}

section h2 i {
  color: var(--gold);
  margin-right: 10px;
}

/* About */
.about {
  text-align: center;
  padding: 80px 40px;
  border-top: 1px solid #eee;
}

.about p {
  max-width: 700px;
  margin: 0 auto 30px;
  color: #444;
  line-height: 1.6;
}

.gold-btn {
  background-color: var(--gold);
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

.gold-btn:hover {
  background-color: #b4913b;
}

/* Impact Section */
.impact {
  background-color: #fafafa;
  padding: 80px 40px;
  text-align: center;
}

.impact-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
}

.impact-card {
  background-color: white;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: 0.3s;
}

.impact-card:hover {
  transform: translateY(-5px);
}

.impact-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
}

.impact-card h3 {
  color: var(--dark);
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.impact-card h3 i {
  color: var(--gold);
  margin-right: 6px;
}

.impact-card p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Donate Section */
.donate {
  text-align: center;
  padding: 90px 40px;
}

.donate h2 {
  color: var(--dark);
  margin-bottom: 20px;
}

.donate p {
  max-width: 700px;
  margin: 0 auto 30px;
  color: #444;
  line-height: 1.6;
}

/* Blog */
.blog {
  background-color: #fafafa;
  text-align: center;
  padding: 80px 40px;
}

.blog-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
}

.blog-card {
  background-color: white;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: 0.3s;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.blog-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.blog-content {
  padding: 15px;
  text-align: left;
}

.read-more {
  color: var(--gold);
  text-decoration: none;
  font-weight: 600;
}

/* Events */
.events {
  text-align: center;
  padding: 80px 40px;
}

.event-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
}

.event-card {
  background-color: white;
  border-radius: 8px;
  width: 280px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: 0.3s;
}

.event-card:hover {
  transform: translateY(-5px);
}

.event-date {
  color: var(--gold);
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

/* Footer */
footer {
  background-color: white;
  border-top: 1px solid #eee;
  padding: 50px 40px 30px;
  text-align: center;
  color: var(--dark);
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 20px;
}

.footer-left h3 {
  color: var(--gold);
}

.footer-left i {
  color: var(--gold);
  margin-right: 6px;
}

.footer-right ul {
  list-style: none;
  padding: 0;
}

.footer-right ul li {
  margin: 6px 0;
}

.footer-right ul li a {
  color: var(--dark);
  text-decoration: none;
  transition: 0.3s;
}

.footer-right ul li a:hover {
  color: var(--gold);
}

footer p {
  font-size: 0.9rem;
}
