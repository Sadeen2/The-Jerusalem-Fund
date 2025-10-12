<template>
    <div>
      <!-- Footer -->
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-logo">
            <img
              src="https://thejerusalemfund.org/wp-content/uploads/2021/07/jerusalem-fund-masthead-1200-trans.png"
              alt="The Jerusalem Fund Logo"
            />
            <p>
              Through educational events, humanitarian support, and cultural
              presentation, The Jerusalem Fund is helping build the movement for
              Palestinian liberation.
            </p>
          </div>
          
          <div class="footer-links">
            <div>
              <h4>WHO WE ARE</h4>
              <ul>
                <li><router-link to="/history">Our History</router-link></li>
                <li><router-link to="/board-of-directors">Board of Directors</router-link></li>
                <li><router-link to="/contact-us">Contact Us</router-link></li>
                <li><router-link to="/employment">Employment</router-link></li>
              </ul>
            </div>

            <div>
              <h4>WHAT WE DO</h4>
              <ul>
                <li><router-link to="/palestine-center">Palestine Center</router-link></li>
                <li><a href="#">Humanitarian Link</a></li>
                <li><a href="#">Gallery Al-Quds</a></li>
                <li><router-link to="/grants">Grants</router-link></li>
              </ul>
            </div>

            <div>
              <h4>CONNECT</h4>
              <ul>
                <li><a href="#">The Jerusalem Fund</a></li>
                <li><a href="#">2425 Virginia Ave NW</a></li>
                <li><a href="#">Washington, DC 20037</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2025 The Jerusalem Fund</p>
          <div class="social-icons">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-tiktok"></i></a>
          </div>
        </div>
      </footer>
    </div>
</template>
<script>
export default {
  name: "FooterSection",
};
</script>
<style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");
    /* Footer */
    .footer {
    background-color: #d4a017;
    color: black;
    padding: 50px 60px 20px;
    }

    .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 30px;
    }

    .footer-logo {
    max-width: 300px;
    }

    .footer-logo img {
    width: 180px;
    margin-bottom: 10px;
    }

    .footer-logo p {
    font-size: 0.9rem;
    line-height: 1.5;
    }

    .footer-links {
    display: flex;
    gap: 50px;
    }

    .footer-links h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 10px;
    }

    .footer-links ul {
    list-style: none;
    padding: 0;
    }

    .footer-links ul li {
    margin-bottom: 6px;
    }

    .footer-links ul li a {
    text-decoration: none;
    color: black;
    font-size: 0.9rem;
    transition: 0.3s;
    }

    .footer-links ul li a:hover {
    color: white;
    }

    .footer-bottom {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    }

    .footer-bottom p {
    font-size: 0.9rem;
    }

    .social-icons a {
    color: black;
    margin-left: 15px;
    transition: 0.3s;
    }

    .social-icons a:hover {
    color: white;
    }
</style>
