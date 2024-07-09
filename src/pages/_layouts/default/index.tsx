import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <header>
        <h1>Cabeçalho</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
