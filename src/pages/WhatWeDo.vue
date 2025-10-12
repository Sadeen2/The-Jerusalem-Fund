<template>
  <div>
    <HeaderSection />

    <!-- Banner -->
    <section class="page-banner">
      <div class="breadcrumb">
        The Jerusalem Fund – <span><strong>What We Do</strong></span>
      </div>
    </section>

    <!-- Main -->
    <div class="what-we-do">
      <section class="intro">
        <h1>What We Do</h1>
        <p>
          Our team actively engages with policymakers to influence constructive dialogue
          and favorable legislation that impacts Palestinian rights and development.
        </p>
      </section>

      <!-- Cards -->
      <section class="cards">
        <!-- Card 1 -->
        <div class="card">
          <img
            src="https://felesteen.news/thumb/w920/uploads/images/2022/09/Aia0A.jpg"
            alt="Education"
          />
          <div class="card-content">
            <h2>Education</h2>
            <h4>The Palestine Center</h4>
            <p>
              comprises our educational programs. They give voice to the Palestinian narrative through policy
              briefings, lecture series, conferences, symposia, scholarly research publications and an extensive
              research library. The Palestine Center’s analysis emphasizes.
            </p>
            <button class="learn-more">Learn more</button>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="card">
          <img
            src="https://www.qou.edu/resources/attachedFiles/img/79696.jpg"
            alt="Community Development"
          />
          <div class="card-content">
            <h2>Community Development</h2>
            <h4>The Humanitarian Link</h4>
            <p>
              program extends grants to hospitals, orphanages, clinics, schools, universities and civil society
              organizations in the Occupied Territory and surrounding refugee camps in an effort to sustain the
              basic conditions of life in Palestine and to overcome the burdens of occupation.
            </p>
            <div class="buttons">
              <button class="learn-more" @click="goToCommunity">Learn more</button>
              <button class="donate">Palestine Diabetes Institute</button>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="card">
          <img
            src="https://static01.nyt.com/images/2018/10/18/opinion/16asfour/merlin_135636171_c577f0d8-2e2b-4b15-a8ad-67d7ca3b421a-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            alt="Culture"
          />
          <div class="card-content">
            <h2>Culture</h2>
            <h4>Gallery Al-Quds</h4>
            <p>
              The cultural program of the Jerusalem Fund, showcases the rich culture and national heritage of the
              Palestinian people, as well as that of surrounding Arab societies. The Gallery hosts bi-monthly exhibits of
              fine art and/or photography, an annual juried art competition.
            </p>
            <button class="learn-more" @click="goToCulture">Learn more</button>
          </div>
        </div>
      </section>
    </div>

    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "../components/Header.vue";
import FooterSection from "../components/Footer.vue";

export default {
  name: "WhatWeDo",
  components: { HeaderSection, FooterSection },
  methods: {
    goToCommunity() {
      this.$router.push('/community-development');
    },
    goToCulture() {
      this.$router.push('/culture');
    }
  },
};
</script>

<style scoped>
.what-we-do {
  font-family: "Open Sans", sans-serif;
  color: #333;
  padding-bottom: 80px;
}

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
.page-banner::before { content: ""; position: absolute; inset: 0; background: rgba(0,0,0,.6); }
.breadcrumb { position: relative; z-index: 2; font-size: .95rem; }

.intro { padding: 50px 120px 20px; text-align: left; }
.intro h1 { font-size: 28px; font-weight: 700; margin-bottom: 10px; }
.intro p { color: #555; font-size: 1rem; max-width: 900px; line-height: 1.6; }

.cards {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 10px 90px 0;
}

.card {
  display: flex;
  align-items: stretch; 
  background: white;
  border-radius: 15px;
  padding: 0; 
  overflow: hidden; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  position: relative;
}

.card img {
  width: 250px;
  height: auto;
  object-fit: cover;
  border-radius: 0; 
  flex-shrink: 0;
}

.card-content {
  flex: 1;
  padding: 20px 22px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-content h2 {
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin: 0 0 4px;
}

.card-content h4 {
  font-size: 12px;
  font-weight: 500;
  color: #888;
  margin: 0 0 10px;
}

.card-content p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 14px;
}

.buttons {
  display: flex;
  align-items: center;
  gap: 6px; 
  margin-top: 5px;
}

.learn-more {
  background-color: #f3b300;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 14px; 
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  width: 130px;
  min-width: 85px;
}

.donate {
  background-color: transparent;
  color: #f3b300;
  border: 1px solid #f3b300;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  padding: 5px 12px;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  width: auto;
  min-width: 150px;
}

.learn-more:hover {
  background-color: #d99a00;
}

.donate:hover {
  background-color: #f3b300;
  color: #fff;
}


@media (max-width: 860px) {
  .cards { padding: 10px 20px 0; }
  .card { flex-direction: column; min-height: auto; }
  .card img { width: 100%; height: 200px; }
  .card-content { padding: 16px; }
}
</style>
