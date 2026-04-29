import { Suspense } from "react";
import CreatePageClient from "./create-page-client";

export default function CreatePage() {
  return (
    <main className="create-page-shell">
      <Suspense fallback={<section className="create-page-card" />}>
        <CreatePageClient />
      </Suspense>
    </main>
  );
}
