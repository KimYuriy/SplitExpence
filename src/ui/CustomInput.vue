<template>
    <input type="text" class="customInput" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
    props: {
        modelValue: [String]
    },

    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style lang="scss" scoped>
.customInput {
    padding: 5px;
    border: 1px solid green;
    border-radius: 5px;
}

input::placeholder {
    font-style: italic;
}

@media screen and (max-width: 500px) {
    .customInput {
        padding: 5px 0;
    }
}
</style>