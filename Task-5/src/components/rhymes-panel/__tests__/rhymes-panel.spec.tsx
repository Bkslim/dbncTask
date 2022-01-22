import React from 'react';
import { render, screen } from '@testing-library/react';
import RhymesPanel from '../rhymes-panel';

describe('RhymesPanel tests', () => {
    beforeEach(() => {
        render(<RhymesPanel />);
    });

    test('renders component', () => {
        expect(screen.getByTestId('RhymesPanel')).toBeInTheDocument();
    });
});
