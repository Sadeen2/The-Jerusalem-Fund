<template>
  <div class="employment-page">
    <HeaderSection />

    <section class="page-banner">
      <div class="breadcrumb">
        The Jerusalem Fund – <span><strong>Employment Opportunities</strong></span>
      </div>
    </section>

    <section class="content">
      <h1 class="title">Employment Opportunities</h1>
      <p class="desc">
        We sponsor initiatives that promote cultural exchange, educational opportunities,
        and economic development for Palestinians, ensuring a brighter future.
      </p>

      <h2 class="section-subtitle">
  Upcoming <span>Jobs</span>
</h2>
<p class="section-desc">
  Your support can make a life-changing impact. Explore our latest appeals and contribute to those in urgent need today.
</p>

<div class="jobs-grid">
  <div class="job-card" v-for="(job, index) in jobs" :key="index">
    <div class="job-header">
      <i class="fa-regular fa-folder-open job-icon"></i>
      <h3>{{ job.title }}</h3>
    </div>
    <p class="job-desc">{{ job.description }}</p>
    <div class="job-footer">
      <i class="fa-solid fa-clock"></i>
      <span class="deadline-label">Deadline :</span>
      <span class="deadline-date">{{ job.deadline }}</span>
    </div>
  </div>
</div>


      <h2 class="section-subtitle">Internships</h2>
<p class="section-desc">
  Your support can make a life-changing impact. Explore our latest appeals and contribute to those in urgent need today.
</p>

<div class="internships-grid">
  <div class="internship-card" v-for="(internship, index) in internships" :key="index">
    <img :src="internship.image" alt="Internship" class="internship-img" />
    <div class="internship-info">
      <div class="job-header">
        <i class="fa-regular fa-folder-open job-icon"></i>
        <h3>{{ internship.title }}</h3>
      </div>
      <p class="job-desc">{{ internship.description }}</p>
      <div class="job-footer">
        <i class="fa-solid fa-clock"></i>
        <span class="deadline-label">Deadline :</span>
        <span class="deadline-date">{{ internship.deadline }}</span>
      </div>
    </div>
  </div>
</div>

    </section>

    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from '../components/Header.vue'
import FooterSection from '../components/Footer.vue'

export default {
  name: 'EmploymentOpportunities',
  components: { HeaderSection, FooterSection },
  data() {
    return {
     jobs: [
  {
    title: 'Front-End Developer',
    description:
      "We’re seeking a passionate Front-End Developer to join our team and help translate UI/UX designs into high-quality, performant web applications.",
    deadline: '12 Jan 2026',
  },
  {
    title: 'Back-End Developer',
    description:
      "We’re looking for a skilled Back-End Developer to build and maintain the server-side logic of our applications, ensuring high performance and scalability.",
    deadline: '20 Jan 2026',
  },
  {
    title: 'Front-End Developer',
    description:
      "We’re seeking a passionate Front-End Developer to join our team and help translate UI/UX designs into high-quality, performant web applications.",
    deadline: '12 Jan 2026',
  },
  {
    title: 'Front-End Developer',
    description:
      "We’re seeking a passionate Front-End Developer to join our team and help translate UI/UX designs into high-quality, performant web applications.",
    deadline: '12 Jan 2026',
  },
  {
    title: 'Front-End Developer',
    description:
      "We’re seeking a passionate Front-End Developer to join our team and help translate UI/UX designs into high-quality, performant web applications.",
    deadline: '12 Jan 2026',
  },
  {
    title: 'Front-End Developer',
    description:
      "We’re seeking a passionate Front-End Developer to join our team and help translate UI/UX designs into high-quality, performant web applications.",
    deadline: '12 Jan 2026',
  },
],
internships: [
  {
    title: 'UI/UX Internship',
    description:
      "We’re seeking a passionate Front-End Developer to join our team and help translate UI/UX designs into high-quality, performant web applications.",
    deadline: '12 Jan 2026',
    image: 'https://img.freepik.com/premium-photo/group-young-business-people-working-together-office_1303-20623.jpg',
  },
  {
    title: 'Front-End Internship',
    description:
      "We’re seeking a passionate Front-End Developer to join our team and help translate UI/UX designs into high-quality, performant web applications.",
    deadline: '12 Jan 2026',
    image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg',
  },
  {
    title: 'UI/UX Internship',
    description:
      "We’re seeking a passionate Front-End Developer to join our team and help translate UI/UX designs into high-quality, performant web applications.",
    deadline: '12 Jan 2026',
    image: 'https://img.freepik.com/premium-photo/group-young-business-people-working-together-office_1303-20623.jpg',
  },
  {
    title: 'Back-End Internship',
    description:
      "We’re seeking a passionate Back-End Developer to join our team and help translate UI/UX designs into high-quality, performant web applications.",
    deadline: '12 Jan 2026',
    image: 'https://img.freepik.com/premium-photo/business-meeting-office_1303-23835.jpg',
  },
],

    }
  }, 
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.page-banner {
  background: url("https://www.aljazeera.com/wp-content/uploads/2025/05/AFP__20250517__473W3AK__v2__HighRes__TopshotBritainIsraelPalestiniansConflictDemoHis-1747547242.jpg?resize=1170%2C780&quality=80") center/cover no-repeat;
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

.content {
  padding: 70px 60px;
  background: #fff;
}
.title {
  font-size: 1.5rem;
  color: #111;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: left;
}
.desc {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 40px;
  text-align: left;
  max-width: 900px;
}
.section-subtitle {
  color: #111;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: left;
}
.section-subtitle span {
  color: #d4a017;
}
.section-desc {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 30px;
  text-align: left;
  max-width: 850px;
}

/* JOB CARDS */
.jobs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
}

.job-card {
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 20px 25px;
  transition: 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
  text-align: left;

}

.job-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.job-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.job-icon {
  color: #3498db;
  font-size: 1.3rem;
}

.job-header h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #111;
  margin: 0;
  text-align: left;
}

.job-desc {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 15px;
  text-align: left;
}

.job-footer {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #d9534f;
  font-size: 0.9rem;
  text-align: left;
}

.deadline-label {
  font-weight: 600;
  color: #d9534f;
}

.deadline-date {
  color: #222;
  font-weight: 500;
}

/* INTERNSHIPS */
.internships-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-bottom: 80px;
}

.internship-card {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  overflow: hidden;
  padding: 15px;
  transition: 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
  text-align: left;
}

.internship-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.internship-img {
  width: 120px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
}

.internship-info {
  flex: 1;
}

.job-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.job-icon {
  color: #3498db;
  font-size: 1.2rem;
}

.job-header h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #111;
  margin: 0;
}

.job-desc {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 10px;
  text-align: left;
}

.job-footer {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #d9534f;
  font-size: 0.9rem;
}

.deadline-label {
  font-weight: 600;
  color: #d9534f;
}

.deadline-date {
  color: #222;
  font-weight: 500;
}

</style>
