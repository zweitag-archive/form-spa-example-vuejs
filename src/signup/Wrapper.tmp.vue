<script>
import EnterEmail from './EnterEmail';
import EnterPersonalData from './EnterPersonalData';
import EnterSsn from './EnterSsn';
import Confirm from './Confirm';
import * as c from './_constants';

export default {
    components: {
        EnterEmail,
        EnterPersonalData,
        EnterSsn,
        Confirm,
    },
    props: {
        signupStep: String,
    },
    data() {
        return {
            c,
        };
    },
};
</script>

<template>
    <section class="signup">
        <enter-email v-if="signupStep === c.ENTER_EMAIL" />
        <enter-personal-data v-else-if="signupStep === c.ENTER_PERSONAL_DATA" />
        <enter-ssn v-else-if="signupStep === c.ENTER_SSN" />
        <confirm v-else-if="signupStep === c.CONFIRM_ALL" />
    </section>
</template>
