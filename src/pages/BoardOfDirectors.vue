<template>
  <div class="board-page">
    <HeaderSection />

    <div class="page-banner">
      <div class="breadcrumb">
        The Jerusalem Fund – <strong>Board Of Directors</strong>
      </div>
    </div>

    <section class="board-content">
      <h1 class="title">Board of Directors</h1>
      <p class="subtitle">
        Join us in our mission by participating in events, volunteering, or contributing to our outreach efforts
        and community support.
      </p>

      <div class="members">
        <div class="member" v-for="member in boardMembers" :key="member.name">
          <img :src="member.image" :alt="member.name" class="member-img" />
          <div class="member-info">
            <h2>{{ member.name }}</h2>
            <h4>{{ member.title }}</h4>
            <p>{{ member.description }}</p>
          </div>
          <div class="arrow">
            <i class="fa-solid fa-angle-down"></i>
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
  name: "BoardOfDirectors",
  components: { HeaderSection, FooterSection },
  data() {
    return {
      boardMembers: [
        {
          name: "Samera Sood",
          title: "President and Vice President",
          description:
            "Ms. Saad has been active since the association’s founding in 1996. In addition to her work with AM, she has served as a member of the board of directors of the Arab American Anti-Discrimination Committee (ADC) and the United Palestinian Appeal (UPA). She also participated in the UNESCO International Conference in Paris (2004) and the Arab American National Conference (2006).",
          image:
            "https://thejerusalemfund.org/wp-content/uploads/2022/05/SameraSood-1024x1024.jpg",
        },
        {
          name: "Tawfik Z. Ramadan",
          title: "Board Member",
          description:
            "Dr. Ramadan is a pediatrician at Southern California Pediatrics and a member of the American Academy of Pediatrics. He serves on the boards of UPA and ADC, and has contributed to several Arab American initiatives, including the Arab American National Museum and National Conference.",
          image:
            "https://thejerusalemfund.org/wp-content/uploads/2022/12/Tawfik-Ramadan.webp",
        },
        {
          name: "Rajai Khoury",
          title: "Board Member",
          description:
            "Dr. Khoury is the founder and president of the Khoury Surgical Group. He is a member of the American College of Surgeons and the American Society of Colon and Rectal Surgeons. He has served on the boards of ADC and the Arab American National Conference.",
          image:
            "https://s3.amazonaws.com/ogden_images/www.timesleaderonline.com/images/2020/01/11164301/Dr.-Khoury-456x500.jpg",
        },
        {
          name: "Eid B. Mustafa",
          title: "Board Member",
          description:
            "Dr. Mustafa is a retired surgeon and clinical professor who worked primarily in Virginia. He is a member of the American College of Surgeons and the American Society of Colon and Rectal Surgeons. He also served on the boards of ADC and the Arab American National Conference.",
          image:
            "https://fi.realself.com/300/8/a/2/mustafa-29558.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.board-page {
  background-color: #fafafa;
  font-family: "Arial", sans-serif;
}

/* Banner */
.page-banner {
  position: relative;
  height: 60px;
  background: url("https://www.aljazeera.com/wp-content/uploads/2025/05/AFP__20250517__473W3AK__v2__HighRes__TopshotBritainIsraelPalestiniansConflictDemoHis-1747547242.jpg?resize=1170%2C780&quality=80")
    center/cover no-repeat;
  display: flex;
  align-items: center;
  padding-left: 70px;
  color: white;
}
.page-banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.breadcrumb {
  position: relative;
  z-index: 2;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: left;
}

/* Main content */
.board-content {
  padding: 60px 70px;
  text-align: left;
}
.title {
  color: #111;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
}
.subtitle {
  color: #666;
  max-width: 800px;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 60px;
}

/* Members */
.members {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.member {
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
.member:hover {
  transform: translateY(-3px);
}

.member-img {
  width: 180px;
  height: auto;
  object-fit: cover;
  border-radius: 0; 
  flex-shrink: 0;
}

.member-info {
  padding: 20px 25px;
  flex: 1;
}
.member-info h2 {
  color: #111;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
}
.member-info h4 {
  color: #d4a017;
  font-size: 0.85rem;
  margin: 4px 0 8px;
  font-weight: 600;
}
.member-info p {
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.arrow {
  position: absolute;
  top: 18px;
  right: 22px;
  color: #888;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}
.arrow:hover {
  color: #d4a017;
}
</style>

