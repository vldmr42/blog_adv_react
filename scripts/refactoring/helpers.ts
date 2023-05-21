import { PROJECT_LAYERS } from './consts';

export function isAbsolute(value: string) {
    return PROJECT_LAYERS.some((layer) => value.startsWith(layer));
}
