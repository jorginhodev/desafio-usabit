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
})
