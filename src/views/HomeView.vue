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
          <DashboardCards img="/icons/Customer-Icon.svg" topText="Customers" box1text="Active" box2text="Inactive"
            box3text="Suspended" :box1="overall_customer.active" :box2="overall_customer.inactive"
            :box3="overall_customer.suspended" :percent="overall_customer.increase_percentage"
            :grow="overall_customer.increase" />
          <DashboardCards img="/icons/Company-Icon.svg" topText="Companies" box1text="Total" box2text="Parent"
            box3text="Child" :box1="overall_company.total" :box2="overall_company.parent" :box3="overall_company.child"
            :percent="overall_company.increase_percentage" :grow="overall_company.increase" />
          <DashboardCards img="/icons/User-Icon.svg" topText="Users" box1text="Total" box2text="Active"
            box3text="Inactive" :box1="overall_user.total" :box2="overall_user.active" :box3="overall_user.inactive"
            :percent="overall_user.increase_percentage" :grow="overall_user.increase" />
          <DashboardCards img="/icons/Box-Icon.svg" topText="Loads Sold" box1text="Total" box2text="W/Platform"
            box3text="Outside P." :box1="overall_sold.total" :box2="overall_sold.platform" :box3="overall_sold.outside"
            :percent="overall_sold.increase_percentage" :grow="overall_sold.increase" />
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
                  <span> ${{ average_cost_broker.average_revenue }}</span>
                  <div class="statistic">
                    <img src="../assets/icons/decrease.svg" alt="decrease" />
                    {{ average_cost_broker.increase_average_revenue }} %
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
                  <span>${{ average_cost_broker.average_cost }}</span>
                  <div class="statistic">
                    <img src="../assets/icons/decrease.svg" alt="decrease" />
                    {{ average_cost_broker.increase_average_cost }} %
                  </div>
                </div>
              </div>
            </div>
            <div class="chart">
              <LineChartVue :revenues="average_cost_broker.revenues" :costs="average_cost_broker.costs" />
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
              <ColumnChart />
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
                      <div class="table-item">Customer Name</div>
                    </th>
                    <th>
                      <div class="table-item">
                        Performance
                        <span>
                          <img src="../assets/icons/arrow-up.svg" alt="arrow" />
                        </span>
                      </div>
                    </th>
                    <th>
                      <div class="table-item">$ Margin</div>
                    </th>
                    <th>
                      <div class="table-item">% Margin</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <topCard icon="/img/Avatar.png" percentProp="92" name="Yahoo!" date="01/01/2020" percent="92%"
                    money="300" margin="15" />
                  <topCard icon="/img/Avatar2.png" percentProp="90" name="Adidas" date="01/01/2020" percent="90%"
                    money="300" margin="15" />
                  <topCard icon="/img/Avatar3.png" percentProp="88" name="Microsoft" date="01/01/2020" percent="88%"
                    money="300" margin="15" />
                  <topCard icon="/img/Avatar4.png" percentProp="85" name="IKEA" date="01/01/2020" percent="85%"
                    money="300" margin="15" />
                  <topCard icon="/img/Avatar5.png" percentProp="85" name="VTB" date="01/01/2020" percent="85%" money="300"
                    margin="15" />
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
                      <div class="table-item">Customer Name</div>
                    </th>
                    <th>
                      <div class="table-item">
                        Performance
                        <span>
                          <img src="../assets/icons/arrow-up.svg" alt="arrow" />
                        </span>
                      </div>
                    </th>
                    <th>
                      <div class="table-item">$ Margin</div>
                    </th>
                    <th>
                      <div class="table-item">% Margin</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <topCard icon="/img/Avatar.png" percentProp="14" name="Yahoo!" date="01/01/2020" percent="14%"
                    money="300" margin="15" />
                  <topCard icon="/img/Avatar2.png" percentProp="15" name="Adidas" date="01/01/2020" percent="15%"
                    money="300" margin="15" />
                  <topCard icon="/img/Avatar3.png" percentProp="18" name="Microsoft" date="01/01/2020" percent="18%"
                    money="300" margin="15" />
                  <topCard icon="/img/Avatar4.png" percentProp="20" name="IKEA" date="01/01/2020" percent="20%"
                    money="300" margin="15" />
                  <topCard icon="/img/Avatar5.png" percentProp="23" name="VTB" date="01/01/2020" percent="23%" money="300"
                    margin="15" />
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
import { onMounted, ref } from "vue";
import axios from "axios";
import DashboardCards from "@/components/dashboardCard.vue";
import topCard from "@/components/top-card.vue";
import circleReuse from "../assets/svg/circle-reuse.vue";
import LineChartVue from "@/components/chart/LineChart.vue";
import ColumnChart from "@/components/chart/ColumnChart.vue";

