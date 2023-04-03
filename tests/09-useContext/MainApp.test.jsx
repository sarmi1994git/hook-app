const { render, screen } = require("@testing-library/react");
const { MainApp } = require("../../src/09-useContext/MainApp");
const { MemoryRouter } = require("react-router-dom");


describe('Pruebas en <MainApp />', () => {

    test('Debe de mostrar el HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy();

    });

    test('Debe de mostrar el LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('LoginPage')).toBeTruthy();

    });

});