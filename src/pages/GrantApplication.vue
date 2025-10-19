<template>
  <div class="application-page">
    <HeaderComponent />

    <!-- Banner -->
    <section class="application-banner">
      <div class="breadcrumb">
        The Jerusalem Fund – Grant - <span><strong>Grant Form</strong></span>
      </div>
    </section>

    <!-- Application Form -->
    <section class="application-section">
      <!-- Back Button -->
      <div class="back-link">
        <router-link to="/blog" class="back-btn">
          <i class="fa-solid fa-arrow-left"></i>
          <span>Back to Blogs</span>
        </router-link>
      </div>

      <!-- Title -->
      <h1 class="section-title">Institutional Profile</h1>

      <!-- Institutional Profile Form -->
      <form class="application-form">
        <div class="form-grid">
          <!-- First Name / Last Name -->
          <div class="form-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
          </div>

          <!-- Title / Organization -->
          <div class="form-group">
            <label>Title of Contact Person</label>
            <input type="text" placeholder="Title of Contact Person" />
          </div>
          <div class="form-group">
            <label>Name of Organization</label>
            <input type="text" placeholder="Name of Organization" />
          </div>

          <!-- Email / Confirm Email -->
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter Email Address" />
          </div>
          <div class="form-group">
            <label>Confirm-Email</label>
            <input type="email" placeholder="Re-Enter Email Address" />
          </div>

          <!-- Country / City -->
          <div class="form-group">
            <label>Country</label>
            <select>
              <option>Select Country</option>
              <option>Palestine</option>
              <option>Jordan</option>
              <option>Lebanon</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label>City</label>
            <input type="text" placeholder="Enter City Name" />
          </div>

          <!-- State / ZIP -->
          <div class="form-group">
            <label>State/Province</label>
            <input type="text" placeholder="State/Province" />
          </div>
          <div class="form-group">
            <label>ZIP Code</label>
            <input type="text" placeholder="0000" />
          </div>

          <!-- Street Address -->
          <div class="form-group">
            <label>Street Address</label>
            <input type="text" placeholder="Street Address" />
          </div>
          <div class="form-group">
            <label>Street Address 2</label>
            <input type="text" placeholder="Street Address 2" />
          </div>
                    <!-- Phone / Address Difference -->
          <div class="form-group">
            <label>Phone</label>
            <div style="display: flex; gap: 10px;">
              <select style="width: 80px; background-color:  #f3b300;">
                <option>+972</option>
                <option>+962</option>
                <option>+961</option>
                <option>+970</option>
              </select>
              <input type="text" placeholder="000 000 0000" />
            </div>
          </div>

          <div class="form-group">
            <label>Is the organization’s physical address different than mailing address?</label>
            <div style="display: flex; gap: 20px; margin-top: 5px;">
              <label><input type="radio" name="addressDiff" /> Yes</label>
              <label><input type="radio" name="addressDiff" /> No</label>
            </div>
          </div>

          <!-- Organization Email -->
          <div class="form-group">
            <label>Organization Email</label>
            <input type="email" placeholder="Enter Email" />
          </div>
          <div class="form-group">
            <label>Confirm Email</label>
            <input type="email" placeholder="Confirm Email" />
          </div>

          <!-- Organization Type / Employees -->
          <div class="form-group">
            <label>Type of Organization</label>
            <select>
              <option>Select Type</option>
              <option>Non-profit</option>
              <option>Private</option>
              <option>Educational</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label>Number of Employees</label>
            <select>
              <option>1–50</option>
              <option>51–100</option>
              <option>101–500</option>
              <option>500+</option>
            </select>
          </div>

          <!-- Website / Facebook -->
          <div class="form-group">
            <label>Website</label>
            <input type="text" placeholder="https://" />
          </div>
          <div class="form-group">
            <label>Facebook Page</label>
            <input type="text" placeholder="https://facebook.com/" />
          </div>

          <!-- Registration -->
          <div class="form-group">
            <label>Date of Organization Registration</label>
            <input type="date" placeholder="DD/MM/YYYY" />
          </div>
          <div class="form-group">
            <label>Registration Number</label>
            <input type="text" placeholder="Registration Number" />
          </div>

          <!-- Governing Board -->
          <div class="form-group">
            <label>Names of Governing Board Members</label>
            <input type="text" placeholder="Full Name" />
          </div>
          <div class="form-group">
            <label>Role</label>
            <input type="text" placeholder="Role / Position" />
          </div>

          <!-- External Auditors / Vision -->
          <div class="form-group">
            <label>Name and Contact Information of External Auditors</label>
            <textarea rows="3" placeholder="Name and Contact Information of External Auditors"></textarea>
          </div>
          <div class="form-group">
            <label>Vision Statement</label>
            <textarea rows="3" placeholder="Vision Statement"></textarea>
          </div>

          <!-- Mission / Additional Info -->
          <div class="form-group">
            <label>Mission of Organization</label>
            <textarea rows="3" placeholder="Mission of Organization"></textarea>
          </div>
          <div class="form-group">
            <label>Additional Information</label>
            <textarea rows="3" placeholder="Additional Information"></textarea>
          </div>

          <!-- Budget / Activities -->
          <div class="form-group">
            <label>Total Annual Budget (USD)</label>
            <input type="text" placeholder="$" />
          </div>
          <div class="form-group">
            <label>Main Activities of the Organization</label>
            <input type="text" placeholder="Activity Description" />
          </div>

          <!-- Funding -->
          <div class="form-group">
            <label>Main Sources of Funding</label>
            <input type="text" placeholder="Internal Source" />
          </div>
          <div class="form-group">
            <label style="visibility:hidden">External</label>
            <input type="text" placeholder="External Source" />
          </div>

        </div>
                  <!-- Divider Line -->
          <hr class="section-divider" />

          <!-- Project Application -->
          <h2 class="section-title">Project Application</h2>

          <div class="form-grid">
            <!-- Name of Organization -->
            <div class="form-group full">
              <label>Name of Organization</label>
              <input type="text" placeholder="Name of Organization" />
            </div>

            <!-- Acknowledgment -->
            <div class="form-group">
              <label>Acknowledgement of Final Grant Report Requirement?</label>
              <div style="display: flex; gap: 20px; margin-top: 5px;">
                <label><input type="radio" name="ack" /> Yes</label>
                <label><input type="radio" name="ack" /> No</label>
              </div>
            </div>

            <!-- Previous Grants -->
            <div class="form-group">
              <label>Previous Grants from The Jerusalem Fund?</label>
              <div style="display: flex; gap: 20px; margin-top: 5px;">
                <label><input type="radio" name="prevGrant" /> Yes</label>
                <label><input type="radio" name="prevGrant" /> No</label>
              </div>
            </div>

            <!-- First Time Applicant -->
            <div class="form-group">
              <label>First Time Applicant?</label>
              <div style="display: flex; gap: 20px; margin-top: 5px;">
                <label><input type="radio" name="firstTime" /> Yes</label>
                <label><input type="radio" name="firstTime" /> No</label>
              </div>
            </div>
          </div>

          <!-- Divider Line -->
          <hr class="section-divider" />
                    <!-- Project Application Details -->
          <h2 class="section-title">Project Application</h2>

          <div class="form-grid">
            <!-- Titles -->
            <div class="form-group">
              <label>Project Title</label>
              <input type="text" placeholder="Project Title" />
            </div>
            <div class="form-group">
              <label>Project Location</label>
              <input type="text" placeholder="Project Location" />
            </div>

            <!-- Dates -->
            <div class="form-group">
              <label>Project Start Date</label>
              <input type="date" placeholder="DD/MM/YYYY" />
            </div>
            <div class="form-group">
              <label>Project End Date</label>
              <input type="date" placeholder="DD/MM/YYYY" />
            </div>

            <!-- Funding -->
            <div class="form-group">
              <label>Amount Requested from The Jerusalem Fund</label>
              <input type="text" placeholder="$" />
            </div>
            <div class="form-group">
              <label>Total Project Cost</label>
              <input type="text" placeholder="$" />
            </div>

            <!-- Description -->
            <div class="form-group">
              <label>Project Description</label>
              <textarea rows="3" placeholder="Project Description"></textarea>
            </div>
            <div class="form-group">
              <label>Project Objectives</label>
              <textarea rows="3" placeholder="Project Objectives"></textarea>
            </div>

            <!-- Impact / Beneficiaries -->
            <div class="form-group">
              <label>Project Impact</label>
              <textarea rows="3" placeholder="Project Impact"></textarea>
            </div>
            <div class="form-group">
              <label>Project Beneficiaries</label>
              <textarea rows="3" placeholder="Project Beneficiaries"></textarea>
            </div>

            <!-- Additional Info / Requested Again -->
            <div class="form-group">
              <label>Additional Information or Special Considerations</label>
              <textarea rows="3" placeholder="Additional Information or Special Considerations"></textarea>
            </div>
            <div class="form-group">
              <label>Amount Requested from The Jerusalem Fund</label>
              <input type="text" placeholder="Amount Requested from The Jerusalem Fund" />
            </div>

            <!-- Funding / Upload -->
            <div class="form-group">
              <label>Other Sources of Funding</label>
              <textarea rows="3" placeholder="Other Sources of Funding"></textarea>
            </div>
            <div class="form-group">
              <label>Project Budget Files</label>
              <div
                style="
                  border: 2px dashed #ccc;
                  border-radius: 8px;
                  padding: 25px;
                  text-align: center;
                  color: #999;
                  font-size: 14px;
                  background-color: #fafafa;
                "
              >
                Upload / Drag & Drop your files
              </div>
            </div>
          </div>

          <!-- Footer text and submit -->
          <p class="form-footer-text">
            We believe in justice, equity, and the empowerment of communities through education, advocacy,
            and sustainable development practices.
          </p>

          <div class="submit-container">
            <button type="submit" class="submit-btn">Submit Application</button>
          </div>


      </form>
    </section>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "GrantForm",
  components: { HeaderComponent, FooterComponent },
};
</script>

