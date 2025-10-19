<template>
  <div>
    <HeaderSection />

    <!-- Banner -->
    <section class="page-banner">
      <div class="breadcrumb">
        The Jerusalem Fund – <span><strong>Events</strong></span>
      </div>
    </section>

    <!-- Events Section -->
    <section class="events">
      <div class="container">
        <h1>Events</h1>
        <p class="intro">
          The Jerusalem Fund is dedicated to raising awareness among the American
          public and decision-makers regarding the history, current situation, and
          future prospects of Palestine, while also offering developmental assistance
          to Palestinian communities.
        </p>

        <!-- Upcoming Events -->
        <h2>Upcoming <span>Events</span></h2>
        <p class="subtext">
          Your support can make a life-changing impact. Explore our latest appeals and
          contribute to those in urgent need today
        </p>

        <div class="grid">
          <div
            v-for="(event, index) in upcomingEvents"
            :key="index"
            class="event-card"
          >
            <img :src="event.image" alt="event image" class="event-img" />
            <div class="card-body">
              <div class="date-box">
                <span class="month">{{ event.month }}</span>
                <span class="day">{{ event.day }}</span>
                <span class="day-name">{{ event.dayName }}</span>
              </div>
              <div class="details">
                <h3>{{ event.title }}</h3>
                <p class="location">{{ event.location }}</p>
                <p class="time">{{ event.time }}</p>
                <button class="btn">Participate</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Past Events -->
<h2 class="past-title">Past <span>Events</span></h2>
<div class="see-all">
  <router-link to="/past-events" class="see-all-btn">
    See All
  </router-link>
</div>

<p class="subtext">
  Your support can make a life-changing impact. Explore our latest appeals and contribute
  to those in urgent need today
</p>

<div class="grid past">
  <div v-for="(event, index) in pastEvents" :key="index" class="past-card">
    <img :src="event.image" alt="event image" />
    <div class="past-body">
      <h3>{{ event.title }}</h3>
      <p class="info">{{ event.location }}</p>
      <p class="time">{{ event.time }}</p>
      <p class="desc">{{ event.desc }}</p>
      
      <button class="view-btn">View Event Details</button>
    </div>
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
  name: "Events",
  components: { HeaderSection, FooterSection },
  data() {
    return {
      upcomingEvents: [
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4d/Dome_of_the_Rock_by_Peter_Mulligan.jpg",
          month: "MAR",
          day: "20",
          dayName: "WED",
          title: "Tech Workshop: Code and Create",
          location: "Innovation Space | 10 Blvd Strasbourg 75010 Paris",
          time: "2:30 PM – 5:00 PM",
        },
        {
          image:
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
          month: "MAR",
          day: "28",
          dayName: "FRI",
          title: "Business Networking: Connect and Collaborate",
          location: "Café Networking | 10 Avenue des Champs-Élysées 75008 Paris",
          time: "4:00 PM – 7:00 PM",
        },
        {
          image:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
          month: "APR",
          day: "05",
          dayName: "SAT",
          title: "Health & Wellness: Mindfulness Retreat",
          location: "Serenity Center | 15 Rue de Santé 75013 Paris",
          time: "9:00 AM – 3:30 PM",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4d/Dome_of_the_Rock_by_Peter_Mulligan.jpg",
          month: "APR",
          day: "12",
          dayName: "FRI",
          title: "Creative Writing: Storytelling Workshop",
          location: "Library Café | 15 Rue des Écrivains 75005 Paris",
          time: "1:00 PM – 4:00 PM",
        },
        {
          image:
            "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/a9f1/live/ec979910-6a9a-11ee-a748-119a837bdbcd.jpg.webp",
          month: "APR",
          day: "19",
          dayName: "FRI",
          title: "Fashion Symposium: Trends and Sustainability",
          location: "Fashion House | 10 Boulevard Haussmann 75009 Paris",
          time: "10:00 AM – 1:30 PM",
        },
        {
          image:
            "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/a9f1/live/ec979910-6a9a-11ee-a748-119a837bdbcd.jpg.webp",
          month: "MAR",
          day: "15",
          dayName: "FRI",
          title: "Art & Culture: An Evening of Expression",
          location: "Gallery 21 | 21 Rue de la Paix 75002 Paris",
          time: "6:00 PM – 9:00 PM",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4d/Dome_of_the_Rock_by_Peter_Mulligan.jpg",
          month: "APR",
          day: "22",
          dayName: "MON",
          title: "Digital Marketing: Strategies for Success",
          location: "Marketing Hub | 12 Rue de la Communication 75009 Paris",
          time: "10:00 AM – 3:00 PM",
        },
        {
          image:
            "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/a9f1/live/ec979910-6a9a-11ee-a748-119a837bdbcd.jpg.webp",
          month: "APR",
          day: "29",
          dayName: "MON",
          title: "Photography Workshop: Capturing Moments",
          location: "Photo Studio | 18 Boulevard de la République 75011 Paris",
          time: "2:00 PM – 5:00 PM",
        },
        {
          image:
            "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/a9f1/live/ec979910-6a9a-11ee-a748-119a837bdbcd.jpg.webp",
          month: "MAR",
          day: "07",
          dayName: "THU",
          title: "Travel Expo: Explore the World",
          location: "Travel Center | 9 Avenue des Voyages 75001 Paris",
          time: "11:00 AM – 4:00 PM",
        },
      ],
      pastEvents: [
  {
    image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/a9f1/live/ec979910-6a9a-11ee-a748-119a837bdbcd.jpg.webp",
    title: "Community Spotlight: A Story of Resilience",
    location: "Reid Hall | 4 rue de Chevreuse 75006 Paris",
    time: "12:00 PM – 2:00 PM",
    desc: "Event time is displayed in your time zone."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Dome_of_the_Rock_by_Peter_Mulligan.jpg",
    title: "Innovators Meetup: Shape the Future of Tech",
    location: "Tech Hall | 45 avenue de l’Opéra 75002 Paris",
    time: "10:00 AM – 1:00 PM",
    desc: "Join us for discussions on tech."
  },
  {
    image: "https://www.paluniv.edu.ps/wp-content/uploads/2025/07/IMG_9633-scaled.jpg",
    title: "Art & Culture: An Evening of Expression",
    location: "Gallery 21 | 21 rue de la Paix 75002 Paris",
    time: "6:00 PM – 9:00 PM",
    desc: "Explore local art and engage with artists."
  }
],

    };
  },
};
</script>

