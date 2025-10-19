<template>
  <div class="page-container">
    <!-- Header -->
    <HeaderComponent />

    <!-- Banner -->
    <section class="page-banner">
      <div class="breadcrumb">
        The Jerusalem Fund – <span><strong>Grants</strong></span>
      </div>
    </section>

    <!-- Grants Section -->
    <section class="grants-section">
      <div class="grants-header">
        <div class="title-row">
          <h1>Grants</h1>
          <button class="apply-btn" @click="goToApplication">Apply now</button>
        </div>
        <p>
          We believe in justice, equity, and the empowerment of communities through
          education, advocacy, and sustainable development practices.
        </p>
      </div>

      <div class="grants-content">
        <!-- FAQ -->
        <div class="faq">
          <h2>FAQs</h2>
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="faq-item"
            @click="toggleFAQ(index)"
          >
            <div class="faq-question">
              <span>{{ item.question }}</span>
              <span class="faq-icon">{{ activeFAQ === index ? '−' : '+' }}</span>
            </div>
            <div v-if="activeFAQ === index" class="faq-answer">
              {{ item.answer }}
            </div>
          </div>
        </div>

        <!-- How to Apply -->
        <div class="how-to-apply">
          <h2>How to Apply</h2>
          <ul>
            <li v-for="(org, i) in organizations" :key="i">{{ org }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Slider Section -->
    <section class="slider-section">
      <div class="slider-inner">
        <div class="slider-text">
          <h3>Social Support Society — Lebanon</h3>
          <p>
            Rooftop Agricultural Project at Nahr Al Bared Camp. The Jerusalem Fund Grant
            helped in promoting sustainable planting through establishing eco-friendly spaces
            on rooftops. The purpose of this project was not only to provide the women with
            fresh produce but also to alleviate some of the pressure on their finances.
          </p>
          <button class="view-btn">View their work</button>
        </div>

        <!-- Image Section -->
        <div class="slider-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfiF3jE2__fv7gve6KHxVvrmVFUNcLWGHX8A&s"
            alt="Social Support Society Lebanon"
          />
        </div>
      </div>
    </section>

    <!-- Post Grantee -->
    <section class="post-grantee">
      <h2>Past Grantees</h2>
      <div class="grantee-lists">
        <ul v-for="(group, index) in postGrantees" :key="index">
          <li v-for="org in group" :key="org">{{ org }}</li>
        </ul>
      </div>
    </section>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";

import { useRouter } from 'vue-router';
const router = useRouter();
function goToApplication() {
  router.push('/grant-application');
}

import { ref } from "vue";

const activeFAQ = ref(null);

const faqs = [
  { question: "Can I submit my application in Arabic?", answer: "Yes, applications in Arabic are accepted." },
  { question: "What types of payment do you accept?", answer: "We support bank transfers and online payments." },
  { question: "Is it possible to monitor my application status?", answer: "Yes, through your applicant dashboard." },
  { question: "What are the guidelines for returning grants?", answer: "All grants follow the refund policy outlined in your agreement." },
  { question: "Is there support available for applicants?", answer: "Yes, you can reach our support team anytime." },
  { question: "What kind of assistance can I expect from customer support?", answer: "We provide guidance and troubleshooting during the process." },
  { question: "How can I reach customer support for inquiries?", answer: "Via our official email or contact form." },
];

const organizations = [
  "The Ghassan Kanafani Cultural Foundation – Habilitation Preschool",
  "Ayyam Zaman Center",
  "Cultural Projects",
  "BLUMONT/Relief Society",
  "The Palestinian Institute for the Promotion of Global Dialogue and Democracy (MIFTAH)",
  "Two Keys Flowers School",
  "The Arab Resource Center for Popular Arts",
  "Women's Affairs Technical Committee",
  "Dar Al Kalima University College for Arts and Culture",
  "Najdeh Association",
  "Jerusalem Society for Community Development",
  "Nawa, Society for Children and Development",
  "Research, Society for Women and Project",
];

const postGrantees = [
  [
    "AlHadaf Society for Deaf Children (ASDC)",
    "America-Mideast Foundation",
    "Anamel Society for Women",
    "Arab Center for Agricultural Development (ACAD)",
  ],
  [
    "Najdeh Association",
    "The Ghassan Kanafani Cultural Foundation – Habilitation Preschool",
    "Ayyam Zaman Center",
    "BLUMONT/Relief Society",
  ],
  [
    "Two Keys Flowers School",
    "Women’s Affairs Technical Committee",
    "Research Society for Women and Project",
    "Nawa, Society for Children and Development",
  ],
];

function toggleFAQ(index) {
  activeFAQ.value = activeFAQ.value === index ? null : index;
}
</script>

<style scoped>
.page-container {
  font-family: "Arial", sans-serif;
  color: #333;
}

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

/* Grants Section */
.grants-section {
  background-color: #fafafa;
  padding: 60px 20px;
}

.grants-header {
  text-align: left;
  max-width: 1000px;
  margin: 0 auto 40px;
}

.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-row h1 {
  font-size: 30px;
  font-weight: bold;
  margin: 0;
}

.grants-header p {
  color: #555;
  margin-top: 15px;
  line-height: 1.6;
  font-size: 15px;
  max-width: 800px;
}

.apply-btn {
  background-color: #f5b400;
  color: white;
  border: none;
  padding: 10px 24px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.3s;
  white-space: nowrap;
}
.apply-btn:hover {
  background-color: #e0a000;
}

/* FAQ and How to Apply */
.grants-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.faq h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.faq-item {
  border-bottom: 1px solid #ddd;
  padding: 12px 0;
  cursor: pointer;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}

.faq-answer {
  margin-top: 8px;
  color: #666;
  line-height: 1.5;
}

.how-to-apply {
  border: 1px solid #f5b400;
  border-radius: 6px;
  padding: 20px;
  background: #fff;
  height: fit-content;
}

.how-to-apply h2 {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
}

.how-to-apply ul {
  list-style-type: disc;
  padding-left: 20px;
  color: #555;
}

/* Slider Section */
.slider-section {
  background-color: #000;
  color: #fff;
  padding: 60px 20px;
}

.slider-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  gap: 40px;
}

.slider-text {
  flex: 1 1 450px;
}

.slider-text h3 {
  color: #f5b400;
  font-size: 20px;
  margin-bottom: 15px;
}

.slider-text p {
  margin-bottom: 25px;
  line-height: 1.6;
}

.view-btn {
  background-color: #f5b400;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.view-btn:hover {
  background-color: #ffcd38;
}

.slider-image {
  flex: 1 1 450px;
  border-radius: 8px;
  overflow: hidden;
}

.slider-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

/* Post Grantee */
.post-grantee {
  background-color: #fafafa;
  padding: 60px 20px;
  text-align: left;
  box-shadow: #c4c3c3 0px 4px 12px -2px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.post-grantee h2 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
}

.grantee-lists {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.grantee-lists ul {
  list-style-type: disc;
  padding-left: 20px;
  color: #555;
}

.grantee-lists li {
  margin-bottom: 8px;
}
</style>