interface OveralLCustomers {
  active: string,
  inactive: number,
  suspended: number,
  increase: number,
  increase_percentage: number
}

interface OverallCompany {
  total: number,
  parent: number,
  child: number,
  increase: number,
  increase_percentage: number
}

interface OverallUsers {
  total: number,
  active: number,
  inactive: number,
  increase: number,
  increase_percentage: number
}

interface OverallSold {
  total: number,
  platform: number,
  outside: number,
  increase: number,
  increase_percentage: number
}

interface AverageCostBroker {
  average_revenue: number;
  average_cost: number;
  increase_average_revenue: number;
  increase_average_cost: number;
  revenues: { year: string; month: string; revenue: string | null }[];
  costs: { year: string; month: string; cost: string | null }[];
}


interface TopCustomer {
  name: string,
  data: string,
  email: string
  margin: number,
  percentage: number,
  perfomance: number,
}

interface TopBroker {
  name: string,
  data: string,
  email: string
  margin: number,
  percentage: number,
  perfomance: number,
}

interface TopCarriers {
  name: string,
  data: string,
  email: string
  margin: number,
  percentage: number,
  perfomance: number,
}

const overall_customer = ref<OveralLCustomers>({
  active: '',
  inactive: 0,
  suspended: 0,
  increase: 0,
  increase_percentage: 0
})

const overall_company = ref<OverallCompany>({
  total: 0,
  parent: 0,
  child: 0,
  increase: 0,
  increase_percentage: 0
})

const overall_user = ref<OverallUsers>({
  total: 0,
  active: 0,
  inactive: 0,
  increase: 0,
  increase_percentage: 0
})

const overall_sold = ref<OverallSold>({
  total: 0,
  platform: 0,
  outside: 0,
  increase: 0,
  increase_percentage: 0
})

const average_cost_broker = ref<AverageCostBroker>({
  average_revenue: 0,
  average_cost: 0,
  increase_average_revenue: 0,
  increase_average_cost: 0,
  revenues: [],
  costs: [],
})


const top_customer = ref<TopCustomer>({
  name: "",
  data: "",
  email: "",
  margin: 0,
  percentage: 0,
  perfomance: 0,
})

const top_broker = ref<TopBroker>({
  name: "",
  data: "",
  email: "",
  margin: 0,
  percentage: 0,
  perfomance: 0,
})

const top_carriers = ref<TopCarriers>({
  name: "",
  data: "",
  email: "",
  margin: 0,
  percentage: 0,
  perfomance: 0,
})


let Customerfunc = () => {
  axios
    .get(process.env.VUE_APP_URL + "overall/customers")
    .then((res) => {
      overall_customer.value = res.data;
    });
}

let Companyfunc = () => {
  axios
    .get(process.env.VUE_APP_URL + "overall/companies")
    .then((res) => {
      overall_company.value = res.data;
    });
}

let UsersFunc = () => {
  axios
    .get(process.env.VUE_APP_URL + "overall/users")
    .then((res) => {
      overall_user.value = res.data;
    });
}

let SoldFunc = () => {
  axios
    .get(process.env.VUE_APP_URL + "overall/loads-sold")
    .then((res) => {
      overall_sold.value = res.data;
    });
}

let TopCustomerFunc = () => {
  axios 
    .get(process.env.VUE_APP_URL + "overall/top-customers")
    .then((res) => {
      console.log(res.data);
      top_customer.value = res.data;
    });
}


let TopBrokerFunc = () => {
  axios 
    .get(process.env.VUE_APP_URL + "overall/top-brokers")
    .then((res) => {
      console.log(res.data);
      top_broker.value = res.data;
    });
}

let TopCarrierFunc = () => {
  axios 
    .get(process.env.VUE_APP_URL + "overall/top-carriers")
    .then((res) => {
      console.log(res.data);
      top_carriers.value = res.data;
    });
}


