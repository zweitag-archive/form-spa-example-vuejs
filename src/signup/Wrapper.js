import { mapState } from 'vuex';
import './wrapper.scss';
import Wrapper from './Wrapper.tmp';

export default {
    name: 'Wrapper',
    computed: {
        ...mapState({
            signupStep: state => state.signup.signupStep,
        }),
    },
    render(createElem) {
        return createElem(Wrapper, {
            props: {
                signupStep: this.signupStep,
            },
        });
    },
};
