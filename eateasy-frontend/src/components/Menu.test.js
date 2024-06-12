import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './menu';

test('renders menu items', () => {
  const menuItems = ['Burger', 'Pizza', 'Pasta'];
  render(<Menu menuItems={menuItems} />);
  
  menuItems.forEach(item => {
    const menuItemElement = screen.getByText(item);
    expect(menuItemElement).toBeInTheDocument();
  });
});
