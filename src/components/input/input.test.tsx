import { render, screen } from '@/utils/custom-render'

import { Input } from './input'

describe('<Input />', () => {
  it('should render an input with type text', () => {
    render(<Input type="text" placeholder="Type here..." />)
    const inputElement = screen.getByPlaceholderText('Type here...')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'text')
  })

  it('should apply a borderRadius style when the radius prop is provided', () => {
    const { container } = render(<Input radius="25px" />)
    const inputElement = container.firstChild
    expect(inputElement).toHaveStyle('border-radius: 25px')
  })
})
