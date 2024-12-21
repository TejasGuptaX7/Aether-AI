// File: pages/dashboard.tsx
import { withAuth } from "@clerk/nextjs";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mt-10">Welcome to your Dashboard!</h1>
      <p>Start exploring the features here.</p>
    </div>
  );
};

export default withAuth(Dashboard);
