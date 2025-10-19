<template>
  <div>
    <HeaderSection />

    <!-- Banner -->
    <section class="page-banner">
      <div class="breadcrumb">
        The Jerusalem Fund – <span><strong>Media Library</strong></span>
      </div>
    </section>

    <!-- Main Content -->
    <section class="media-library">
      <div class="container">
        <h1>Media Library</h1>
        <p class="intro">
          We aim to empower and reach a broad audience by sharing our stories
          of impact through an online archive of recorded events, lectures, and
          conferences.
        </p>

        <h2>Videos</h2>
        <p class="description">
          Many of our programs are recorded and made available online. Here are
          the latest videos we’ve published. Visit our blog for more details on
          these programs, and subscribe to our YouTube channel.
        </p>

        <!-- Video Grid -->
        <div class="video-grid">
          <div
            v-for="(video, index) in videos"
            :key="index"
            class="video-card"
          >
            <iframe
              :src="video.link"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <h3>{{ video.title }}</h3>
            <p class="date">{{ video.date }}</p>
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
  name: "MediaLibrary",
  components: { HeaderSection, FooterSection },
  data() {
    return {
      videos: [
        {
          title: "Voices for Change: Advocacy in Action",
          date: "June 15, 2025",
          link: "https://www.youtube.com/embed/NayMo2wQjDc"
        },
        {
          title: "Sustainable Futures: Innovations in Green Technology",
          date: "July 20, 2025",
          link: "https://www.youtube.com/embed/NayMo2wQjDc"
        },
        {
          title: "Empowering Communities: Building Local Resilience",
          date: "August 10, 2025",
          link: "https://www.youtube.com/embed/NayMo2wQjDc"
        },
        {
          title: "Cultural Connections: Celebrating Diversity Through Art",
          date: "September 5, 2025",
          link: "https://www.youtube.com/embed/NayMo2wQjDc"
        },
        {
          title: "Digital Transformation: The Future of Remote Work",
          date: "October 12, 2025",
          link: "https://www.youtube.com/embed/NayMo2wQjDc"
        },
        {
          title: "Health Matters: Advances in Mental Wellness Support",
          date: "November 18, 2025",
          link: "https://www.youtube.com/embed/NayMo2wQjDc"
        },
        {
          title: "Community Spotlight: A Story of Resilience",
          date: "February 27, 2025",
          link: "https://www.youtube.com/embed/NayMo2wQjDc"
        },
        {
          title: "Innovators Meetup: Shape the Future",
          date: "March 3, 2025",
          link: "https://www.youtube.com/embed/NayMo2wQjDc"
        },
        {
          title: "Art & Culture: An Evening of Expression",
          date: "March 15, 2025",
          link: "https://www.youtube.com/embed/NayMo2wQjDc"
        }
      ]
    };
  }
};
</script>

<style scoped>
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

/* Main Section */
.media-library {
  padding: 50px 100px;
  font-family: "Open Sans", sans-serif;
  color: #333;
}
.container {
  max-width: 1100px;
  margin: auto;
  text-align: left;
}
.media-library h1 {
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
.media-library h2 {
  font-size: 20px;
  margin-bottom: 5px;
}
.description {
  color: #666;
  font-size: 14px;
  margin-bottom: 25px;
}

/* Video Grid */
.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.video-card {
  text-align: left;
}
.video-card iframe {
  width: 100%;
  height: 180px;
  border-radius: 10px;
}
.video-card h3 {
  font-size: 15px;
  font-weight: 600;
  margin-top: 8px;
  color: #222;
}
.date {
  color: #888;
  font-size: 13px;
}
@media (max-width: 900px) {
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .video-grid {
    grid-template-columns: 1fr;
  }
}
</style>
