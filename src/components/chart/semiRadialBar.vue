<template >
    <div role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"
        :style="{
        '--value': percent,
        '--primary': percent < 50 ? '#FF6565' : (percent < 80 ? '#FFCD02' : '#20E301'),
    }">
    </div>
</template>
<script lang="ts" setup>
defineProps({
    percent: String,
})
</script>
<style scoped>
@keyframes progress {
    0% {
        --percentage: 0;
    }

    100% {
        --percentage: var(--value);
    }
}

@property --percentage {
    syntax: '<number>';
    inherits: true;
    initial-value: 0;
}

[role="progressbar"] {
    --percentage: var(--value);
    /* --primary: #369; */
    /* --primary: rgba(255, 101, 101, 1); */
    /* ---primary: linear-gradient(121deg, rgba(255, 101, 101, 1) 20%, rgba(255, 205, 2, 1) 60%, rgba(32, 227, 1, 1) 100%); */
    --secondary: #E0E1E5;
    --size: 60px;
    animation: progress 2s 0.5s forwards;
    width: var(--size);
    aspect-ratio: 2 / 1;
    border-radius: 50% / 100% 100% 0 0;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

[role="progressbar"]::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: conic-gradient(from 0.75turn at 50% 100%, var(--primary) calc(var(--percentage) * 1% / 2), var(--secondary) calc(var(--percentage) * 1% / 2 + 0.1%));
    /* background: linear-gradient(rgba(255, 101, 101, 1) 20%, rgba(255, 205, 2, 1) 60%, rgba(32, 227, 1, 1) 100% calc(var(--percentage) * 1% / 4), var(--secondary) calc(var(--percentage) * 1% / 2 + 0.1%)); */
    mask: radial-gradient(at 50% 100%, white 55%, transparent 55.5%);
    mask-mode: alpha;
    -webkit-mask: radial-gradient(at 50% 100%, #0000 55%, #000 55.5%);
    -webkit-mask-mode: alpha;
}

/* [role="progressbar"]::after {
    counter-reset: percentage var(--value);
    content: counter(percentage) '%';
    font-family: Helvetica, Arial, sans-serif;
    font-size: calc(var(--size) / 5);
    color: var(--primary);
} */
</style>