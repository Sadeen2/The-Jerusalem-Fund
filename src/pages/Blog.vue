<template>
  <div>
    <HeaderSection />

    <!-- Banner -->
    <section class="page-banner">
      <div class="breadcrumb">
        The Jerusalem Fund – <span><strong>Blog</strong></span>
      </div>
    </section>

    <!-- Main Section -->
    <section class="blog-list">
      <h1>Blogs</h1>
      <p class="intro">
        We continue to provide vibrant and relevant content to raise equal
        representation and opportunities, fostering deep understanding and partnership
        among various Palestinian voices and narratives.
      </p>

      <h2 class="section-title">The Jerusalem Fund’s <span>Blog</span></h2>
      <p class="subtext">Permission to narrate</p>

      <!-- Blog Cards Grid -->
      <div class="grid">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="card"
          @click="goToDetails(index)"
        >
          <div class="card-image">
            <img :src="post.image" alt="blog image" />
            <span class="tag">{{ post.tag }}</span>
          </div>
          <h2>{{ post.title }}</h2>
          <p class="date">{{ post.date }}</p>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "../components/Header.vue";
import FooterSection from "../components/Footer.vue";
import { useRouter } from "vue-router";

export default {
  name: "Blog",
  components: { HeaderSection, FooterSection },
  setup() {
    const router = useRouter();

    const posts = [
      {
        title: "Building Bridges: The Power of Collaboration",
        date: "June 14, 2025",
        tag: "Collaboration",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      },
      {
        title: "Celebrating Diversity: A Path to Unity",
        date: "June 13, 2025",
        tag: "Culture",
        image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
      },
      {
        title: "Empowerment Through Art",
        date: "June 12, 2025",
        tag: "Art",
        image: "https://images.unsplash.com/photo-1503264116251-35a269479413",
      },
      {
        title: "The Role of Technology in Advocacy",
        date: "June 11, 2025",
        tag: "Technology",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      },
      {
        title: "Voices for Change: Advocacy in Action",
        date: "June 10, 2025",
        tag: "Advocacy",
        image: "https://images.unsplash.com/photo-1485217988980-11786ced9454",
      },
      {
        title: "Fostering Creativity: Art for Social Change",
        date: "June 9, 2025",
        tag: "Creativity",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      },
      {
        title: "Sustainable Innovations: Leading the Way",
        date: "June 8, 2025",
        tag: "Sustainability",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      },
      {
        title: "Health Awareness: Breaking the Stigma",
        date: "June 7, 2025",
        tag: "Health",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
      },
      {
        title: "Tech Innovations: Shaping the Future",
        date: "June 6, 2025",
        tag: "Innovation",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      },
      {
        title: "Reflections on Resilience",
        date: "June 5, 2025",
        tag: "Resilience",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
      {
        title: "Community Spotlight: A Story of Hope",
        date: "June 4, 2025",
        tag: "Community",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        title: "New Perspectives: Growth Through Change",
        date: "June 3, 2025",
        tag: "Perspective",
        image: "https://images.unsplash.com/photo-1473187983305-f615310e7daa",
      },
      {
        title: "The Joy of Giving Back",
        date: "June 2, 2025",
        tag: "Volunteering",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      },
      {
        title: "Learning Through Experience",
        date: "June 1, 2025",
        tag: "Education",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
      {
        title: "Empathy in Everyday Life",
        date: "May 31, 2025",
        tag: "Empathy",
        image: "https://images.unsplash.com/photo-1503264116251-35a269479413",
      },
      {
        title: "Practicing Fair Trade",
        date: "May 30, 2025",
        tag: "Economy",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      },
      {
        title: "Improving Health Through Knowledge",
        date: "May 29, 2025",
        tag: "Health",
        image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
      },
      {
        title: "Media Impact Strategies",
        date: "May 28, 2025",
        tag: "Media",
        image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf",
      },
      {
        title: "Rising Stronger: Overcoming Challenges",
        date: "May 27, 2025",
        tag: "Motivation",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      },
      {
        title: "Finding Balance in Modern Life",
        date: "May 26, 2025",
        tag: "Wellness",
        image: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38",
      },
    ];

    const goToDetails = (index) => {
      if (index === 0) router.push("/blog-details");
    };

    return { posts, goToDetails };
  },
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
}

/* Blog Section */
.blog-list {
  padding: 50px 80px;
  font-family: "Open Sans", sans-serif;
  text-align: left;
}
.blog-list h1 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 10px;
}
.intro {
  color: #555;
  line-height: 1.6;
  max-width: 900px;
  margin-bottom: 40px;
}
.section-title {
  font-size: 18px;
  font-weight: 700;
}
.section-title span {
  color: #f3b300;
}
.subtext {
  color: #888;
  font-size: 14px;
  margin-bottom: 25px;
}

/* Blog Cards Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

/* Card Style */
.card {
  cursor: pointer;
  background: transparent;
  border: none;
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
}

/* Image container with tag */
.card-image {
  position: relative;
  width: 150%;
  height: 170px;
  overflow: hidden;
  border-radius: 15px;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #f3b300;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
  
  z-index: 2;
}

/* Text Section */
.card h2 {
  font-size: 15px;
  font-weight: 600;
  color: #111;
  margin-top: 10px;
  line-height: 1.4;
}
.date {
  color: #8c8c8c;
  font-size: 13px;
  font-weight: 600;
  margin-top: 5px;
}

/* Responsive */
@media (max-width: 1000px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
