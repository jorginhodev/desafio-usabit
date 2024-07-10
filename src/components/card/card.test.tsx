import { BrowserRouter as Router } from 'react-router-dom'

import { render, screen } from '@/utils/custom-render'

import { Card } from './card'

describe('<CardButton />', () => {
  const mockClient = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    city: 'New York',
    state: 'NY',
  }

  beforeEach(() => {
    render(
      <Router>
        <Card {...mockClient} />
      </Router>,
    )
  })

  it('should display the client name', () => {
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('should display the client email', () => {
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument()
  })

  it('should display the client city and state', () => {
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
