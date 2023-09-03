import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import FormComponent from './index';

describe('<FormComponent />', () => {
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <FormComponent />
            </Provider>
        );
    });

    it('displays validation errors when fields are empty', () => {
        render(
            <Provider store={store}>
                <FormComponent />
            </Provider>
        );

        fireEvent.click(screen.getByText('Submit'));

        expect(screen.getByText(/First Name is required\./i)).toBeInTheDocument();
    });
    it('displays validation error when last name is empty', () => {
        render(
            <Provider store={store}>
                <FormComponent />
            </Provider>
        );

        fireEvent.click(screen.getByText('Submit'));
        expect(screen.getByText(/Last Name is required\./i)).toBeInTheDocument();
    });

    it('displays validation error for invalid email', () => {
        render(
            <Provider store={store}>
                <FormComponent />
            </Provider>
        );

        fireEvent.input(screen.getByPlaceholderText('Email'), { target: { value: 'invalidEmail' } });
        fireEvent.click(screen.getByText('Submit'));
        expect(screen.getByText(/Invalid Email\./i)).toBeInTheDocument();
    });

    it('displays validation error for short message', () => {
        render(
            <Provider store={store}>
                <FormComponent />
            </Provider>
        );

        fireEvent.input(screen.getByPlaceholderText('Message'), { target: { value: 'short' } });
        fireEvent.click(screen.getByText('Submit'));
        expect(screen.getByText(/Message should be at least 10 characters long\./i)).toBeInTheDocument();
    });

    it('does not display validation errors when fields are correctly filled', () => {
        render(
            <Provider store={store}>
                <FormComponent />
            </Provider>
        );

        fireEvent.input(screen.getByPlaceholderText('First Name'), { target: { value: 'John' } });
        fireEvent.input(screen.getByPlaceholderText('Last Name'), { target: { value: 'Doe' } });
        fireEvent.input(screen.getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
        fireEvent.input(screen.getByPlaceholderText('Message'), { target: { value: 'This is a valid message that is definitely long enough.' } });

        fireEvent.click(screen.getByText('Submit'));

        expect(screen.queryByText(/First Name is required\./i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Last Name is required\./i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Invalid Email\./i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Message should be at least 10 characters long\./i)).not.toBeInTheDocument();
    });


    it('button is enabled when form is valid', () => {
        render(
            <Provider store={store}>
                <FormComponent />
            </Provider>
        );

        fireEvent.input(screen.getByPlaceholderText('First Name'), { target: { value: 'John' } });
        fireEvent.input(screen.getByPlaceholderText('Last Name'), { target: { value: 'Doe' } });
        fireEvent.input(screen.getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
        fireEvent.input(screen.getByPlaceholderText('Message'), { target: { value: 'This is a valid message that is definitely long enough.' } });

        const button = screen.getByText('Submit');
        expect(button).not.toBeDisabled();
    });


});
