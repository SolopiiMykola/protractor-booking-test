/**
 * Created by S752 on 08.10.2017.
 */

import Base from '../utils/Base';

const dateObj = new Date();
const currentDay = dateObj.getUTCDate();
const checkOutDay = currentDay + 7;

class SearchBlock extends Base {
  get url() { return `${this.baseUrl}`; }
  get selector() { return element(by.id('logo_no_globe_new_logo')); }

  get destination() {
    return element(by.id("ss"));
  }

  get selectCity() {
    return element(by.cssContainingText('li[data-label]', "New York City, New York State, " +
      "United States of America"));
  }

  get startingFromDate() { return element(by.css('div[data-placeholder="Дата отъезда"]')); }
  getElementStartDate(date) {
    const selector = '.c2-day.c2-day-s-today';
    return element(by.cssContainingText(selector, date));
  }

  getElementCheckoutDate(day) {
    const selector = '.c2-day-inner';
    return element(by.cssContainingText(selector, day));
  }

  setCurrentDate() {
    const selectedTD = this.getElementStartDate(currentDay);
    selectedTD.click()
  }

  setCheckoutDate() {
    this.startingFromDate.click();
    const selected = this.getElementCheckoutDate(checkOutDay);
    selected.click()
  }
};



export default SearchBlock;
