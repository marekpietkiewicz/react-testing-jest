import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

const fetchData = callback => callback('peanut butter');
const fetchDataWithoutCallback = () => Promise.resolve('peanut butter');

describe('the data is peanut butter', () => {
  test('inside funtion with "done"', done => {
    function callback(data) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchData(callback);
  });

  test('using promises', () => {
    return fetchDataWithoutCallback().then(data => {
      expect(data).toBe('peanut butter');
    });
  });

  test('with resolves', () => {
    return expect(fetchDataWithoutCallback()).resolves.toBe('peanut butter');
  });

  test('with await', async () => {
    await expect(fetchDataWithoutCallback()).resolves.toBe('peanut butter');
  });

});


