import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../store/reducers';
import UserList from './index';

describe('<UserList />', () => {
    it('does not render when user list is empty', () => {
        const store = createStore(rootReducer, { userList: [] });

        const { container } = render(
            <Provider store={store}>
                <UserList />
            </Provider>
        );

        expect(container.firstChild).toBeNull();
    });

    it('renders user list when users are present', () => {
        const mockUsers = [
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                message: 'Hello there!'
            },
            {
                firstName: 'Jane',
                lastName: 'Smith',
                email: 'jane.smith@example.com',
                message: 'General Kenobi!'
            }
        ];

        const store = createStore(rootReducer, { userList: mockUsers });

        const { getByText } = render(
            <Provider store={store}>
                <UserList />
            </Provider>
        );

        expect(getByText('John')).toBeInTheDocument();
        expect(getByText('Doe')).toBeInTheDocument();
        expect(getByText('john.doe@example.com')).toBeInTheDocument();
        expect(getByText('Hello there!')).toBeInTheDocument();
        expect(getByText('Jane')).toBeInTheDocument();
        expect(getByText('Smith')).toBeInTheDocument();
        expect(getByText('jane.smith@example.com')).toBeInTheDocument();
        expect(getByText('General Kenobi!')).toBeInTheDocument();
    });
});
