"use client";

import { useSession } from "next-auth/react";

function ProfilePage() {
  const session = useSession();

  if (session?.data?.user) {
    return (
      <>
        <div>From client: user signed in</div>
      </>
    );
  }

  return (
    <>
      <div>ProfilePage</div>
    </>
  );
}
export default ProfilePage;
