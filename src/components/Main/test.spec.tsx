import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('1. should render the reading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
