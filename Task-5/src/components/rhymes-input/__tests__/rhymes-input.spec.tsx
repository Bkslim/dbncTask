import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RhymesInput from '../rhymes-input';
import { RhymesInputProps } from '../../../../types';

describe('RhymesInput tests', () => {
    const defaultProps: RhymesInputProps = {
        onChange: jest.fn(),
    };

    const renderComponent = (props?: Partial<RhymesInputProps>) =>
        render(<RhymesInput {...defaultProps} {...props} />);

    test('renders component', () => {
        renderComponent();

        expect(screen.getByTestId('RhymesInput')).toBeInTheDocument();
    });

    test('calls onChange', () => {
        const onChange = jest.fn();
        const value = { target: { value: 'Test' } };
        renderComponent({ onChange });

        fireEvent.input(screen.getByTestId('RhymesInput'), value);

        expect(onChange).toHaveBeenCalledWith('Test');
    });
});
