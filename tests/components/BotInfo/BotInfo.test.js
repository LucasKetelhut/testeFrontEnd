import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import BotInfo from '../../../src/components/BotInfo';

describe('BotInfo Component', () => {
    it('should render component', () => {
        const { getByText } = render(<BotInfo name="Name" id="botname" />);

        expect(getByText('Name')).toBeInTheDocument();
        expect(getByText('Id: botname')).toBeInTheDocument();
    });
})