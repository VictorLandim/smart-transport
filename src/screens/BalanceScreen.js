import React from 'react'
import { ScrollView } from 'react-native'
import Header from '../components/Header'
import styled from 'styled-components/native'
import Button from '../components/Button'
import Title from '../components/Title'
import { colors } from '../const'
import TransactionRow from '../components/TransactionRow'
import transactions from '../data/transactions.json'

import { Ionicons } from '@expo/vector-icons'

const BalanceScreen = () => {
  const balance = 58.98

  return (
    <ScrollView>
      <Header title="Carteira" />
      <Title>Saldo disponível</Title>
      <Balance>
        <BalanceCenter>
          <BalanceSymbol>{'R$'}</BalanceSymbol>
          <BalanceValue>{balance}</BalanceValue>
        </BalanceCenter>
        <BalanceBottom>
          <Button style={{ marginRight: 10 }} size="s" value="Adicionar" />
          <Button size="s" value="Comprovantes" inverted />
        </BalanceBottom>
      </Balance>
      <TitleContainer>
        <Title>Transações</Title>
        <Ionicons name="ios-calendar" size={26} color={colors.gray} />
      </TitleContainer>
      <Transactions>
        {transactions.map((e, i) => (
          <TransactionRow key={`${e.type} ${i}`} {...e} />
        ))}
      </Transactions>
    </ScrollView>
  )
}

const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 0px;
  margin-bottom: 5px;
`

const Balance = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grayLight};
`
const BalanceCenter = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const BalanceBottom = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  padding: 0px 20px;
`

const BalanceSymbol = styled.Text`
  font-size: 30px;
  color: ${colors.primaryDark};
  margin-right: 10px;
  font-family: 'regular';
`
const BalanceValue = styled.Text`
  color: ${colors.primaryDark};
  font-size: 64px;
  font-family: 'regular';
`

const Transactions = styled.View`
  padding: 0px 10px;
`

BalanceScreen.navigationOptions = {
  title: 'Extrato'
}

export default BalanceScreen
