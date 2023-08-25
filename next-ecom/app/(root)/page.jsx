import { UserButton } from '@clerk/nextjs';

export default function Page() {
  return (
    <div>
      <div>Hi</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
