<script>
import './EnterSsn.scss';

export default {
    props: {
        isSsnValid: Boolean,
        ssn: String,
        address: Object,
        onChangeSsn: Function,
        onConfirmSsn: Function,
        onSubmit: Function,
    },
    methods: {
        onConfirm() {
            if (this.ssn) {
                if (this.isSsnValid) {
                    this.onSubmit();
                } else {
                    this.onConfirmSsn();
                }
            }
        },
    },
};
</script>
<template>
    <form class="signup-form" @submit.prevent="onConfirm">
        <p>Please enter your social security number:</p>
        <v-input
            :value="ssn"
            :onChange="onChangeSsn"
            placeholder="12 3456 7890 1234 5678"
            label="SSN"
        />
        <button v-if="!isSsnValid" type="submit"  class="button">Use SSN</button>
        <div v-else>
            <div><strong>Steet:</strong> {{ address.street }}</div>
            <div><strong>City:</strong> {{ address.city }}</div>
            <button class="button" type="submit">Submit</button>
        </div>
    </form>
</template>
