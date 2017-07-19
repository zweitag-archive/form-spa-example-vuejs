import { mapState } from 'vuex';

import EnterEmail from './EnterEmail.tmp';

export default {
    name: 'EnterEmail',
    computed: {
        ...mapState({
            signupEmail: state => state.signup.signupEmail,
        }),
    },
    methods: {
        onChangeEmail(event) {
            this.$store.dispatch('setSignupEmail', event.target.value);
        },
        onSubmit() {
            this.$store.dispatch('confirmSignupEmail');
        },
    },
    render(createElem) {
        return createElem(EnterEmail, {
            props: {
                signupEmail: this.signupEmail,
                onChangeEmail: this.onChangeEmail,
                onSubmit: this.onSubmit,
            },
        });
    },
};
