import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import background from './background.jpg';

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: url(${background}) white;
  background-size: cover;
  background-position: center;
`;

const Mask = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const styles = {
  input: {
    width: '50%',
    color: 'white',
  },
};

class Main extends React.Component {
  state = {
    value: 'Есть меньше в фастфуде',
  };

  handleSearch = e => this.setState({
    value: e.target.value,
  });

  render() {
    const { classes } = this.props;

    return (
      <Header>
        <Mask>
          <TextField
            label="В новом году я обещаю"
            multiline
            rows={8}
            value={this.state.value}
            onChange={this.handleSearch}
            margin="normal"
            fullWidth
            className={classes.input}
          />
          <Button raised>Отправить в блокчеин</Button>
        </Mask>
      </Header>
    );
  }
}

export default withStyles(styles)(Main);
