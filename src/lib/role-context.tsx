import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";

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

function captureViewportAnchor() {
  if (typeof window === "undefined") return null;

  const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
  const y = Math.min(window.innerHeight - 1, Math.max(0, headerBottom + 12));
  const pointedSection = document
    .elementFromPoint(window.innerWidth / 2, y)
    ?.closest("main section") as HTMLElement | null;
  const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));
  const anchor =
    pointedSection ??
    sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= y && rect.bottom >= y;
    }) ??
    sections.reduce<HTMLElement | null>((closest, section) => {
      if (!closest) return section;
      const currentDistance = Math.abs(section.getBoundingClientRect().top - y);
      const closestDistance = Math.abs(closest.getBoundingClientRect().top - y);
      return currentDistance < closestDistance ? section : closest;
    }, null);

  return anchor ? { element: anchor, top: anchor.getBoundingClientRect().top } : null;
}

function restoreViewportAnchor(anchor: ReturnType<typeof captureViewportAnchor>) {
  if (!anchor || !document.contains(anchor.element)) return;
  const delta = anchor.element.getBoundingClientRect().top - anchor.top;
  if (Math.abs(delta) > 1) {
    window.scrollBy({ top: delta, left: 0, behavior: "auto" });
  }
}

function syncRoleUrl(role: Role) {
  const url = new URL(window.location.href);
  if (url.searchParams.get("role") === role) return;
  url.searchParams.set("role", role);
  History.prototype.replaceState.call(window.history, window.history.state, "", url.toString());
}

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<Role>("qa");

  useEffect(() => {
    setRoleState(getInitial());
  }, []);

  const setRole = useCallback(
    (next: Role) => {
      if (next === role) return;

      const anchor = captureViewportAnchor();
      flushSync(() => setRoleState(next));
      localStorage.setItem("role", next);
      syncRoleUrl(next);
      restoreViewportAnchor(anchor);
      requestAnimationFrame(() => restoreViewportAnchor(anchor));
      window.setTimeout(() => restoreViewportAnchor(anchor), 220);
      window.setTimeout(() => restoreViewportAnchor(anchor), 320);
    },
    [role],
  );

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole must be used within RoleProvider");
  return ctx;
}
