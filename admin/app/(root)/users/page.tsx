import { UserModal } from "@/components/modals/UserModal";

const Users = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Users</h1>
        <p className="text-muted-foreground text-sm text-balance">
          View all users in the system and add new users as needed.
        </p>
      </div>
      <UserModal />
    </div>
  );
};

export default Users;
