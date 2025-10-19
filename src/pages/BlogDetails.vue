<template>
  <div>
    <!-- Header -->
    <HeaderSection />

    <!-- Banner -->
    <section class="page-banner">
      <div class="breadcrumb">
        The Jerusalem Fund – Blog – <span><strong>Blog Details</strong></span>
      </div>
    </section>

    <!-- Blog Details Section -->
    <section class="blog-details">
   <router-link to="/blog" class="back-link">← Back to Blogs</router-link>


      <div class="content-wrapper">
        <!-- Image -->
        <div class="image-box">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            alt="Building Bridges"
          />
        </div>

        <!-- Text -->
        <div class="text-box">
          <span class="tag">Collaboration</span>
          <h2>Building Bridges: The Power of Collaboration</h2>
          <p class="date">12 June 2025</p>
          <p class="desc">
            We envision a world where Palestinians have equal representation and
            opportunities, fostering deep understanding and partnership between the
            United States and Palestine. We envision a world where Palestinians have
            equal representation and opportunities, fostering deep understanding and
            partnership between the United States and Palestine. We envision a world
            where Palestinians have equal representation and opportunities, fostering
            deep understanding and partnership between the United States and Palestine.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "../components/Header.vue";
import FooterSection from "../components/Footer.vue";

export default {
  name: "BlogDetails",
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

/* Blog Details */
.blog-details {
  padding: 50px 100px;
  font-family: "Open Sans", sans-serif;
  color: #222;
}
.back-link {
  display: inline-block;
  color: #555;
  font-size: 14px;
  margin-bottom: 25px;
  text-decoration: none;
    text-align: left; 
  width: 100%; 
  margin-left: 0; 
}
.back-link:hover {
  text-decoration: underline;
}

/* Layout */
.content-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}

/* Image */
.image-box img {
  width: 350px;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  display: block;
}

/* Text Content */
.text-box {
  max-width: 600px;
   text-align: left;
}
.tag {
  background: #f3b300;
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
}
.text-box h2 {
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0 5px;
}
.date {
  color: #888;
  font-size: 13px;
  margin-bottom: 10px;
}
.desc {
  color: #444;
  font-size: 14px;
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 900px) {
  .content-wrapper {
    flex-direction: column;
  }
  .image-box img {
    width: 100%;
    height: auto;
  }
}
</style>
