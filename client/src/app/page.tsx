'use client'

import { useGetGasTrackUsersQuery } from "@/redux/services/gasTrackApi"

export default function Home() {

  const { data, isError, isLoading } = useGetGasTrackUsersQuery()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  return (
    <div>
      <h1>Home</h1>
      {
        data?.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.lastname}</p>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  )
}
