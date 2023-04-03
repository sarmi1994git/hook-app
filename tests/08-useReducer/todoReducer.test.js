import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => { 
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        donee: false
    }];

    test('Debe de regresar el estado inicial', () => { 
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('Debe de agregar un todo', () => { 
        const action = {
            type: 'ADD_TODO',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    });

    test('Debe de eliminar un todo', () => { 
        const action = {
            type: 'REMOVE_TODO',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);

    });

    test('Debe de realizar el toggle del todo', () => { 
        const action = {
            type: 'TOGGLE_TODO',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(1);
        expect(newState[0].done).toBeTruthy();

    });

});