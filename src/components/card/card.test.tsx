import { BrowserRouter as Router } from 'react-router-dom'

import { render, screen } from '@/utils/custom-render'

import { Card } from './card'

describe('<CardButton />', () => {
  const mockCustomer = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    city: 'New York',
    state: 'NY',
  }

  beforeEach(() => {
    render(
      <Router>
        <Card {...mockCustomer} />
      </Router>,
    )
  })

  it('should display the customer name', () => {
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('should display the customer email', () => {
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument()
  })

  it('should display the customer city and state', () => {
    expect(screen.getByText('New York - NY')).toBeInTheDocument()
  })

  it('should have an edit button that navigates to the edit page', () => {
    expect(screen.getByRole('link', { name: '' })).toHaveAttribute(
      'href',
      '/edit/1',
    )
  })

  it('should have a delete button', () => {
    expect(screen.getAllByRole('button')[1]).toBeInTheDocument()
  })
})
