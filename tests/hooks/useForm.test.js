import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'Jesús',
        email: 'jesus_sarmi1994@hotmail.com'
    }
    
    test('Debe regresar los valores por defecto', () => { 
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual( {
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onResetForm: expect.any(Function),
            onInputChange: expect.any(Function)
          });
    });

    test('Debe de cambiar le nombre del formulario', () => { 
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(initialForm));
        act(() => {
            const event = {
                target: {
                    name: 'name',
                    value: newValue
                }
            };
            result.current.onInputChange(event);
        });
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('Debe de realizar el reset del formulario', () => { 
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        act(() => {
            const event = {
                target: {
                    name: 'name',
                    value: newValue
                }
            };
            onInputChange(event);
            onResetForm();
        });
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });

});