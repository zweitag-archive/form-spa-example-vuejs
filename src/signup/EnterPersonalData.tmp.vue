<script>
export default {
    props: {
        firstName: String,
        lastName: String,
        gender: String,
        genderOptions: Array,
        onChangeFirstName: Function,
        onChangeLastName: Function,
        onChangeGender: Function,
        onSubmit: Function,
    },
};
</script>
<template>
    <form class="signup-form" @submit.prevent="onSubmit">
        <p>Please enter your personal data:</p>
        <v-input
            :value="firstName"
            :onChange="onChangeFirstName"
            placeholder="John"
            label="First Name"
        />
        <v-input
            :value="lastName"
            :onChange="onChangeLastName"
            placeholder="Smith"
            label="Last Name"
        />
        <v-select
            :value="gender"
            :onChange="onChangeGender"
            :options="genderOptions"
            label="Gender"
        />
        <button class="button" type="submit">Submit</button>
    </form>
</template>
