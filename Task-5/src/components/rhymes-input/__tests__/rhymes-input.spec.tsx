import React from 'react';
import { render, screen } from '@testing-library/react';
import RhymesInput from '../rhymes-input';
import { RhymesInputProps } from '../../../../types';

describe('RhymesInput tests', () => {
    const defaultProps: RhymesInputProps = {
        onChange: jest.fn(),
    };

    beforeEach(() => {
        render(<RhymesInput {...defaultProps} />);
    });

    test('renders component', () => {
        expect(screen.getByTestId('RhymesInput')).toBeInTheDocument();
    });
});
