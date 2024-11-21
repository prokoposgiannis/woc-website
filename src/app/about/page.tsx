"use strict";
import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="flex min-h-screen justify-center overscroll-none text-white p-6">
      <div>
        <p>DEMO PAGE</p>
        <button className="bg-slate-500 hover:bg-slate-600">
          <Link href="/">Go back to Main page</Link>
        </button>
      </div>
    </div>
  );
}
