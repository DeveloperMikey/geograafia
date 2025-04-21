import { dev } from '$app/environment';

const debug = (...args: unknown[]): void => {
    //if (dev) {
        console.log(...args);
    //}
};

export { debug }