<template>
    <div class="outerDiv">

        <modal-menu v-model:shown="addNewDishMenuShown">
            <h2>Добавление нового блюда</h2>
            <edit-dish-info @addNewDish="addNewDish"/>
        </modal-menu>

        <modal-menu v-model:shown="addNewPersonMenuShown">
            <h2>Добавление нового человека</h2>
            <new-person-input/>
        </modal-menu>

        <modal-menu v-model:shown="currentTipShown">
            <h2>Текущий счет</h2>
            <p v-for="person in people" :key="person.ID">{{ person.name }}: {{ person.money }}р</p>
            <b>Итого: {{ totalSum }}р</b>
        </modal-menu>

        <div class="startPage">
            <h2>Выбор блюд и напитков</h2>
            <div class="buttons">
                <custom-button id="addDishBtn" @click="addNewDishMenuShown = true">Добавить блюдо</custom-button>
                <custom-button id="addPersonBtn" @click="addNewPersonMenuShown = true;">Добавить человека</custom-button>
                <custom-button id="showResultBtn" @click="currentTipShown = true">Показать результат</custom-button> 
            </div>
            <dishes-list class="dishesList" />
        </div>
    </div>
</template>

<script>
import DishesList from '@/components/DishesList.vue';
import EditDishInfo from '@/components/EditDishInfo.vue';
import ModalMenu from '@/components/ModalMenu.vue';
import NewPersonInput from '@/components/NewPersonInput.vue';
import CustomButton from '@/ui/CustomButton.vue';
import { mapState } from 'vuex'

export default {
    components: { CustomButton, DishesList, ModalMenu, NewPersonInput, EditDishInfo },

    data() {
        return {
            addNewDishMenuShown: false,
            addNewPersonMenuShown: false,
            currentTipShown: false,
            buttonTitle: "Добавить"
        }
    },

    methods: {
        addNewDish(dish) {
            this.$store.dispatch('addMoney', dish);
            this.addNewDishMenuShown = false;
        }
    },

    computed: {
        ...mapState({
            people: 'people',
            totalSum: 'totalSum'
        })
    }
}
</script>

<style lang="scss" scoped>
h2 {
    align-self: center;
}

p {
    font-size: 1.1em;
}

.startPage, .buttons {
    display: flex;
}

.startPage {
    width: 500px;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
}

.buttons {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

#addDishBtn, #addPersonBtn, #showResultBtn {
    width: 30%;
}

#addDishBtn, #addPersonBtn {
    margin-right: 3px;
}

#addPersonBtn, #showResultBtn {
    margin-left: 3px;
}

@media screen and (max-width: 500px) {
    .buttons {
        flex-direction: column;
    }

    #addDishBtn, #addPersonBtn, #showResultBtn {
        width: 50%;
        margin: 3px 0;
    }
}
</style>