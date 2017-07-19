<script>
export default {
    props: {
        signupEmail: String,
        firstName: String,
        lastName: String,
        gender: String,
        ssn: String,
        address: Object,
    },
};
</script>
<template>
    <div class="signup-form">
        <p>This is your data:</p>
        <div><strong>Email:</strong> {{ signupEmail }}</div>
        <div><strong>Name:</strong> {{ firstName }} {{ lastName }}</div>
        <div><strong>Gender:</strong> {{ gender }}</div>
        <div><strong>SSN:</strong> {{ ssn }}</div>
        <div><strong>Street:</strong> {{ address.street }}</div>
        <div><strong>City:</strong> {{ address.city }}</div>
    </div>
</template>
