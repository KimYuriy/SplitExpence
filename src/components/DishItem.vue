<template>
    <div class="dishItem">
        <div class="dishInfo">
            <p>{{ dishData.name }} х{{ dishData.amount }}: {{ dishData.price }}р</p>
            <div v-for="person in dishData.whoChoosed" :key="person"><i>{{ person }}</i></div>
        </div>
        <custom-button id="deleteDishBtn" @click="removeDish">Удалить</custom-button>
    </div>
</template>

<script>
import CustomButton from '@/ui/CustomButton.vue';

export default {
    components: { CustomButton },
    props: {
        dishData: {
            type: Object,
            required: true
        }
    },

    methods: {
        removeDish() {
            this.$store.dispatch('decreaseMoney', this.dishData);
        }
    }
}
</script>

<style lang="scss" scoped>
$marginTopBottom: 5px;

.dishItem {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1em;
    margin-top: $marginTopBottom;
    margin-bottom: $marginTopBottom;
    padding: 5px;
    border: 1px solid red;
    border-radius: 5px;
}

.dishInfo {
    width: 70%;
    margin-right: 3px;
}

#deleteDishBtn {
    width: 30%;
    margin-left: 3px;
}
</style>