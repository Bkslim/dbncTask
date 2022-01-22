import React, { PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import DataPanel from '../data-panel';
import { QueryData } from '../../../../types';

describe('DataPanel tests', () => {
    const defaultProps: PropsWithChildren<QueryData> = {
        data: [{ word: 'Test', score: 42 }],
    };

    const renderComponent = (props?: Partial<PropsWithChildren<QueryData>>) =>
        render(
            <DataPanel {...defaultProps} {...props}>
                <span data-testid='Test'>Test</span>
            </DataPanel>
        );

    test('renders content', () => {
        renderComponent();

        expect(screen.getByTestId('Test')).toBeInTheDocument();
    });

    test('renders loading', () => {
        renderComponent({ isLoading: true });

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders error', () => {
        renderComponent({ error: new Error('Test Error') });

        expect(screen.getByText('Test Error')).toBeInTheDocument();
    });

    test('renders default error', () => {
        renderComponent({ error: new Error() });

        expect(screen.getByText('Unknown Error')).toBeInTheDocument();
    });

    test('renders error', () => {
        renderComponent({ data: null });

        expect(screen.getByText('No Data...')).toBeInTheDocument();
    });
});
