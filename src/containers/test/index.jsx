import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

const Test = ({ test }) => (
  <React.Fragment>
    {test && (
      <div>
        Test value:
        {test}
      </div>
    )}
    {!test && <div>Test not defined</div>}
  </React.Fragment>
);

Test.propTypes = {
  test: string.isRequired,
};

const mapStateToProps = state => ({ test: state.test });

export default connect(mapStateToProps)(Test);
