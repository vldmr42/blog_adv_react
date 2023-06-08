import { FeatureFlags } from '@/shared/types/featureFlags';

import { UserRole } from '../const/UserRole';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
