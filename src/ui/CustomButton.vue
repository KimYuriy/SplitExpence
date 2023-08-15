<template>
    <button class="customButton">
        <slot></slot>
    </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.customButton {
    border: 1px solid lightgreen;
    border-radius: 5px;
    background-color: transparent;
    padding: 5px;
    background-color: lightgreen;
}
</style>