<template>
  <div class="container">
    <div class="header-section">
      <div class="navigation">
        <button class="arrow-left">
          <img src="../assets/icons/arrow-left.svg" alt="arrow-left" />
        </button>
        <div class="nav-bar">
          <div class="logo">
            <img src="../assets/svg/logo.svg" alt="logo" />
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
              <img src="../assets/icons/document-download.svg" alt="document-download" />
            </div>
            <div class="search">
              <img src="../assets/icons/search-normal.svg" alt="search-normal" />
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="breadcrumb">Homepage / <span>Admin Panel</span></div>
        <div class="hero-text">
          <h1>Hello, Farooq 👋🏻</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Purus in scelerisque ut
            felis sit et a proin nulla.
          </p>
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
          <DashboardCards img="/icons/Customer-Icon.svg" topText="Customers" box1text="Active" box2text="Inactive" box3text="Suspended" box1="20,6K"
            box2="1,6K" box3="1,2K" percent="16,5%" grow="+1,293"/>
          <DashboardCards img="/icons/Company-Icon.svg" topText="Companies" box1text="Total" box2text="Parent" box3text="Child" box1="15,000"
            box2="13,000" box3="12,000" percent="21,5%" grow="+1,293" />
          <DashboardCards img="/icons/User-Icon.svg" topText="Users" box1text="Total" box2text="Active" box3text="Inactive" box1="12,099" box2="12K"
            box3="99" percent="6,5%" grow="+1,293" />
          <DashboardCards img="/icons/Box-Icon.svg" topText="Loads Sold" box1text="Total" box2text="W/Platform" box3text="Outside P." box1="64,200"
            box2="50K" box3="14,200" percent="28,5%" grow="+1,293" />
        </div>
      </div>
      <div class="wrapper">
        <div class="average">
          <div class="coast">
            <h3>Average Cost - Broker</h3>
            <div class="average-card">
              <div class="average-item">
                <div class="top">
                  <div class="circle">
                    <circleReuse fill="#92BAFB" />
                  </div>
                  Average Revenue
                </div>
                <div class="bottom">
                  <span>$102,838</span>
                  <div class="statistic">
                    <img src="../assets/icons/decrease.svg" alt="decrease" />
                    6,5%
                  </div>
                </div>
              </div>
              <div class="average-item">
                <div class="top">
                  <div class="circle">
                    <circleReuse fill="#F29E61" />
                  </div>
                  Average Cost
                </div>
                <div class="bottom">
                  <span>$10,200</span> (20%)
                  <div class="statistic">
                    <img src="../assets/icons/decrease.svg" alt="decrease" />
                    6,5%
                  </div>
                </div>
              </div>
            </div>
            <div class="chart">
              <LineChartVue />
            </div>
          </div>
          <div class="payout">
            <h3>Average Cost - Broker</h3>
            <div class="average-card">
              <div class="average-item">
                <div class="top">
                  <div class="circle">
                    <circleReuse fill="#92BAFB" />
                  </div>
                  Average Revenue
                </div>
                <div class="bottom">
                  <span>$102,838</span>
                  <div class="statistic">
                    <img src="../assets/icons/grow.svg" alt="grow" />
                    6,5%
                  </div>
                </div>
              </div>
              <div class="average-item">
                <div class="top">
                  <div class="circle">
                    <circleReuse fill="#4478FF" />
                  </div>
                  Average Margin
                </div>
                <div class="bottom">
                  <span>$10,200</span> (20%)
                  <div class="statistic">
                    <img src="../assets/icons/grow.svg" alt="grow" />
                    6,5%
                  </div>
                </div>
              </div>
            </div>
            <div class="chart">

            </div>
          </div>
        </div>
        <div class="top-best">
          <div class="customer">
            <div class="customer-header">
              <h4>Top Best 5 Customers</h4>
              <div class="customer-btn">
                <button class="btn btn-active">Broker</button>
                <button class="btn">Carrier</button>
              </div>
            </div>
            <div class="customer-table">
              <table>
                <thead>
                  <tr>
                    <th>
                      <div class="table-item">
                        Customer Name
                      </div>
                    </th>
                    <th>
                      <div class="table-item">
                        Performance
                      </div>
                    </th>
                    <th>
                      <div class="table-item">
                        $ Margin
                      </div>
                    </th>
                    <th>
                      <div class="table-item">
                        % Margin
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <topCard />
                  <topCard />
                  <topCard />
                  <topCard />
                  <topCard />
                </tbody>
              </table>
            </div>
          </div>
          <div class="customer">
            <div class="customer-header">
              <h4>Top Best 5 Customers</h4>
              <div class="customer-btn">
                <button class="btn btn-active">Broker</button>
                <button class="btn">Carrier</button>
              </div>
            </div>
            <div class="customer-table">
              <table>
                <thead>
                  <tr>
                    <th>
                      <div class="table-item">
                        Customer Name
                      </div>
                    </th>
                    <th>
                      <div class="table-item">
                        Performance
                      </div>
                    </th>
                    <th>
                      <div class="table-item">
                        $ Margin
                      </div>
                    </th>
                    <th>
                      <div class="table-item">
                        % Margin
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <topCard />
                  <topCard />
                  <topCard />
                  <topCard />
                  <topCard />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import DashboardCards from '@/components/dashboardCard.vue'
