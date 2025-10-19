<template>
  <div>
    <HeaderSection />

    <!-- Banner -->
    <section class="page-banner">
      <div class="breadcrumb">
        The Jerusalem Fund – <span><strong>Past Events</strong></span>
      </div>
    </section>

    <!-- Past Events Section -->
    <section class="events">
      <div class="container">
        <!-- Header with Title + Button -->
        <div class="past-header">
          <h1>Past <span>Events</span></h1>
          <button class="see-all-btn">See All</button>
        </div>

        <p class="subtext">
          Your support can make a life-changing impact. Explore our latest appeals and contribute
          to those in urgent need today
        </p>

        <!-- Grid of Past Events -->
        <div class="grid">
          <div v-for="(event, index) in pastEvents" :key="index" class="past-card">
            <img :src="event.image" alt="event image" />
            <div class="past-body">
              <h3>{{ event.title }}</h3>
              <p class="info">{{ event.location }}</p>
              <p class="time">{{ event.time }}</p>
              <p class="desc">{{ event.desc }}</p>
              <button class="view-btn" @click="goToDetails">View Event Details</button>

            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script>
import { useRouter } from "vue-router"; 
import HeaderSection from "../components/Header.vue";
import FooterSection from "../components/Footer.vue";

export default {
  name: "PastEvents",
  components: { HeaderSection, FooterSection },
  setup() {
    const router = useRouter();

    const goToDetails = () => {
      router.push("/event-details");
    };

    return { goToDetails };
  },
  data() {
    return {
      pastEvents: [
        {
          title: "Community Spotlight: A Story of Resilience",
          image: "https://www.paluniv.edu.ps/wp-content/uploads/2025/07/IMG_9633-scaled.jpg",
          location: "Reid Hall | 4 rue de Chevreuse 75006 Paris",
          time: "12:00 PM – 2:00 PM",
          desc: "Event time is displayed in your time zone.",
        },
        {
          title: "Innovators Meetup: Shape the Future of Tech",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Dome_of_the_Rock_by_Peter_Mulligan.jpg",
          location: "Tech Hall | 45 avenue de l’Opéra 75002 Paris",
          time: "10:00 AM – 1:00 PM",
          desc: "Join us for discussions on tech.",
        },
        {
          title: "Art & Culture: An Evening of Expression",
          image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/a9f1/live/ec979910-6a9a-11ee-a748-119a837bdbcd.jpg.webp",
          location: "Gallery 21 | 21 rue de la Paix 75002 Paris",
          time: "6:00 PM – 9:00 PM",
          desc: "Explore local art and engage with artists.",
        },
        {
          title: "Health & Wellness: Mindfulness in Daily Life",
          image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
          location: "Serenity Center | 15 rue de Santé 75013 Paris",
          time: "2:00 PM – 5:00 PM",
          desc: "Rejuvenate with guided sessions.",
        },
        {
          title: "Culinary Workshop: Taste the World — A Global Culinary Experience",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
          location: "Chef Studio | 12 rue du Gourmet 75011 Paris",
          time: "3:00 PM – 6:00 PM",
          desc: "Hands-on global cuisine experience.",
        },
        {
          title: "Finance & Investment: Navigating the Market",
          image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
          location: "Biz Center | 10 rue du Commerce 75015 Paris",
          time: "11:00 AM – 1:00 PM",
          desc: "Learn strategies from top experts.",
        },
        {
          title: "Innovators Meetup: Shape the Future of Tech",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Dome_of_the_Rock_by_Peter_Mulligan.jpg",
          location: "Tech Hall | 45 avenue de l’Opéra 75002 Paris",
          time: "10:00 AM – 1:00 PM",
          desc: "Join us for discussions on tech.",
        },
        {
          title: "Art & Culture: An Evening of Expression",
          image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/a9f1/live/ec979910-6a9a-11ee-a748-119a837bdbcd.jpg.webp",
          location: "Gallery 21 | 21 rue de la Paix 75002 Paris",
          time: "6:00 PM – 9:00 PM",
          desc: "Explore local art and engage with artists.",
        },
        {
          title: "Community Spotlight: A Story of Resilience",
          image: "https://www.paluniv.edu.ps/wp-content/uploads/2025/07/IMG_9633-scaled.jpg",
          location: "Reid Hall | 4 rue de Chevreuse 75006 Paris",
          time: "12:00 PM – 2:00 PM",
          desc: "Event time is displayed in your time zone.",
        },
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

/* Section */
.events {
  padding: 50px 80px;
  font-family: "Open Sans", sans-serif;
  text-align: left;
}
.past-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.past-header h1 {
  font-size: 26px;
  font-weight: 700;
}
.past-header h1 span {
  color: #f3b300;
}
.subtext {
  color: #777;
  font-size: 14px;
  margin-bottom: 30px;
}

/* See All Button */
.see-all-btn {
  background: none;
  border: 1px solid #f3b300;
  color: #f3b300;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 15px;
  border-radius: 15px;
  transition: 0.3s;
}
.see-all-btn:hover {
  background: #f3b300;
  color: white;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

/* Past Card */
.past-card {
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
}
.past-card:hover {
  transform: translateY(-3px);
}
.past-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}
.past-body {
  padding: 15px;
}
.past-body h3 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
}
.past-body p {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}
.view-btn {
  background: #f9f9f9;
  border: 1px solid #ddd;
  color: #111;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 0;
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;
  transition: 0.3s;
}
.view-btn:hover {
  background: #f3b300;
  border-color: #f3b300;
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
