/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
// src/env.d.ts
interface Window {
    lenis: import('lenis').default;
}