import { mapState } from 'vuex';

import EnterPersonalData from './EnterPersonalData.tmp';

export default {
    name: 'EnterPersonalData',
    computed: {
        ...mapState({
            firstName: state => state.signup.firstName,
            lastName: state => state.signup.lastName,
            gender: state => state.signup.gender,
        }),
    },
    data() {
        return {
            genderOptions: [{
                name: 'male',
                displayName: 'Male',
            }, {
                name: 'female',
                displayName: 'Female',
            }, {
                name: 'other',
                displayName: 'Other',
            }],
        };
    },
    methods: {
        onChangeFirstName(event) {
            this.$store.dispatch('setFirstName', event.target.value);
        },
        onChangeLastName(event) {
            this.$store.dispatch('setLastName', event.target.value);
        },
        onChangeGender(event) {
            this.$store.dispatch('setGender', event.target.value);
        },
        onSubmit() {
            this.$store.dispatch('confirmPersonalData');
        },
    },
    render(createElem) {
        return createElem(EnterPersonalData, {
            props: {
                firstName: this.firstName,
                lastName: this.lastName,
                gender: this.gender,
                genderOptions: this.genderOptions,
                onChangeFirstName: this.onChangeFirstName,
                onChangeLastName: this.onChangeLastName,
                onChangeGender: this.onChangeGender,
                onSubmit: this.onSubmit,
            },
        });
    },
};
