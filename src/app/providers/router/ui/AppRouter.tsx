import React, { memo, Suspense, useCallback } from 'react';

import { Route, Routes } from 'react-router-dom';

import { AppRouteProps } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader';

import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
