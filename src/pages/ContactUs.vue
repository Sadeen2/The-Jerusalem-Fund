<template>
  <div class="contact-page">
    <HeaderSection />

    <section class="contact-section">
      <!-- LEFT SIDE -->
      <div class="contact-info">
        <a href="#" class="contact-label">Contact Us..</a>
        <h2>Your Voice, Our Mission</h2>
        <p>
          The Jerusalem Fund is a non-profit organization devoted to supporting
          education, development, and humanitarian programs in Palestine and the
          broader Middle East.
        </p>

        <ul class="contact-list">
          <li><span class="icon"><i class="fa-solid fa-phone"></i></span> +972-2-627-0020</li>
          <li><span class="icon"><i class="fa-solid fa-phone"></i></span> +972-2-627-0010</li>
          <li><span class="icon"><i class="fa-solid fa-envelope"></i></span> info@jerusalemfund.org</li>
          <li><span class="icon"><i class="fa-solid fa-location-dot"></i></span> 1234 Al-Quds Street, Jerusalem, Palestine</li>
        </ul>
      </div>

      <!-- RIGHT SIDE -->
      <form class="contact-form">
        <input type="text" placeholder="Full Name" required />
        <div class="phone-field">
          <span class="flag">🇵🇸 +972</span>
          <input type="tel" placeholder="Phone Number" required />
        </div>
        <textarea placeholder="Message / Inquiry" required></textarea>
        <p class="note">
          Please fill out the form below and one of our team members will get
          back to you—usually within two business days.
        </p>
        <button type="submit">Send</button>
      </form>
    </section>

    <!-- Location & Parking -->
    <section class="contact-location">
      <div class="location-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKrDn_b38I2YMyl2LApX4VLx2GLdHbXrM9w&s" alt="Potomac Plaza" />
        <div class="text">
            <h4>Location & Parking</h4>
            <p>
            The offices of The Jerusalem Fund and its educational program, the
            Palestine Center, are located on the ground level of the Potomac Plaza
            Building.
            </p>
        </div>
      </div>

      <div class="location-card">
        <img src="data:image/jpeg;base64,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" alt="Potomac Plaza" />
        <div class="text">
            <h4>Street Parking</h4>
            <p>
            There is no parking available at the Potomac Plaza building. Only six
            spaces are available in front of The Jerusalem Fund offices.
            </p>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
import HeaderSection from '../components/Header.vue'
import FooterSection from '../components/Footer.vue'
</script>

<style scoped>
.contact-page {
  font-family: "Poppins", sans-serif;
  color: #222;
  background-color: #fff;
}

/* Layout */
.contact-section {
  display: flex;
  padding: 60px 0;
  text-align: left;
  width: 80%;
  margin-left: 100px;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}

/* LEFT SIDE */
.contact-info {
  flex: 1;
  min-width: 320px;
}

.contact-label {
  color: #f9b000;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.95rem;
}

.contact-info h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 10px 0;
}

.contact-info p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 20px;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

.contact-list li {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #222;
  margin-bottom: 14px;
}

.contact-list .icon {
  background-color: #f9b000; 
  color: #111;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 1rem;
  flex-shrink: 0;
}


/* RIGHT SIDE */
.contact-form {
  flex: 1;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  width: 100%;
}

.phone-field {
  display: flex;
  align-items: center;
  gap: 8px;
}

.phone-field .flag {
  background: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 0.9rem;
  color: #333;
}

.contact-form textarea {
  height: 120px;
  resize: none;
}

.contact-form .note {
  font-size: 0.7rem;
  color: #666;
  margin: 0;
}

.contact-form button {
  align-self: flex-end;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 25px;
  border-radius: 5px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: 0.3s;
}

.contact-form button:hover {
  background-color: #f9b000;
  color: #000;
}

/* Responsive */
@media (max-width: 900px) {
  .contact-section {
    flex-direction: column;
  }

  .contact-form button {
    align-self: center;
  }
}
.contact-location {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 40px 0%;
  min-height: 350px;
  flex-wrap: wrap;
}

.location-card {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 25px 30px;
  width: 45%;
  min-width: 340px;
  border: 1px solid #eee;
}

.location-card img {
  width: 250px;
  height: auto;
  border-radius: 15px;
  margin-right: 25px;
  object-fit: contain;
}

.location-card .text h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #111;
}

.location-card .text p {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
  margin: 15px 0 0 0;
}

/* Responsive for mobile */
@media (max-width: 900px) {
  .contact-location {
    flex-direction: column;
    align-items: center;
  }

  .location-card {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }

  .location-card img {
    margin: 0 0 15px 0;
  }
}
</style>
