import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
