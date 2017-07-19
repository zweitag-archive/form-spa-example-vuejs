<script>
import './vInput.scss';
import getNextId from '../_helpers/getNextId';

export default {
    props: {
        value: String,
        inputType: {
            type: String,
            default: 'text',
        },
        placeholder: String,
        label: String,
        onChange: Function,
    },
    data() {
        return {
            uniqueId: `input-${getNextId()}`,
        };
    },
};
</script>
<template>
    <div class="input-wrapper">
        <label class="input-wrapper__label" v-if="label" :for="uniqueId">{{ label }}</label>
        <input
            :value="value"
            :type="inputType"
            :placeholder="placeholder"
            @input="onChange"
            class="input-wrapper__input"
            :id="uniqueId"
        >
    </div>
</template>
