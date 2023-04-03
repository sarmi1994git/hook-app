import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch, useCounter } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => { 
    const increment = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente por defecto', () => { 
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        //screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('BreakingBad Quotes'));
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeTruthy();
    });

    test('Debe mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Fernando')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('Debe de llamar la función de incrementar', () => {
        
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);
        expect(increment).toHaveBeenCalledTimes(1);
    });

});