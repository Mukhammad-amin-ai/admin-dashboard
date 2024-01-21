<template >
    <div class="wrap">
        <div class="card">
            <div class="card-top">
                <div class="left">
                    <div class="icon">
                        <img :src="img" alt="Customer">
                    </div>
                    <h4>{{ topText }}</h4>
                </div>
                <div class="right">
                    <div class="stat">
                        <img src="../assets/icons/grow.svg" alt="grow">
                        <span>{{ percent }} %</span> {{ grow }} month
                    </div>
                </div>
            </div>
            <div class="card-bottom">
                <div class="box">
                    <h4>{{ box1 }}</h4>
                    <p>{{ box1text }}</p>
                </div>
                <div class="box">
                    <h4>{{ box2 }}</h4>
                    <p>{{ box2text }}</p>
                </div>
                <div class="box">
                    <h4>{{ box3 }}</h4>
                    <p>{{ box3text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

defineProps({
    topText: String,
    box1text: String,
    box2text: String,
    box3text: String,
    box1: Number,
    box2: Number,
    box3: Number,
    percent: Number,
    grow: Number,
    img: String
})

</script>
<style scoped>
.wrap {
    width: 321px;
    height: 196px;
    border-radius: 8px;
    background: #FFF;
}

.card {
    width: 100%;
    height: 100%;
    padding: 16px;
}

.card-top {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #E0E1E5;
}

.left {
    width: 40%;
    height: 100%;
}

.left h4 {
    font-size: 16px;
    color: #1C1F27;
    font-weight: 500;
    font-family: Euclid-Medium;
}

.right {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: flex-start;

}

.stat {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    color: #92969F;
    font-size: 14px;
    gap: 5px;
    font-family: Euclid-Regular;
}

.stat span {
    color: #4478FF;
    font-weight: 600;
}

.card-bottom {
    width: 100%;
    height: 50%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.box {
    width: 88px;
    height: 56px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
}

.box h4 {
    font-size: 24px;
    font-weight: 500;
    font-family: Euclid-Regular;
}

.box:nth-child(1) h4 {
    font-weight: 600;
}

.box p {
    color: #92969F;
    font-size: 14px;
    font-weight: 500;
    font-family: Euclid-Regular;
}

@media screen and (max-width:705px) {
    .stat {
        justify-content: end;
    }
}

@media screen and (max-width:320px) {
    .stat {
        font-size: 12px
    }

    .box h4 {
        font-size: 20px;
    }
    .box p{
        font-size: 12px;
    }
}
</style>