<style scoped>
.application-banner {
  background: url("https://www.aljazeera.com/wp-content/uploads/2025/05/AFP__20250517__473W3AK__v2__HighRes__TopshotBritainIsraelPalestiniansConflictDemoHis-1747547242.jpg?resize=1170%2C780&quality=80")
    center/cover no-repeat;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 70px;
  color: white;
}
.application-banner::before {
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

.section-title {
  font-size: 25px;
  font-weight: 700;
  color: #f3b300;
  margin-bottom: 5px;
   margin-top: 25px;        
  text-align: left;
}

.application-form {
  background: #fff;
  padding: 40px;
  border-radius: 8px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 13px;
  font-weight: 600;
  color: #444;
  margin-bottom: 5px;
   text-align: left;
}

input,
select {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: gouste-white;
}


input:focus,
select:focus {
  border-color: #f3b300;
  outline: none;
  background-color: #fff;
}

.back-link {
  margin-top: 20px;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
  font-size: 14px;
  text-decoration: none;
}

.back-btn:hover {
  color: #f3b300;
}
.section-divider {
  border: none;
  border-top: 1px solid #ddd;
  margin: 40px 0 25px 0;
}
.form-footer-text {
  margin-top: 40px;
  font-size: 13px;
  color: #555;
  line-height: 1.6;
  text-align: left;
  max-width: 850px;
}

.submit-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.submit-btn {
  background-color: #f3b300;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.submit-btn:hover {
  background-color: #e0a000;
}

</style>
