<template>
    <div class="namesInput">
        <custom-input id="personNameInput" placeholder="Введите имя человека" v-model="personData.name"/>
        <custom-button id="addPersonBtn" @click="addPerson">+</custom-button>
    </div>
</template>

<script>
import CustomButton from '@/ui/CustomButton.vue';
import CustomInput from '@/ui/CustomInput.vue';

export default {
    components: { CustomInput, CustomButton },

    data() {
        return {
            personData: {
                name: '',
                ID: 0,
                money: 0
            }
        }
    },
    
    methods: {
        addPerson() {
            if (this.personData.name !== '') {
                this.personData.ID = Date.now();
                this.$store.commit('addPerson', this.personData);
                this.personData = {
                    name: '',
                    ID: 0,
                    money: 0
                }                
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$marginTopBottom: 5px;

.namesInput {
    display: flex;
    width: 500px;
    margin: $marginTopBottom 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

#personNameInput {
    margin-right: 3px;
    width: 80%;
}

#addPersonBtn {
    margin-left: 3px;
    width: 20%;
}

@media screen and (max-width: 500px) {
    .namesInput {
        width: 100%;
        flex-direction: column;
    }
    
    #personNameInput, #addPersonBtn {
        margin: $marginTopBottom 0;
        width: 50%;
    }
}
</style>