onMounted(() => {
  axios
    .get(process.env.VUE_APP_URL + "overall/average-cost-broker")
    .then((res) => {
      average_cost_broker.value = res.data;
    });
  Customerfunc()
  Companyfunc()
  UsersFunc()
  SoldFunc()
  TopCustomerFunc()
  TopBrokerFunc()
  TopCarrierFunc()

});



</script>
<style scoped>
.container {
  width: 100vw;
  width: 100%;
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
  padding: 24px 24px 0 24px;
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
  height: auto;
  margin-top: 40px;
}

.payout {
  width: 40%;
  height: 530px;
  border-radius: 12px;
  border: 1px solid #fff;
  background: #fff;
  padding: 24px 24px 0 24px;
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
  border: 1px solid #dbe2e8;
  background: #fff;
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
  background: #1c1f27;
  color: #fff !important;
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
  background-color: #f9fafb;
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
}

@media screen and (min-width: 1560px) {
  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
  }

  .dashboard-cards {
    max-width: 1440px;
    margin: 0 auto;
  }

  .navigation {
    max-width: 1440px;
    margin: 0 auto;
  }

  .main-section {
    height: 100vh;
  }
}

@media screen and (max-width: 1430px) {
  .average {
    margin-top: 350px;
  }
}

@media screen and (max-width: 1230px) {
  .bottom {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 1024px) {
  .dashboard-cards {
    justify-content: center;
  }

  .coast {
    height: 550px;
  }

  .payout {
    height: 550px;
  }

  .payout .chart {
    margin-top: 15px;
  }

  th:nth-child(3) .table-item {
    padding: 0;
  }

  th:nth-child(4) .table-item {
    padding: 0;
  }
}

@media screen and (max-width: 800px) {
  .dashboard-cards {
    justify-content: space-between;
  }

  .average {
    flex-direction: column;
  }

  .coast {
    width: 100%;
    padding: 24px 15px 0 15px;
  }

  .payout {
    width: 100%;
    padding: 24px 15px 0 15px;
  }

  .top-best {
    flex-direction: column;
  }

  .customer {
    width: 100%;
  }
}

@media screen and (max-width: 705px) {
  .average {
    margin-top: 800px;
  }

  .wrap {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .arrow-left {
    margin-left: 5px;
    margin-bottom: 30px;
  }

  .nav-bar {
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
  }

  .wrapper {
    width: 88%;
  }

  .dashboard-wrapper {
    width: 95%;
  }
}

@media screen and (max-width: 500px) {
  .show {
    padding: 7px;
  }

  .docs {
    padding: 7px;
  }

  .search {
    padding: 5px;
  }

  .hero-text p {
    width: 90%;
  }

  .coast {
    height: auto;
    padding: 20px 10px 0 10px;
  }

  .payout {
    height: auto;
    padding: 20px 10px 0 10px;
  }

  .header-section .wrapper {
    width: 88%;
  }

  .wrapper {
    width: 100%;
  }
}

@media screen and (max-width: 425px) {
  .hero-text h1 {
    font-size: 38px;
  }

  .item {
    font-size: 10px;
  }

  .config {
    width: auto;
    gap: 10px;
  }
}

@media screen and (max-width: 375px) {
  .header-section .wrapper {
    width: 90%;
  }

  .coast {
    border-radius: 0;
  }

  .payout {
    border-radius: 0;
  }

  th {
    font-size: 10px;
  }

  th:nth-child(1) .table-item {
    padding: 10px;
  }

  th:nth-child(2) .table-item {
    padding: 10px;
  }

  .customer {
    border-radius: 0;
  }

  .nav-bar {
    width: 80%;
  }
}

@media screen and (max-width: 320px) {
  .hero-text h1 {
    font-size: 35px;
  }

  .show {
    font-size: 10px;
  }

  .show select {
    font-size: 10px;
  }

  .docs {
    font-size: 10px;
  }

  .item {
    font-size: 9px;
  }

  .coast h3 {
    font-size: 14px;
  }

  .average-item .top {
    font-size: 9px;
  }

  .average-item .bottom span {
    font-size: 20px;
  }

  .average-item .bottom .statistic {
    font-size: 12px;
  }

  .customer-header {
    margin: 13px 5px;
  }
}
</style>
