import React, { Component } from 'react';
import { 
  Grid, 
  withStyles,
  Card,
  CardHeader,
  CardContent,
  TextField,
  FormHelperText,
  Button
} from '@material-ui/core';
import DBSelect from './DB-Select.component';

const ITEMS = {
  pais: [
    { value: 0, name: 'Ecuador' }
  ],
  region: [
    { value: 0, name: 'Samborondon' },
    { value: 1, name: 'Guayaquil' }
  ],
  interes: [
    { value: 0, name: 'Base de Datos' }
  ]
};

class App extends Component {
  state = {
    name: '',
    lname: '',
    email: '',
    age: '',
    pais: '',
    region: '',
    interes: ''
  };

  render() {
    const { pais, region, interes } = ITEMS;
    const { appStyle, cardTitleStyle, buttonStyle, leftStyle } = this.props.classes;

    return (
      <div className={appStyle}>
        <Grid 
          container
          justify="space-evenly"
          alignItems="center"
          spacing={8}
        >
          <Grid className={leftStyle} xs={6} item>
            <h1>Certificados en tecnologia digital para trabajos en demanda</h1>
            <h3>Cursos online creados por expertos en el area. Acceso las 24 horas y asesoria de tutores en vivo.</h3>
          </Grid>
          <Grid xs={4} item>
            <Card raised>
              <CardHeader classes={{ title: cardTitleStyle }} title="Para mas informacion ingresa tus datos" />
              <CardContent>
                <form noValidate autoComplete="off">
                  <TextField name="name" label="Nombre" onChange={this._onSelect} fullWidth required />
                  <TextField name="lname" label="Apellido" onChange={this._onSelect} fullWidth required />
                  <TextField name="email" label="Correo electronico" type="email" onChange={this._onSelect} fullWidth required />
                  <TextField name="age" label="Edad" type="number" onChange={this._onSelect} fullWidth required />
                  <DBSelect name="pais" label="Pais" items={pais} onSelect={this._onSelect} />
                  <DBSelect name="region" label="Region" items={region} onSelect={this._onSelect} />
                  <DBSelect name="interes" label="Programa de Interes" items={interes} onSelect={this._onSelect} />
                  <FormHelperText>* Todos los campos son requeridos.</FormHelperText>
                </form>
              </CardContent>
              <Button classes={{ root: buttonStyle }} onClick={this._onClick} fullWidth>COMENZAR AHORA</Button>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
  _onClick = () => {
    console.info(this.state);
  }
  _onSelect = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }
}

const styles = {
  appStyle: {
    // padding: '15px',
    display: 'flex',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',
    // fancy stuff for image background
    background: ['linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))','url(\'background.jpg\')'],
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    linearGradient: ''
  },
  leftStyle: {
    color: 'white'
  },
  cardTitleStyle: {
    color: '#636363',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#ff6100',
    color: 'white',
    padding: '16px',
    borderRadius: 0
  }
};

export default withStyles(styles)(App);
