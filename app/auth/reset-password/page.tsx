"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function ResetPasswordPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");

  async function sendReset() {
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/auth/update-password`,
    });
  }

  return (
    <div>
      <input
        placeholder="your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendReset}>Send Reset Email</button>
    </div>
  );
}
