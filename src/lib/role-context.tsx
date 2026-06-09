import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Role = "qa" | "em";

export const ROLE_LABELS: Record<Role, string> = {
  qa: "QA Lead",
  em: "Delivery / Engineering Manager",
};

interface RoleContextValue {
  role: Role;
  setRole: (r: Role) => void;
}

const RoleContext = createContext<RoleContextValue | null>(null);

function isRole(v: unknown): v is Role {
  return v === "qa" || v === "em";
}

function getInitial(): Role {
  if (typeof window === "undefined") return "qa";
  const url = new URL(window.location.href);
  const q = url.searchParams.get("role");
  if (isRole(q)) return q;
  const saved = localStorage.getItem("role");
  if (isRole(saved)) return saved;
  return "qa";
}

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<Role>("qa");

  useEffect(() => {
    setRoleState(getInitial());
  }, []);

  useEffect(() => {
    localStorage.setItem("role", role);
    const url = new URL(window.location.href);
    if (url.searchParams.get("role") !== role) {
      url.searchParams.set("role", role);
      window.history.replaceState({}, "", url.toString());
    }
  }, [role]);

  return (
    <RoleContext.Provider value={{ role, setRole: setRoleState }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole must be used within RoleProvider");
  return ctx;
}
