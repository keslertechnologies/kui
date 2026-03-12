// src/providers/UIProvider.tsx
import React, { createContext, useContext } from "react";

export type LinkComponent = React.ComponentType<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>;

interface UIConfig {
  linkComponent: LinkComponent;
}

const UIContext = createContext<UIConfig>({
  linkComponent: (props) => <a {...props} />,
});

interface UIProviderProps {
  children: React.ReactNode;
  config?: Partial<UIConfig>;
}

export function UIProvider({ children, config }: UIProviderProps) {
  const value = React.useMemo(
    () => ({
      linkComponent:
        config?.linkComponent ?? ((props: any) => <a {...props} />),
    }),
    [config],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export const useUIConfig = () => useContext(UIContext);
