import { getUser } from "@/utils/supabase/getUser";
import Link from "next/link";

export default async function UserBar() {
  const user = await getUser();

  if (!user) {
    return (
      <div>
        <Link href="/auth/sign-in">Sign In</Link>
        <Link href="/auth/sign-up">Sign Up</Link>
      </div>
    );
  }

  return (
    <div>
      <span>{user.email}</span>
      <Link href="/auth/sign-out">Sign Out</Link>
    </div>
  );
}
