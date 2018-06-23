import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { View, StatusBar, KeyboardAvoidingView } from "react-native";

import { Container } from "../components/Container";
import { Logo } from "../components/Logo"; 
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "../components/Text";
import { Header } from "../components/Header";

import { swapCurrency, changeCurrencyAmount } from "../actions/currencies";

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component{

    static propTypes = {
        navigation: PropTypes.object
    }
    handleChangeText = (amount) => {
        console.log(changeCurrencyAmount(amount));
        //this.props.dispatch(changeCurrencyAmount(amount));
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
        // this.props.dispatch(swapCurrency());
    }

    handleOptionsPress = () => {
        this.props.navigation.navigate('Options');
      };

    render() {
        return (
          <Container>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <Header onPress={this.handleOptionsPress}/>
            <KeyboardAvoidingView behavior="padding">
            <Logo />
            <InputWithButton buttonText={TEMP_BASE_CURRENCY} onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
          ></InputWithButton>
            <InputWithButton buttonText={TEMP_QUOTE_CURRENCY} onPress={this.handlePressQuoteCurrency} 
            editable={false}
            value={TEMP_QUOTE_PRICE}></InputWithButton>
            <LastConverted
              base={TEMP_BASE_CURRENCY}
             quote={TEMP_QUOTE_CURRENCY}
             conversionRate={TEMP_CONVERSION_RATE}
             date={TEMP_CONVERSION_DATE}
            />
            <ClearButton text="Reverse Currencies"
            onPress={this.handleSwapCurrency}/>
            </KeyboardAvoidingView>
          </Container>
        );
      }
}
export default Home;