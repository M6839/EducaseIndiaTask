import React from 'react'
import profile from '../assests/profile.png'
const Account = ({user}) => {
  return (
     <div className="flex flex-col gap-4 text-neutral-600">
      <h2 className="px-5 py-6 text-lg font-semibold tracking-tight text-neutral-800 shadow bg-white">
        Account Settings
      </h2>

      <div className="flex flex-col gap-5 p-5 text-sm text-neutral-700 border-b border-dashed border-neutral-300">
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt="Profile"
            className="object-cover w-16 h-16 rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="font-semibold">{user.name}</span>
            <span>{user.email}</span>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quos
          mollitia, exercitationem tenetur earum molestias omnis dolorum neque!
        </p>
      </div>
    </div>
  )
}

export default Account