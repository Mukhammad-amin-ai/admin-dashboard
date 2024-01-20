<template >
    <tr>
        <td>
            <div class="bottom-item">
                <div class="customer-logo">
                    <img src="../assets/images/Avatar.png" alt="">
                </div>
                <div class="text">
                    <h5>Yahoo!</h5>
                    <p>Since 01/01/2020</p>
                </div>
            </div>
        </td>
        <td>
            <div class="bottom-item">
                <div class="percentage">
                    hello
                </div>
                <div class="percent-text">
                    <h5>92%</h5>
                </div>
            </div>
        </td>
        <td>
            <div class="bottom-item">
                <div class="margin">
                    <h5>$300</h5>
                </div>
            </div>
        </td>
        <td>
            <div class="bottom-item">
                <h5>
                    15%
                </h5>
            </div>
        </td>
    </tr>
</template>
<script lang="ts">

</script>
<style scoped>
.bottom-item {
    display: flex;
    height: 72px;
    padding: 16px 24px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-top: 1px solid #EAECF0;
    border-bottom: 1px solid #EAECF0;
}

td:nth-child(2) .bottom-item .percentage {
    width: 59px;
    height: 30.115px;
    background-color: aqua;
}

td:nth-child(2) .bottom-item .percent-text h5 {
    font-size: 14px;
    font-style: normal;
    color: #2B2E3A;
    font-family: Euclid-Medium;
    font-weight: 500;
}

td:nth-child(3) .bottom-item {
    justify-content: center !important;
    gap: 0;
}

td:nth-child(3) .bottom-item .margin {
    display: flex;
    padding: 2px 8px;
    align-items: center;
    border-radius: 16px;
    background: rgba(211, 244, 230, 0.5);
    mix-blend-mode: multiply;
}

td:nth-child(3) .bottom-item .margin h5 {
    color: #4EA07E;
    font-size: 12px;
    font-style: normal;
    font-family: Euclid-Medium;
    font-weight: 500;
}

td:nth-child(4) .bottom-item {
    justify-content: center !important;
    gap: 0;
}

td:nth-child(4) .bottom-item h5 {
    font-size: 14px;
    font-style: normal;
    font-family: Euclid-Regular;
    color: #475467;
    font-weight: 500;
}

.customer-logo {
    display: flex;
    width: 40px;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    background: lightgray 50% / cover no-repeat;
}

.text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.text h5 {
    font-size: 14px;
    font-style: normal;
    color: #101828;
    font-family: Euclid-Medium;
}

.text p {
    font-size: 12px;
    font-style: normal;
    color: #92969F;
    font-family: Euclid-Regular;
}
</style>