<template>
    <div class="outerDiv">
        <div class="inputs">
            <custom-input id="dishNameInput" placeholder="Название блюда" v-model="newDish.name"/>
            <custom-input id="countInput" type="number" placeholder="Количество" v-model="newDish.amount"/>
            <custom-input id="priceInput" type="number" placeholder="Цена за штуку" v-model="price"/>
        </div>

        <div class="selectedPeopleList" ref="outer">
            <div class="selectedPersonItem" v-for="person in people" :key="person.ID">
                <input type="checkbox" :value="person.name" v-model="newDish.whoChoosed"/>
                <label id="personNameLabel">{{ person.name }}</label>
            </div>
        </div>

        <custom-button id="addDishBtn" @click="addNewDish">Добавить</custom-button>
    </div>
</template>

<script>
    import CustomButton from '@/ui/CustomButton.vue';
    import CustomInput from '@/ui/CustomInput.vue';
    import { mapState } from 'vuex'

export default {
    components: { CustomButton, CustomInput },

    data() {
        return {
            price: '',
            newDish: {
                name: '',
                price: 0,
                whoChoosed: [],
                amount: '',
                ID: 0
            },
        }
    },

    mounted() {
        this.setPersonItemsWidth();
    },

    methods: {
        addNewDish() {
        if (this.newDish.name !== '' && this.price !== '' && this.newDish.whoChoosed.length > 0) {
            this.newDish.ID = Date.now();
            this.newDish.price = parseFloat(this.price) * parseInt(this.newDish.amount);
            this.$emit('addNewDish', this.newDish);
            this.newDish = {
                name: '',
                price: 0,
                whoChoosed: [],
                amount: '',
                ID: 0
            };
            this.price = 0;
            }
        },
        
        setPersonItemsWidth() {
            const innerDivs = this.$refs.outer.querySelectorAll('.selectedPersonItem');
            let maxWidth = 0;
            innerDivs.forEach((innerDiv) => {
                const width = innerDiv.offsetWidth;
                if (width > maxWidth) {
                    maxWidth = width;
                }
            });
            innerDivs.forEach((innerDiv) => {
                innerDiv.style.width = `${maxWidth}px`;
            });
        }
    },

    computed: {
        ...mapState({
            people: 'people'
        })
    }
}
</script>

<style lang="scss" scoped>
$widthPercent: 100%;
$mobileWidthPercent: 90%;

.outerDiv, .inputs, .selectedPeopleList, .selectedPersonItem {
    display: flex;
}

.outerDiv {
    flex-direction: column;
    width: 500px;
}

.inputs {
    width: $widthPercent;
    flex-direction: row;
}

.selectedPeopleList {
    width: $widthPercent;
    align-self: center;
    overflow-x: auto;
    flex-wrap: nowrap;
    flex-direction: row;
    margin: 5px 0;
}

.selectedPeopleList .selectedPersonItem {
    border: 1px solid green;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    padding: 2px;
    flex: 0 0 auto;
}

#dishNameInput, #countInput, #priceInput {
    width: 33%;
}

#countInput {
    margin: 0 5px;
}

#addDishBtn {
    width: 100%;
}

#personNameLabel {
    white-space: normal;
}

@media screen and (max-width: 500px) {
    .outerDiv {
        width: 100%;
    }

    .inputs {
        width: $mobileWidthPercent;
        align-self: center;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .selectedPeopleList {
        width: $mobileWidthPercent;
        max-width: $mobileWidthPercent;
        align-self: center;
    }

    #dishNameInput, #countInput, #priceInput {
        width: 100%;
        margin: 3px 0;
    }

    #addDishBtn {
        width: $mobileWidthPercent;
        margin: 3px 0;
        align-self: center;
    }
}
</style>