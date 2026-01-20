import { Suspense } from "react";
import DaftarMenuClient from "./DaftarMenuClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-20">Loading menu...</div>}>
      <DaftarMenuClient />
    </Suspense>
  );
}
