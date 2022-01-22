import debounce from 'lodash/debounce';
import { useCallback, useState } from 'react';
import { DEFAULT_DEBOUNCE_MS } from '../constants';
import { RhymeQueryData, RhymeQueryParams } from '../types';
import { getRhymes } from './api';

export const useRhymeQuery = ({
    delay = DEFAULT_DEBOUNCE_MS,
}: RhymeQueryParams = {}) => {
    const [response, setResponse] = useState<RhymeQueryData>({});

    const refetch = useCallback(
        debounce(async (value?: string | null) => {
            setResponse((responseValue) => ({
                ...responseValue,
                isLoading: true,
            }));
            await getRhymes(value).then(
                (responses) => {
                    const data = responses
                        .map((response) => {
                            if (response.status === 'rejected') return [];
                            return response.value?.data || [];
                        })
                        .flat();
                    setResponse({
                        data,
                        error: undefined,
                        isLoading: false,
                    });
                },
                () => {
                    setResponse({
                        data: undefined,
                        error: new Error('Data Error'),
                        isLoading: false,
                    });
                }
            );
        }, delay),
        [delay]
    );

    return {
        ...response,
        refetch,
    };
};