<style scoped>
.page-banner {
  background: url("https://www.aljazeera.com/wp-content/uploads/2025/05/AFP__20250517__473W3AK__v2__HighRes__TopshotBritainIsraelPalestiniansConflictDemoHis-1747547242.jpg?resize=1170%2C780&quality=80")
    center/cover no-repeat;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 70px;
  color: white;
  position: relative;
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
}

.events {
  padding: 50px 80px;
  font-family: "Open Sans", sans-serif;
  text-align: left;
}
.events h1 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 10px;
}
.intro {
  color: #555;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 800px;
}
.events h2 {
  font-size: 18px;
  font-weight: 700;
}
.events h2 span {
  color: #f3b300;
}
.subtext {
  color: #777;
  font-size: 14px;
  margin-bottom: 20px;
}

/* Grid Layout */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 40px;
}

/* Event Card (Exact style from image) */
.event-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-3px);
}

/* Image */
.event-card img {
  width: 100%;
  height: 190px;
  object-fit: cover;
  border-bottom: 1px solid #f1f1f1;
}

/* Body */
.card-body {
  display: flex;
  gap: 15px;
  padding: 20px;
}

/* Date Box */
.date-box {
  text-align: center;
  width: 60px;
  flex-shrink: 0;
}

.month {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #111;
  letter-spacing: 1px;
  margin-bottom: 2px;
}

.day {
  display: block;
  font-size: 30px;
  font-weight: 700;
  color: #111;
  line-height: 1;
  margin-bottom: 4px;
}

.day-name {
  display: inline-block;
  background: #f3b300; 
  color: #fff; 
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 2px;
}




/* Details Text */
.details {
  flex: 1;
}

.details h3 {
  font-size: 15px;
  font-weight: 700;
  color: #111;
  margin-bottom: 8px;
}

.details p {
  color: #999; 
  font-size: 13px;
  line-height: 1.6;
  margin: 0; 
}

.details .time {
  display: inline;
  color: #999;
  font-size: 13px;
  font-weight: 400;
}

.details .desc {
  color: #999;
  font-size: 13px;
  line-height: 1.6;
  margin-top: 2px;
}

/* Button */
.btn {
  background: #f8f8f8;
  color: #333;
  border: 1px solid #ddd;
  font-size: 13px;
  font-weight: 600;
  border-radius: 8px;
  padding: 7px 0;
  width: 100%;
  transition: all 0.3s;
}

.btn:hover {
  background: #f3b300;
  color: #fff;
  border-color: #f3b300;
}

/* Past Events Section */
.past-title {
  margin-top: 50px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
}
.past-title span {
  color: #f3b300;
}

.past {
  margin-top: 25px;
}

.past-card {
  border: 1px solid #eee;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  transition: transform 0.3s;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.past-card:hover {
  transform: translateY(-3px);
}

.past-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.past-body {
  padding: 15px;
  text-align: left;
}

.past-body h3 {
  font-size: 15px;
  font-weight: 700;
  color: #111;
  margin-bottom: 6px;
}

.past-body p {
  font-size: 13px;
  color: #999;
  line-height: 1.5;
  margin-bottom: 4px;
}

.view-btn {
  background: #f8f8f8; 
  border: 1px solid #e0e0e0;
  color: #111;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 0;
  border-radius: 6px;
  width: 100%;
  margin-top: 8px;
  transition: all 0.3s ease;
}

.view-btn:hover {
  background: #eaeaea;
}

/* See all button */
.see-all {
  text-align: right;
  margin-top: 10px;
}
.see-all-btn {
  background: none;
  border: 1px solid #f3b300;
  color: #f3b300;
  font-size: 12px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 15px;
  transition: 0.3s;
}
.see-all-btn:hover {
  background: #f3b300;
  color: #fff;
}


/* Responsive */
@media (max-width: 1000px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
