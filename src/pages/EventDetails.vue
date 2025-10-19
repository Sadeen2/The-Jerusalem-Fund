<template>
  <div>
    <HeaderSection />

    <!-- Banner Section -->
    <section class="page-banner">
      <div class="breadcrumb">
        The Jerusalem Fund – Events – <span><strong>Event Details</strong></span>
      </div>
    </section>

    <!-- Event Card -->
    <section class="event-details">
      <div class="event-card">
        <img
          src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/a9f1/live/ec979910-6a9a-11ee-a748-119a837bdbcd.jpg.webp"
          alt="Event Image"
          class="event-img"
        />

        <div class="event-content">
          <div class="date-box">
            <span class="month">MAR</span>
            <span class="day">15</span>
            <span class="day-name">FRI</span>
          </div>

          <div class="details">
            <h2>Art & Culture: An Evening of Expression</h2>
            <p class="desc">
              Join us for a morning of stewardship along the banks of the Willow
              Creek! Volunteers of all ages will work together to remove litter,
              invasive plants, and debris, helping to restore habitat for fish and
              wildlife. We’ll provide gloves, trash bags, and a brief orientation on
              local species identification—just bring your enthusiasm and a reusable
              water bottle. Together, we can keep our waterways clean and healthy for
              generations to come.
            </p>

            <p class="info">
              Gallery 21 | 21 rue de la Paix 75002 Paris |
              <strong>6:00 PM - 9:00 PM</strong> Explore local art and engage with
              artists.
            </p>

            <button class="participate-btn">Participate</button>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "../components/Header.vue";
import FooterSection from "../components/Footer.vue";

export default {
  name: "EventDetails",
  components: { HeaderSection, FooterSection },
};
</script>

<style scoped>
/* Banner */
.page-banner {
  background: url("https://www.aljazeera.com/wp-content/uploads/2025/05/AFP__20250517__473W3AK__v2__HighRes__TopshotBritainIsraelPalestiniansConflictDemoHis-1747547242.jpg?resize=1170%2C780&quality=80")
    center/cover no-repeat;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 70px;
  color: white;
}
.page-banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
}
.breadcrumb {
  position: relative;
  z-index: 2;
  font-size: 0.95rem;
}

/* Event Details */
.event-details {
  display: flex;
  justify-content: center;
  padding: 40px 80px;
  font-family: "Open Sans", sans-serif;
  background: #fff;
}

/* Card Wrapper */
.event-card {
  background: #fff;
  border: 1px solid #ddd; 
  border-radius: 8px;
  box-shadow: none;
  max-width: 900px;
  margin: 0;
  overflow: hidden; 
}

/* Image */
.event-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  margin: 0; 
  display: block;
}

/* Content */
.event-content {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  text-align: left;
  padding: 25px 35px; 
  border: none; 
}

.date-box {
  text-align: center;
  width: 60px;
}

.month {
  display: block;
  font-size: 12px;
  color: #555;
  font-weight: 600;
  margin-bottom: 3px;
}

.day {
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: #111;
  line-height: 1;
}

.day-name {
  display: inline-block;
  background-color: #000;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 2px;
  margin-top: 4px;
}

.details {
  flex: 1;
}

.details h2 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #111;
}

.desc {
  color: #555;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 10px;
}

.info {
  color: #333;
  font-size: 13.5px;
  margin-bottom: 15px;
}

.participate-btn {
  background-color: #f3b300;
  color: #ffffff;
  border: none;
  width: 100%;
  padding: 6px 0;
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
  transition: background 0.3s;
}

.participate-btn:hover {
  background-color: #e0a800;
}

@media (max-width: 900px) {
  .event-content {
    flex-direction: column;
  }
}
</style>
