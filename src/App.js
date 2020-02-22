import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './App.css';
//Feature
import Feature from './Feature';
import FeatureItem from './FeatureItem';
import {USCurrencyFormat} from './USCurrencyFormat';
import SummaryOption from './SummaryOption';
import CustomizedForm from './CustomizedForm';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FeatureItem 
            key = {itemHash}
            item = {item}
            selectedName = {this.state.selected[feature].name}
            name={slugify(feature)}
            onChange = {e => this.updateFeature(feature, item)}
          />
        )
      });

      return (
        <Feature 
          key = {featureHash} 
          title = {feature} 
          options = {options}/>
      );
    });

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <SummaryOption 
          key = {featureHash}
          label = {feature}
          value = {selectedOption.name}
          cost = {USCurrencyFormat.format(selectedOption.cost)}
        />
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <CustomizedForm 
          features = {features}
          summary = {summary}
          total = {USCurrencyFormat.format(total)}
        />
      </div>
    );
  }
}

export default App;
