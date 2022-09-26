import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { screen, within } from '@testing-library/dom'

import NumFormatter from '../helpers/helpers'

it('should format number to billion when billion number is passed', () => {
    
    const formatNum = NumFormatter(802566391200);
    expect(formatNum).toBe('802.6B');
  
  });

  it('should format number to million when number greater than million is passed', () => {
    
    const formatNum = NumFormatter(25331662);
    expect(formatNum).toBe('25.3M');
  
  });

  it('should format number to K when number less than million is passed', () => {
    
    const formatNum = NumFormatter(95000);
    expect(formatNum).toBe('95.0K');
  
  });

  it('should not format number when number less than 1000 is passed ', () => {
    
    const formatNum = NumFormatter(500);
    expect(formatNum).toBe(500);
  
  });

