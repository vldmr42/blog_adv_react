/* eslint-disable no-unused-vars */
import { AboutPage } from 'pages/AboutPage';
import ArticleEditPage from 'pages/ArticleEditPage/ui/ArticleEditPage/ArticleEditPage';
import { ArticlesDetailsPage } from 'pages/ArticlesDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_details',
  ARTICLES_CREATE = 'articles_create',
  ARTICLES_EDIT = 'articles_edit',
  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_DETAILS]: '/articles/', // + :id
    [AppRoutes.ARTICLES_CREATE]: '/articles/new',
    [AppRoutes.ARTICLES_EDIT]: '/articles/:id/edit',
    // Последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: `${RoutePath.articles_details}:id`,
        element: <ArticlesDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_CREATE]: {
        path: `${RoutePath.articles_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_EDIT]: {
        path: `${RoutePath.articles_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
