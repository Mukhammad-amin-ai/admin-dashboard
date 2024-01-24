<template >
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
                    <div class="item ">General</div>
                    <div class="item ">Customer Management</div>
                    <div class="item active">Invoicing</div>
                </div>
            </div>
        </div>
        <div class="main-section">
            <div class="wrapper">
                <div class="customer">
                    <div class="customer-header">
                        <div class="customer-logo">
                            <img src="../assets/images/Invoicing.png" alt="Invoicing">
                            <h2>Invoicing</h2>
                        </div>
                        <div class="customer-search">
                            <img src="../assets/svg/search-normal.svg" alt="search">
                            <input type="text" placeholder="Search something">
                        </div>
                    </div>
                    <div class="customer-filter">
                        <p>Filter by</p>
                        <div class="filters">
                            <div class="filter-item">
                                <select>
                                    <option selected disabled>Customer Type</option>
                                    <option>1</option>
                                </select>
                            </div>
                            <div class="filter-item">
                                <select>
                                    <option selected disabled>Parent Name</option>
                                    <option>1</option>
                                </select>
                            </div>
                            <div class="filter-item">
                                <select>
                                    <option selected disabled>Customer Status</option>
                                    <option>1</option>
                                </select>
                            </div>
                            <div class="filter-item">
                                <img src="../assets/icons/calendar.svg" alt="calendar">
                                <select>
                                    <option selected disabled>Start Date</option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="customer-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <div class="table-head-item">
                                            <input type="checkbox">
                                        </div>
                                    </th>
                                    <th>
                                        <div class="table-head-item"> Customer ID</div>
                                    </th>
                                    <th>
                                        <div class="table-head-item">Parent ID</div>
                                    </th>
                                    <th>
                                        <div class="table-head-item">Customer Type</div>
                                    </th>
                                    <th>
                                        <div class="table-head-item">Customer Name</div>
                                    </th>
                                    <th>
                                        <div class="table-head-item">İnvoice Period</div>
                                    </th>
                                    <th>
                                        <div class="table-head-item">Due Date</div>
                                    </th>
                                    <th>
                                        <div class="table-head-item">Current Balance</div>
                                    </th>
                                    <th>
                                        <div class="table-head-item">Past Due Balance</div>
                                    </th>
                                    <th>
                                        <div class="table-head-item">Phone</div>
                                    </th>
                                    <th>
                                        <div class="table-head-item">E-mail</div>
                                    </th>
                                    <th>
                                        <div class="table-head-item">Invoice Status</div>
                                    </th>
                                    <th>
                                        <div class="table-head-item">Invoice Date</div>
                                    </th>
                                    <th>
                                        <div class="table-head-item"> Reminder Sent</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <card />
                                <card />
                                <card />
                                <card />
                                <card />
                                <card />
                                <card />

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import card from '../components/invoicing/card.vue'
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
    height: 800px;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    position: relative;
}

.customer {
    width: 94%;
    height: auto;
    border-radius: 16px;
    background-color: #fff;
    position: absolute;
    top: -100px;
}

.customer-header {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 32px 24px;
    border-bottom: 1px solid #EAEDF0;
}

.customer-logo {
    display: inline-flex;
    align-items: center;
    gap: 16px;

}

.customer-logo h2 {
    color: #2B2E3A;
    font-size: 24px;
    font-family: Euclid-SemiBold;
    font-weight: 600;
}

.customer-search {
    display: flex;
    width: 280px;
    height: 48px;
    padding: 14px;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #E0E1E5;
    background: #FFF;
}

.customer-search input[type='text'] {
    padding: 5px 20px 5px 5px;
    background-color: transparent;
    border: transparent;
    color: #92969F;
    font-size: 14px;
    font-family: Euclid-Regular;
}

.customer-search input[type='text']:focus {
    outline: none;
}

.customer-filter {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 24px 26px;
    border-bottom: 1px solid #EAEDF0;
}

.customer-filter p {
    color: #979CB7;
    font-size: 12px;
    font-family: Euclid-Regular;
}

.filters {
    margin-top: 8px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.filter-item {
    display: flex;
    width: 144px;
    height: 40px;
    padding: 12px 12px 12px 8px;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #E0E1E5;
}

.filter-item select {
    display: flex;
    align-items: center;
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    color: #92969F;
    font-size: 10px;
    font-family: Euclid-Regular;
    font-weight: 500;
}

.filter-item select:focus {
    outline: none;
}

.customer-table {
    display: flex;
    align-items: flex-start;
    overflow: auto;
}

table {
    border-collapse: collapse;

}

thead tr,
tbody tr {
    width: 100%;
    height: 100%;

    border-bottom: 1px solid #EAEDF0;
}

th {
    color: #92969F;
    font-size: 12px;
    font-family: Euclid-Regular;
}

.table-head-item {
    display: flex;
    height: 48px;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 117px;
    align-self: stretch;
    background: rgba(224, 225, 229, 0.07);
}


@media screen and (max-width:650px) {
    .filters {
        flex-wrap: wrap;
    }

    .arrow-left {
        margin-left: 5px;
        margin-bottom: 30px;
    }

    .nav-bar {
        width: 90%;
        flex-direction: column;
        align-items: flex-start;
    }

    .hero-text p {
        width: 90%;
    }

}

@media screen and (max-width:550px) {
    .customer-header {
        gap: 10px;
        flex-wrap: wrap;
    }
}

@media screen and (max-width:425px) {
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

    .nav-bar {
        width: 80%;
    }

    .show {
        padding: 10px;
        font-size: 10px;
    }

    .show select {
        font-size: 10px;
    }

    .docs {
        padding: 10px;
        font-size: 10px;
    }

    .item {
        font-size: 9px;
    }

    .filter-item {
        width: 100%;
    }
}

@media screen and (max-width: 320px) {
    .hero-text h1 {
        font-size: 35px;
    }
}
</style>