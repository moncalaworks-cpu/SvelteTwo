import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import Footer from '$lib/components/Footer.svelte'

describe('Footer component', () => {
  it('renders church name', () => {
    render(Footer)
    const headings = screen.getAllByText(/Hackettstown SDA Church/i)
    expect(headings.length).toBeGreaterThan(0)
  })

  it('renders church address', () => {
    render(Footer)
    expect(screen.getByText(/927 County Road 517/i)).toBeTruthy()
  })

  it('renders phone number', () => {
    render(Footer)
    expect(screen.getByText(/\(908\) 852-6100/)).toBeTruthy()
  })

  it('renders email', () => {
    render(Footer)
    expect(screen.getByText('htnjsda@gmail.com')).toBeTruthy()
  })

  it('contains quick links to pages', () => {
    render(Footer)
    const links = screen.getAllByRole('link')
    const hrefs = links.map((link) => link.getAttribute('href'))

    expect(hrefs).toContain('/about')
    expect(hrefs).toContain('/events')
    expect(hrefs).toContain('/contact')
  })

  it('renders social media links', () => {
    render(Footer)
    const externalLinks = screen.getAllByRole('link').filter(
      (link) => link.getAttribute('target') === '_blank'
    )
    expect(externalLinks.length).toBeGreaterThan(0)
  })
})
