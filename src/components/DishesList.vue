<template>
    <div class="dishesList">
        <dish-item v-for="dish in dishes" :dishData="dish" :key="dish"/>
    </div>
</template>

<script>
import DishItem from '@/components/DishItem.vue';
import { mapState } from 'vuex'

export default {
    components: { DishItem },

    computed: {
        ...mapState({
            dishes: 'dishes'
        })
    }
}
</script>

<style lang="scss" scoped>
$marginTopBottom: 5px;
.dishesList {
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: $marginTopBottom;
    margin-bottom: $marginTopBottom;
}

@media screen and (max-width: 500px) {
    .dishesList {
        width: 80%;
    }    
}
</style>