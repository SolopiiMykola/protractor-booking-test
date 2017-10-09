/**
 * Created by S752 on 09.10.2017.
 */

class SpecLogicBase {
  constructor() {
    this.page = null;
    this.EC = protractor.ExpectedConditions;
  }
  beforeEach() {
    browser.waitForAngularEnabled(false);
    this.page.get();
  }
}

export default SpecLogicBase;
