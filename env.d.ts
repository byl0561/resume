/// <reference types="vite/client" />
declare module "*.yml";
declare module '*.md' {
    const html: string;
    export { html };
}
declare module "*.vue";