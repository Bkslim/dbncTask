import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { RhymesListItemProps } from '../../../../../types';
import RhymesListItem from '../rhymes-list-item';

describe('RhymesListItem tests', () => {
    const defaultProps: RhymesListItemProps = {
        data: {
            word: 'Test',
            score: 42,
        },
    };

    beforeEach(() => {
        render(<RhymesListItem {...defaultProps} />);
    });

    test('renders component', () => {
        expect(screen.getByTestId('RhymesListItem')).toBeInTheDocument();
    });

    test('renders text', () => {
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('renders score', () => {
        expect(screen.getByText('42')).toBeInTheDocument();
    });

    test('does not render score if not specified', () => {
        const testData = { word: 'Test' };
        cleanup();
        render(<RhymesListItem data={testData} />);

        expect(screen.queryByTitle('Rhyme score')).not.toBeInTheDocument();
    });
});
