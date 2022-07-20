import React from "react";

function Loading() {
  return <div>Loading..</div>;
}

export default function Dashboard() {
  return (
    <div>
      <React.Suspense fallback={<Loading />}>Welcome Page</React.Suspense>
    </div>
  );
}
