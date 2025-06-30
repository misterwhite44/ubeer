import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
    dsn: "VOTRE_DSN_ICI", // Remplace par ton vrai DSN Sentry
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
});