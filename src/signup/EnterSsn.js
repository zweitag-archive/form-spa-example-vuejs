import { mapState } from 'vuex';

import EnterSsn from './EnterSsn.tmp';

export default {
    name: 'EnterSsn',
    computed: {
        ...mapState({
            ssn: state => state.signup.ssn,
            address: state => state.signup.address,
        }),
    },
    methods: {
        onChangeSsn(event) {
            this.$store.dispatch('setSsn', event.target.value);
        },
        onConfirmSsn() {
            this.$store.dispatch('confirmSsn');
        },
        onSubmit() {
            this.$store.dispatch('confirmAddress');
        },
    },
    render(createElem) {
        return createElem(EnterSsn, {
            props: {
                ssn: this.ssn,
                address: this.address,
                onChangeSsn: this.onChangeSsn,
                onConfirmSsn: this.onConfirmSsn,
                onSubmit: this.onSubmit,
            },
        });
    },
};
