<template>
  <div>
    <Header />

    <!-- Breadcrumb Header (خلفية سوداء وكلمة History فقط Bold) -->
    <section class="breadcrumb-bar">
      <div class="breadcrumb-content">
        <p>The Jerusalem Fund - About Us - <strong>History</strong></p>
      </div>
    </section>

    <section class="history-page">
      <div class="container">
        <aside class="founder-card">
          <div class="image-wrapper">
            <img
              src="data:image/jpeg;base64,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"
              alt="Hisham Sharabi"
            />
            <div class="text-overlay">
              <h3>Hisham Sharabi</h3>
              <p>Jerusalem Fund Founder | 1977</p>
            </div>
          </div>
        </aside>

        <article class="content">
          <p>
            <strong>The Jerusalem Fund for Education and Community Development</strong>,a 501(c)3 nonprofit organization, was founded in 1977. Originally, it provided
            scholarships to Palestinian university students for study in Israel, the West Bank, and
            abroad. Between 1978 and 1982, nearly 8,000 scholarships were awarded totaling over $4
            million in aid. The Fund was first called the American Palestine Educational Foundation.
            This was changed in 1981 to better communicate its expanded focus on direct assistance
            for the educational, cultural, health, and community service institutions of Palestinian
            society.
          </p>

          <p>
            When Israeli measures to suppress the first intifada in the late 1980s and early 1990s
            led to mass suffering by the Palestinian people, the Jerusalem Fund initiated its
            Emergency Relief Assistance Program to provide Palestinians with medical care,
            rehabilitation, food, and shelter. Since then, hospitals, clinics, schools, orphanages,
            charitable societies, human rights groups, and numerous other nonprofit civil society
            organizations have received Jerusalem Fund emergency and humanitarian grants. This
            program is now called the Humanitarian Link.
          </p>

          <p>
            In 1991, the Fund established The Palestine Center, an educational and policy analysis
            resource for current information on Palestine. The Center studies the relationship
            between the United States and the Middle East, with particular emphasis on Palestine and
            the Arab-Israeli conflict. It focuses on the implications of specific U.S. policies with
            regard to Palestine, providing a much-needed Palestinian/Arab perspective to the
            political, academic, and media establishments of Washington, D.C., and the Arab world.
            It sponsors conferences, panel discussions, lectures, and other events that contribute
            to the rational discussion of Palestine and the Palestinians. The Center was initially
            known as the Center for Policy Analysis in Palestine (CPAP); the name was changed to the
            Palestine Center in 2002.
          </p>

          <p>
            In 1998, the offices of The Jerusalem Fund were expanded and renovated extensively to
            build a large conference facility, with seating for 150 people. The renovation made
            possible the establishment of a 3,700-volume library and a gallery for art exhibits. The
            Fund then began to organize cultural events and to serve the needs of a cultural
            program. The wide response to the shows and cultural activities called for new
            investment in this area. Today, Gallery Al-Quds reaches out beyond its physical space
            through the Fund’s website, featuring work by renowned artists. Other cultural
            activities, such as film series, poetry readings, and musical concerts, complement the
            Gallery’s offerings.
          </p>

          <p>
            Over the past four decades, The Jerusalem Fund has evolved to meet changing needs. From
            making grants for education and community development, it has grown to include
            educational, policy analysis, and cultural programs. The Fund continues to pay special
            attention to emergency relief assistance, education, and community development and
            remains committed to supporting the steadfastness of the Palestinian people, helping
            them and telling their story until a just and comprehensive peace is achieved.
          </p>
        </article>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.breadcrumb-bar {
  background: linear-gradient(to right, #111 90%, rgba(0,0,0,0.7));
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  border-bottom: 1px solid #2a2a2a;
}
.breadcrumb-content p {
  color: #f1f1f1;
  margin: 0;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
}
.breadcrumb-content strong {
  font-weight: 700;
  color: #fff;
}

.history-page {
  padding: 2.5rem 1rem 4rem;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  flex-wrap: wrap;
}

.founder-card {
  flex: 0 0 260px;           
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 3px 8px rgba(0,0,0,0.15);
  margin-top: 2rem;
}
.image-wrapper { position: relative; }
.image-wrapper img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border: none;
  border-radius: 16px;
  filter: grayscale(100%);
}
.text-overlay {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: #fff;
  border-radius: 0 0 16px 16px;
}
.text-overlay h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #f4b100; 
}
.text-overlay p {
  margin: 0.35rem 0 0;
  font-size: 0.85rem;
  color: #ddd;
}

.content {
  flex: 1 1 680px;
  padding: 2rem;
  border-radius: 8px;
  line-height: 1.8;
  color: #333;
}
.content p { margin-bottom: 1.2rem; text-align: justify; }

@media (max-width: 768px) {
  .founder-card { flex-basis: 100%; max-width: 420px; }
  .content { flex-basis: 100%; }
}
</style>
