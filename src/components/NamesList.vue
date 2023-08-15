<template>
    <div class="namesList">
        <name-item v-for="person in people" :person="person" :shown="true" :key="person.ID"/>
    </div>
</template>

<script>
import NameItem from '@/components/NameItem.vue';
import { mapState } from 'vuex'

export default {
    components: { NameItem },

    computed: {
        ...mapState({
            people: 'people'
        })
    }
}
</script>

<style lang="scss" scoped>
$marginTopBottom: 5px;

.namesList {
    width: 100%;
    margin: $marginTopBottom 0;
}

@media screen and (max-width: 500px) {
    .namesList {
        width: 50%;
    }
}
</style>