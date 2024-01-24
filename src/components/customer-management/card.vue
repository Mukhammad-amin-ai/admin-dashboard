<template >
    <tr>
        <td>
            <div class="table-content-item">
                <img src="../../assets/images/Avatar6.png" alt="Avatar">
                AMZ
            </div>
        </td>
        <td>
            <div class="table-content-item">
                Parent ID
            </div>
        </td>
        <td>
            <div class="table-content-item">
                Broker
            </div>
        </td>
        <td>
            <div class="table-content-item">
                Logistics
            </div>
        </td>
        <td>
            <div class="table-content-item">
                <span style="white-space: nowrap;">Dianne Russell</span>
            </div>
        </td>
        <td>
            <div class="table-content-item">
                <span style="white-space: nowrap;">(671) 555-0110</span>
            </div>
        </td>
        <td>
            <div class="table-content-item">
                michael.mitc@...
            </div>
        </td>
        <td>
            <div class="table-content-item">
                <img src="../../assets/icons/calendar.svg" alt="calendar">
                09/07/2022
            </div>
        </td>
        <td>
            <div class="table-content-item">
                BP01
            </div>
        </td>
        <td>
            <div class="table-content-item">
                0 %
            </div>
        </td>
        <td>
            <div class="table-content-item">
                $17.84
            </div>
        </td>
        <td>
            <div class="table-content-item">
                <div class="switch__container">
                    <!-- switeched for customer status -->
                    <input id="switch-shadow" class="switch switch--shadow" type="checkbox">
                    <label for="switch-shadow"></label>
                </div>
            </div>
        </td>
    </tr>
</template>
<script lang="ts" setup>

</script>
<style scoped>
td {
    color: #2B2E3A;
    font-size: 12px;
    font-family: Euclid-SemiBold;
    font-weight: 600;
}

.table-content-item {
    display: flex;
    height: 72px;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
}

td:nth-child(2){
    color: #4478FF;
}
td:nth-child(10){
    color: #4478FF;
}


/* SWITCH LIKE IOS =============================== */
.switch__container {
    width: 100px;
    display: flex;
    justify-content: center;
}

.switch {
    visibility: hidden;
    position: absolute;
    margin-left: -9999px;
}

.switch+label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
}

.switch--shadow+label {
    padding: 2px;
    width: 40px;
    height: 20px;
    background-color: #dddddd;
    border-radius: 20px;
}

.switch--shadow+label:before,
.switch--shadow+label:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: "";
}

.switch--shadow+label:before {
    right: 1px;
    background-color: #f1f1f1;
    border-radius: 20px;
    transition: background 0.4s;
}

.switch--shadow+label:after {
    width: 20px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
}

/* .switch--shadow:checked+label:before {
    background-color: #6BD6AA;
}

.switch--shadow:checked+label:after {
    transform: translateX(20px);
} */
.switeched+label:before {
    background-color: #6BD6AA;
}

.switeched+label:after {
    transform: translateX(20px);
}


</style>