import { mapState } from 'vuex';

import Confirm from './Confirm.tmp';

export default {
    name: 'Confirm',
    computed: {
        ...mapState({
            signupEmail: state => state.signup.signupEmail,
            firstName: state => state.signup.firstName,
            lastName: state => state.signup.lastName,
            gender: state => state.signup.gender,
            ssn: state => state.signup.ssn,
            address: state => state.signup.address,
        }),
    },
    render(createElem) {
        return createElem(Confirm, {
            props: {
                signupEmail: this.signupEmail,
                firstName: this.firstName,
                lastName: this.lastName,
                gender: this.gender,
                ssn: this.ssn,
                address: this.address,
            },
        });
    },
};
