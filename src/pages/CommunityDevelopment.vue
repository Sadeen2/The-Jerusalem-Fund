<template>
  <div class="community-development-page">
    <!-- Header -->
    <HeaderSection />

    <!-- Main Content -->
    <main class="content-container">
      <section class="intro">
        <h1>Community Development</h1>
        <p>
          We provide diverse materials and programs aimed at informing the public
          about Palestinian culture, history, and aspirations.
        </p>
      </section>

      <!-- Diabetes Section -->
      <section class="diabetes-section">
        <div class="image-wrapper">
          <img
            src="data:image/jpeg;base64,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"
            alt="Palestine Diabetes Institute Logo"
            class="section-image"
          />
        </div>
        <div class="text-wrapper">
          <h3>Diabetes is affecting Palestinians in disproportionate numbers.</h3>
          <p>
            According to the Union of Palestinian Medical Relief Committee, 18 percent
            of the population has diabetes mellitus. However, this figure is closer to
            30 percent when taking into account the people with pre-diabetes as well as
            those who are unaware that they are diabetics. The disease can be managed
            with careful medical treatment and persistent follow-up. However, most
            Palestinians suffering from diabetes do not have the necessary access to
            affordable treatment and can suffer serious complications such as blindness,
            kidney failure, and circulation problems that lead to amputations.
          </p>
        </div>
      </section>

      <!-- Travel Restrictions Section -->
      <section class="travel-section">
        <div class="image-wrapper">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6cuk97yjoPc01jNeXTXv9Y-1M8rrMPAr0CA&s"
            alt="Map of checkpoints"
            class="section-image"
          />
        </div>
        <div class="text-wrapper">
          <h3>Travel restrictions, security checkpoints</h3>
          <p>
            Other hardships of life under occupation create a very difficult journey for
            many Palestinians seeking care. This is why the PDI opened its second clinic
            in 2013 in the northern city of Nablus, and its third clinic in 2016 in the
            southern city of Hebron. With three clinics covering the northern, central,
            and southern regions of the West Bank, the PDI now provides Palestinians with
            greater access to treatment. In the future, we hope to open a clinic in Gaza
            as well.
          </p>
          <p>
            Please consider <a href="#">donating</a> today, and help us make a positive
            impact on the health and quality of life of Palestinians living under
            military occupation.
          </p>
          <p>
            Founded in 1977 and based in the heart of Washington, DC, The Jerusalem Fund
            for Education and Community Development is a 501(c)(3) non-profit
            organization (Tax EIN# 52-1238142) and is not affiliated with any government.
            All donations are 100 percent tax-deductible and 100% of your contribution
            goes to the program that you designate. We strictly adhere to U.S. laws
            regulating contributions. The Fund is registered in all 50 states and in the
            District of Columbia.
          </p>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import HeaderSection from '../components/Header.vue'
import FooterSection from '../components/Footer.vue'
</script>

<style scoped>
.community-development-page {
  font-family: "Inter", sans-serif;
  background-color: #fff;
  color: #222;
}

.content-container {
  max-width: 1100px;
  margin: 3rem auto;
  padding: 0 1rem;
}

.intro {
  text-align: center;
  margin-bottom: 3rem;
}

.intro h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.intro p {
  color: #555;
  font-size: 1rem;
  margin-top:0;
}

section {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
  align-items: center;
}

.image-wrapper {
  flex: 1 1 300px;
  text-align: center;
}

.section-image {
  width: 100%;
  max-width: 250px;
  border-radius: 10px;
}

.text-wrapper {
  flex: 2 1 400px;
}

h3 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: left;
}

p {
  line-height: 1.6;
  color: #333;
  font-size: 0.85rem;
  text-align: left;
}

a {
  color: #007bff;
  text-decoration: underline;
}
</style>
