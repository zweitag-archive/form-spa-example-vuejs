<script>
import './vSelect.scss';
import getNextId from '../_helpers/getNextId';

export default {
    props: {
        value: String,
        options: Array,
        label: String,
        onChange: Function,
    },
    data() {
        return {
            uniqueId: `select-${getNextId()}`,
        };
    },
};
</script>
<template>
    <div class="select-wrapper">
        <label class="select-wrapper__label" v-if="label" :for="uniqueId">{{ label }}</label>
        <select  class="select-wrapper__select" :value="value" @input="onChange">
            <option v-for="option in options" :value="option.name">
                {{ option.displayName }}
            </option>
        </select>
    </div>
</template>
