import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { render, screen, fireEvent, within } from '@testing-library/react';

import { theme } from '@Assets';
import { Provider } from '@Models/provider';

import { ProductPaymentSection } from './product-payment-section';

describe('ProductPaymentSection Component', () => {
  beforeEach(() => {
    window.Sequra = {};
  });

  test('check to contain basic content', () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider
          mockProps={{
            payments: {
              isOpenModal: false,
              paymentMethods: [
                // @ts-ignore
                { instalment_count: 3, instalment_amount: { value: 0, string: 'ola que ases' } },
              ],
            },
          }}>
          <ProductPaymentSection />
        </Provider>
      </ThemeProvider>,
    );

    expect(screen.getAllByRole('content')).toHaveLength(2);
  });

  test('check the select options from payment methods', () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider
          mockProps={{
            payments: {
              isOpenModal: false,
              paymentMethods: [
                // @ts-ignore
                { instalment_count: 3, instalment_amount: { value: 0, string: 'ola que ases' } },
                // @ts-ignore
                { instalment_count: 6, instalment_amount: { value: 0, string: 'ola que ases' } },
                // @ts-ignore
                { instalment_count: 12, instalment_amount: { value: 0, string: 'ola que ases' } },
              ],
            },
          }}>
          <ProductPaymentSection />
        </Provider>
      </ThemeProvider>,
    );

    expect(screen.getAllByTestId('payment-method')).toHaveLength(3);
  });
});
