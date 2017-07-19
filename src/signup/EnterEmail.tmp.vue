<script>
export default {
    props: {
        signupEmail: String,
        onSubmit: Function,
        onChangeEmail: Function,
    },
};
</script>
<template>
    <form class="signup-form" @submit.prevent="onSubmit">
        <p>Please enter your email:</p>
        <v-input
            :value="signupEmail"
            :onChange="onChangeEmail"
            placeholder="email@address.com"
            label="Your Email"
        />
        <button class="button" type="submit">Submit</button>
    </form>
</template>
