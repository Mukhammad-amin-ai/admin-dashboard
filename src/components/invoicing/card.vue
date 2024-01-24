<template >
    <tr>
        <td>
            <div class="table-content-item">
                <input type="checkbox">
            </div>
        </td>
        <td>
            <div class="table-content-item">
                <img :src="invoiceData.logo" alt="Avatar">
              {{ invoiceData.customer_id }}
            </div>
        </td>
        <td>
            <div class="table-content-item">
              {{ invoiceData.parent_id }}

            </div>
        </td>
        <td>
            <div class="table-content-item">
              {{ invoiceData.customer_type }}

            </div>
        </td>
        <td>
            <div class="table-content-item">
              {{ invoiceData.customer_name }}

            </div>
        </td>
        <td>
            <div class="table-content-item">
              <span style="color:#92969F !important;">{{ invoiceData.invoice_period.split('\n')[0] }}</span>
              <span>{{ invoiceData.invoice_period.split('\n')[1] }}</span>
            </div>
        </td>
        <td>
            <div class="table-content-item">
                <img src="../../assets/icons/calendar.svg" alt="calendar">
              {{ invoiceData.due_date }}

            </div>
        </td>
        <td>
            <div class="table-content-item">
              $   {{ invoiceData.current_balance }}

            </div>
        </td>
        <td>
            <div class="table-content-item">
                $              {{ invoiceData.past_due_balance }}

            </div>
        </td>
        <td>
            <div class="table-content-item">
                <span style="white-space: nowrap;"> {{ invoiceData.phone }}</span>
            </div>
        </td>
        <td>
            <div class="table-content-item">
              {{ invoiceData.email }}
            </div>
        </td>
        <td>
            <div class="table-content-item">
              {{ invoiceData.invoice_status }}
            </div>
        </td>
        <td>
            <div class="table-content-item">
                <img src="../../assets/icons/calendar.svg" alt="calendar">
              {{ invoiceData.invoice_date }}
            </div>
        </td>
        <td>
            <div class="table-content-item">
                <img src="../../assets/icons/calendar.svg" alt="calendar">
              {{ invoiceData.reminder_sent }}
            </div>
        </td>
    </tr>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['invoiceData']);
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