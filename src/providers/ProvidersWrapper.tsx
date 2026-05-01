"use client";
import CartContextProvider from "@/contexts/cartContext";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import NavbarContextProvider from "@/contexts/navbarContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import '@/lib/ag-grid';

export default function ProvidersWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 3000 * 60, 
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store} >
        <SessionProvider>
          <CartContextProvider>
            <NavbarContextProvider>
              {children}
            </NavbarContextProvider>
          </CartContextProvider>
        </SessionProvider>
      </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  );
}

