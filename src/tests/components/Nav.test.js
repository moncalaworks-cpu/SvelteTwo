import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import userEvent from '@testing-library/user-event'
import Nav from '$lib/components/Nav.svelte'

describe('Nav component', () => {
  it('renders church name as logo', () => {
    render(Nav)
    expect(screen.getByText(/Hackettstown SDA Church/i)).toBeTruthy()
  })

  it('renders all navigation links on desktop', () => {
    render(Nav)
    expect(screen.getByText('About Us')).toBeTruthy()
    expect(screen.getByText('Events')).toBeTruthy()
    expect(screen.getByText('Bulletin')).toBeTruthy()
    expect(screen.getByText('Contact')).toBeTruthy()
  })

  it('nav links have correct hrefs', () => {
    render(Nav)
    const links = screen.getAllByRole('link').filter(
      (link) => !link.getAttribute('target')
    )
    const hrefs = links.map((link) => link.getAttribute('href'))

    expect(hrefs).toContain('/about')
    expect(hrefs).toContain('/events')
    expect(hrefs).toContain('/bulletin')
    expect(hrefs).toContain('/contact')
  })

  it('has mobile menu button', () => {
    render(Nav)
    const button = screen.getByRole('button', { name: /toggle menu/i })
    expect(button).toBeTruthy()
  })

  it('contains social media icons', () => {
    render(Nav)
    const socialLinks = screen.getAllByRole('link').filter(
      (link) => link.getAttribute('target') === '_blank'
    )
    expect(socialLinks.length).toBeGreaterThan(0)
  })
})
