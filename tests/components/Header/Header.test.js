import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../../../src/components/Header';

describe('Header Component', () => {
    it('should render component', () => {
        const { getByAltText } = render(<Header />);

        expect(getByAltText('Logotipo')).toBeInTheDocument();
    });
})