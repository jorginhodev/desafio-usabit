import { render, screen } from '@/utils/custom-render'

import { Header } from './header'

describe('<Header />', () => {
  it('should render the logo image', () => {
    render(<Header />)
    const logoImage = screen.getByAltText('Logo Usabit Clientes')
    expect(logoImage).toBeInTheDocument()
    expect(logoImage).toHaveAttribute('src')
    expect(logoImage).toHaveAttribute('width', '200')
  })

  it('should render the search input with the correct placeholder', () => {
    render(<Header />)
    const searchInput = screen.getByPlaceholderText('Pesquise pelo nome')
    expect(searchInput).toBeInTheDocument()
    expect(searchInput).toHaveStyle('border-radius: 25px')
  })
})
