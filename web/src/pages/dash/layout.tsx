import { Suspense } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, Outlet } from 'react-router-dom';

import Loader from '../../components/loader';
import {
  LOGO_IMAGE,
  LOGO_TEXT,
  USE_LOGO_IMAGE,
} from '../../constants/branding';
import { ROUTES } from '../../constants/pages';
import useAuth from '../../hooks/use-auth';

export default function DashLayout() {
  const { loginInfo, logout } = useAuth();
  return (
    <div className="min-h-screen bg-neutral-800">
      <main className="grid mx-auto px-4 container xl:grid-cols-[20rem_1fr]">
        <nav className="sticky top-0 self-start pb-4 pt-6">
          <h1>
            <Link
              className="select-none text-3xl text-primary-500 font-bold font-display"
              to={ROUTES.home}
            >
              {USE_LOGO_IMAGE ? (
                <img
                  src={LOGO_IMAGE}
                  alt={LOGO_TEXT}
                  className="h-[2.5em] py-2"
                />
              ) : (
                LOGO_TEXT
              )}
            </Link>
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-neutral-700 text-white shadow-sm">
              <div className="i-tabler-user" />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm text-neutral-300">
                {loginInfo?.loggedIn ? loginInfo.email : 'Not logged in'}
              </p>
              {loginInfo?.loggedIn ? (
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    toast.success('Logged out!');
                  }}
                  className="text-xs text-neutral-400 hover:text-neutral-200"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to={ROUTES.login}
                  className="text-xs text-neutral-400 hover:text-neutral-200"
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
          <ul className="mt-4 flex flex-col select-none">
            {[
              { icon: 'i-tabler-arrow-back-up', text: 'Home', to: ROUTES.home },
              {
                icon: 'i-tabler-rocket',
                text: 'Deploy servers',
                to: ROUTES.deploy,
              },
              {
                icon: 'i-tabler-server',
                text: 'Virtual machines',
                to: ROUTES.list,
              },
              { icon: 'i-tabler-user', text: 'Account', to: ROUTES.account },
              {
                icon: 'i-tabler-automation',
                text: 'Automations',
                to: ROUTES.automations,
              },
            ].map(({ icon, text, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `font-display text-sm inline-flex items-center gap-2 py-1.5 transition-colors uppercase tracking-wide ${isActive ? 'text-neutral-200 drop-shadow-sm' : 'text-neutral-500'}`
                  }
                >
                  <div className={`${icon}`} />
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="z-0 mb-24 mt-6 flex flex-col gap-y-4 rounded-card bg-neutral-800">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
