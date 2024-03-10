import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    test('renders without crashing', () => {
        render(<App/>);
    });
    
    test('renders a div with the class App-header', () => {
        const { container } = render(<App />);
        const appHeader = container.querySelector('.App-header');
        expect(appHeader).toBeInTheDocument();
    });

    test('renders a div with the class App-body', () => {
        const { container } = render(<App />);
        const appBody = container.querySelector('.App-body');
        expect(appBody).toBeInTheDocument();
    });

    test('renders a div with the class App-footer', () => {
        const { container } = render(<App />);
        const appFooter = container.querySelector('.App-footer');
        expect(appFooter).toBeInTheDocument();
    });
});
