import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { View, StatusBar, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo"; 
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "../components/Text";
import { Header } from "../components/Header";

import { swapCurrency, changeCurrencyAmount } from "../actions/currencies";

// const TEMP_BASE_CURRENCY = 'USD';
// const TEMP_QUOTE_CURRENCY = 'GBP';
// const TEMP_BASE_PRICE = '100';
// const TEMP_QUOTE_PRICE = '79.74';
// const TEMP_CONVERSION_RATE = 0.7974;
// const TEMP_CONVERSION_DATE = new Date();

class Home extends Component{

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversionRate: PropTypes.number,
        lastConvertedDate: PropTypes.object,
        isFetching: PropTypes.bool,
    }
    handleChangeText = (amount) => {
        //console.log(changeCurrencyAmount(amount));
        this.props.dispatch(changeCurrencyAmount(amount));
    };

    handlePressBaseCurrency = () => {
        // console.log('press base currency');
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'});
    };

    handlePressQuoteCurrency = () => {
        //console.log('press quote currency');
        this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'});
    };

    handleSwapCurrency = () => {
        // console.log('press swap currency');
        this.props.dispatch(swapCurrency());
    }

    handleOptionsPress = () => {
        this.props.navigation.navigate('Options');
      };

    render() {
        let quotePrice = '...';
    if (!this.props.isFetching) {
      quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    }

        return (
          <Container>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <Header onPress={this.handleOptionsPress}/>
            <KeyboardAvoidingView behavior="padding">
            <Logo />
            <InputWithButton buttonText={this.props.baseCurrency} onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
          ></InputWithButton>
            <InputWithButton buttonText={this.props.quoteCurrency} onPress={this.handlePressQuoteCurrency} 
            editable={false}
            value={quotePrice}></InputWithButton>
            <LastConverted
              base={this.props.baseCurrency}
             quote={this.props.quoteCurrency}
             conversionRate={this.props.conversionRate}
             date={this.props.lastConvertedDate}
            />
            <ClearButton text="Reverse Currencies"
            onPress={this.handleSwapCurrency}/>
            </KeyboardAvoidingView>
          </Container>
        );
      }
}

const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    isFetching: conversionSelector.isFetching,
  };
}
export default connect(mapStateToProps)(Home);