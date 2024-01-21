<template >
    <tr>
        <td>
            <div class="bottom-item">
                <div class="customer-logo">
                    <img :src="icon" alt="icon">
                </div>
                <div class="text">
                    <h5>{{ name }}</h5>
                    <p>Since {{ date }}</p>
                </div>
            </div>
        </td>
        <td>
            <div class="bottom-item">
                <div class="percentage">
                    <semiReg :percent="percentProp"/>
                </div>
                <div class="percent-text">
                    <h5>{{ percent }}</h5>
                </div>
            </div>
        </td>
        <td>
            <div class="bottom-item">
                <div class="margin">
                    <h5>$ {{ money }}</h5>
                </div>
            </div>
        </td>
        <td>
            <div class="bottom-item">
                <h5>
                    {{ margin }} %
                </h5>
            </div>
        </td>
    </tr>
</template>
<script lang="ts" setup>
import semiReg from '../components/chart/semiRadialBar'


defineProps({
    icon: String,
    name: String,
    date: String,
    percent: String,
    money: String,
    margin: String,
    percentProp:String,
})

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
    height: 30px;
    position: relative;
}

td:nth-child(2) .bottom-item .percentage img {
    position: absolute;
    z-index: 99;
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

@media screen and (max-width:1024px) {
    td:nth-child(3) .bottom-item {
        padding: 0;
    }

    td:nth-child(4) .bottom-item {
        padding: 0;
    }
}

@media screen and (max-width:1024px) {
    td:nth-child(3) .bottom-item {
        padding: 16px 24px;
    }

    td:nth-child(4) .bottom-item {
        padding: 16px 24px;
    }
}

@media screen and (max-width:500px) {
    td:nth-child(1) .bottom-item {
        padding: 10px;
    }

    td:nth-child(2) .bottom-item {
        padding: 10px;
    }


    td:nth-child(3) .bottom-item {
        padding: 0;
    }

    td:nth-child(4) .bottom-item {
        padding: 0;
    }

}

@media screen and (max-width:375px) {
    td:nth-child(1) .bottom-item {
        padding: 5px;
    }

    td:nth-child(2) .bottom-item {
        padding: 0;
    }

    .bottom-item {
        gap: 5px
    }

    td:nth-child(2) .bottom-item .percent-text h5 {
        font-size: 10px;
    }

    td:nth-child(3) .bottom-item .margin {
        padding: 0;
        background-color: transparent;
    }

    td:nth-child(3) .bottom-item .margin h5 {
        font-size: 10px;
    }

    td:nth-child(4) .bottom-item h5 {
        font-size: 10px;

    }

    .text p {
        font-size: 9px;
    }
}

/* @media screen and (max-width:320px) {

    td:nth-child(2) .bottom-item .percent-text h5 {
        font-size: 10px;
    }

    td:nth-child(3) .bottom-item .margin {
        padding: 0;
        background-color: transparent;
    }

    td:nth-child(3) .bottom-item .margin h5 {
        font-size: 10px;
    }

    td:nth-child(4) .bottom-item h5 {
        font-size: 10px;

    }

    .text p {
        font-size: 9px;
    }

} */

</style>