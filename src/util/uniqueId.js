import { nanoid } from 'nanoid';

export const uniqueId = (len = 8) => nanoid(len);
