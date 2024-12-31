'use client';

import { SessionProvider } from 'next-auth/react';

export default function SessionProviderWrapper({ children }) {
    (
    <SessionProvider>
        {children}
    </SessionProvider>
    );
}