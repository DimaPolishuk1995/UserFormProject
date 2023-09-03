import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputField from './index';

describe('<InputField />', () => {
    it('renders without crashing', () => {
        render(<InputField id="test" name="test" value="Test" onChange={() => {}} placeholder="Test" />);
    });

    it('displays error message when provided', () => {
        const { getByText } = render(<InputField id="test" name="test" value="Test" onChange={() => {}} placeholder="Test" error="Error message" />);
        expect(getByText('Error message')).toBeInTheDocument();
    });

    it('displays the correct value', () => {
        const { getByPlaceholderText } = render(
            <InputField id="test" name="test" value="TestValue" onChange={() => {}} placeholder="Test" />
        );

        const input = getByPlaceholderText('Test');
        expect(input.value).toBe('TestValue');
    });

    it('calls onChange handler when value changes', () => {
        const handleChange = jest.fn();
        const { getByPlaceholderText } = render(
            <InputField id="test" name="test" value="TestValue" onChange={handleChange} placeholder="Test" />
        );

        const input = getByPlaceholderText('Test');
        fireEvent.change(input, { target: { value: 'NewValue' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('displays the correct placeholder', () => {
        const { getByPlaceholderText } = render(
            <InputField id="test" name="test" value="TestValue" onChange={() => {}} placeholder="TestPlaceholder" />
        );

        const input = getByPlaceholderText('TestPlaceholder');
        expect(input).toBeInTheDocument();
    });

    it('does not display error message when not provided', () => {
        const { queryByText } = render(
            <InputField id="test" name="test" value="Test" onChange={() => {}} placeholder="Test" />
        );

        expect(queryByText('Error message')).not.toBeInTheDocument();
    });

});
