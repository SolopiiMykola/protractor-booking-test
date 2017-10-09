/**
 * Created by S752 on 08.10.2017.
 */

import { SearchLogic } from '../specsLogic';

const searchLogic = new SearchLogic();

describe('search hotel', () => {
  beforeEach(searchLogic.beforeEach.bind(searchLogic));

  it('search hotel in NY', searchLogic.searchHotel.bind(searchLogic));

});

