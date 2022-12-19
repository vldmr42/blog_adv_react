import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

describe('profileSlice.test', () => {
    test('test fetchArticleById service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { isLoading: false };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
        });
    });
});
