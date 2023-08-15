import { createStore } from "vuex";

export default createStore({
    state: {
        people: [],
        dishes: [],
        totalSum: 0
    },

    getters: {
        getPeopleLength(state) {
            return state.people.length;
        }
    },

    mutations: {
        addPerson(state, person) {
            state.people.push(person);
        },
        removePerson(state, person) {
            state.people = state.people.filter(p => p.ID !== person.ID);
        },
        addDish(state, dish) {
            state.dishes.push(dish);
        },
        removeDish(state, dish) {
            state.dishes = state.dishes.filter(d => d.ID !== dish.ID);
        }
    },

    actions: {
        addMoney({ dispatch }, dish) {
            dispatch('increaseDecreasePeopleMoney', { dish, increasing: true });
        },
        
        decreaseMoney({ dispatch }, dish) {
            dispatch('increaseDecreasePeopleMoney', { dish, increasing: false });
        },

        increaseDecreasePeopleMoney({ state, commit }, { dish, increasing }) {
            const priceChange = increasing ? dish.price : -dish.price;
            state.totalSum += priceChange;
            const method = increasing? 'addDish' : 'removeDish'
            const averagePrice = Math.ceil(dish.price / dish.whoChoosed.length);
            for (const personName of dish.whoChoosed) {
                const person = state.people.find(person => person.name === personName);
                if (person) {
                    person.money += (increasing ? averagePrice : -averagePrice);
                }
            }
            commit(method, dish);
        }          
    }
})