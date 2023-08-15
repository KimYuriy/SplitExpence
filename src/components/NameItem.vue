<template>
    <div class="nameItem">
        <p id="personNameP">{{ person.name }}</p>
        <custom-button id="deletePersonBtn" v-if="shown" @click="removePerson">Удалить</custom-button>
    </div>
</template>

<script>
import CustomButton from '@/ui/CustomButton.vue';

export default {
    components: { CustomButton },

    props: {
        person: {
            type: Object,
            required: true
        },
        shown: {
            type: Boolean,
            required: true
        }
    },

    methods: {
        removePerson() {
            this.$store.commit('removePerson', this.person);
        }
    }
}
</script>

<style lang="scss" scoped>
$marginTopBottom: 5px;

.nameItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: $marginTopBottom 0;
    font-size: 1em;
}

#personNameP {
    width: 80%;
    margin-right: 3px;
}

#deletePersonBtn {
    width: 20%;
    margin-left: 3px;
}

@media screen and (max-width: 500px) {
    .nameItem {
        flex-direction: column;
        border: 1px solid red;
        border-radius: 5px;
    }

    #personNameP, #deletePersonBtn {
        width: 100%;
        margin: $marginTopBottom 0;
    }
}
</style>