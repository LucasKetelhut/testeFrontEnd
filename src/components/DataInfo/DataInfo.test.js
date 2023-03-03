import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import DataInfo from './DataInfo';

describe('DataInfo Component', () => {
    it('should render component', () => {
        const { getByText } = render(<DataInfo number="9999" info="active users" />);

        expect(getByText('9999')).toBeInTheDocument();
        expect(getByText('active users')).toBeInTheDocument();
    });
})