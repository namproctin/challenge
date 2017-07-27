import React from 'react';
import * as Enzyme from 'enzyme';
import { ComputeIO, Input, Output, Button, isClosed } from '../ComputeIO';


describe('ComputeIO', () => {
  it('should return an element.', () => {
    const wrapper = Enzyme.shallow(<ComputeIO />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Input', () => {
  it('should return an element.', () => {
    const wrapper = Enzyme.shallow(<Input data="123"/>);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.props().children.props.value == "123").toBe(true);
  });
});

describe('Output', () => {
  it('should return an element.', () => {
    const wrapper = Enzyme.shallow(<Output/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('should show true text given true as props .', () => {
    const wrapper = Enzyme.shallow(<Output result="true"/>);
    expect(wrapper.text() == "true").toBe(true);
  });
});

describe('Button', () => {
  it('should return an element.', () => {
    const wrapper = Enzyme.shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('`isClosed()` function', () => {
  it('returns a boolean', () => {
    expect(isClosed('')).toBe(true);
    expect(isClosed('^^')).toBe(false);
    expect(isClosed('^$')).toBe(true);
    expect(isClosed('$^')).toBe(false);
    expect(isClosed('^^$$')).toBe(true);
    expect(isClosed('^$^$')).toBe(true);
    expect(isClosed('^123^abc$$')).toBe(true);
    expect(isClosed('^123^abc$$$')).toBe(false);
  });
});
