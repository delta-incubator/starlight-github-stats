/// <reference types="astro/client" />

// Declare virtual modules used by Starlight
declare module "astro:content" {
  export * from "astro/content";
}

declare module "virtual:starlight/user-config" {
  // StarlightUserConfig is a complex validated type from Starlight
  // This declaration satisfies TypeScript for virtual module resolution
  // The actual type is validated at runtime by Starlight's Zod schemas
  // Using Record with explicit known properties for type safety
  type StarlightUserConfig = Record<string, unknown> & {
    readonly title?: string | Record<string, string>;
    readonly description?: string | Record<string, string>;
    readonly defaultLocale: {
      readonly locale: string | undefined;
      readonly label: string;
      readonly dir: "ltr" | "rtl";
      readonly lang?: string;
    };
    readonly locales: Record<
      string,
      {
        readonly label: string;
        readonly lang?: string;
        readonly dir: "ltr" | "rtl";
      }
    >;
    readonly social?: ReadonlyArray<{
      readonly icon: string;
      readonly label?: string;
      readonly href: string;
    }>;
    readonly customCss?: ReadonlyArray<string>;
    readonly sidebar?: unknown;
    readonly head?: unknown;
  };
  const config: StarlightUserConfig;
  export default config;
}

declare module "virtual:starlight/project-context" {
  interface ProjectContext {
    root: string | URL;
    srcDir: string | URL;
    locales?: Record<string, string>;
    defaultLocale?: string;
    [key: string]: unknown;
  }
  const project: ProjectContext;
  export default project;
}

declare module "virtual:starlight/plugin-translations" {
  interface PluginTranslations {
    [locale: string]: Record<string, string>;
  }
  const translations: PluginTranslations;
  export default translations;
}

// Declare raw imports
declare module "*?raw" {
  const content: string;
  export default content;
}

// Declare StarlightApp namespace if needed
declare namespace StarlightApp {
  interface I18n {
    [key: string]: string | Record<string, string>;
  }
}
