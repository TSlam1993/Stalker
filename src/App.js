import './App.css';

function App() {

  return (
    <div className="App">

      <div className="container">

        <div className='item item-main-border'>
        </div>

        <div className='item item-main-border'>

          <div className='main-equipment'>

            <div className='left-column'>
              <div className='left-primary-weapon item-inner-border item-background'>
                <div className='left-primary-weapon-icon icon'></div>
              </div>
              <div className='left-secondary-weapon item-inner-border item-background'>
                <div className='left-secondary-weapon-icon icon'></div>
              </div>
              {/* <div className='left-teriary-weapon item-inner-border item-background'>
                <div className='left-teriary-weapon-icon'></div>
              </div> */}
            </div>

            <div className='middle-column'>
              <div className='helmet'>
                <div className='helmet-left'></div>
                <div className='helmet-center item-inner-border item-background'>
                  <div className='helmet-icon icon'></div>
                </div>
                <div className='helmet-right'></div>
              </div>
              <div className='armor'>
                <div className='armor-left'></div>
                <div className='armor-center item-inner-border item-background'>
                  <div className='armor-icon icon'></div>
                </div>
                <div className='armor-right'></div>
              </div>
              <div className='backpack'>
                <div className='backpack-left'></div>
                <div className='backpack-center item-inner-border item-background'>
                  <div className='backpack-icon icon'></div>
                </div>
                <div className='backpack-right'></div>
              </div>
            </div>

            <div className='right-column'>
              <div className='right-primary-weapon item-inner-border item-background'>
                <div className='right-primary-weapon-icon icon'></div>
              </div>
              <div className='right-secondary-weapon item-inner-border item-background'>
                <div className='right-secondary-weapon-icon icon'></div>
              </div>
              {/* <div className='right-teriary-weapon item-inner-border item-background'>
                <div className='right-teriary-weapon-icon'></div>
              </div> */}
            </div>

          </div>

          <div className='secondary-equipment'>

            <div className='secondary-left'>
              <div className='knife item-inner-border item-background'>
                <div className='knife-icon icon'></div>
              </div>
              <div className='binoculars item-inner-border item-background'>
                <div className='binoculars-icon icon'></div>
              </div>
            </div>

            <div className='secondary-middle'>
              <div className='magazine-belt item-inner-border item-background'>
                <div className='magazine inner-border-right inner-border-bottom'>
                  <div className='magazine-icon icon'></div>
                </div>
                <div className='magazine inner-border-right inner-border-bottom'>
                  <div className='magazine-icon icon'></div>
                </div>
                <div className='magazine inner-border-right inner-border-bottom'>
                  <div className='magazine-icon icon'></div>
                </div>
                <div className='magazine inner-border-bottom'>
                  <div className='magazine-icon icon'></div>
                </div>
                <div className='magazine inner-border-right'>
                  <div className='magazine-icon icon'></div>
                </div>
                <div className='magazine inner-border-right'>
                  <div className='magazine-icon icon'></div>
                </div>
                <div className='magazine inner-border-right'>
                  <div className='magazine-icon icon'></div>
                </div>
                <div className='magazine'>
                  <div className='magazine-icon icon'></div>
                </div>
              </div>
            </div>

            <div className='secondary-right'>
              <div className='pda item-inner-border item-background'>
                <div className='pda-icon icon'></div>
              </div>
              <div className='lightsource item-inner-border item-background'>
                <div className='lightsource-icon icon'></div>
              </div>
            </div>

          </div>

          <div className='utility'>

            <div className='medkit'>
              <div className='bleeding item-inner-border item-background'>
                <div className='bleeding-icon icon'></div>
              </div>
              <div className='trauma item-inner-border item-background'>
                <div className='trauma-icon icon'></div>
              </div>
              <div className='buffing item-inner-border item-background'>
                <div className='buffing-icon icon'></div>
              </div>
              <div className='cleansing item-inner-border item-background'>
                <div className='cleansing-icon icon'></div>
              </div>
            </div>

            <div className='tools'>
              <div className='tools-left'>
                <div className='artifact-container item-inner-border item-background'>
                  <div className='artifact-container-icon icon'></div>
                </div>
              </div>
              <div className='tools-right'>
                <div className='activator item-inner-border item-background'>
                  <div className='activator-icon icon'></div>
                </div>
                <div className='scanner item-inner-border item-background'>
                  <div className='scanner-icon icon'></div>
                </div>
              </div>
              {/*<div className='radiation-counter item-inner-border item-background'>
                <div className='radiation-counter-icon icon'></div>
              </div>*/}
            </div>

          </div>

        </div>

        <div className='item item-main-border'>
        </div>

      </div>

    </div>
  );

}

export default App;
