import { render } from '@/utils/custom-render'

import { Button } from './button'

describe('<Button />', () => {
  it('should render the button', () => {
    const container = render(<Button>Click me</Button>)

    expect(container.getByText('Click me')).toBeInTheDocument()
  })

  it('should render the button with primary variant', () => {
    const container = render(<Button variant="primary">Click me</Button>)

    expect(container.getByText('Click me')).toHaveStyle({
      backgroundColor: '#5061FC',
    })
  })

  it('should render the button with danger variant', () => {
    const container = render(<Button variant="danger">Click me</Button>)

    expect(container.getByText('Click me')).toHaveStyle({
      backgroundColor: '#FC5050',
    })
  })

  it('should render the button with transparent variant', () => {
    const container = render(<Button variant="transparent">Click me</Button>)

    expect(container.getByText('Click me')).toHaveStyle({
      backgroundColor: 'transparent',
    })
  })

  it('should render the button with gray variant', () => {
    const container = render(<Button variant="gray">Click me</Button>)

    expect(container.getByText('Click me')).toHaveStyle({
      color: '#BCBCCC',
      backgroundColor: 'transparent',
    })
  })
})
