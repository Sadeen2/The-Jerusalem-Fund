<template>
  <div>
    <!-- Top gold bar -->
    <div class="top-bar">
      <div class="contact">
        <i class="fa-solid fa-phone"></i> (202) 338 - 1985
      </div>
      <div class="social">
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
      </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar" :class="{ sticky: isSticky }">
      <div class="logo">
        <img
          src="https://thejerusalemfund.org/wp-content/uploads/2021/07/jerusalem-fund-masthead-1200-trans.png"
          alt="The Jerusalem Fund Logo"
        />
      </div>
      <ul>
        <li><router-link to="/who-we-are">Who we are</router-link></li>
        <li><router-link to="/what-we-do">What we do</router-link></li>
        <li><router-link to="/events">Events</router-link></li>
        <li><router-link to="/grants">Grants</router-link></li>
        <li><router-link to="/blog">Blogs</router-link></li>
        <li><router-link to="/media-library">Resource Library</router-link></li>
        <li><router-link to="/contact-us">Contact Us</router-link></li>
      </ul>
      <div class="search-icon" @click="searchClick">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  </div>
</template>
<script>
    export default {
    name: "HeaderSection",
    data() {
        return { isSticky: false };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
        this.isSticky = window.scrollY > 50;
        },
        searchClick() {
        alert("Search functionality coming soon!");
        },
    },
    };
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", Arial, sans-serif;
  overflow-x: hidden;
}

.top-bar {
  background-color: #d4a017;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 50px;
  font-size: 0.95rem;
}
.top-bar i {
  margin-right: 6px;
}
.social a {
  color: black;
  margin-left: 15px;
  font-size: 1.1rem;
  transition: 0.3s;
}
.social a:hover {
  color: white;
}

/* Navbar */
.navbar {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 60px;
  border-bottom: 1px solid #ddd;
  transition: 0.3s;
}
.logo img {
  height: 55px;
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 25px;
}
.navbar ul li a {
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: 0.3s;
}
.navbar ul li a:hover {
  color: #d4a017;
}
.search-icon i {
  font-size: 1.2rem;
  color: black;
  background-color: white;
  border-radius: 50%;
  padding: 8px;
  border: 1px solid black;
  transition: 0.3s;
}
.search-icon i:hover {
  background-color: #d4a017;
  color: white;
}
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>
