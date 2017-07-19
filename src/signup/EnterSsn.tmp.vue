<script>
import './EnterSsn.scss';

export default {
    props: {
        ssn: String,
        address: Object,
        onChangeSsn: Function,
        onConfirmSsn: Function,
        onSubmit: Function,
    },
    methods: {
        onConfirm() {
            if (this.ssn) {
                if (this.address.name) {
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
    <form class="signup-form" @submit.prevent="onSubmit">
        <p>Please enter your social security number:</p>
        <v-input
            :value="ssn"
            :onChange="onChangeSsn"
            placeholder="12 3456 7890 1234 5678"
            label="SSN"
        />
        <button v-if="ssn" type="button"  class="button" @click="onConfirmSsn">Use SSN</button>
        <div v-if="address.street"><strong>Steet:</strong> {{ address.street }}</div>
        <div v-if="address.city"><strong>City:</strong> {{ address.city }}</div>
        <button class="button" v-if="address.street" type="submit">Submit</button>
    </form>
</template>
