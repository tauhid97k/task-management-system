import { LogOut, UserRoundCog } from 'lucide-react'
import {
  Dropdown,
  DropdownItem,
  DropdownItems,
  DropdownTrigger,
} from './Dropdown'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const handleLogout = () => {
    //
  }

  return (
    <header className="h-16 sticky top-0 z-20 flex items-center bg-white border-b border-zinc-200">
      <div className="container flex items-center justify-between gap-4">
        <nav className="space-x-8">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `border-b-2 pb-5 ${
                isActive ? 'border-zinc-700' : 'border-transparent'
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              `border-b-2 pb-5 ${
                isActive ? 'border-zinc-700' : 'border-transparent'
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/dashboard/tasks"
            className={({ isActive }) =>
              `border-b-2 pb-5 ${
                isActive ? 'border-zinc-700' : 'border-transparent'
              }`
            }
          >
            Tasks
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <Dropdown>
            <DropdownTrigger className="flex items-center justify-between gap-x-2 py-1 px-3 bg-zinc-100 rounded-full">
              <span className="font-medium truncate max-w-[7.5rem]">
                Md. Tauhid
              </span>
              <svg
                className="data-open:rotate-180 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </DropdownTrigger>
            <DropdownItems className="border">
              <DropdownItem>
                <UserRoundCog className="icon" />
                <span>Profile</span>
              </DropdownItem>
              <DropdownItem onClick={handleLogout}>
                <LogOut className="icon" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownItems>
          </Dropdown>
        </div>
      </div>
    </header>
  )
}

export default Header
