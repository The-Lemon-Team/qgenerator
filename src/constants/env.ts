import { get } from '../config';

export const DEFAULT_LANGUAGE = get('DEFAULT_LANGUAGE');
export const LANGUAGES = JSON.parse(get('LANGUAGES')) as string[];
