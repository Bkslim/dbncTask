import React from 'react';
import { render, screen } from '@testing-library/react';
import RhymesList from '../rhymes-list';
import { RhymesListProps } from '../../../../types';

describe('RhymesList tests', () => {
    const defaultProps: RhymesListProps = {
        data: [{ word: 'Test', score: 42 }],
    };

    beforeEach(() => {
        render(<RhymesList {...defaultProps} />);
    });

    test('renders component', () => {
        expect(screen.getByTestId('RhymesList')).toBeInTheDocument();
    });

    test('renders items', () => {
        expect(screen.getAllByTestId('RhymesListItem')).toHaveLength(1);
    });
});
