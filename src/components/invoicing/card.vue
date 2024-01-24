<template >
    <tr>
        <td>
            <div class="table-content-item">
                <input type="checkbox">
            </div>
        </td>
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
                <span>05/07/2022</span>
                <span>05/07/2023</span>
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
                $17.84
            </div>
        </td>
        <td>
            <div class="table-content-item">
                $17.84
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
                Paid
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
                <img src="../../assets/icons/calendar.svg" alt="calendar">
                09/07/2022
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

td:nth-child(3) {
    color: #4478FF;
}

td:nth-child(6) .table-content-item {
    flex-direction: column;
}
</style>