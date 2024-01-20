<template>
  <div class="container">
    <div class="header-section">
      <div class="navigation">
        <button class="arrow-left">
          <img src="../assets/icons/arrow-left.svg" alt="arrow-left">
        </button>
        <div class="nav-bar">
          <div class="logo">
            <img src="../assets/svg/logo.svg" alt="logo">
          </div>
          <div class="config">
            <div class="show">
              Showing:
              <select>
                <option value="Week">Weekly</option>
                <option value="Month">Monthly</option>
                <option value="Year">Yearly</option>
              </select>
            </div>

            <div class="docs">
              Export Data
              <img src="../assets/icons/document-download.svg" alt="document-download">
            </div>
            <div class="search">
              <img src="../assets/icons/search-normal.svg" alt="search-normal">
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="breadcrumb">
          Homepage / <span>Admin Panel</span>
        </div>
        <div class="hero-text">
          <h1>Hello, Farooq 👋🏻</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Purus in scelerisque ut felis sit et a proin nulla.</p>
        </div>
        <div class="tab-bar">
          <div class="item active">General</div>
          <div class="item">Customer Management</div>
          <div class="item">Invoicing</div>
        </div>
      </div>
    </div>
    <div class="main-section">
      <div class="dashboard-wrapper">
        <div class="dashboard-cards">
          <DashboardCards />
          <DashboardCards />
          <DashboardCards />
          <DashboardCards />
        </div>
      </div>
      <div class="wrapper">
        <div class="average">
          <div class="coast"></div>
          <div class="payout"></div>
        </div>

        <div class="top-best">
          <div class="customer">

          </div>
          <div class="customer">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DashboardCards from '../components/dashboard-card.vue'


</script>
<style scoped>
.container {
  width: 100vw;
  max-width: 100%;
  height: auto;
}

.header-section {
  width: 100%;
  height: 544px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(25, 32, 56, 1);
}

.navigation {
  width: 100%;
  height: 81px;
  display: flex;
  align-items: center;
  margin-top: 23.09px;
  gap: 8px;
}

.arrow-left {
  background-color: transparent;
  border: none;
  margin-left: 16px;
  cursor: pointer;
}

.nav-bar {
  width: 93%;
  height: auto;
  padding: 20.457px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #344159;
}

.logo {
  width: auto;
  height: auto;

}

.config {
  width: 375px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.show {
  display: inline-flex;
  height: 40px;
  padding: 14px;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid rgba(105, 110, 130, 1);
  color: #92969F;
  font-size: 12px;
  font-family: Euclid-Medium;
}

.show select {
  border: none;
  background-color: transparent;
  color: #FFF;
  font-size: 12px;
  font-family: Euclid-Medium;
}

.show select:focus {
  outline: none;
}

.show select option {
  color: #000;
}


.docs {
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  padding: 14px;
  align-items: center;
  gap: 8px;
  border-radius: 8.183px;
  border: 1.023px solid rgba(105, 110, 130, 1);
  color: #FFF;
  font-size: 12px;
  font-family: Euclid-Medium;
  line-height: 16px;
}

.search {
  cursor: pointer;
  display: flex;
  padding: 10.228px;
  align-items: flex-start;
  gap: 8.183px;
  border-radius: 8.183px;
  border: 1.023px solid rgba(105, 110, 130, 1);
}

.wrapper {
  width: 94%;
  height: auto;
}

.breadcrumb {
  margin-top: 47px;
  color: #696E82;
  font-size: 14px;
  font-family: Euclid-Medium;
}

.breadcrumb span {
  color: #fff;
}

.hero-text {
  margin-top: 24px;
}

.hero-text h1 {
  font-size: 48px;
  font-family: Euclid-Medium;
  font-weight: 500;
  color: #fff;
}

.hero-text p {
  width: 427px;
  color: #ABB0C7;
  font-size: 14px;
  font-family: Euclid-Regular;
  font-style: normal;
  font-weight: 400;
}

.tab-bar {
  margin-top: 33px;
  display: inline-flex;
  padding: 6px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid #696E82;
  background: #161A2A;
}

.item {
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  font-family: Euclid-Medium;
  cursor: pointer;
}

.active {
  background: #4478FF;
}

.main-section {
  width: 100%;
  height: auto;
  background-color: #F8F8F8;
  display: flex;
  justify-content: center;
}

.dashboard-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 380px;
}

.dashboard-cards {
  width: 94%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 64px;
  gap: 20px;
}

.average {
  width: 100%;
  height: auto;
  margin-top: 116px;
  display: flex;
  gap: 20px;
  align-items: center;
}

.coast {
  width: 60%;
  height: 530px;
  border-radius: 12px;
  border-radius: 12px;
  border: 1px solid #fff;
  background: #FFF;
}

.payout {
  width: 40%;
  height: 530px;
  border-radius: 12px;
  border: 1px solid #fff;
  background: #FFF;
}




.top-best {
  width: 100%;
  height: auto;
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 55px;
}


.customer {
  width: 50%;
  height: 476px;
  border-radius: 16px;
  border: 1px solid #EAECF0;
  background: #FFF;
}
</style>
