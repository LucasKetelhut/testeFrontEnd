import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Footer from '../../../src/components/Footer';

describe('Footer Component', () => {
    it('should render component', () => {
        const { getByText } = render(<Footer />);

        expect(getByText('©2019, BLiP Todos os direitos reservados | Termos de Uso')).toBeInTheDocument();
    });
})