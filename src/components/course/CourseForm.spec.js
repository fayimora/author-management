import React from 'react';
import chai from 'chai';
import {shallow} from 'enzyme';
import CourseForm from './CourseForm';

const expect = chai.expect;

function setup(saving) {
  const props = {
    course: {}, saving: saving, errors: [],
    onSave: () => {}, onchange: () => {}
  };
  return shallow(<CourseForm {...props}/>);
}

describe('Courseform', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).to.equal(1);
    expect(wrapper.find('h1').text()).to.equal('Manage Course');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).to.equal('Save');
  });

  it('save button is labeled "Saving" when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).to.equal('Saving...');
  });
});
