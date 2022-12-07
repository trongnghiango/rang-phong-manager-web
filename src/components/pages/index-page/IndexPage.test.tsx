import { render, screen } from '@testing-library/react';
import { IndexPage } from './IndexPage';

describe('IndexPage', () => {
  test('renders the page', () => {
    render(<IndexPage data={{ testId: '', data: {} }} />);

    expect(screen.getByTestId('IndexPage_about-button')).toContainHTML('About');
  });
});
