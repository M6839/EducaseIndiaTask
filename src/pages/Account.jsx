import React from 'react'

const Account = ({user}) => {
  return (
     <div className="flex flex-col gap-4 text-neutral-600">
      <h2 className="px-5 py-6 text-lg font-semibold tracking-tight text-neutral-800 shadow bg-white">
        Account Settings
      </h2>

      <div className="flex flex-col gap-5 p-5 text-sm text-neutral-700 border-b border-dashed border-neutral-300">
        <div className="flex items-center gap-3">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd6ca1e7-06f4-4637-bad9-36517f4b0534/dg6ecie-8876f4c0-ff78-478b-9bbd-9a5a27f9b9b2.png/v1/fill/w_800,h_800,q_80,strp/anime_girl_in_black_and_white_by_emiryakamoz_dg6ecie-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkNmNhMWU3LTA2ZjQtNDYzNy1iYWQ5LTM2NTE3ZjRiMDUzNFwvZGc2ZWNpZS04ODc2ZjRjMC1mZjc4LTQ3OGItOWJiZC05YTVhMjdmOWI5YjIucG5nIiwiaGVpZ2h0IjoiPD04MDAiLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2RkNmNhMWU3LTA2ZjQtNDYzNy1iYWQ5LTM2NTE3ZjRiMDUzNFwvZW1pcnlha2Ftb3otNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.PE9eUuGvCKuNHEzFUTgQ-wDD3_UUJ6nET3LmfE7e6NY"
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