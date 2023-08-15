<template>
    <div class="outerDiv">
        <div class="startPage">
            <h2>Ввод имен людей</h2>
            <new-person-input />
            <names-list/>
            <custom-button id="continueBtn" v-if="getPeopleLength >= 2" @click="$router.push('/expence')">Далее</custom-button>
        </div>
    </div>
</template>

<script>
import NamesList from '@/components/NamesList.vue';
import NewPersonInput from '@/components/NewPersonInput.vue';
import CustomButton from '@/ui/CustomButton.vue';
import { mapGetters } from 'vuex'

export default {
    components: { CustomButton, NamesList, NewPersonInput },

    computed: {
        ...mapGetters({
            getPeopleLength: 'getPeopleLength'
        })
    }
}
</script>

<style lang="scss" scoped>
.startPage {
    display: flex;
    width: 500px;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
}

#continueBtn {
    width: 100%;
}

@media screen and (max-width: 500px) {
    #continueBtn {
        width: 50%;
    }
}
</style>