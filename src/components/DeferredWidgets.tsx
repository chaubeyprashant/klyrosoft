import { lazy, Suspense, useEffect, useState } from "react";

const AIChatAgent = lazy(() => import("./AIChatAgent"));
const VoiceAssistant = lazy(() => import("./VoiceAssistant"));

const DeferredWidgets = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setShow(true), { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = window.setTimeout(() => setShow(true), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <Suspense fallback={null}>
      <AIChatAgent />
      <VoiceAssistant />
    </Suspense>
  );
};

export default DeferredWidgets;
