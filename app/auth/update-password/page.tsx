"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function UpdatePasswordPage() {
  const supabase = createClient();
  const [password, setPassword] = useState("");

  async function updatePassword() {
    await supabase.auth.updateUser({ password });
  }

  return (
    <div>
      <input
        placeholder="new password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={updatePassword}>Update Password</button>
    </div>
  );
}
