import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button test', () => {
    test('render test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('theme test', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
