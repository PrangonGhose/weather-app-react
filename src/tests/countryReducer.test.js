import '@testing-library/jest-dom';
import { GET_COUNTRY, GET_REGION, GET_SUBREGION } from '../redux/constants';
import countryReducer from '../redux/home/home';

describe('Test purity of countryReducer', () => {
  it('Should return the initial state', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    expect(countryReducer(initialState, action)).toEqual(initialState);
  });

  it('Should handle object addition', () => {
    const initialState = [];
    const payload = {
      countryName: 'MOCKNAME',
      countryFlag: 'MOCKFLAG',
      countryRegion: 'MOCKREGION',
      countrySubRegion: 'MOCKSUB',
      countryCapital: 'MOCKCAP',
    };
    const action = { type: `${GET_COUNTRY}/fulfilled`, payload };
    const expected = [{
      countryName: 'MOCKNAME',
      countryFlag: 'MOCKFLAG',
      countryRegion: 'MOCKREGION',
      countrySubRegion: 'MOCKSUB',
      countryCapital: 'MOCKCAP',
    }];
    expect(countryReducer(initialState, action)).toEqual(expected);
  });

  it('Should handle object addition', () => {
    const initialState = [{
      countryName: 'MOCKNAME',
      countryFlag: 'MOCKFLAG',
      countryRegion: 'MOCKREGION',
      countrySubRegion: 'MOCKSUB',
      countryCapital: 'MOCKCAP',
    }];
    const payload = {
      countryName: 'MOCKNAME',
      countryFlag: 'MOCKFLAG',
      countryRegion: 'MOCKREGION',
      countrySubRegion: 'MOCKSUB',
      countryCapital: 'MOCKCAP',
    };
    const action = { type: `${GET_REGION}/fulfilled`, payload };
    const expected = [{
      countryName: 'MOCKNAME',
      countryFlag: 'MOCKFLAG',
      countryRegion: 'MOCKREGION',
      countrySubRegion: 'MOCKSUB',
      countryCapital: 'MOCKCAP',
    }, {
      countryName: 'MOCKNAME',
      countryFlag: 'MOCKFLAG',
      countryRegion: 'MOCKREGION',
      countrySubRegion: 'MOCKSUB',
      countryCapital: 'MOCKCAP',
    }];
    expect(countryReducer(initialState, action)).toEqual(expected);
  });

  it('Should handle object addition', () => {
    const initialState = [{
      countryName: 'MOCKNAME',
      countryFlag: 'MOCKFLAG',
      countryRegion: 'MOCKREGION',
      countrySubRegion: 'MOCKSUB',
      countryCapital: 'MOCKCAP',
    }, {
      countryName: 'MOCKNAME',
      countryFlag: 'MOCKFLAG',
      countryRegion: 'MOCKREGION',
      countrySubRegion: 'MOCKSUB',
      countryCapital: 'MOCKCAP',
    }];
    const payload = {
      countryName: 'MOCKNAME',
      countryFlag: 'MOCKFLAG',
      countryRegion: 'MOCKREGION',
      countrySubRegion: 'MOCKSUB',
      countryCapital: 'MOCKCAP',
    };
    const action = { type: `${GET_SUBREGION}/fulfilled`, payload };
    const expected = [{
      countryName: 'MOCKNAME',
      countryFlag: 'MOCKFLAG',
      countryRegion: 'MOCKREGION',
      countrySubRegion: 'MOCKSUB',
      countryCapital: 'MOCKCAP',
    }, {
      countryName: 'MOCKNAME',
      countryFlag: 'MOCKFLAG',
      countryRegion: 'MOCKREGION',
      countrySubRegion: 'MOCKSUB',
      countryCapital: 'MOCKCAP',
    }, {
      countryName: 'MOCKNAME',
      countryFlag: 'MOCKFLAG',
      countryRegion: 'MOCKREGION',
      countrySubRegion: 'MOCKSUB',
      countryCapital: 'MOCKCAP',
    }];
    expect(countryReducer(initialState, action)).toEqual(expected);
  });
});