import topCard from '@/components/top-card.vue'
import circleReuse from '../assets/svg/circle-reuse.vue'
import LineChartVue from "@/components/chart/LineChart.vue";


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
  color: #92969f;
  font-size: 12px;
  font-family: Euclid-Medium;
}

.show select {
  border: none;
  background-color: transparent;
  color: #fff;
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
  color: #fff;
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
  color: #696e82;
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
  color: #abb0c7;
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
  border: 1px solid #696e82;
  background: #161a2a;
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
  background: #4478ff;
}

.main-section {
  width: 100%;
  height: auto;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  position: relative;
}

.dashboard-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -160px;
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
  background: #fff;
  padding: 24px 34px 0 34px;
}

.coast h3 {
  color: #2b2e3a;
  font-family: Euclid-SemiBold;
  font-size: 16px;
  font-style: normal;
}

.average-card {
  margin-top: 25px;
  width: 100%;
  height: auto;
  display: flex;
  gap: 46.72px;
  align-items: center;
}

.average-item {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.average-item .top {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #92969f;
  font-family: Euclid-Medium;
  font-size: 12px;
  font-style: normal;
}

.average-item .top .circle {
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.average-item .bottom {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  color: #92969f;
  font-family: Euclid-Medium;
}

.average-item .bottom span {
  color: #2b2e3a;
  font-size: 24px;
  font-style: normal;
  font-family: Euclid-Medium;
}

.average-item .bottom .statistic {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  color: #60bf98;
  font-family: Euclid-SemiBold;
}

.chart {
  width: 100%;
  height: 100px;
  margin-top: 40px;
}

.payout {
  width: 40%;
  height: 530px;
  border-radius: 12px;
  border: 1px solid #fff;
  background: #fff;
  padding: 24px 34px 0 34px;
}

.payout h3 {
  color: #2b2e3a;
  font-family: Euclid-SemiBold;
  font-size: 16px;
  font-style: normal;
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
  border: 1px solid #eaecf0;
  background: #fff;
}

.customer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
  margin: 20px 24px;
}

.customer-header h4 {
  color: #101828;
  font-size: 18px;
  font-style: normal;
  font-family: Euclid-SemiBold;
}

.customer-btn {
  display: inline-flex;
  padding: 6px;
  align-items: flex-start;
  gap: 4px;
  border-radius: 12px;
  border: 1px solid #DBE2E8;
  background: #FFF;
}

.btn {
  background-color: transparent;
  border: none;
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  font-size: 14px;
  font-style: normal;
  color: #000;
  font-family: Euclid-Medium;
  cursor: pointer;
}

.btn-active {
  background: #1C1F27;
  color: #FFF !important;
}

.customer-table {
  width: 100%;
  height: auto;
}

table {
  width: 100%;
  height: auto;
  border-collapse: collapse;
}

thead tr {
  width: 100%;
  background-color: #F9FAFB;

}

th {
  color: #475467;
  font-size: 12px;
  font-style: normal;
  font-family: Euclid-Medium;
}

.table-item {
  display: flex;
  height: 44px;
  padding: 12px 24px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
}

th:nth-child(3) .table-item {
  justify-content: center;
}

th:nth-child(4) .table-item {
  justify-content: center;
}

tbody tr {
  width: 100%;
  background-color: #fff;
}</style>
