import { useEffect } from 'react';
import { To, useNavigate } from 'react-router-dom';

export default function Redirect({ to }: { to: To }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace: true });
  }, [navigate, to]);

  return null;
}
