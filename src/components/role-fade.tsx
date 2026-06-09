import { useEffect, useState, type ReactNode } from "react";
import { useRole } from "@/lib/role-context";

export function RoleFade({ children }: { children: ReactNode }) {
  const { role } = useRole();
  const [visible, setVisible] = useState(true);
  const [content, setContent] = useState(children);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => {
      setContent(children);
      setVisible(true);
    }, 180);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

  useEffect(() => {
    if (visible) setContent(children);
  }, [children, visible]);

  return (
    <span
      className="inline-block transition-opacity duration-200"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {content}
    </span>
  );
}
