export function AuthGuard({ children }: { children: React.ReactNode }) {
  // Bypass all authentication checks and always render children
  return <>{children}</>;
}
