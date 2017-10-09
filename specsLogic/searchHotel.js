/**
 * Created by S752 on 08.10.2017.
 */
import SpecBaseLogic from '../utils/SpecLogicBase';

import { SearchBlock } from '../pages';

import { searchInfo } from '../dataMock';


class SearchLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.page = new SearchBlock();
  }

  beforeEach() {
    browser.waitForAngularEnabled(false);
    this.page.get();
  }

  searchHotel() {
    browser.waitForAngularEnabled(false);
    this.page.destination.sendKeys(searchInfo.Destination);


    browser.executeScript('arguments[0].click()', this.page.selectCity.getWebElement())

    this.page.setCurrentDate();
    console.log(this.page.setCurrentDate())
    // this.page.setCheckoutDate();
    console.log(this.page.setCheckoutDate())
    browser.sleep(4000);
  }
}

export default SearchLogic;
